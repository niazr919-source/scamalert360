import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';
import { JsonLd } from '@/components/ui';
import { ReportingButtons, RecoveryTimeline } from '@/components/content-blocks';
import { pageGraph } from '@/lib/schema';
import { site } from '@/lib/site';

const title = 'Where to Report a Scam: Official US Agencies and Deadlines';
const description =
  'The official channels for reporting fraud in the United States — FTC, FBI IC3, CFPB and IdentityTheft.gov — plus what to do in the first hour after losing money.';

const faq = [
  {
    question: 'Who should I report a scam to first?',
    answer:
      'Your bank or card issuer, before any government agency. They are the only party who can freeze an account, attempt a recall on a transfer, or reverse a charge, and those actions are time-sensitive — often measured in hours. Government reports drive enforcement and pattern detection but do not by themselves recover your money. Call the number printed on your card, not one supplied by a caller or found in a search result.',
  },
  {
    question: 'Does reporting a scam to the FTC get my money back?',
    answer:
      'Usually not directly. The FTC does not resolve individual disputes or issue refunds. Reports go into the Consumer Sentinel database used by federal, state and local law enforcement to detect patterns and build cases, and they can contribute to enforcement actions that produce refunds later. Report anyway — it takes minutes — but pursue recovery through your bank and, if a claim is denied, the CFPB.',
  },
  {
    question: 'What is IC3 and when should I use it?',
    answer:
      'The Internet Crime Complaint Center is the FBI’s reporting portal for internet-enabled crime. Use it whenever a wire transfer, online transfer or cyber-enabled theft is involved. IC3 operates a recovery asset process that has succeeded in freezing fraudulent domestic wire transfers, but it works on very short timelines — filing the same day materially improves the odds.',
  },
  {
    question: 'When should I complain to the CFPB?',
    answer:
      'When a bank, card issuer or payment app has denied a claim you believe is valid, or is not responding. The CFPB forwards complaints to the institution, which must respond substantively, and the process is free and takes about fifteen minutes. It is the most effective escalation available to a consumer after an internal denial.',
  },
  {
    question: 'Should I report a scam even if I did not lose any money?',
    answer:
      'Yes, and it takes almost no time. Near-miss reports are how agencies and carriers detect campaigns early. Forwarding a scam text to 7726 is free with all major US carriers and feeds directly into carrier-level blocklists, which protects people who would have received the same message next.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'where to report a scam',
    'report fraud FTC',
    'IC3 complaint',
    'CFPB complaint',
    'report scam text message',
  ],
  alternates: { canonical: '/report-a-scam' },
  openGraph: { title, description, url: `${site.url}/report-a-scam`, type: 'website' },
};

