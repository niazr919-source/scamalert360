import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';
import { JsonLd } from '@/components/ui';
import { pageGraph } from '@/lib/schema';
import { site } from '@/lib/site';

const title = 'Editorial Policy: How We Research, Verify and Review Scam Guides';
const description =
  'Our sourcing standards, fact-checking process, expert review requirements, correction policy and AI disclosure for every guide published on ScamAlert.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/editorial-policy' },
  openGraph: { title, description, url: `${site.url}/editorial-policy`, type: 'website' },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: '/editorial-policy',
          name: title,
          description,
          breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Editorial Policy', url: '/editorial-policy' },
          ],
        })}
      />
      <LegalPage
        title="Editorial Policy"
        breadcrumb="Editorial Policy"
        updated="2026-07-14"
        intro="ScamAlert covers subjects where inaccurate advice causes real financial harm. This page documents exactly how our guides are researched, sourced, reviewed and maintained."
      >
        <h2>Scope and standard of care</h2>
        <p>
          Our coverage falls into what search quality guidelines describe as{' '}
          <strong>Your Money or Your Life</strong> content: material that can affect a
          reader&apos;s financial security. We hold this content to a higher standard than
          general publishing. Specifically, we do not publish a procedure, deadline or
          liability rule unless it can be traced to a primary source and has been checked by
          a reviewer with relevant professional background.
        </p>

        <h2>Source hierarchy</h2>
        <p>
          We work from primary sources. When guides disagree with each other online, it is
          usually because they are all citing each other rather than the underlying rule. Our
          sourcing priority is:
        </p>
        <ol>
          <li>
            <strong>Federal regulators and law enforcement.</strong> The Federal Trade
            Commission, the FBI&apos;s Internet Crime Complaint Center (IC3), the Consumer
            Financial Protection Bureau, and the federal regulations themselves — chiefly
            Regulation E for electronic transfers and Regulation Z for credit.
          </li>
          <li>
            <strong>Payment network and industry rules.</strong> Published card network
            chargeback rules and ACH operating rules, where consumer-facing summaries are
            available.
          </li>
          <li>
            <strong>Institutional documentation.</strong> Published bank and payment platform
            policies, cited with the recognition that these vary by institution and change
            without notice.
          </li>
          <li>
            <strong>Peer-reviewed and technical research.</strong> For claims about how an
            attack works technically, such as contactless card security or voice synthesis.
          </li>
          <li>
            <strong>Reported observation.</strong> Intercepted lure text and scam scripts
            collected by our team, always labeled as such.
          </li>
        </ol>
        <p>
          We do not cite other scam-awareness blogs, content marketing produced by security
          vendors, or aggregated statistics whose original source cannot be located. Every
          guide ends with a visible sources list linking directly to the primary material.
        </p>

        <h2>How we handle statistics</h2>
        <p>
          Fraud statistics are widely misquoted online, usually by stripping the qualifier
          that made them meaningful. We apply three rules: figures are attributed to the
          publishing body and reporting period; we distinguish{' '}
          <em>reported</em> losses from estimated total losses, since the majority of fraud
          is never reported; and where a precise number cannot be verified, we describe the
          magnitude qualitatively rather than inventing precision.
        </p>

        <h2>Fact-checking</h2>
        <p>
          Guides are published under the ScamAlert editorial byline. We are deliberate about
          this: many consumer-finance sites invent authors and attach certifications nobody
          holds, which we regard as worse than an honest team byline. We claim a{' '}
          <strong>process</strong>, not credentials — and the process is one you can check,
          because every factual claim links to the source it came from.
        </p>
        <p>Before a guide is published, two passes are required:</p>
        <ul>
          <li>
            <strong>Procedural check.</strong> Every claim about disputes, chargebacks,
            recalls, liability limits or filing deadlines is traced to the regulation or
            agency guidance it derives from, and the source is listed at the foot of the
            article. Anything we cannot trace is cut or explicitly labeled as uncertain.
          </li>
          <li>
            <strong>Technical check.</strong> Every claim about how an attack works is
            assessed for whether it is plausible at consumer scale. This pass exists mainly
            to strip out security theater — advice that sounds protective but does not
            measurably reduce risk. It is why our contactless card guide concludes that most
            readers do not need an RFID blocking wallet.
          </li>
        </ul>
        <p>
          Where a named subject-matter expert has reviewed a specific guide, they are
          credited by name on that article. Absence of a named reviewer means exactly that:
          the guide was checked against primary sources by the editorial team, and no
          individual expert has put their name to it.
        </p>

        <h2>Review cycle and updates</h2>
        <p>
          Scam tactics change faster than most publishing schedules. Every guide displays both
          a published date and a last-updated date, and no guide is allowed to sit unreviewed:
        </p>
        <ul>
          <li>Full review at least every six months.</li>
          <li>
            Immediate review when a regulator changes a relevant rule, a payment network
            changes reimbursement policy, or a significant new variant is documented.
          </li>
          <li>
            Link verification on every review cycle, since agency URLs change and a dead
            reporting link is a real failure in an emergency.
          </li>
        </ul>
        <p>
          When we make a substantive change — a corrected procedure, a revised deadline, a
          reversed conclusion — we update the last-reviewed date and note the change on the
          article. We do not silently rewrite guidance.
        </p>

        <h2>Corrections</h2>
        <p>
          If we get something wrong, we fix it and say so. Report an error to{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> or through our{' '}
          <Link href="/contact">contact form</Link>, and we aim to acknowledge within two
          business days. Errors that could cause financial harm — an incorrect deadline, a
          wrong reporting channel — are corrected as a priority ahead of scheduled work.
        </p>

        <h2>Use of AI</h2>
        <p>
          We disclose this because readers deserve to know, and because we cover AI-enabled
          fraud. AI tools may be used internally for research assistance, copy editing and
          summarizing public documents. They are not used to generate published guidance
          unreviewed. Every claim in every guide is verified against a primary source by a
          named human author and approved by a named human reviewer, who are accountable for
          the accuracy of what appears under their names.
        </p>

        <h2>Editorial independence</h2>
        <p>
          The site is funded by display advertising served programmatically by third-party
          networks. Advertisers do not see content before publication, cannot request
          changes, and cannot commission topics. We accept no affiliate commissions, no
          sponsored posts and no paid links. Our full funding and conflict of interest
          disclosure is on the <Link href="/about-us">about page</Link>.
        </p>

        <h2>What we will not publish</h2>
        <ul>
          <li>
            <strong>Operational fraud instructions.</strong> We explain how scams work in the
            detail needed to recognize and defeat them, and stop short of anything that
            functions as a how-to for committing fraud.
          </li>
          <li>
            <strong>Personalized advice.</strong> We publish general education. We do not
            advise individuals on specific disputes, and nothing on this site is legal,
            financial, investment or tax advice.
          </li>
          <li>
            <strong>Guaranteed recovery claims.</strong> We will not imply that losses are
            recoverable when they usually are not, and we never promote fund-recovery
            services, which are themselves a common follow-on scam.
          </li>
          <li>
            <strong>Fear-driven product placement.</strong> We do not manufacture urgency to
            sell protective products, and we say plainly when a widely marketed product does
            not meaningfully reduce risk.
          </li>
        </ul>

        <h2>Reader privacy in reports</h2>
        <p>
          Readers sometimes send us their own scam experiences. We treat those as
          confidential by default. We do not publish identifying details without explicit
          permission, and when a reader account informs a guide, it is anonymized and
          generalized. We never share submissions with advertisers or data brokers. See our{' '}
          <Link href="/privacy-policy">privacy policy</Link> for how submitted information is
          handled.
        </p>
      </LegalPage>
    </>
  );
}
