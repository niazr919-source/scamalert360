import type { Article } from '../types';

export const article: Article = {
  slug: 'quishing-qr-code-scams',
  category: 'ai-cyber',
  title: 'Quishing Alert: Malicious QR Code Scams in Public Parking & Restaurants',
  shortTitle: 'QR Code (Quishing) Scams',
  description:
    'Fake QR code stickers on parking meters and restaurant tables route you to convincing payment clones. Learn how quishing works.',
  keywords: [
    'QR code payment scam',
    'fake parking QR code',
    'quishing fraud protection',
    'malicious QR code sticker',
    'restaurant QR code scam',
    'how to check a QR code is safe',
  ],
  published: '2025-11-19',
  updated: '2026-06-30',
  authorId: 'editorial-team',
  readingMinutes: 11,
  quickAnswer:
    'Quishing hides a phishing link inside a QR code. Because a QR code is unreadable to humans, you cannot see where it leads until you scan it — so the defense is to check the preview URL your camera shows before tapping, and to never scan a code on a sticker in a public place.',
  keyTakeaways: [
    'A QR code is just a link you cannot read. All normal phishing rules apply, minus your ability to inspect it.',
    'Physical stickers over legitimate signage are the dominant attack, especially on parking meters and EV chargers.',
    'Your phone camera previews the destination URL before opening it — that preview is your single best defense.',
    'Pay parking through the official municipal app you installed yourself, never through a scanned code.',
  ],
  body: [
    {
      type: 'p',
      text: 'You park downtown, walk to the meter, and find a neat sticker directing you to scan and pay. The design is unremarkable — a QR code, a short instruction, maybe a city-looking logo. You scan it, a payment page loads, you enter your card, and you get on with your day. Two weeks later there is a parking citation on your windshield and a series of charges on your statement from a merchant you have never heard of.',
    },
    {
      type: 'p',
      text: 'This is quishing: QR code phishing. The mechanics are old — a fraudulent link, a cloned payment page, harvested card details — but the delivery method removes the single most useful defense consumers have. Everyone has been taught to hover over a link and inspect the domain before clicking. A QR code is a machine-readable image, opaque to human inspection. You cannot hover over a sticker. By design, you are asked to trust a destination you cannot see.',
    },
    {
      type: 'p',
      text: 'The other reason quishing works is that it moves the attack into physical space, where our threat model is weaker. Most people apply real skepticism to an unexpected email and almost none to a printed sign in the environment. A sticker on a municipal parking meter reads as infrastructure, not as content someone uploaded. That gap — between how much we scrutinize digital messages versus physical signage — is exactly what the scam monetizes.',
    },
    {
      type: 'keyStat',
      value: 'A sticker and a printer',
      label: 'The total capital cost of a quishing campaign, which is why parking meters, EV chargers and restaurant tables are targeted at scale',
      source: 'FTC — consumer alert on QR code scams',
      url: 'https://consumer.ftc.gov/consumer-alerts',
    },
    { type: 'h2', text: 'Where malicious QR codes actually appear' },
    {
      type: 'p',
      text: 'Quishing shows up in both physical and digital form. The physical placements are more common and more effective; the digital ones are increasingly used to slip past corporate email filters, which historically scanned link text but not images.',
    },
    {
      type: 'table',
      caption: 'Common quishing placements and what the attacker is after',
      headers: ['Placement', 'How it works', 'Objective'],
      rows: [
        [
          'Parking meters and pay stations',
          'Sticker applied over or beside official signage in a plausible spot',
          'Card details plus a recurring "parking account" charge',
        ],
        [
          'EV charging stations',
          'Fake "scan to activate" code on the charger housing',
          'Card details while the driver waits, often with a fake app install',
        ],
        [
          'Restaurant tables and menus',
          'Sticker over the real menu code, or a fake "pay your check" tent card',
          'Card details at the moment payment is expected and unremarkable',
        ],
        [
          'Package delivery slips',
          '"Missed delivery — scan to reschedule" card left at the door',
          'Address, card, and a small "redelivery fee" that captures full card data',
        ],
        [
          'Flyers, posters and event tickets',
          'Codes offering discounts, free Wi-Fi, or ticket downloads',
          'Credential phishing or malicious app installation',
        ],
        [
          'Emails and PDF attachments',
          'A code image replacing a text link, often as a fake MFA or DocuSign prompt',
          'Bypasses link-scanning filters and moves the victim to an unmanaged phone',
        ],
        [
          'Unsolicited mail and "gift" packages',
          'A code in a package you did not order, or a fake unclaimed-refund letter',
          'Credential harvesting; also confirms your address is live',
        ],
      ],
    },
    {
      type: 'alert',
      variant: 'warning',
      title: 'The email variant has a specific purpose',
      text: 'When a phishing email contains a QR code instead of a link, the attacker is doing two things at once: evading filters that scan text links but not images, and moving you from a monitored work computer onto a personal phone with no endpoint protection and a truncated address bar. If a work email asks you to scan a code to "re-authenticate", treat it as hostile and report it to IT — legitimate MFA enrollment does not arrive that way.',
    },
    { type: 'h2', text: 'What happens after you scan' },
    {
      type: 'p',
      text: 'Scanning a code is not, by itself, the moment of compromise. Modern phones do not silently execute anything from a QR code — the scan resolves to a URL and your camera app offers to open it. Everything harmful happens after you tap, which is genuinely good news, because it means there is a decision point between the scan and the loss.',
    },
    {
      type: 'p',
      text: 'From there, the attack follows one of three paths. The most common is a cloned payment page: a convincing replica of a municipal parking portal or restaurant checkout that captures your card number, expiry, CVV and billing ZIP — everything needed for card-not-present fraud. The second is credential phishing: a fake login for a bank, workplace or delivery service, often relaying your one-time passcode in real time to log in as you. The third, less common on modern phones, prompts you to install an app or configuration profile from outside the official app store, which is the point at which a scan turns into persistent device compromise.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'The code resolves to a URL, frequently through a link shortener or a lookalike domain designed to survive a quick glance.',
        'Your camera displays a preview banner with the destination. This is the last honest information you will receive, and the step most people skip.',
        'Tapping opens a page styled to match the expected brand, often with a genuine logo pulled from the real site.',
        'You enter payment or login details. The page may then show a plausible error and redirect you to the real site, so nothing feels wrong.',
        'Card data is used or resold within hours; credentials are used immediately while any captured passcode is still valid.',
      ],
    },
    {
      type: 'alert',
      variant: 'info',
      title: 'Scanning is not the point of no return',
      text: 'If you scanned a suspicious code but did not tap the preview, entered nothing, and installed nothing, your exposure is minimal. Close the camera and move on. The damaging actions are entering data and installing software — not the scan itself. This distinction matters because panic after a scan often pushes people into hastily "checking" the site, which is the actual risk.',
    },
    { type: 'h2', text: 'How to check a QR code before you trust it' },
    {
      type: 'p',
      text: 'Two checks handle nearly every case: one physical, performed before you scan, and one digital, performed in the preview banner before you tap. Neither takes more than a few seconds.',
    },
    { type: 'h3', text: 'The physical check' },
    {
      type: 'checklist',
      title: 'Inspect the code itself',
      intro: 'Do this on any code in a public place that leads to a payment.',
      items: [
        'Feel the edges. A sticker applied over printed signage has a raised lip and often a slight bubble or misalignment.',
        'Look for a code layered on top of another code — hold it at an angle to catch a shadow line.',
        'Check whether the code is printed as part of the original signage, engraved, or under the same protective laminate.',
        'Compare against a neighboring meter, charger or table. A code that differs from every other unit nearby is a strong signal.',
        'Be suspicious of a code with a different print quality, font, or paper stock than the surface it is attached to.',
        'Distrust any code that arrived unsolicited — on a door hanger, in a package you did not order, or in unaddressed mail.',
      ],
    },
    { type: 'h3', text: 'The digital check' },
    {
      type: 'p',
      text: 'When your camera shows the preview banner, read the domain from right to left. The meaningful part of a URL is the registered domain immediately before the first single slash — everything to the left of it can be set to anything the attacker wants. "cityofdenver.parking-pay.co" is not a Denver government site; the actual domain is "parking-pay.co". This is the most commonly exploited misconception in all of phishing, and it takes about ten seconds to learn permanently.',
    },
    {
      type: 'list',
      items: [
        'Read the registered domain, not the subdomain. Anything before it is attacker-controlled decoration.',
        'Treat any link shortener on a payment code as disqualifying. A legitimate municipal payment page does not need to hide its own address.',
        'Watch for character substitution and near-misses: rn for m, a hyphen inserted into a familiar name, an extra word appended to a known brand.',
        'Check the top-level domain. US municipal services generally use .gov domains; a city parking portal on .co, .info, .app or .xyz deserves real suspicion.',
        'Look for a mismatch between the brand on the sticker and the domain in the preview. They should obviously correspond.',
        'If the preview is truncated or you cannot read it clearly, do not tap. Type the address yourself or use the official app.',
      ],
    },
    { type: 'h2', text: 'Paying for parking without scanning anything' },
    {
      type: 'p',
      text: 'Parking is the highest-volume quishing target because the payment is expected, small enough not to prompt scrutiny, and made by someone in a hurry. It also has the cleanest defense of any scenario in this guide: there is essentially never a reason to scan a QR code to pay for parking.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Install the official parking app before you travel, from the App Store or Google Play, and verify the developer name matches the city or a well-known operator.',
        'Pay at the physical meter with a card or coins where that option exists. Machine payment cannot be redirected by a sticker.',
        'If the signage lists a phone number for pay-by-phone, dial it yourself rather than scanning.',
        'If you must use a website, type the city’s parking URL from the printed signage into your browser rather than scanning the code beside it.',
        'Use a credit card, never a debit card, for any parking or unattended-terminal payment. If it is compromised, you are disputing the issuer’s money rather than waiting on the return of your own.',
        'Consider a virtual card number if your issuer offers them. A single-merchant virtual card renders harvested details worthless elsewhere.',
      ],
    },
    {
      type: 'alert',
      variant: 'danger',
      title: 'Never install an app from a link in a QR code',
      text: 'A legitimate parking, charging or restaurant service will exist in the official app stores under a verifiable developer name. A code that pushes an APK, a configuration profile, or an "enterprise" install is attempting persistent device compromise — which can survive long after the parking session and capture far more than a card number. Search the store yourself, always.',
    },
    { type: 'h2', text: 'If you already entered your details' },
    {
      type: 'timeline',
      title: 'Quishing recovery timeline',
      steps: [
        {
          window: 'Minutes 0–15',
          title: 'Freeze or cancel the card',
          text: 'Use your bank’s app to lock the card immediately, then call the number on the back to report the details as compromised and request reissue. Instant card locks in most banking apps make this genuinely fast.',
        },
        {
          window: 'Minutes 15–30',
          title: 'Change any credentials you entered',
          text: 'If you entered a password, change it on the real site and everywhere else you reused it. Sign out all active sessions. If you approved an MFA prompt or entered a passcode, assume the account was accessed and check for new payees, forwarding rules and added devices.',
        },
        {
          window: 'Hour 1',
          title: 'Remove anything you installed',
          text: 'Delete any app or configuration profile installed from the link. On iOS check Settings for unexpected VPN or device management profiles; on Android check for apps with accessibility or device-admin permissions and revoke them.',
        },
        {
          window: 'Day 1',
          title: 'Dispute charges and set alerts',
          text: 'Dispute any unauthorized transaction in writing. Turn on transaction alerts for every card, and watch specifically for small test charges — fraudsters validate a card with a trivial amount before attempting anything large.',
        },
        {
          window: 'Days 1–3',
          title: 'Report the code and the placement',
          text: 'File at ReportFraud.ftc.gov and with IC3. Also report the physical sticker to the property owner or the city’s parking authority — they can remove it, which is the only step that protects the next person.',
        },
        {
          window: 'Week 1',
          title: 'Add credit protections if identity data was captured',
          text: 'If you entered your address, date of birth or Social Security number, place a fraud alert or credit freeze with all three bureaus and start a recovery plan at IdentityTheft.gov.',
        },
      ],
    },
    {
      type: 'report',
      title: 'Report a malicious QR code',
      text: 'Report the fraud federally, and report the physical sticker locally so it gets removed.',
      agencies: ['ftc', 'ic3', 'identityTheft'],
    },
    {
      type: 'p',
      text: 'The habit worth taking away is small and generalizes well beyond parking meters. A QR code is not a destination; it is a request to visit one, and the preview banner is the only place you will ever see where it actually goes. Reading that banner before tapping costs about two seconds and converts an unreadable image back into an ordinary link you can evaluate with judgment you already have. Everything else in this guide is refinement on that one pause.',
    },
  ],
  howTo: {
    name: 'How to check a QR code before scanning and paying',
    description:
      'A verification procedure for QR codes encountered on parking meters, EV chargers, restaurant tables, delivery notices and emails.',
    totalTime: 'PT2M',
    steps: [
      {
        name: 'Inspect the physical code',
        text: 'Feel for sticker edges, look for a code layered over another, and compare with nearby meters or tables. A code that differs from its neighbors is suspect.',
      },
      {
        name: 'Prefer an official channel over scanning',
        text: 'Use the operator’s app installed from an official app store, pay directly at the machine, or type the URL printed on the signage.',
      },
      {
        name: 'Read the preview URL before tapping',
        text: 'Identify the registered domain immediately before the first single slash. Subdomains are attacker-controlled and prove nothing.',
      },
      {
        name: 'Reject shorteners and mismatched domains',
        text: 'Do not proceed if a payment link uses a URL shortener, an unexpected top-level domain, or a domain that does not obviously match the brand on the sign.',
      },
      {
        name: 'Never install software from a scanned link',
        text: 'Search the official app store for the app instead. Refuse any APK, configuration profile, or enterprise install prompt.',
      },
      {
        name: 'Pay with a credit card or virtual card number',
        text: 'Avoid debit cards at unattended terminals so any dispute is against the issuer’s funds rather than your balance.',
      },
      {
        name: 'Act immediately if you entered details',
        text: 'Lock the card in your banking app, change reused passwords, remove installed profiles, dispute charges, and report the sticker to the property owner.',
      },
    ],
  },
  faq: [
    {
      question: 'Can scanning a QR code hack my phone by itself?',
      answer:
        'Not on a current, updated phone. A QR code encodes data — usually a URL — and your camera resolves it and asks permission before opening anything. There is no mechanism by which merely resolving a code installs software. Risk begins after you tap the preview and then enter credentials, submit payment details, or approve an installation. Keeping your OS updated matters because it closes the browser-level vulnerabilities that could otherwise shorten that chain.',
    },
    {
      question: 'How do I tell if a parking QR code is fake?',
      answer:
        'Start physically: feel the edges for a sticker lip, hold it at an angle to spot a code layered over another, and compare it with codes on adjacent meters — an outlier is the strongest single signal. Then check digitally: municipal parking portals typically use a .gov domain or a well-known operator’s domain, never a link shortener. The reliable answer, though, is to sidestep the question entirely by paying at the machine or through the city’s official app.',
    },
    {
      question: 'What does the URL preview actually tell me?',
      answer:
        'It shows the destination your camera resolved, which is your only chance to evaluate it. Read it right to left and find the registered domain immediately before the first single slash. In "cityparking.secure-pay-portal.net/denver", the real domain is "secure-pay-portal.net" — "cityparking" is a subdomain the attacker created and it means nothing. If the preview is truncated or ambiguous, treat that as a reason not to tap.',
    },
    {
      question: 'Are restaurant menu QR codes safe?',
      answer:
        'Menu codes printed directly onto laminated menus or table surfaces are generally low risk, because replacing them requires more effort than slapping on a sticker. Loose tent cards and stickers are easier to swap and warrant a look. The higher-risk case is any code claiming to let you pay your check — that is where card details are captured. Ask staff to bring a terminal, or pay at the counter.',
    },
    {
      question: 'I scanned a bad code but did not enter anything. Am I compromised?',
      answer:
        'Almost certainly not. If you did not tap through, or tapped but entered no data and installed nothing, there is no meaningful exposure. Close the page and carry on. For reassurance, confirm no unexpected apps or configuration profiles appeared on your device and keep an eye on your card statement. The important thing is not to compound a harmless scan by going back to "investigate" the site.',
    },
    {
      question: 'Why do phishing emails now use QR codes instead of links?',
      answer:
        'Two reasons, both deliberate. Email security filters have long inspected text links against reputation databases, and an image-embedded code historically slipped past that inspection. Just as importantly, scanning moves the victim from a managed corporate computer with endpoint protection onto a personal phone that has none and shows a truncated address bar. If a work email asks you to scan a code to re-authenticate, report it to IT rather than scanning it.',
    },
  ],
  sources: [
    {
      label: 'Scammers hide harmful links in QR codes to steal your information',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/consumer-alerts',
    },
    {
      label: 'How to Recognize and Avoid Phishing Scams',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams',
    },
    {
      label: 'Internet Crime Complaint Center (IC3)',
      publisher: 'Federal Bureau of Investigation',
      url: 'https://www.ic3.gov/',
    },
    {
      label: 'Identity theft recovery plans',
      publisher: 'Federal Trade Commission',
      url: 'https://www.identitytheft.gov/',
    },
  ],
  related: [
    'ai-voice-cloning-emergency-scams',
    'contactless-card-rfid-skimming',
    'bank-fraud-alert-text-scam',
  ],
};
