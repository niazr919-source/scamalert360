import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';
import { JsonLd } from '@/components/ui';
import { pageGraph } from '@/lib/schema';
import { site } from '@/lib/site';

const title = 'Terms of Service';
const description =
  'The terms governing use of ScamAlert, including our educational-content disclaimer, no-professional-advice notice, and limitation of liability.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/terms-of-service' },
  openGraph: { title, description, url: `${site.url}/terms-of-service`, type: 'website' },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: '/terms-of-service',
          name: title,
          description,
          breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Terms of Service', url: '/terms-of-service' },
          ],
        })}
      />
      <LegalPage
        title="Terms of Service"
        breadcrumb="Terms of Service"
        updated="2026-07-14"
        intro={`These terms govern your use of ${site.url}. By using the site you agree to them. If you do not agree, please do not use the site.`}
      >
        <p>
          <strong>Template notice:</strong> these terms are a starting point drafted to match
          the site as built. Have qualified counsel review and adapt them, including the
          governing law and dispute resolution sections, before relying on them.
        </p>

        <h2>1. Educational content only — no professional advice</h2>
        <p>
          <strong>
            All content on {site.name} is provided for general educational and informational
            purposes only. It is not legal advice, financial advice, investment advice, tax
            advice, or professional advice of any kind.
          </strong>
        </p>
        <p>
          Reading this site does not create an attorney-client, fiduciary, advisory or other
          professional relationship between you and {site.name} or any of its contributors.
          We do not know your circumstances, your institution&apos;s policies, or the
          specific facts of your situation, and nothing here is tailored to them.
        </p>
        <p>
          Consumer protection rules, dispute deadlines, liability limits and reimbursement
          policies vary by institution and jurisdiction and change over time. Before acting on
          anything you read here, confirm your rights and obligations with your bank, card
          issuer, payment provider, or a qualified professional licensed in your jurisdiction.
        </p>

        <h2>2. If you have lost money, act through official channels</h2>
        <p>
          This site is not an emergency service and we cannot intervene on your behalf. If
          money has moved, contact your bank immediately on the number printed on your card,
          and report to the official agencies listed on our{' '}
          <Link href="/report-a-scam">reporting page</Link>. Do not wait for a reply from us
          before acting.
        </p>

        <h2>3. No guarantee of accuracy or outcome</h2>
        <p>
          We take accuracy seriously and describe our process in our{' '}
          <Link href="/editorial-policy">editorial policy</Link>. Even so, we make no
          representation or warranty that content is accurate, complete, current or suitable
          for your circumstances.
        </p>
        <p>
          We do not guarantee any outcome. Following guidance on this site does not guarantee
          you will avoid a scam, recover lost money, succeed in a dispute, or receive a
          refund. Scam tactics evolve continuously and some losses cannot be recovered by any
          means.
        </p>

        <h2>4. The Scam Risk Checker</h2>
        <p>
          The <Link href="/tool/scam-risk-checker">Scam Risk Checker</Link> is an educational
          tool that produces an estimate from a small set of self-reported answers. It is not
          a security scan, a verification service, or a determination about any specific
          message, caller, website or transaction.
        </p>
        <p>
          A low score does not mean a contact is safe or legitimate. A high score does not
          establish that a crime occurred. Use its output as one input among others, never as
          the sole basis for a financial decision. It runs entirely in your browser and we do
          not receive or store your answers.
        </p>

        <h2>5. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site for any unlawful purpose or to facilitate fraud.</li>
          <li>
            Use content to develop, refine or carry out scams, social engineering, or attacks
            against any person or organization.
          </li>
          <li>
            Scrape, harvest, or systematically copy content except as permitted by our
            robots.txt and applicable law.
          </li>
          <li>
            Attempt to gain unauthorized access to the site or any related systems, or
            interfere with its operation.
          </li>
          <li>
            Impersonate {site.name} or its contributors, or misrepresent your affiliation
            with us.
          </li>
        </ul>

        <h2>6. Intellectual property</h2>
        <p>
          All content on this site — text, design, graphics, code and the structure of our
          guides — is owned by {site.name} or its licensors and is protected by copyright and
          other laws. You may read, print and share links to our content for personal,
          non-commercial use.
        </p>
        <p>
          You may quote a brief excerpt with clear attribution and a link to the original
          page. You may not republish substantial portions, create derivative works, or use
          our content to train machine learning models without prior written permission.
        </p>

        <h2>7. Third-party links and advertising</h2>
        <p>
          We link to government agencies and other third-party resources for your
          convenience. We do not control those sites and are not responsible for their
          content, accuracy, availability or privacy practices. A link is not an endorsement.
        </p>
        <p>
          This site displays advertising served programmatically by third-party networks. We
          do not select, endorse, or vouch for individual advertisers or their products, and
          we are not responsible for their content or for any transaction between you and an
          advertiser. Any dealings with an advertiser are solely between you and them.
        </p>
        <p>
          We accept no affiliate commissions or sponsored placements; see our{' '}
          <Link href="/about-us">conflict of interest disclosure</Link>.
        </p>

        <h2>8. Submissions</h2>
        <p>
          If you send us a scam report, correction or other message, you grant us a
          non-exclusive, royalty-free license to use that information to improve our
          coverage. We treat submissions as confidential by default and will not publish
          identifying details without your permission. Do not send account numbers,
          passwords, one-time codes, or government identification numbers.
        </p>

        <h2>9. Disclaimer of warranties</h2>
        <p>
          <strong>
            The site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, whether express, implied or statutory, including implied
            warranties of merchantability, fitness for a particular purpose,
            non-infringement, accuracy, and uninterrupted or error-free operation.
          </strong>
        </p>

        <h2>10. Limitation of liability</h2>
        <p>
          <strong>
            To the maximum extent permitted by law, {site.name}, its contributors and its
            operators will not be liable for any indirect, incidental, special, consequential,
            exemplary or punitive damages, or for any loss of money, profits, data, goodwill
            or other intangible losses, arising out of or related to your use of or inability
            to use the site — including reliance on any content — whether based in contract,
            tort, negligence, strict liability or otherwise, and whether or not we were
            advised of the possibility of such damages.
          </strong>
        </p>
        <p>
          Where liability cannot be excluded, our total aggregate liability is limited to one
          hundred US dollars (USD $100). Some jurisdictions do not allow certain exclusions or
          limitations, so parts of this section may not apply to you, and nothing in these
          terms limits liability for fraud or for death or personal injury caused by
          negligence where such limitation is prohibited.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless {site.name}, its contributors and
          operators from any claims, damages, losses, liabilities and expenses (including
          reasonable legal fees) arising from your use of the site, your violation of these
          terms, or your violation of the rights of any third party.
        </p>

        <h2>12. Availability and changes</h2>
        <p>
          We may modify, suspend or discontinue any part of the site at any time without
          notice. We may also update these terms; the last-updated date above reflects the
          current version, and continued use after changes constitutes acceptance.
        </p>

        <h2>13. Governing law</h2>
        <p>
          These terms are governed by the laws of the State of Delaware, United States,
          without regard to its conflict of law provisions. You agree to the exclusive
          jurisdiction of the state and federal courts located in Delaware for any dispute
          arising from these terms, except where applicable consumer protection law grants you
          the right to bring proceedings in your place of residence.
        </p>

        <h2>14. Severability and entire agreement</h2>
        <p>
          If any provision of these terms is found unenforceable, the remaining provisions
          continue in full force. These terms, together with our{' '}
          <Link href="/privacy-policy">privacy policy</Link>, constitute the entire agreement
          between you and us regarding the site.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>, or
          use our <Link href="/contact">contact form</Link>.
        </p>
      </LegalPage>
    </>
  );
}
