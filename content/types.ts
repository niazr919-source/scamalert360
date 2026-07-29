import type { AgencyKey } from '@/lib/site';

export type CategorySlug = 'banking' | 'credit-cards' | 'ai-cyber' | 'everyday';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'table'; caption?: string; headers: string[]; rows: string[][] }
  | {
      type: 'alert';
      variant: 'danger' | 'warning' | 'info' | 'success';
      title: string;
      text: string;
    }
  | { type: 'checklist'; title: string; intro?: string; items: string[] }
  | {
      type: 'timeline';
      title: string;
      intro?: string;
      steps: { window: string; title: string; text: string }[];
    }
  | { type: 'quote'; text: string; source: string; url?: string }
  | { type: 'report'; title?: string; text?: string; agencies: AgencyKey[] }
  | { type: 'keyStat'; value: string; label: string; source: string; url?: string };

export type FaqItem = { question: string; answer: string };

export type Source = { label: string; publisher: string; url: string };

export type HowToStep = { name: string; text: string };

export interface Article {
  slug: string;
  category: CategorySlug;
  title: string;
  /** Shorter title used in cards and breadcrumbs. */
  shortTitle?: string;
  /** Meta description — 150-160 chars. */
  description: string;
  /** Primary + secondary keywords targeted by this guide. */
  keywords: string[];
  published: string;
  updated: string;
  authorId: string;
  /** Only set when a real, named reviewer actually reviewed the piece. */
  reviewerId?: string;
  readingMinutes: number;
  /** One-sentence summary shown in the "Quick answer" box above the fold. */
  quickAnswer: string;
  /** 3-5 scannable takeaways rendered under the quick answer. */
  keyTakeaways: string[];
  body: Block[];
  /** Rendered as a HowTo schema + a visible numbered recovery section. */
  howTo?: { name: string; description: string; totalTime: string; steps: HowToStep[] };
  faq: FaqItem[];
  sources: Source[];
  related: string[];
}

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  title: string;
  description: string;
  intro: string;
  keywords: string[];
  /** Tailwind accent classes for the category chip and hero. */
  accent: string;
  icon: 'landmark' | 'credit-card' | 'bot' | 'shopping-cart';
}
