import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowDown,
  ArrowRight,
  Bot,
  CreditCard,
  Landmark,
  ShieldCheck,
  ShoppingCart,
  Siren,
  Sparkles,
} from 'lucide-react';
import { articles, articleHref, getArticlesByCategory } from '@/content';
import { categories } from '@/content/categories';
import { ArticleCard } from '@/components/article-card';
import { ScamCheckerEntry } from '@/components/scam-checker-entry';
import { ContentRecommendationAd, InFeedAd } from '@/components/ads';
import { SectionHeading } from '@/components/ui';
import { ReportingButtons } from '@/components/content-blocks';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Scam Awareness & Fraud Prevention Guides',
  description: site.description,
  alternates: { canonical: '/' },
};

const categoryIcons = {
  landmark: Landmark,
  'credit-card': CreditCard,
  bot: Bot,
  'shopping-cart': ShoppingCart,
} as const;

export default function HomePage() {
  const [featured, ...rest] = articles;
  const latest = rest.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white dark:border-navy-800 dark:from-navy-950 dark:to-navy-900">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Independent · Primary-sourced · Free
            </p>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl dark:text-white">
              Recognize the scam. Recover the money. Report it properly.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-navy-600 dark:text-navy-300">
              ScamAlert publishes plain-English guides to the frauds actually targeting
              people right now — bank impersonation texts, fake delivery and toll
              notices, payment app traps, AI voice cloning and investment fraud. Every guide
              is checked against primary sources and includes a recovery timeline and the
              official agencies to report to.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {/*
                Scrolls to the checker band rather than linking to the tool
                page. Keeps an action above the fold — where the highest-intent
                visitor lands — without pointing two hero CTAs at the same URL.
              */}
              <a
                href="#checker"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Check a suspicious message
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/scams"
                className="inline-flex items-center gap-2 rounded-lg border border-navy-300 px-5 py-3 text-sm font-semibold text-navy-800 transition hover:bg-white dark:border-navy-600 dark:text-navy-100 dark:hover:bg-navy-800"
              >
                Browse all guides
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Trust markers */}
          <dl className="mt-12 grid gap-6 border-t border-navy-200 pt-8 sm:grid-cols-3 dark:border-navy-800">
            {[
              {
                term: 'Checked against primary sources',
                desc: 'Every dispute timeline and liability rule is traced back to the regulation or agency guidance it comes from.',
              },
              {
                term: 'No second-hand citations',
                desc: 'We cite the FTC, FBI IC3 and CFPB directly — never other scam blogs.',
              },
              {
                term: 'No affiliate incentives',
                desc: 'We do not take commissions from security products, so we can tell you when one is not worth buying.',
              },
            ].map((item) => (
              <div key={item.term}>
                <dt className="font-display font-semibold text-navy-900 dark:text-white">
                  {item.term}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-navy-600 dark:text-navy-400">
                  {item.desc}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="border-b border-crimson/20 bg-crimson/[0.04] dark:bg-crimson/[0.07]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center">
          <p className="flex items-center gap-2 text-sm font-semibold text-red-800 dark:text-red-300">
            <Siren className="h-4 w-4 shrink-0 text-crimson" aria-hidden="true" />
            Lost money in the last 24 hours?
          </p>
          <p className="text-sm text-navy-700 dark:text-navy-300">
            Call your bank on the number printed on your card first, then report it.
          </p>
          <Link
            href="/report-a-scam"
            className="ml-auto shrink-0 text-sm font-semibold text-crimson underline underline-offset-4 hover:no-underline"
          >
            Emergency reporting steps →
          </Link>
        </div>
      </section>

      {/* Interactive entry point — first step of the Scam Risk Checker */}
      <ScamCheckerEntry />

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading
          eyebrow="Scam categories"
          title="Four hubs covering how consumer fraud actually reaches you"
          description="Start with the category that matches how you were contacted — a text, a card, a call, or a listing."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = categoryIcons[category.icon];
            const count = getArticlesByCategory(category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/scams/${category.slug}`}
                className="group relative flex flex-col rounded-xl border border-navy-200 bg-white p-5 transition hover:border-emerald hover:shadow-md dark:border-navy-700 dark:bg-navy-800/40 dark:hover:border-emerald"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy-900 dark:text-white">
                  {category.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600 dark:text-navy-400">
                  {category.description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {count} {count === 1 ? 'guide' : 'guides'} →
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured + latest */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <SectionHeading
          eyebrow="Latest guides"
          title="Recently published and updated"
          description="Scam tactics change quickly. Each guide carries a visible last-reviewed date so you know how current it is."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {featured ? <ArticleCard article={featured} featured /> : null}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {latest.slice(0, 4).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <InFeedAd id="home-sidebar-1" />
            <div className="rounded-xl border border-navy-200 bg-navy-50/60 p-5 dark:border-navy-700 dark:bg-navy-800/40">
              <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                Not sure if it&apos;s a scam?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-400">
                Answer a few questions about the message, call or email you received. Our
                free checker scores the risk and tells you exactly what to do next.
              </p>
              <Link
                href="/tool/scam-risk-checker"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800 dark:bg-emerald dark:hover:bg-emerald-600"
              >
                Open the Scam Risk Checker
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <InFeedAd id="home-sidebar-2" />
          </aside>
        </div>

        {latest.length > 4 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latest.slice(4).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : null}
      </section>

      {/* Universal rules */}
      <section className="border-y border-navy-100 bg-navy-50/60 dark:border-navy-800 dark:bg-navy-950/50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow="The short version"
            title="Six rules that stop almost every scam in this library"
            description="If you remember nothing else from this site, remember these."
          />
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Never act on an inbound contact',
                text: 'Hang up and call back on a number you looked up yourself. This single habit defeats bank impersonation, voice cloning and tech support scams.',
              },
              {
                title: 'Codes are never spoken aloud',
                text: 'A one-time passcode is for you to type. Anyone asking you to read one back is authorizing something on your account right now.',
              },
              {
                title: 'There is no safe account',
                text: 'No bank asks you to move money to protect it. If an account is compromised, they freeze it where it is.',
              },
              {
                title: 'Available is not cleared',
                text: 'A deposited check can be reversed weeks later, and you owe the full amount. Never forward money against a check from a stranger.',
              },
              {
                title: 'Match the rail to the trust',
                text: 'Credit cards for strangers, P2P apps only for people you could call by name. Zelle and crypto behave like cash.',
              },
              {
                title: 'Secrecy means fraud',
                text: 'No genuine emergency or legal process requires you to hide it from your family. That request exists to stop you verifying.',
              },
            ].map((rule, i) => (
              <li
                key={rule.title}
                className="rounded-xl border border-navy-200 bg-white p-5 dark:border-navy-700 dark:bg-navy-800/40"
              >
                <span className="font-mono text-xs font-bold text-emerald">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display font-semibold text-navy-900 dark:text-white">
                  {rule.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600 dark:text-navy-400">
                  {rule.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <ReportingButtons
          title="Report a scam to the right agency"
          text="Reporting rarely recovers money on its own, but it drives enforcement and carrier-level blocking. Contact your bank first."
          agencies={['ftc', 'ic3', 'cfpb', 'identityTheft']}
        />
        <ContentRecommendationAd id="home-native" />
      </section>
    </>
  );
}
