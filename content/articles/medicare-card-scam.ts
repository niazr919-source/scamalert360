import type { Article } from '../types';

export const article: Article = {
  slug: 'medicare-card-scam',
  category: 'everyday',
  title: 'Medicare Card Scam: Fake Calls About New Cards and Free Braces',
  shortTitle: 'Medicare Card Scam',
  description:
    'A caller says you need a new Medicare card, or offers free braces or genetic testing, and asks for your Medicare number. Learn how these scams steal your benefits and identity.',
  keywords: [
    'medicare card scam',
    'medicare phone call scam',
    'new medicare card scam',
    'medicare number stolen',
    'free medicare brace scam',
    'medicare genetic testing scam',
  ],
  published: '2026-06-03',
  updated: '2026-07-25',
  authorId: 'editorial-team',
  readingMinutes: 8,
  quickAnswer:
    'Scammers call posing as Medicare, offering a "new card", free braces, genetic testing or other equipment, and ask for your Medicare number to process it. Medicare does not call beneficiaries out of the blue asking for that number. Sharing it lets fraudsters bill Medicare for services you never received and steal your identity. Guard your Medicare number like a credit card.',
  keyTakeaways: [
    'Medicare almost never calls you unsolicited, and never asks for your Medicare number by phone.',
    'Your Medicare Number is as sensitive as a bank card — offers of "free" equipment are bait to obtain it.',
    'Fraudsters use it to bill Medicare for services you never got, which can affect your real coverage.',
    'There is no fee and no new card required "to keep your benefits active".',
  ],
  body: [
    {
      type: 'p',
      text: 'The caller is friendly and helpful, and the offer sounds like a benefit you have earned. Medicare is issuing new cards, they say, and they just need to confirm your Medicare number to send yours. Or there is a program covering a free back or knee brace at no cost to you. Or you qualify for free genetic testing to screen for cancer — all Medicare needs is your number to bill it. In some versions, they warn that your benefits will lapse unless you "reactivate" your card today.',
    },
    {
      type: 'p',
      text: 'Every one of these is a script with a single goal: to get you to read out your Medicare Number. That number is the key to your health benefits, and in the wrong hands it is used to bill Medicare for equipment, tests, and services you never received — a form of fraud that costs the program billions each year and can quietly damage your own coverage in the process.',
    },
    {
      type: 'p',
      text: 'Because these calls target older adults and are wrapped in the language of legitimate benefits, they can be genuinely hard to distinguish from a real Medicare communication. This guide explains how Medicare actually contacts you, why your number matters so much, and what to do if you have already shared it.',
    },
    {
      type: 'keyStat',
      value: 'Guard it like a bank card',
      label: 'Your Medicare Number gives access to your health benefits; official guidance is to treat it as carefully as a credit card or Social Security number',
      source: 'Medicare.gov — protecting yourself from fraud',
      url: 'https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse',
    },
    { type: 'h2', text: 'How Medicare actually contacts you' },
    {
      type: 'p',
      text: 'The foundation for spotting these scams is knowing that Medicare does not cold-call beneficiaries to ask for personal information. Official communication comes primarily by mail. Medicare will not phone you out of the blue to sell products, to offer free equipment, or to ask you to confirm or provide your Medicare Number — they already have it on file.',
    },
    {
      type: 'p',
      text: 'There was a genuine transition some years ago when Medicare replaced Social-Security-based card numbers with new randomized Medicare Numbers, mailed automatically to every beneficiary at no cost and with no action required. Scammers have exploited the memory of that change ever since, calling to say a "new card" is ready and that they need your number or a fee to send it. There is no such fee and no such call — new and replacement cards are free and requested by you through official channels.',
    },
    {
      type: 'table',
      caption: 'Real Medicare vs. the scam call',
      headers: ['Signal', 'Real Medicare', 'Scam caller'],
      rows: [
        [
          'How they contact you',
          'Mostly by mail; you contact them',
          'Unsolicited phone calls, texts, door knocks',
        ],
        [
          'Asking for your Medicare Number',
          'Never by unsolicited call — they have it',
          'The entire goal of the call',
        ],
        [
          '"Free" braces, tests, equipment',
          'Not marketed to you by phone',
          'Common bait to obtain your number',
        ],
        [
          'Fees to keep benefits active',
          'No such thing',
          '"Reactivation" or "new card" fees',
        ],
        [
          'Pressure and urgency',
          'None',
          '"Today only", "benefits will lapse"',
        ],
        [
          'Caller ID',
          'Not a reliable signal',
          'Often spoofed to look official',
        ],
      ],
    },
    {
      type: 'alert',
      variant: 'danger',
      title: 'Your Medicare Number is the target — protect it accordingly',
      text: 'Treat your Medicare Number exactly as you would a credit card number. Do not give it to anyone who calls, texts, or emails you unsolicited, no matter how helpful or official they sound, and no matter what free product they offer. The only people who need it are providers you have chosen to see and Medicare itself when you have contacted them. An unsolicited request for it is fraud.',
    },
    { type: 'h2', text: 'Why "free" equipment and tests are the bait' },
    {
      type: 'p',
      text: 'Many Medicare scams do not even mention a card. Instead they offer something genuinely appealing at no cost — a knee or back brace, a wrist or ankle support, DNA or genetic testing "covered by Medicare", diabetic supplies, or COVID-era test kits. The offer is the hook; your Medicare Number is the catch.',
    },
    {
      type: 'p',
      text: 'Once they have your number, fraudsters bill Medicare for expensive equipment or tests — sometimes shipping you a cheap brace you never asked for, sometimes nothing at all — and pocket the reimbursement. This does more than waste taxpayer money. Fraudulent claims on your record can later cause a legitimate claim of yours to be denied, because Medicare\'s records show you already "received" that item or service. The harm reaches your actual coverage.',
    },
    {
      type: 'checklist',
      title: 'Red flags in a Medicare contact',
      intro: 'Any one of these means hang up and do not share anything.',
      items: [
        'An unsolicited call, text, or email claiming to be from Medicare.',
        'A request to confirm or provide your Medicare Number, Social Security number, or bank details.',
        'An offer of free braces, genetic or DNA testing, or other equipment "at no cost to you".',
        'A claim that you need a new card or must pay a fee to keep benefits active.',
        'Pressure to decide today, or a warning that coverage will lapse.',
        'A caller who already has some of your details and wants you to "just confirm" the rest.',
        'Someone offering a cash gift, rebate, or refund in exchange for your Medicare Number.',
      ],
    },
    { type: 'h2', text: 'What to do' },
    {
      type: 'timeline',
      title: 'Medicare scam response',
      steps: [
        {
          window: 'During the call',
          title: 'Do not share your number — hang up',
          text: 'Do not confirm or provide your Medicare Number, Social Security number, or any financial detail. You owe an unsolicited caller nothing. Hang up; do not press buttons or stay on the line.',
        },
        {
          window: 'To verify anything',
          title: 'Call Medicare yourself',
          text: 'If you want to check a claim about your account, call 1-800-MEDICARE (1-800-633-4227), the official number, or log in at Medicare.gov. Never use a number or link provided by the caller.',
        },
        {
          window: 'Ongoing',
          title: 'Check your Medicare statements',
          text: 'Review your Medicare Summary Notices or your account at Medicare.gov for services, equipment, or tests you did not receive. Unfamiliar charges are the main sign your number is being misused.',
        },
        {
          window: 'If your number was shared',
          title: 'Report it and monitor',
          text: 'Report suspected Medicare fraud to 1-800-MEDICARE and the HHS Office of the Inspector General, and treat it as an identity exposure — start a plan at IdentityTheft.gov and consider a credit freeze.',
        },
        {
          window: 'If asked for a new card',
          title: 'Request replacements only through official channels',
          text: 'If you genuinely need a replacement card, request it free at Medicare.gov or through 1-800-MEDICARE. Never pay a fee and never provide your number to an inbound caller to "send" a card.',
        },
      ],
    },
    {
      type: 'alert',
      variant: 'info',
      title: 'Helping an older parent or relative',
      text: 'These scams disproportionately target seniors, and the offers can be persuasive. The simplest protective rule to share is one sentence: "Medicare never calls you asking for your Medicare number — if someone does, hang up." Pair it with a habit of reviewing Medicare statements together for services that were never received, which is how ongoing misuse is caught.',
    },
    {
      type: 'report',
      title: 'Report Medicare fraud',
      text: 'Report to 1-800-MEDICARE and the HHS Office of Inspector General (oig.hhs.gov), and treat a shared number as identity exposure.',
      agencies: ['ftc', 'identityTheft', 'ic3'],
    },
    {
      type: 'p',
      text: 'Medicare scams succeed by dressing theft in the language of benefits — a new card, a free brace, a helpful call. But the shape underneath is always the same as every other scam on this site: an unsolicited contact that needs a number from you, wrapped in urgency or a too-good offer. Medicare already has your number and will not call to ask for it. So the request itself, however friendly, is the tell — and the safest reflex is to hang up and, if you want to check anything at all, call 1-800-MEDICARE yourself.',
    },
  ],
  howTo: {
    name: 'How to handle a Medicare scam call',
    description:
      'Steps to protect your Medicare Number from a scam call and respond if you already shared it.',
    totalTime: 'PT30M',
    steps: [
      {
        name: 'Do not share your Medicare Number',
        text: 'Never confirm or provide it to an unsolicited caller, regardless of the offer or how official they sound. Hang up.',
      },
      {
        name: 'Remember Medicare does not cold-call for it',
        text: 'Medicare contacts you mainly by mail and already has your number. An unsolicited request for it is fraud.',
      },
      {
        name: 'Verify only via 1-800-MEDICARE',
        text: 'To check any claim about your account, call 1-800-633-4227 or log in at Medicare.gov — never a caller-supplied number.',
      },
      {
        name: 'Review your Medicare statements',
        text: 'Check your Summary Notices for equipment, tests or services you never received, which signal misuse of your number.',
      },
      {
        name: 'Report and protect your identity if exposed',
        text: 'Report to 1-800-MEDICARE and the HHS OIG, start a plan at IdentityTheft.gov, and consider a credit freeze.',
      },
      {
        name: 'Request replacement cards officially',
        text: 'Get a free replacement card only through Medicare.gov or 1-800-MEDICARE; never pay a fee or give your number to an inbound caller.',
      },
    ],
  },
  faq: [
    {
      question: 'Does Medicare ever call me to ask for my Medicare Number?',
      answer:
        'No. Medicare communicates with beneficiaries mainly by mail, and it already has your Medicare Number on file, so it has no reason to call and ask for it. An unsolicited call, text, or email requesting your Medicare Number — or your Social Security number or bank details — is a scam, regardless of how helpful or official the person sounds. The only people who legitimately need your number are providers you have chosen to see.',
    },
    {
      question: 'They offered me a free brace or free genetic testing. What’s the harm?',
      answer:
        'The "free" offer is bait to obtain your Medicare Number. Once they have it, fraudsters bill Medicare for expensive equipment or tests you never needed, keeping the reimbursement. Beyond the cost to the program, a fraudulent claim on your record can cause a genuine future claim of yours to be denied, because Medicare\'s records show you already received that item. Declining these offers protects both the system and your own coverage.',
    },
    {
      question: 'Do I have to pay a fee or get a new card to keep my benefits?',
      answer:
        'No. There is no fee to keep your Medicare benefits active, and no scenario where an inbound caller must collect a payment or your number to "reactivate" your card. Medicare cards and replacements are free and requested by you through official channels. Any call claiming your benefits will lapse without a payment or a number is a scam using false urgency.',
    },
    {
      question: 'How do I know if my Medicare Number is being misused?',
      answer:
        'Review your Medicare Summary Notices and your account at Medicare.gov regularly, looking for equipment, tests, or services billed that you never received. Those phantom charges are the clearest sign your number is being used fraudulently. Catching them early lets you report the fraud before it accumulates or interferes with your legitimate claims.',
    },
    {
      question: 'I already gave someone my Medicare Number. What should I do?',
      answer:
        'Report it promptly to 1-800-MEDICARE and to the HHS Office of Inspector General, and begin watching your Medicare statements closely for charges you did not incur. Because your number is tied to your identity, also treat it as an identity exposure: start a recovery plan at IdentityTheft.gov and consider freezing your credit. Acting quickly limits both the financial fraud and the downstream identity risk.',
    },
    {
      question: 'How can I protect an elderly parent from these calls?',
      answer:
        'Share one simple rule: Medicare never calls asking for your Medicare Number, so if someone does, hang up. Reinforce it by reviewing their Medicare statements together for services that were never received, which is how ongoing misuse is caught. Because the offers can be persuasive and specifically target seniors, a clear, memorable rule works better than trying to evaluate each call on its merits.',
    },
  ],
  sources: [
    {
      label: 'Reporting Medicare fraud and abuse',
      publisher: 'Medicare.gov (Centers for Medicare & Medicaid Services)',
      url: 'https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse',
    },
    {
      label: 'Protecting yourself from Medicare fraud',
      publisher: 'HHS Office of Inspector General',
      url: 'https://oig.hhs.gov/fraud/consumer-alerts/',
    },
    {
      label: 'Identity theft recovery plans',
      publisher: 'Federal Trade Commission',
      url: 'https://www.identitytheft.gov/',
    },
  ],
  related: [
    'irs-social-security-imposter-calls',
    'how-to-freeze-your-credit',
    'utility-disconnection-scam',
  ],
};
