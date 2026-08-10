<?php
/**
 * Contact form handler for ScamAlert360 (scamalert360.com).
 *
 * Replaces the Next.js API route that existed before the site was converted
 * to a static export for Hostinger shared hosting (no persistent Node
 * process is available there — PHP is). It intentionally mirrors the
 * validation, honeypot and rate-limit logic of the original route in
 * app/api/contact/route.ts (removed) so behaviour is unchanged for the
 * front-end in components/contact-form.tsx.
 *
 * SETUP — required before this works:
 *   1. Set $recipientEmail below to your real inbox.
 *   2. Confirm PHP's mail() actually delivers on your Hostinger plan. Shared
 *      hosting mail() is frequently unreliable/filtered as spam. If messages
 *      don't arrive, switch to Hostinger's SMTP (see the commented block
 *      near the bottom) or a transactional provider (Resend, Postmark).
 *   3. Upload this file to your site's public web root alongside the
 *      exported `out/` contents, so it is reachable at /contact.php.
 */

declare(strict_types=1);

// ---- Configuration --------------------------------------------------------

$recipientEmail = 'editor@scamalert360.com'; // TODO: confirm this inbox exists
$siteName = 'ScamAlert360';
$rateLimitDir = sys_get_temp_dir() . '/scamalert360_contact_rl';
$rateLimitMax = 3;       // max submissions
$rateLimitWindow = 60;   // per this many seconds, per IP

// ---- Boilerplate ------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');

// Only same-origin browser POSTs are expected; anything else is rejected
// outright rather than silently ignored, which is easier to debug.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

$raw = file_get_contents('php://input');
$body = json_decode($raw, true);

if (!is_array($body)) {
    // Fall back to standard form-encoded submission in case the front end
    // is ever swapped for a plain <form method="post"> without JS.
    $body = $_POST;
}

function fieldString(array $body, string $key): string
{
    return isset($body[$key]) && is_string($body[$key]) ? trim($body[$key]) : '';
}

// ---- Honeypot ---------------------------------------------------------

// A filled hidden field means a bot. Report success without sending mail, so
// the bot has no signal that its submission was discarded.
if (fieldString($body, 'company') !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

// ---- Rate limiting ------------------------------------------------------

function clientIp(): string
{
    $forwarded = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
    if ($forwarded !== '') {
        return trim(explode(',', $forwarded)[0]);
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function isRateLimited(string $dir, string $ip, int $max, int $windowSeconds): bool
{
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }

    $file = $dir . '/' . md5($ip) . '.json';
    $now = time();
    $hits = [];

    if (is_file($file)) {
        $decoded = json_decode((string) file_get_contents($file), true);
        if (is_array($decoded)) {
            $hits = $decoded;
        }
    }

    // Drop anything outside the current window before counting.
    $hits = array_values(array_filter($hits, fn ($t) => $now - $t < $windowSeconds));

    if (count($hits) >= $max) {
        return true;
    }

    $hits[] = $now;
    @file_put_contents($file, json_encode($hits));
    return false;
}

if (isRateLimited($rateLimitDir, clientIp(), $rateLimitMax, $rateLimitWindow)) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many messages. Please wait a minute and try again.']);
    exit;
}

// ---- Validation -----------------------------------------------------------

$name = fieldString($body, 'name');
$email = fieldString($body, 'email');
$topic = fieldString($body, 'topic');
$message = fieldString($body, 'message');

$errors = [];
if (mb_strlen($name) < 2 || mb_strlen($name) > 120) {
    $errors[] = 'name';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 254) {
    $errors[] = 'email';
}
if (mb_strlen($topic) < 2 || mb_strlen($topic) > 120) {
    $errors[] = 'topic';
}
if (mb_strlen($message) < 20 || mb_strlen($message) > 5000) {
    $errors[] = 'message';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please check these fields: ' . implode(', ', $errors) . '.']);
    exit;
}

// ---- Send -------------------------------------------------------------

// Strip header-injection characters from anything that lands in a mail
// header (name/email/topic). The message body doesn't need this since it
// only appears in the body, not a header.
function sanitizeHeaderValue(string $value): string
{
    return trim(str_replace(["\r", "\n"], '', $value));
}

$safeName = sanitizeHeaderValue($name);
$safeEmail = sanitizeHeaderValue($email);
$safeTopic = sanitizeHeaderValue($topic);

$subject = "[$siteName] $safeTopic — $safeName";
$body_text = "New contact form submission\n\n"
    . "Name:  $safeName\n"
    . "Email: $safeEmail\n"
    . "Topic: $safeTopic\n\n"
    . "Message:\n$message\n";

$headers = [
    'From: ' . $siteName . ' <no-reply@scamalert360.com>',
    'Reply-To: ' . $safeEmail,
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($recipientEmail, $subject, $body_text, implode("\r\n", $headers));

/*
 * If mail() proves unreliable on your Hostinger plan, replace the block
 * above with SMTP via PHPMailer, e.g.:
 *
 *   require __DIR__ . '/vendor/autoload.php'; // composer require phpmailer/phpmailer
 *   $mailer = new PHPMailer\PHPMailer\PHPMailer(true);
 *   $mailer->isSMTP();
 *   $mailer->Host = 'smtp.hostinger.com';
 *   $mailer->SMTPAuth = true;
 *   $mailer->Username = 'no-reply@scamalert360.com';
 *   $mailer->Password = getenv('SMTP_PASSWORD'); // never hardcode this
 *   $mailer->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
 *   $mailer->Port = 465;
 *   $mailer->setFrom('no-reply@scamalert360.com', $siteName);
 *   $mailer->addAddress($recipientEmail);
 *   $mailer->addReplyTo($safeEmail, $safeName);
 *   $mailer->Subject = $subject;
 *   $mailer->Body = $body_text;
 *   $sent = $mailer->send();
 */

if (!$sent) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Message could not be sent right now. Please email us directly.']);
    exit;
}

echo json_encode(['ok' => true]);
