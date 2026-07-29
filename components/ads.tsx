import { cn } from '@/lib/utils';

/**
 * Ad placeholders for AdSense / Ezoic / Mediavine.
 *
 * Every slot reserves its height with an explicit min-height *before* any
 * script loads, so a slow ad fill can never push content down. That reserved
 * box is the difference between a good and a failing CLS score, which is the
 * most common reason ad-supported sites lose Core Web Vitals ranking.
 *
 * To go live, drop the network's <ins> tag (or Ezoic/Mediavine placeholder
 * div) inside the `children` of each slot. The dashed "Advertisement" label
 * is styled via .ad-slot in globals.css and disappears once real markup is
 * present.
 */

type SlotProps = {
  /** Ad unit id passed to your network, e.g. data-ad-slot. */
  id: string;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Sticky top leaderboard. 320x50 on mobile, 728x90 from md up.
 * Height is reserved at both breakpoints via min-height.
 */
export function HeaderBannerAd({ id, className, children }: SlotProps) {
  return (
    <div
      className={cn(
        'sticky top-16 z-30 w-full border-b border-navy-100 bg-white/90 backdrop-blur dark:border-navy-800 dark:bg-navy-900/90',
        className,
      )}
      aria-label="Advertisement"
    >
      <div className="mx-auto max-w-6xl px-4 py-2">
        <div
          className="ad-slot mx-auto min-h-[50px] w-full max-w-[320px] md:min-h-[90px] md:max-w-[728px]"
          data-ad-slot={id}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/** In-article rectangle, injected automatically after every 3rd paragraph. */
export function InArticleAd({ id, className, children }: SlotProps) {
  return (
    <div className={cn('my-8 w-full', className)} aria-label="Advertisement">
      <div
        className="ad-slot mx-auto min-h-[250px] w-full max-w-[336px] sm:max-w-[468px]"
        data-ad-slot={id}
      >
        {children}
      </div>
    </div>
  );
}

/** Desktop-only 300x600 half page. Sticks alongside long article bodies. */
export function SidebarAd({ id, className, children }: SlotProps) {
  return (
    <div className={cn('sticky top-32 hidden lg:block', className)} aria-label="Advertisement">
      <div className="ad-slot min-h-[600px] w-[300px]" data-ad-slot={id}>
        {children}
      </div>
    </div>
  );
}

/** Native/recommendation grid below article content. */
export function ContentRecommendationAd({ id, className, children }: SlotProps) {
  return (
    <section
      className={cn('my-10 w-full', className)}
      aria-label="Sponsored recommendations"
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-400 dark:text-navy-500">
        Sponsored content
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="ad-slot min-h-[220px] w-full"
            data-ad-slot={`${id}-${i}`}
          >
            {i === 0 ? children : null}
          </div>
        ))}
      </div>
    </section>
  );
}

/** Compact in-feed unit for category listing pages. */
export function InFeedAd({ id, className, children }: SlotProps) {
  return (
    <div className={cn('w-full', className)} aria-label="Advertisement">
      <div className="ad-slot min-h-[250px] w-full" data-ad-slot={id}>
        {children}
      </div>
    </div>
  );
}
