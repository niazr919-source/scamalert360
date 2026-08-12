export const site = {
  name: 'ScamAlert360',
  shortName: 'ScamAlert360',
  tagline: 'Recognize the scam. Recover the money. Report it properly.',
  description:
    'Independent, primary-sourced guides to bank scams, phishing, AI voice cloning and investment fraud — plus a free interactive Scam Risk Checker.',
  url: 'https://scamalert360.com',
  locale: 'en_US',
  email: 'editor@scamalert360.com',
  reportEmail: 'report@scamalert360.com',
  founded: '2026',
  publisher: 'ScamAlert360',
  twitter: '@scamalert360',
  /**
   * Contact form endpoint. The host runs a real Next.js server, so this is
   * the app's own API route rather than a static-hosting workaround.
   */
  contactEndpoint: '/api/contact',
} as const;

export type NavLink = { href: string; label: string };

export const primaryNav: NavLink[] = [
  { href: '/scams/banking', label: 'Banking & Wire' },
  { href: '/scams/credit-cards', label: 'Cards & Payments' },
  { href: '/scams/ai-cyber', label: 'AI & Cyber' },
  { href: '/scams/everyday', label: 'Everyday Scams' },
  { href: '/tool/scam-risk-checker', label: 'Scam Risk Checker' },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Scam Categories',
    links: [
      { href: '/scams/banking', label: 'Banking & Wire Frauds' },
      { href: '/scams/credit-cards', label: 'Credit Card & Payment Frauds' },
      { href: '/scams/ai-cyber', label: 'AI & Digital Cyber Scams' },
      { href: '/scams/everyday', label: 'Non-Banking & E-Commerce' },
      { href: '/scams', label: 'All Guides' },
    ],
  },
  {
    title: 'Free Tools',
    links: [
      { href: '/tool/scam-risk-checker', label: 'Scam Risk Checker' },
      { href: '/report-a-scam', label: 'Where to Report a Scam' },
    ],
  },
  {
    title: 'About ScamAlert360',
    links: [
      { href: '/about-us', label: 'About Us' },
      { href: '/editorial-policy', label: 'Editorial Policy' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
    ],
  },
];

/**
 * Official consumer-protection agencies referenced throughout the site.
 * Every reporting button on the site links to one of these.
 */
export const agencies = {
  ftc: {
    name: 'FTC — ReportFraud.ftc.gov',
    url: 'https://reportfraud.ftc.gov/',
    blurb: 'The US Federal Trade Commission’s official fraud reporting portal.',
  },
  ic3: {
    name: 'FBI IC3 — Internet Crime Complaint Center',
    url: 'https://www.ic3.gov/',
    blurb: 'Report internet-enabled crime, wire fraud and cyber-enabled theft to the FBI.',
  },
  cfpb: {
    name: 'CFPB — Consumer Financial Protection Bureau',
    url: 'https://www.consumerfinance.gov/complaint/',
    blurb: 'File a complaint against a bank, card issuer or payment app that refuses to help.',
  },
  identityTheft: {
    name: 'IdentityTheft.gov',
    url: 'https://www.identitytheft.gov/',
    blurb: 'Get a personalized identity theft recovery plan and affidavit.',
  },
  ssaOig: {
    name: 'SSA Office of the Inspector General',
    url: 'https://oig.ssa.gov/report/',
    blurb: 'Report Social Security impersonation scams.',
  },
  spam7726: {
    name: 'Forward suspicious texts to 7726 (SPAM)',
    url: 'https://www.ftc.gov/news-events/topics/identity-theft/phishing-scams',
    blurb: 'Free with all major US carriers — feeds carrier-level blocklists.',
  },
} as const;

export type AgencyKey = keyof typeof agencies;
