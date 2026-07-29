import type { Metadata } from 'next';
import Link from 'next/link';
import { people } from '@/content/authors';
import { LegalPage } from '@/components/legal-page';
import { JsonLd } from '@/components/ui';
import { pageGraph, personSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const title = 'About ScamAlert: Our Team, Standards and Mission';
const description =
  'Who writes ScamAlert, what qualifies them, how we are funded, and the conflict of interest rules that govern our fraud prevention coverage.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about-us' },
  openGraph: { title, description, url: `${site.url}/about-us`, type: 'website' },
};

export default function AboutPage() {
  const team = Object.values(people);

  // Base page graph plus a Person entity for each named team member, which is
  // what ties author bylines on articles back to real, described people.
  const base = pageGraph({
    path: '/about-us',
    name: title,
    description,
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about-us' },
    ],
  });
  const graph = {
    ...base,
    '@graph': [...base['@graph'], ...team.map((person) => personSchema(person.id))],
  };

  return (
    <>
      <JsonLd data={graph} />
      <LegalPage
        title="About ScamAlert"
        breadcrumb="About Us"
        updated="2026-07-14"
        intro="We publish plain-English guidance on consumer fraud, traced to primary sources from US regulators and law enforcement — and we tell you plainly when a loss is unlikely to be recovered, or when a security product is not worth buying."
      >
        <h2>Our mission</h2>
        <p>
          Most scam advice fails at the moment it is needed. It is written in the abstract,
          it lists warning signs without explaining the mechanism, and it goes quiet exactly
          where people need it most — after the money has already gone. ScamAlert exists
          to close that gap.
        </p>
        <p>Every guide we publish is built around three commitments:</p>
        <ul>
          <li>
            <strong>Explain the mechanism, not just the symptom.</strong> Knowing why a
            fraudster needs you to read a code aloud is more durable than memorizing a list
            of suspicious phrases, because the mechanism stays constant while the script
            changes weekly.
          </li>
          <li>
            <strong>Cover recovery honestly.</strong> We publish real timelines and real
            odds, including when they are poor. Telling someone a wire is probably gone is
            more useful than implying every loss is recoverable.
          </li>
          <li>
            <strong>Point to official channels.</strong> Every guide links directly to the
            FTC, the FBI&apos;s IC3, the CFPB and IdentityTheft.gov. We are not a substitute
            for those agencies and we never present ourselves as one.
          </li>
        </ul>

        <h2>Who we are</h2>
        <p>
          Guides are published under the ScamAlert editorial byline. We want to be
          straightforward about what that means, because a great many sites in this niche are
          not: it means a small team researches and writes this material, and it means we will
          not invent contributors or attach professional certifications that nobody here
          holds.
        </p>
        <p>
          That practice is widespread in consumer-finance publishing and we think it is
          corrosive. A byline claiming a credential is a factual assertion, and one that a
          reader in the middle of a financial emergency has no realistic way to check. So we
          make a narrower claim, and it is one you <em>can</em> check: every guide is traced
          to primary sources, and those sources are listed at the foot of every article for
          you to follow yourself.
        </p>

        <div className="not-prose my-8 space-y-5">
          {team.map((person) => (
            <div
              key={person.id}
              id={person.id}
              className="scroll-mt-28 rounded-xl border border-navy-200 bg-white p-5 dark:border-navy-700 dark:bg-navy-800/40"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-white dark:bg-emerald">
                  {person.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                    {person.role}
                  </p>
                  {person.credentials ? (
                    <p className="mt-0.5 text-sm text-navy-500 dark:text-navy-400">
                      {person.credentials}
                    </p>
                  ) : null}
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-600 dark:text-navy-400">
                    {person.bio}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {person.expertise.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-navy-100 px-2.5 py-1 text-xs font-medium text-navy-700 dark:bg-navy-700 dark:text-navy-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {person.profileUrl ? (
                    <a
                      href={person.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="mt-3 inline-block text-sm font-medium text-emerald-700 underline underline-offset-2 dark:text-emerald-400"
                    >
                      View profile
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p>
          Where an individual expert has reviewed a specific guide, they are credited by name
          on that article with a link to a real, public profile. If you see no named
          reviewer, that guide was checked against primary sources by the team and no
          individual has put their name to it — which we would rather tell you plainly than
          obscure.
        </p>

        <h2>How we are funded</h2>
        <p>
          ScamAlert is free to read and is funded by display advertising served through
          third-party ad networks. Advertising is what keeps the site accessible to people
          who often cannot afford to lose the money they came here about.
        </p>
        <p>
          Advertisers have no input into our editorial coverage. They do not see articles
          before publication, cannot request changes, and cannot commission topics. Ad slots
          are filled programmatically by the network, which means an ad may appear beside an
          article that is critical of a similar product. We label advertising clearly and
          keep it visually distinct from editorial content.
        </p>

        <h2>Conflict of interest disclaimer</h2>
        <p>
          Consumer security is a category where affiliate revenue routinely corrupts
          coverage. Identity theft protection services, VPNs, antivirus suites and
          &ldquo;security&rdquo; hardware pay generous commissions, and a great deal of
          published scam advice exists primarily to route readers toward those commissions.
        </p>
        <p>We have structured ScamAlert to avoid that pressure:</p>
        <ul>
          <li>
            <strong>No affiliate commissions.</strong> We do not participate in affiliate
            programs for security products, credit monitoring, identity protection, VPNs or
            financial products, and we earn nothing if you buy something we mention.
          </li>
          <li>
            <strong>No sponsored articles.</strong> We do not accept payment to write about,
            review, or link to any product or company. We do not publish guest posts placed
            for SEO purposes.
          </li>
          <li>
            <strong>No paid links.</strong> Outbound links are chosen editorially. Links to
            government agencies carry no commercial relationship of any kind.
          </li>
          <li>
            <strong>Contributors disclose holdings.</strong> Anyone writing about a company
            or sector in which they hold a financial interest must disclose it, and is
            normally reassigned.
          </li>
        </ul>
        <p>
          The practical result is that we can tell you when a product is not worth buying.
          Our guide on{' '}
          <Link href="/scams/credit-cards/contactless-card-rfid-skimming">
            RFID blocking wallets
          </Link>{' '}
          concludes that most people do not need one — a conclusion that is difficult to
          reach honestly on a site earning commission from wallet sales.
        </p>

        <h2>Corrections</h2>
        <p>
          We correct errors promptly and visibly. If you find something inaccurate, outdated,
          or missing important context, email{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> or use our{' '}
          <Link href="/contact">contact form</Link>. Substantive corrections are noted on the
          article, and every guide displays its last-reviewed date.
        </p>

        <h2>What we are not</h2>
        <p>
          ScamAlert is a publisher of consumer education. We are not a law firm, a
          financial advisory business, a government agency, or a fund recovery service. We
          cannot recover money on your behalf, contact your bank for you, or represent you in
          a dispute.
        </p>
        <p>
          Be extremely cautious of any organization that offers to recover scam losses for an
          upfront fee. Targeting people who have already lost money is one of the most common
          follow-on frauds, and legitimate recovery runs through your bank and the official
          agencies listed on our <Link href="/report-a-scam">reporting page</Link> — never
          through a company that approaches you.
        </p>
      </LegalPage>
    </>
  );
}
