import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Timer, Zap } from 'lucide-react';
import { ScamRiskChecker } from '@/components/scam-risk-checker';
import { Breadcrumbs, JsonLd } from '@/components/ui';
import { InFeedAd, ContentRecommendationAd } from '@/components/ads';
import { pageGraph } from '@/lib/schema';
import { site } from '@/lib/site';
import { articles, articleHref } from '@/content';

const title = 'Free Scam Risk Checker: Score a Suspicious Message, Call or Email';
const description =
  'Answer a few questions about a suspicious text, call, email or QR code and get an instant Scam Likelihood Score plus tailored recovery steps. Free, private, nothing stored.';

const path = '/tool/scam-risk-checker';

const faq = [
  {
    question: 'Is the Scam Risk Checker free and private?',
    answer:
      'Yes. It is completely free and runs entirely in your browser. Your answers are never transmitted to our servers, never stored, and never shared. Closing the tab discards everything. We do not ask for your name, email, phone number, or any account details, and you should never enter such details into any tool that scores a message for you.',
  },
  {
    question: 'How is the Scam Likelihood Score calculated?',
    answer:
      'Each answer carries a weight derived from how strongly that signal correlates with fraud in published consumer protection guidance. Certain answers — being asked to read a one-time passcode aloud, to move money to a "safe account", to install remote access software, or to pay in gift cards — are individually decisive, so selecting any of them raises the score to a critical band regardless of your other answers.',
  },
  {
    question: 'The score came back low. Does that mean it is definitely safe?',
    answer:
      'No. A low score means your answers did not match common fraud patterns, not that the contact is verified. Scam tactics change constantly and this tool cannot inspect the actual message. Treat a low score as one input alongside the universal rule: never act on an inbound contact. Hang up or close the message and reach the organization on a number you look up yourself.',
  },
  {
    question: 'The score is high. What should I do first?',
    answer:
      'Stop engaging immediately, and do not complete any action you were asked to take. If money has already moved or you disclosed a passcode, call your bank on the number printed on your card within the hour and ask for a hold, a recall attempt, and reissued credentials. The tool generates a tailored list of next steps based on what you told it, ordered by urgency.',
  },
  {
    question: 'Can this tool tell me if a specific link or phone number is malicious?',
    answer:
      'No, and be cautious of tools that claim to. This checker evaluates the behavioral pattern of the interaction — what you were asked to do and how you were pressured — rather than analyzing any technical artifact. That pattern is what stays stable across campaigns, while domains and phone numbers rotate constantly.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'scam checker',
    'is this a scam',
    'scam risk calculator',
    'check suspicious text message',
    'fraud risk assessment tool',
  ],
  alternates: { canonical: path },
  openGraph: { title, description, url: `${site.url}${path}`, type: 'website' },
};

export default function ScamRiskCheckerPage() {
  const guides = articles.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={pageGraph({
          path,
          name: title,
          description,
          breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Scam Risk Checker', url: path },
          ],
          faq,
        })}
      />
      <Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: 'Scam Risk Checker' }]} />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0">
          <header className="max-w-3xl">
            <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-navy-900 dark:text-white">
              Scam Risk Checker
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-navy-600 dark:text-navy-300">
              Got a message, call or email that feels wrong? Answer four short questions and
              get an instant Scam Likelihood Score with recovery steps matched to what has
              already happened.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-600 dark:text-navy-400">
              <li className="inline-flex items-center gap-2">
                <Timer className="h-4 w-4 text-emerald" aria-hidden="true" />
                About 60 seconds
              </li>
              <li className="inline-flex items-center gap-2">
                <Lock className="h-4 w-4 text-emerald" aria-hidden="true" />
                Runs in your browser — nothing is stored or sent
              </li>
              <li className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald" aria-hidden="true" />
                No sign-up
              </li>
            </ul>
          </header>

          <section className="mt-10 rounded-2xl border border-navy-200 bg-white p-6 dark:border-navy-700 dark:bg-navy-800/30 sm:p-8">
            <ScamRiskChecker />
          </section>

          <aside className="mt-8 rounded-xl border border-amber-400/50 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
            <strong className="font-semibold">This is an educational tool.</strong> The Scam
            Likelihood Score is an estimate based on behavioral patterns described in
            published consumer protection guidance. It is not a verdict on any specific
            message, not a security scan, and not legal or financial advice. If you have lost
            money, contact your bank immediately on the number printed on your card.
          </aside>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
              How the checker works
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {[
                {
                  title: 'It scores behavior, not artifacts',
                  text: 'Phone numbers, domains and sender names rotate constantly. What stays stable is what you are asked to do — so that is what we evaluate.',
                },
                {
                  title: 'Some answers are decisive',
                  text: 'Being asked to read a passcode aloud, move money to a "safe account", or pay in gift cards is conclusive on its own and raises the score to critical.',
                },
                {
                  title: 'Guidance matches your exposure',
                  text: 'The next-step list is generated from what you told us you already did, ordered by how time-sensitive each action is.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-navy-200 p-5 dark:border-navy-700"
                >
                  <h3 className="font-display font-semibold text-navy-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
              Frequently asked questions
            </h2>
            <div className="mt-5 divide-y divide-navy-200 rounded-xl border border-navy-200 dark:divide-navy-700 dark:border-navy-700">
              {faq.map((item) => (
                <details key={item.question} className="px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="cursor-pointer list-none font-display font-semibold text-navy-900 dark:text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-600 dark:text-navy-400">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
              Read the full guides
            </h2>
            <ul className="mt-4 space-y-2">
              {guides.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={articleHref(article)}
                    className="text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <ContentRecommendationAd id="tool-native" />
        </div>

        <aside className="space-y-6">
          <InFeedAd id="tool-sidebar-1" />
          <div className="sticky top-32">
            <InFeedAd id="tool-sidebar-2" />
          </div>
        </aside>
      </div>
    </div>
  );
}
