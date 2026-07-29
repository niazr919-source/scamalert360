import { Fragment } from 'react';
import { InArticleAd } from './ads';
import { ContentBlock } from './content-blocks';
import type { Block } from '@/content/types';

const PARAGRAPHS_PER_AD = 3;

/**
 * Renders article blocks and injects an in-article ad after every 3rd
 * paragraph.
 *
 * Two guards keep the placement clean:
 *  - never inject after the final block, so an ad can't be the last thing
 *    before the FAQ;
 *  - never inject directly before a heading, which would orphan the heading
 *    from the paragraph it introduces.
 */
export function ArticleBody({ blocks, adId }: { blocks: Block[]; adId: string }) {
  let paragraphCount = 0;
  let adCount = 0;

  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'p') paragraphCount += 1;

        const next = blocks[i + 1];
        const isLast = i === blocks.length - 1;
        const nextIsHeading = next?.type === 'h2' || next?.type === 'h3';
        const dueForAd =
          block.type === 'p' && paragraphCount > 0 && paragraphCount % PARAGRAPHS_PER_AD === 0;

        const showAd = dueForAd && !isLast && !nextIsHeading;
        if (showAd) adCount += 1;

        return (
          <Fragment key={i}>
            <ContentBlock block={block} />
            {showAd ? <InArticleAd id={`${adId}-inarticle-${adCount}`} /> : null}
          </Fragment>
        );
      })}
    </>
  );
}
