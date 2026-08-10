/**
 * Authorship model.
 *
 * IMPORTANT — read before adding anyone here.
 *
 * This site publishes YMYL (Your Money or Your Life) financial-safety content.
 * Search quality raters and ad-network reviewers check bylines against real,
 * findable people, and structured data that asserts a credential is a
 * machine-readable factual claim. Inventing a contributor, or attaching a
 * certification nobody holds, is materially worse than publishing under an
 * honest editorial byline — it converts a soft E-E-A-T weakness into a
 * verifiable false statement.
 *
 * So the site ships with a single honest identity: the editorial team. Its
 * authority claim is about *process* (primary sourcing, documented
 * fact-checking, published corrections policy), which is true and provable,
 * rather than about credentials.
 *
 * TO ADD A REAL PERSON — including yourself:
 *   1. Add an entry below with their real name and role.
 *   2. Set `profileUrl` to a real, public profile (LinkedIn, personal site,
 *      author page elsewhere). This is the link a reviewer follows.
 *   3. Only set `credentials` if the person actually holds it and it can be
 *      verified. Leave it undefined otherwise — an omitted credential costs
 *      nothing, a false one is a rejection risk.
 *   4. Point an article's `authorId` at the new id.
 */
export interface Contributor {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  /** Initials for the avatar chip — keeps the site image-free and fast. */
  initials: string;
  /** Only for credentials that are real and verifiable. Usually omitted. */
  credentials?: string;
  /** A real public profile. Reviewers follow this to confirm the byline. */
  profileUrl?: string;
}

export const people: Record<string, Contributor> = {
  'editorial-team': {
    id: 'editorial-team',
    name: 'ScamAlert360 Editorial Team',
    role: 'Fraud research and consumer protection reporting',
    bio: 'Our guides are researched and written in-house, then checked line by line against primary sources — the Federal Trade Commission, the FBI’s Internet Crime Complaint Center, the Consumer Financial Protection Bureau, and the federal regulations themselves. We do not cite other scam blogs, we do not take affiliate commissions, and we publish the odds of recovery honestly, including when they are poor.',
    expertise: [
      'Bank and payment fraud',
      'Phishing, smishing and quishing',
      'AI-enabled impersonation',
      'Investment and marketplace fraud',
      'Identity theft recovery',
    ],
    initials: 'SA',
  },

  /*
   * Example of a real contributor entry. Uncomment and replace with your own
   * details — a named human owner is the single strongest E-E-A-T signal you
   * can add to this site, and costs nothing if the person is you.
   *
   * 'your-id': {
   *   id: 'your-id',
   *   name: 'Your Real Name',
   *   role: 'Founder and Editor',
   *   bio: 'Two or three sentences on why you cover this subject and what you did before.',
   *   expertise: ['Consumer fraud', 'Payment security'],
   *   initials: 'YN',
   *   profileUrl: 'https://www.linkedin.com/in/your-profile',
   * },
   */
};

export const DEFAULT_AUTHOR_ID = 'editorial-team';

export function getPerson(id: string): Contributor {
  return people[id] ?? people[DEFAULT_AUTHOR_ID];
}