export default function ReportAScamPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: '/report-a-scam',
          name: title,
          description,
          breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Report a Scam', url: '/report-a-scam' },
          ],
          faq,
        })}
      />
      <LegalPage
        title="Where to report a scam"
        breadcrumb="Report a Scam"
        updated="2026-07-14"
        intro="Reporting rarely recovers money on its own — your bank does that. But reporting is fast, free, and it is what drives enforcement and carrier-level blocking. Here is the order to do it in."
      >
        <h2>Do this first</h2>
        <p>
          <strong>
            Call your bank on the number printed on your card before you do anything else.
          </strong>{' '}
          They are the only party who can freeze an account, attempt a recall on a transfer,
          or reverse a charge — and every one of those actions gets harder by the hour. Do
          not use a number given to you by a caller, sent in a text, or returned by a search
          engine; scam call centres buy ads against exactly those queries.
        </p>

        <div className="not-prose">
          <RecoveryTimeline
            title="The first 24 hours"
            intro="Work top to bottom. Do not skip ahead to filing reports before you have contacted your bank."
            steps={[
              {
                window: 'Minutes 0–15',
                title: 'Call your bank and say "fraud in progress"',
                text: 'That exact phrasing routes you to the team with authority to place immediate holds. Ask for a freeze on the account, a recall attempt on any transfer that left, and reissued cards with a forced password reset.',
              },
              {
                window: 'Minutes 15–45',
                title: 'Secure your logins and devices',
                text: 'Change your banking and email passwords from a clean device. Remove unrecognized devices from your banking profile. If you installed anything a caller sent, disconnect that device from the internet.',
              },
              {
                window: 'Hours 1–24',
                title: 'File the written dispute with your bank',
                text: 'A phone call is not a dispute. Ask how to submit written notice of unauthorized activity and do it the same day — written notice starts your formal protection clock and creates the record you will need on appeal.',
              },
              {
                window: 'Same day',
                title: 'File with the FTC and IC3',
                text: 'Report at ReportFraud.ftc.gov, and file with IC3 if a wire or online transfer was involved. IC3’s recovery asset process can freeze funds still sitting in a domestic account, but only on very short timelines.',
              },
              {
                window: 'Days 1–7',
                title: 'Protect your identity',
                text: 'If personal data was exposed, place a free fraud alert or credit freeze at all three bureaus and start a recovery plan at IdentityTheft.gov. Consider an IRS Identity Protection PIN.',
              },
              {
                window: 'Week 1–2',
                title: 'Escalate a denied claim to the CFPB',
                text: 'If your bank denies a claim you believe is valid, file a CFPB complaint naming the institution. Regulated firms must respond substantively, and this is the most effective consumer escalation available.',
              },
            ]}
          />
        </div>

        <h2>The official agencies</h2>
        <p>
          All of these are free. Be extremely wary of any service that offers to file on your
          behalf for a fee, or promises to recover your losses — targeting people who have
          already been defrauded is one of the most common follow-on scams.
        </p>

        <div className="not-prose">
          <ReportingButtons
            title="File your reports here"
            text="Use every channel that applies to your situation. Have your bank case number ready — several forms ask for it."
            agencies={['ftc', 'ic3', 'cfpb', 'identityTheft', 'ssaOig', 'spam7726']}
          />
        </div>

        <h2>What each one actually does</h2>
        <h3>FTC — ReportFraud.ftc.gov</h3>
        <p>
          The general-purpose front door for consumer fraud in the US. Reports feed the
          Consumer Sentinel database used by federal, state and local law enforcement to
          detect patterns and build cases. The FTC does not resolve individual disputes or
          issue refunds directly, but enforcement actions built on these reports do sometimes
          produce consumer redress.
        </p>
        <h3>FBI IC3 — ic3.gov</h3>
        <p>
          For internet-enabled crime, especially anything involving a wire or online
          transfer. IC3 runs a recovery asset process that has succeeded in freezing
          fraudulent domestic wires while funds remain in the receiving account. Because that
          window is short, same-day filing genuinely matters.
        </p>
        <h3>CFPB — consumerfinance.gov/complaint</h3>
        <p>
          Your escalation route when a bank, card issuer or payment app denies a claim or
          fails to respond. The CFPB forwards your complaint to the institution, which must
          respond substantively. Free, roughly fifteen minutes, and the single most effective
          step available after an internal denial.
        </p>
        <h3>IdentityTheft.gov</h3>
        <p>
          Use this whenever personal data was exposed — your Social Security number, date of
          birth, or ID documents. It generates a personalized recovery plan and the identity
          theft affidavit that creditors and bureaus ask for.
        </p>
        <h3>Forward texts to 7726</h3>
        <p>
          Free with all major US carriers. Forwarding a scam text to 7726 (SPAM) routes the
          sending number into carrier-level blocklists. It takes about ten seconds and
          protects the next people in line, which makes it worth doing even when you lost
          nothing.
        </p>

        <h2>Also worth reporting to</h2>
        <ul>
          <li>
            <strong>Your state attorney general.</strong> Many run consumer protection
            divisions that mediate individual disputes, which federal agencies generally do
            not.
          </li>
          <li>
            <strong>The platform where it happened.</strong> Job boards, marketplaces and
            social networks can remove listings and accounts, and this is often the fastest
            way to stop an active campaign.
          </li>
          <li>
            <strong>US Postal Inspection Service.</strong> If mail was involved — a
            counterfeit check, a package, a fake notice — mailing fraudulent instruments is a
            federal offense.
          </li>
          <li>
            <strong>Local police.</strong> Particularly if someone came to your door to
            collect cash or valuables, or if you need a report number for an insurance or
            bank claim.
          </li>
        </ul>

        <h2>Before you file: gather this</h2>
        <ul>
          <li>Dates and times of every contact, and the phone numbers or email addresses used.</li>
          <li>Screenshots of messages, listings and profiles — these are deleted quickly.</li>
          <li>Transaction details: amounts, dates, recipient names and reference numbers.</li>
          <li>Your bank claim or case number.</li>
          <li>A short factual timeline of what happened, in order.</li>
        </ul>

        <h2>Common questions</h2>
        {faq.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}

        <p>
          Not sure whether what you received is a scam? Run it through our free{' '}
          <Link href="/tool/scam-risk-checker">Scam Risk Checker</Link>, or browse the{' '}
          <Link href="/scams">full guide library</Link>.
        </p>
      </LegalPage>
    </>
  );
}
