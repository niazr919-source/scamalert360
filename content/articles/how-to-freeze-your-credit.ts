import type { Article } from '../types';

export const article: Article = {
  slug: 'how-to-freeze-your-credit',
  category: 'banking',
  title: 'How to Freeze Your Credit (Free) at All Three Bureaus: Step by Step',
  shortTitle: 'How to Freeze Your Credit',
  description:
    'A credit freeze is free and reversible — the strongest way to stop identity thieves opening accounts in your name. Here is how to freeze all three bureaus.',
  keywords: [
    'how to freeze your credit',
    'credit freeze free',
    'freeze credit all three bureaus',
    'credit freeze vs fraud alert',
    'equifax experian transunion freeze',
    'security freeze identity theft',
  ],
  published: '2026-05-20',
  updated: '2026-07-25',
  authorId: 'editorial-team',
  readingMinutes: 10,
  quickAnswer:
    'A credit freeze blocks new creditors from seeing your credit report, which stops thieves opening loans or cards in your name. It is free by federal law, does not affect your credit score, and you must set it separately at all three bureaus — Equifax, Experian and TransUnion. You temporarily lift it when you yourself apply for credit.',
  keyTakeaways: [
    'A freeze is free, permanent until you lift it, and does not affect your credit score.',
    'You must freeze at all three bureaus separately — one is not enough.',
    'It blocks new-account fraud specifically; it does not stop charges on existing cards.',
    'Lifting it for your own applications takes minutes online with a PIN or login.',
  ],
  body: [
    {
      type: 'p',
      text: 'Almost every guide on this site, and almost every official identity-theft resource, eventually gives the same instruction: freeze your credit. It is the most effective single action an individual can take against identity theft, and yet most people have never done it, usually because they assume it is complicated, costly, or damaging to their credit. It is none of those things. This guide walks through exactly what a freeze does, what it does not do, and how to set one up at all three bureaus in about twenty minutes.',
    },
    {
      type: 'p',
      text: 'The reason a freeze is so powerful is that it targets the most profitable thing a criminal can do with your stolen personal information: open brand-new accounts in your name. A new credit card, a personal loan, a phone contract, a car loan — all of these require the lender to check your credit report first. A freeze makes that report invisible to new creditors, so the application is declined before it starts.',
    },
    {
      type: 'keyStat',
      value: 'Free by law',
      label: 'Since 2018, federal law requires all three nationwide credit bureaus to let you freeze and unfreeze your credit at no charge',
      source: 'FTC — credit freeze guidance',
      url: 'https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts',
    },
    { type: 'h2', text: 'What a credit freeze actually does' },
    {
      type: 'p',
      text: 'A credit freeze — sometimes called a security freeze — restricts access to your credit report. When a freeze is in place, a lender who tries to pull your report to evaluate a new application cannot see it, so they will not approve the account. Because opening credit in someone else\'s name is the goal of most identity theft, cutting off that report access blocks the crime at its most damaging point.',
    },
    {
      type: 'p',
      text: 'Crucially, a freeze does not touch your existing accounts. Your current cards, loans and their scores are unaffected, your existing lenders can still see your account, and companies you already do business with continue to function normally. It also does not lower your credit score — the freeze is invisible to scoring and simply gates new inquiries.',
    },
    {
      type: 'table',
      caption: 'Credit freeze vs. fraud alert vs. credit lock',
      headers: ['', 'Credit freeze', 'Fraud alert', 'Credit lock'],
      rows: [
        [
          'Cost',
          'Free, by law',
          'Free',
          'Often free, sometimes a paid product',
        ],
        [
          'What it does',
          'Blocks access to your report entirely',
          'Asks lenders to verify identity first',
          'Similar to a freeze, via an app',
        ],
        [
          'Strength',
          'Strongest — a hard block',
          'Weaker — a request, not a block',
          'Similar to freeze; terms set by the bureau',
        ],
        [
          'Duration',
          'Until you lift it',
          'One year (renewable), or 7 years for victims',
          'Until you unlock it',
        ],
        [
          'Legal backing',
          'Federal law',
          'Federal law',
          'Contract terms, not law',
        ],
        [
          'Set up at',
          'All three bureaus separately',
          'One bureau (it notifies the others)',
          'Each bureau’s app',
        ],
      ],
    },
    {
      type: 'alert',
      variant: 'info',
      title: 'Freeze vs. lock: prefer the freeze',
      text: 'A credit lock does much the same job through a bureau’s app and can be more convenient to toggle, but it is governed by that company’s terms of service rather than federal law, and is sometimes bundled with a paid subscription. The freeze is a legal right, free, and enforceable. Unless you specifically want the app convenience, the freeze is the better default.',
    },
    { type: 'h2', text: 'What a freeze does not protect against' },
    {
      type: 'p',
      text: 'A freeze is powerful but specific, and it is worth being clear about its limits so you do not develop a false sense of total protection.',
    },
    {
      type: 'list',
      items: [
        'It does not stop fraud on your existing cards or accounts — those need transaction alerts and prompt disputes, not a freeze.',
        'It does not stop tax-refund fraud filed under your Social Security number — an IRS Identity Protection PIN handles that.',
        'It does not stop someone misusing an account you already have, or medical or government-benefits fraud.',
        'It does not remove your data from breaches that already happened — it just makes that data far less useful for opening new credit.',
        'It does not block "soft" inquiries like your own credit checks, existing-creditor reviews, or most pre-approved offers.',
      ],
    },
    {
      type: 'p',
      text: 'In short, a freeze is the definitive answer to new-account identity theft, and it pairs well with two companion habits: transaction alerts on your existing cards, and an IRS Identity Protection PIN if you want to close the tax-fraud gap.',
    },
    { type: 'h2', text: 'How to freeze your credit at all three bureaus' },
    {
      type: 'p',
      text: 'You must place a freeze separately at each of the three nationwide bureaus, because lenders may pull from any one of them. Freezing only one leaves the other two open. Each takes a few minutes; set aside twenty minutes to do all three at once. You will need to verify your identity with personal details, and you will either create an account or receive a PIN used to lift the freeze later.',
    },
    {
      type: 'timeline',
      title: 'Setting up the three freezes',
      intro: 'Do all three in one sitting. Store every PIN and login in your password manager.',
      steps: [
        {
          window: 'Equifax',
          title: 'Freeze at Equifax',
          text: 'Go to the official Equifax freeze page (search "Equifax credit freeze" and use the equifax.com result, or type the address). Create or log in to a myEquifax account and place the security freeze. Save the login credentials.',
        },
        {
          window: 'Experian',
          title: 'Freeze at Experian',
          text: 'Go to the official Experian freeze page at experian.com. Complete identity verification and place the freeze. Experian issues a PIN — record it exactly; you will need it to lift the freeze.',
        },
        {
          window: 'TransUnion',
          title: 'Freeze at TransUnion',
          text: 'Go to the official TransUnion freeze page at transunion.com. Create an account or place the freeze and save the credentials or PIN.',
        },
        {
          window: 'Everyone in the household',
          title: 'Freeze for your spouse and dependents',
          text: 'A freeze only protects the person it is set for. Set one up for your spouse or partner too, and for minor children — child identity theft often goes unnoticed for years. Each bureau has a process for freezing a minor\'s file.',
        },
        {
          window: 'Store the details',
          title: 'Save every PIN and login',
          text: 'Put all three logins and PINs in a password manager. Losing a PIN makes lifting the freeze more cumbersome (though recoverable). This is the single most common friction point people hit later.',
        },
      ],
    },
    {
      type: 'alert',
      variant: 'warning',
      title: 'Use the bureaus’ real sites — never a link from a message',
      text: 'Search results and, especially, links sent to you by text or email can lead to lookalike pages that harvest the very personal data a freeze is meant to protect. Type the bureau addresses yourself — equifax.com, experian.com, transunion.com — or reach them through the FTC\'s official identity-theft resources. Never set up a "freeze" through a link someone sent you.',
    },
    { type: 'h2', text: 'Lifting the freeze when you need credit' },
    {
      type: 'p',
      text: 'A freeze is not a set-and-forget wall that locks you out of your own financial life. When you apply for a credit card, a loan, a mortgage, a new phone plan, or anything that requires a credit check, you temporarily lift ("thaw") the freeze — either entirely, or just at the one bureau the lender uses if you know which it is.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Ask the lender which bureau they pull from, if they know — then you only need to lift that one.',
        'Log in to that bureau (or use your PIN) and choose a temporary lift, setting a date range or a specific number of days.',
        'Complete your application while the freeze is lifted.',
        'The freeze re-applies automatically after your chosen window, or you can re-freeze manually right away.',
      ],
    },
    {
      type: 'p',
      text: 'Online lifts are typically instant or near-instant, which is why keeping your logins handy matters. The minor inconvenience of thawing a few times a year is a small price for closing off the most damaging category of identity theft the rest of the time.',
    },
    { type: 'h2', text: 'When to freeze — and pairing it with a fraud alert' },
    {
      type: 'p',
      text: 'The honest answer to "when should I freeze" is: now, for most people, whether or not anything has gone wrong. Because a freeze is free, reversible, and score-neutral, the case for waiting is weak. It is especially worth doing immediately if your Social Security number may have been exposed — after a data breach notice, a lost wallet, a phishing incident, or any of the scams covered elsewhere on this site.',
    },
    {
      type: 'p',
      text: 'If you want an intermediate step, a fraud alert is the lighter-touch option: it is free, lasts a year, and you only set it at one bureau (which notifies the other two). It asks lenders to take extra steps to verify your identity, but it is a request rather than a hard block. Identity-theft victims can place an extended seven-year alert. For maximum protection, a freeze is the stronger choice; a fraud alert is a reasonable minimum if you are not ready to freeze.',
    },
    {
      type: 'report',
      title: 'Related official resources',
      text: 'If you are freezing because of suspected identity theft, start a recovery plan and consider an IRS Identity Protection PIN.',
      agencies: ['identityTheft', 'ftc', 'cfpb'],
    },
    {
      type: 'p',
      text: 'Freezing your credit is one of the rare pieces of security advice that is free, permanent until you decide otherwise, carries no downside to your score, and defeats an entire category of crime. The only real cost is twenty minutes and the mild future friction of thawing when you apply for credit yourself. Set it up for everyone in your household, store the PINs where you will find them, and you have closed the door that identity thieves most want to walk through.',
    },
  ],
  howTo: {
    name: 'How to freeze your credit at all three bureaus',
    description:
      'Step-by-step instructions to place a free security freeze at Equifax, Experian and TransUnion.',
    totalTime: 'PT20M',
    steps: [
      {
        name: 'Freeze at Equifax',
        text: 'Go to equifax.com, create or log in to a myEquifax account, and place the security freeze. Save the login.',
      },
      {
        name: 'Freeze at Experian',
        text: 'Go to experian.com, verify your identity, and place the freeze. Record the PIN it issues.',
      },
      {
        name: 'Freeze at TransUnion',
        text: 'Go to transunion.com, create an account or place the freeze, and save the credentials.',
      },
      {
        name: 'Freeze household members',
        text: 'Repeat for your spouse or partner, and set up freezes for minor children, whose files are often abused unnoticed.',
      },
      {
        name: 'Store every PIN and login',
        text: 'Save all three sets of credentials in a password manager so you can lift the freeze easily later.',
      },
      {
        name: 'Lift temporarily when you apply for credit',
        text: 'Before a genuine application, log in and thaw the freeze for a set window or at the specific bureau the lender uses; it re-applies automatically.',
      },
    ],
  },
  faq: [
    {
      question: 'Does freezing my credit hurt my credit score?',
      answer:
        'No. A credit freeze is completely invisible to your credit score and does not affect it in either direction. It does not close accounts, change balances, or register as a negative mark. All it does is gate access to your report for new-credit inquiries. Your existing accounts, their history, and your score continue exactly as before.',
    },
    {
      question: 'Is a credit freeze really free?',
      answer:
        'Yes. Since a 2018 federal law, all three nationwide credit bureaus are required to let you place and lift a security freeze at no cost, for yourself and for your dependent children. Be wary of any product that charges a monthly fee for "credit protection" and implies the freeze itself costs money — the freeze is a free legal right. Paid monitoring services are a separate, optional thing.',
    },
    {
      question: 'Do I really have to freeze at all three bureaus?',
      answer:
        'Yes, and this is the step people most often get wrong. A lender may pull your report from any one of Equifax, Experian or TransUnion, so freezing only one leaves the other two open for a thief to exploit. Set the freeze separately at all three. It takes a few minutes each; do them in one sitting so it is done properly.',
    },
    {
      question: 'What happens when I need to apply for a loan or credit card?',
      answer:
        'You temporarily lift the freeze, which is quick and free. If you know which bureau the lender uses, you can thaw just that one; otherwise lift all three for a short window. You set a date range or number of days, complete your application, and the freeze re-applies automatically afterward. Online lifts are usually instant, which is why keeping your logins and PINs handy is worth doing.',
    },
    {
      question: 'Should I freeze my credit if nothing has happened to me?',
      answer:
        'For most people, yes. Because a freeze is free, reversible, and has no effect on your score, there is little reason to wait for something to go wrong. It is especially worth doing right away if your personal information may have been exposed — after a breach notice, a phishing incident, a lost wallet, or any scam that captured your Social Security number. Prevention here costs almost nothing.',
    },
    {
      question: 'What is the difference between a freeze and a fraud alert?',
      answer:
        'A freeze is a hard block on access to your credit report and stays until you lift it; you set it at all three bureaus. A fraud alert is a lighter measure — it asks lenders to take extra steps to verify your identity, lasts one year (seven for identity-theft victims), and you place it at just one bureau, which notifies the others. The freeze is stronger; the fraud alert is a reasonable minimum if you are not ready to freeze.',
    },
  ],
  sources: [
    {
      label: 'What To Know About Credit Freezes and Fraud Alerts',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts',
    },
    {
      label: 'Identity theft recovery plans',
      publisher: 'Federal Trade Commission',
      url: 'https://www.identitytheft.gov/',
    },
    {
      label: 'Credit freezes and your rights',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/',
    },
  ],
  related: [
    'irs-social-security-imposter-calls',
    'sextortion-email-scam',
    'bank-fraud-alert-text-scam',
  ],
};
