import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';
import { JsonLd } from '@/components/ui';
import { pageGraph } from '@/lib/schema';
import { site } from '@/lib/site';

const title = 'Privacy Policy';
const description =
  'How ScamAlert collects, uses and protects your information, including cookies, third-party advertising, and your GDPR and CCPA rights.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy-policy' },
  openGraph: { title, description, url: `${site.url}/privacy-policy`, type: 'website' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: '/privacy-policy',
          name: title,
          description,
          breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/privacy-policy' },
          ],
        })}
      />
      <LegalPage
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
        updated="2026-07-14"
        intro={`This policy explains what information ${site.name} collects, why, who it is shared with, and the choices you have. It applies to ${site.url} and covers visitors worldwide, including the EU/EEA/UK and California.`}
      >
        <p>
          <strong>Template notice:</strong> this policy is written to be accurate for the
          site as built, but you must review it with qualified counsel and update the
          operator details, ad networks and analytics providers to match your live
          configuration before relying on it.
        </p>

        <h2>1. Who we are</h2>
        <p>
          {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) publishes consumer fraud
          prevention education at {site.url}. For privacy questions, contact{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> or use our{' '}
          <Link href="/contact">contact form</Link>. For GDPR purposes we act as the data
          controller for information described in this policy.
        </p>

        <h2>2. Our privacy principles</h2>
        <p>
          We help people who have often just been defrauded. Asking those readers to hand
          over personal data would be inappropriate, so the site is built to collect as
          little as possible:
        </p>
        <ul>
          <li>You do not need an account to read anything on this site.</li>
          <li>
            The <Link href="/tool/scam-risk-checker">Scam Risk Checker</Link> runs entirely in
            your browser. Your answers are never transmitted to us and never stored.
          </li>
          <li>We do not sell personal information, and we never have.</li>
          <li>
            We never ask for account numbers, passwords, one-time codes or Social Security
            numbers, and you should never send them to us.
          </li>
        </ul>

        <h2>3. Information we collect</h2>
        <h3>3.1 Information you give us</h3>
        <p>
          If you use the contact form or email us, we receive your name, email address and
          the content of your message. We use it solely to respond and to improve our
          coverage. Do not include account numbers, card numbers, passwords, one-time codes
          or government ID numbers in any message to us.
        </p>
        <h3>3.2 Information collected automatically</h3>
        <p>
          Like most websites, our servers and providers automatically log technical data:
          IP address, browser type and version, device type, operating system, referring
          page, pages visited, and timestamps. This is used for security, abuse prevention,
          and aggregate traffic measurement.
        </p>
        <h3>3.3 Information we do not collect</h3>
        <p>
          We do not collect financial account information, government identifiers, precise
          geolocation, or biometric data. We do not knowingly collect any information from
          children under 13 (or under 16 in the EU/EEA/UK).
        </p>

        <h2>4. Cookies and similar technologies</h2>
        <p>Cookies on this site fall into three groups:</p>
        <ul>
          <li>
            <strong>Strictly necessary.</strong> Required for the site to function and for
              security. These cannot be switched off. Your light/dark theme preference is
              stored locally in your browser and is never sent to us.
          </li>
          <li>
            <strong>Analytics.</strong> Help us understand which guides are read and where
            readers struggle, in aggregate.
          </li>
          <li>
            <strong>Advertising.</strong> Set by third-party ad networks to serve and measure
            ads, and in some regions to personalize them.
          </li>
        </ul>
        <p>
          Where required by law, we request consent before setting analytics or advertising
          cookies, and you can withdraw or change that consent at any time through the
          consent banner or your browser settings. Blocking non-essential cookies does not
          affect your access to any content on this site.
        </p>

        <h2>5. Third-party advertising</h2>
        <p>
          This site is free because it is supported by advertising served by third-party
          networks. Depending on configuration, these may include Google AdSense, Ezoic,
          Mediavine, and their advertising partners.
        </p>
        <p>Regarding Google specifically:</p>
        <ul>
          <li>
            Third-party vendors, including Google, use cookies to serve ads based on your
            prior visits to this and other websites.
          </li>
          <li>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads
            to you based on your visit to this site and/or other sites on the internet.
          </li>
          <li>
            You may opt out of personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Google Ads Settings
            </a>
            .
          </li>
          <li>
            You can opt out of third-party vendor cookies for personalized advertising at{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              aboutads.info/choices
            </a>{' '}
            and{' '}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              the NAI opt-out page
            </a>
            .
          </li>
        </ul>
        <p>
          Ad networks act as independent controllers for the data they collect and their
          practices are governed by their own privacy policies, which we do not control.
        </p>

        <h2>6. Analytics</h2>
        <p>
          We use privacy-respecting analytics to measure aggregate traffic. Where an
          analytics provider supports it, we enable IP anonymization and disable data sharing
          for advertising purposes. Analytics data is used to understand which guides are
          useful, never to build individual profiles.
        </p>

        <h2>7. Legal bases for processing (GDPR)</h2>
        <p>If you are in the EU, EEA or UK, we rely on the following legal bases:</p>
        <ul>
          <li>
            <strong>Consent</strong> — for analytics and advertising cookies, and for any
            optional communication you request. You may withdraw consent at any time.
          </li>
          <li>
            <strong>Legitimate interests</strong> — for security, fraud and abuse prevention,
            and basic aggregate traffic measurement, balanced against your rights.
          </li>
          <li>
            <strong>Legal obligation</strong> — where we must retain or disclose information
            to comply with applicable law.
          </li>
        </ul>

        <h2>8. Your rights</h2>
        <h3>8.1 EU / EEA / UK (GDPR)</h3>
        <p>
          You have the right to access, rectify, erase, restrict or object to processing of
          your personal data, the right to data portability, the right to withdraw consent,
          and the right to lodge a complaint with your national supervisory authority.
        </p>
        <h3>8.2 California (CCPA/CPRA)</h3>
        <p>
          California residents have the right to know what personal information is collected
          and how it is used and disclosed, to request deletion or correction, to opt out of
          the sale or sharing of personal information, to limit use of sensitive personal
          information, and not to be discriminated against for exercising these rights.
        </p>
        <p>
          <strong>
            We do not sell personal information as that term is commonly understood.
          </strong>{' '}
          However, the use of third-party advertising cookies may constitute
          &ldquo;sharing&rdquo; for cross-context behavioral advertising under the CPRA. To
          opt out, use the consent controls on this site, enable a Global Privacy Control
          signal in your browser (which we honor), or contact us.
        </p>
        <h3>8.3 Other US states</h3>
        <p>
          Residents of states with comprehensive privacy laws — including Virginia, Colorado,
          Connecticut, Utah and Texas — have comparable rights of access, deletion,
          correction and opt-out. We apply the same process to all such requests.
        </p>
        <h3>8.4 Exercising your rights</h3>
        <p>
          Email <a href={`mailto:${site.email}`}>{site.email}</a> with your request. We
          respond within the timeframe required by applicable law, generally within 30 days
          for GDPR and 45 days for US state requests. We may ask for information to verify
          your identity, used only for that purpose.
        </p>

        <h2>9. Data retention</h2>
        <ul>
          <li>
            <strong>Contact form messages:</strong> retained up to 24 months, then deleted.
          </li>
          <li>
            <strong>Server logs:</strong> retained up to 90 days for security and abuse
            prevention.
          </li>
          <li>
            <strong>Analytics data:</strong> retained in aggregate per the provider&apos;s
            configured retention period.
          </li>
          <li>
            <strong>Scam Risk Checker answers:</strong> never retained — they exist only in
            your browser and are discarded when you close the tab.
          </li>
        </ul>

        <h2>10. International transfers</h2>
        <p>
          Our providers may process data in the United States and other countries. Where
          personal data is transferred out of the EEA or UK, we rely on appropriate
          safeguards such as Standard Contractual Clauses or an applicable adequacy decision.
        </p>

        <h2>11. Security</h2>
        <p>
          We use HTTPS across the entire site, apply standard security headers, and keep the
          data we hold to a minimum — the strongest protection available is not collecting
          information in the first place. No method of transmission or storage is completely
          secure, and we cannot guarantee absolute security.
        </p>

        <h2>12. Children&apos;s privacy</h2>
        <p>
          This site is intended for adults and is not directed to children under 13. We do not
          knowingly collect personal information from children. If you believe a child has
          provided us information, contact us and we will delete it.
        </p>

        <h2>13. External links</h2>
        <p>
          Our guides link to government agencies and other third parties. We are not
          responsible for the privacy practices or content of external sites. Reading their
          privacy policies before submitting information is worthwhile — particularly on
          official reporting portals, which by necessity collect detailed personal
          information.
        </p>

        <h2>14. Changes to this policy</h2>
        <p>
          We may update this policy to reflect changes in our practices or in the law. The
          last-updated date above always reflects the current version, and material changes
          will be highlighted on the site.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about this policy or your data: <a href={`mailto:${site.email}`}>{site.email}</a>, or
          use the <Link href="/contact">contact form</Link>.
        </p>
      </LegalPage>
    </>
  );
}
