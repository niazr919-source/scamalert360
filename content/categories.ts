import type { Category, CategorySlug } from './types';

export const categories: Category[] = [
  {
    slug: 'banking',
    name: 'Banking & Wire Frauds',
    shortName: 'Banking & Wire',
    title: 'Banking & Wire Fraud Scams: Alerts, Recalls and Recovery',
    description:
      'How bank impersonation, fake fraud alerts and wire transfer scams work — and the exact steps and deadlines for getting your money recalled or refunded.',
    intro:
      'Bank-impersonation fraud is the most damaging category of consumer scam because it moves real money out of a real account, usually in under an hour. These guides explain how the lure works, what the caller is actually trying to make you do, and the recall and dispute procedures that still work after the transfer leaves.',
    keywords: [
      'bank fraud alert text',
      'wire transfer scam recovery',
      'fake bank call scam',
      'account takeover fraud',
      'bank impersonation scam',
    ],
    accent: 'from-sky-500/15 to-emerald/10 text-sky-700 dark:text-sky-300',
    icon: 'landmark',
  },
  {
    slug: 'credit-cards',
    name: 'Credit Card & Payment Frauds',
    shortName: 'Cards & Payments',
    title: 'Credit Card & Payment App Fraud: Skimming, P2P Traps and Chargebacks',
    description:
      'Card skimming, contactless fraud and peer-to-peer payment scams on Zelle, Venmo and Cash App — with the dispute rights that actually apply to each.',
    intro:
      'Not all payments are equally reversible. A credit card charge, a debit card charge and a Zelle transfer give you three completely different sets of rights. These guides cover the scams that target each rail, and explain which protection you can actually invoke when something goes wrong.',
    keywords: [
      'zelle scam refund',
      'venmo fake transfer',
      'credit card skimming',
      'p2p payment fraud',
      'chargeback rights',
    ],
    accent: 'from-violet-500/15 to-emerald/10 text-violet-700 dark:text-violet-300',
    icon: 'credit-card',
  },
  {
    slug: 'ai-cyber',
    name: 'AI & Digital Cyber Scams',
    shortName: 'AI & Cyber',
    title: 'AI & Cyber Scams: Voice Cloning, Deepfakes and QR Code Phishing',
    description:
      'Generative AI has made impersonation cheap and convincing. Learn how voice cloning, deepfake video and malicious QR codes are used against ordinary consumers.',
    intro:
      'Three seconds of audio is now enough to clone a voice well enough to fool a parent on a bad phone line. These guides cover the AI-enabled and technically-enabled scams — cloned voices, deepfake video calls, malicious QR codes and credential phishing — and the low-tech verification habits that defeat all of them.',
    keywords: [
      'AI voice cloning scam',
      'deepfake scam call',
      'QR code scam',
      'quishing',
      'phishing protection',
    ],
    accent: 'from-emerald/20 to-teal-500/10 text-emerald-700 dark:text-emerald-300',
    icon: 'bot',
  },
  {
    slug: 'everyday',
    name: 'Non-Banking & E-Commerce Scams',
    shortName: 'Everyday Scams',
    title: 'Everyday Consumer Scams: Jobs, Marketplaces and Online Shopping',
    description:
      'Fake remote jobs, overpayment check scams, marketplace fraud and bogus online stores — the scams that reach people through ordinary daily activity.',
    intro:
      'The scams in this category do not need access to your bank at all. They convince you to hand money over voluntarily — through a fake job, a fake listing, a fake store or a fake refund. These guides cover the patterns that repeat across all of them.',
    keywords: [
      'remote job scam',
      'fake check scam',
      'online shopping scam',
      'marketplace fraud',
      'employment scam red flags',
    ],
    accent: 'from-amber-500/15 to-crimson/10 text-amber-700 dark:text-amber-300',
    icon: 'shopping-cart',
  },
];

export const categoryMap: Record<CategorySlug, Category> = categories.reduce(
  (acc, category) => ({ ...acc, [category.slug]: category }),
  {} as Record<CategorySlug, Category>,
);

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
