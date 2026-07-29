import type { Article } from '../types';

export const article: Article = {
  slug: 'irs-social-security-imposter-calls',
  category: 'banking',
  title: 'IRS & Social Security Scam Calls: Government Imposter Fraud',
  shortTitle: 'IRS & Social Security Scam Calls',
  description:
    'A caller says your Social Security number is suspended or that the IRS has a warrant. Learn how government imposter scams work and what these agencies actually do.',
  keywords: [
    'irs scam call',
    'social security scam call',
    'government imposter scam',
    'irs text message scam',
    'social security number suspended scam',
    'fake arrest warrant scam call',
  ],
  published: '2026-02-26',
  updated: '2026-07-19',
  authorId: 'editorial-team',
  readingMinutes: 10,
  quickAnswer:
    'The IRS initiates contact about a tax debt by mail, not by phone, and never demands payment in gift cards, cryptocurrency or wire transfers. A Social Security number cannot be suspended — the concept does not exist. Any caller threatening immediate arrest over an unpaid balance is an imposter, regardless of caller ID.',
  keyTakeaways: [
    'Social Security numbers are never suspended, blocked or frozen. There is no such process.',
    'The IRS opens contact by mail and offers appeal rights; it does not threaten arrest by phone.',
    'No federal agency accepts gift cards, crypto, or wire transfers as payment.',
    'The "safe federal account" a caller asks you to move money into does not exist.',
  ],
  body: [
    {
      type: 'p',
      text: 'The recorded voice is clipped and official. Your Social Security number has been suspended due to suspicious activity linked to your identity. A case has been opened. Press one to speak with an officer before legal action proceeds. Or a live caller states that the IRS has filed a lawsuit against you, that a warrant exists, and that a sheriff will attend your address within the hour unless the balance is settled today.',
    },
    {
      type: 'p',
      text: 'Government imposter fraud is consistently among the highest-volume scam categories reported in the United States, and it persists for an unusual reason: most people genuinely do not know how these agencies operate. Tax and benefits administration is opaque enough that a confident caller describing an unfamiliar process sounds plausible. The scam does not rely on you being careless. It relies on a knowledge gap that is entirely reasonable to have.',
    },
    {
      type: 'p',
      text: 'This guide closes that gap. Once you know what the IRS and the Social Security Administration actually do, the calls become trivially recognizable — because the fabricated procedures they describe do not exist at all.',
    },
    { type: 'h2', text: 'What these agencies actually do' },
    {
      type: 'p',
      text: 'Two facts do most of the work here, and both are worth stating flatly.',
    },
    {
      type: 'p',
      text: 'First: a Social Security number cannot be suspended, blocked, frozen or cancelled. There is no administrative process by which this happens, no department that performs it, and no circumstance in which you would need to pay to reinstate one. The threat is not an exaggeration of a real procedure — it describes something that does not exist. Any caller using that phrase has identified themselves conclusively.',
    },
    {
      type: 'p',
      text: 'Second: the IRS initiates contact about a tax debt by mail. Several notices arrive over weeks or months before any enforcement, each explaining the amount, the tax year and your appeal rights. The agency does not open with a phone call, does not threaten immediate arrest, and does not demand payment within the hour. Genuine IRS collection is slow, documented and procedurally generous — the opposite of what these callers describe.',
    },
    {
      type: 'table',
      caption: 'Real agency conduct vs. government imposter scripts',
      headers: ['Behavior', 'Real IRS / SSA', 'Imposter'],
      rows: [
        [
          'First contact',
          'Mailed notice on official letterhead',
          'Phone call, robocall, text or email',
        ],
        [
          'Tone',
          'Procedural, explains appeal rights',
          'Urgent, threatening, secrecy-oriented',
        ],
        [
          'Arrest threats',
          'Never made by phone',
          'Central to the script',
        ],
        [
          'Payment methods',
          'Check, or electronically at IRS.gov',
          'Gift cards, crypto, wire, cash by courier',
        ],
        [
          'Where money goes',
          'US Treasury only',
          'A "safe federal account" that does not exist',
        ],
        [
          'Caller ID',
          'Not a verification signal either way',
          'Spoofed to a genuine agency number',
        ],
        [
          'Personal data',
          'Already held; verified with partial details',
          'Asks you to confirm your full SSN',
        ],
      ],
    },
    {
      type: 'alert',
      variant: 'danger',
      title: 'No federal agency is ever paid in gift cards',
      text: 'This is the single fastest test available, and it requires no knowledge of tax law. The IRS, the Social Security Administration, the courts, and law enforcement are paid through the US Treasury. None of them accept Apple, Target, Google Play or Amazon gift cards, cryptocurrency, or wire transfers to an individual. The moment a caller specifies any of these, the conversation is over — no further evaluation is needed.',
    },
    { type: 'h2', text: 'The main variants' },
    { type: 'h3', text: 'The suspended Social Security number' },
    {
      type: 'p',
      text: 'A robocall claims your number has been suspended over suspicious activity — often mentioning drug trafficking, money laundering, or a rental car abandoned near a border. Pressing one connects you to an "officer" who offers to protect your funds by moving them into a secure federal account while the investigation proceeds. That account does not exist. This variant frequently ends with the victim withdrawing cash and handing it to a courier.',
    },
    { type: 'h3', text: 'The IRS lawsuit or warrant' },
    {
      type: 'p',
      text: 'A caller states that a lawsuit has been filed or a warrant issued over unpaid tax, and that local police will attend shortly. They may know your address and the last digits of your SSN, harvested from breaches. Payment "today" resolves it. Real tax disputes never move at this speed and never resolve by immediate telephone payment.',
    },
    { type: 'h3', text: 'The refund or benefit increase' },
    {
      type: 'p',
      text: 'The friendlier inversion. You are owed a tax refund, a stimulus payment, or a benefit recalculation, and they need your bank details to deposit it. The objective is account credentials rather than a payment. Any inbound offer of government money that requires you to supply banking details is fraudulent.',
    },
    { type: 'h3', text: 'Text and email variants' },
    {
      type: 'p',
      text: 'Increasingly the approach arrives as a text about a tax refund or a "my Social Security" account issue, linking to a cloned login page. The IRS does not initiate contact by text or email about a bill or refund. Genuine SSA services live at ssa.gov, reached by typing it yourself.',
    },
    {
      type: 'checklist',
      title: 'Signs the caller is an imposter',
      intro: 'Any single item ends the call. You owe no explanation before hanging up.',
      items: [
        'They say your Social Security number has been suspended, blocked or frozen.',
        'They threaten immediate arrest, deportation, or license revocation over a balance.',
        'They demand payment in gift cards, cryptocurrency, wire transfer, or cash to a courier.',
        'They ask you to move money into a "safe", "secure" or "federal" account.',
        'They tell you to stay on the line while you travel to a bank, ATM or store.',
        'They instruct you not to tell family, or claim a gag order applies.',
        'They ask you to confirm your full Social Security number or bank details.',
        'They refuse to let you hang up and call the agency back on a published number.',
      ],
    },
    {
      type: 'alert',
      variant: 'info',
      title: 'How to verify in two minutes',
      text: 'Hang up. If you want to be certain, call the IRS at 800-829-1040 or the Social Security Administration at 800-772-1213 — numbers you find yourself at IRS.gov and SSA.gov, never one the caller gives you. You can also check for genuine IRS notices by creating an account at IRS.gov directly. A real agency will have a record; an imposter cannot survive the callback.',
    },
    { type: 'h2', text: 'Why the calls sound authoritative' },
    {
      type: 'p',
      text: 'Two techniques account for most of the persuasive power, and both are worth recognizing because they recur across every impersonation scam.',
    },
    {
      type: 'p',
      text: 'The first is caller ID spoofing. The number displayed is chosen by the caller and is routinely set to a genuine IRS or SSA switchboard. Anti-spoofing frameworks reduce this for some traffic but do not eliminate it. Caller ID is decoration, never identification.',
    },
    {
      type: 'p',
      text: 'The second is partial data. The caller recites your address, your employer, or the last four digits of your SSN — details available from breaches and data brokers. It feels like proof of legitimacy because you assume only an agency would hold it. In practice this information circulates widely, and its use as a credibility prop is itself a warning sign.',
    },
    { type: 'h2', text: 'If you already paid or disclosed information' },
    {
      type: 'timeline',
      title: 'Government imposter scam recovery',
      steps: [
        {
          window: 'Minutes 0–30',
          title: 'Contact your bank and stop what you can',
          text: 'Call the number on your card. Request a recall on any transfer, and freeze the account if a courier collection or further payment was arranged. For gift cards, call the issuing brand’s fraud line with the numbers and receipts — unspent balances are occasionally frozen.',
        },
        {
          window: 'Hour 1',
          title: 'Do not admit a collector to your home',
          text: 'If someone was said to be coming for cash or valuables, do not open the door and call your local police non-emergency line. This variant targets older adults specifically and puts a stranger at your address.',
        },
        {
          window: 'Day 1',
          title: 'Protect your identity if you disclosed your SSN',
          text: 'Start a recovery plan at IdentityTheft.gov, place a fraud alert or credit freeze with all three bureaus, and request an IRS Identity Protection PIN to block a fraudulent return being filed in your name.',
        },
        {
          window: 'Days 1–3',
          title: 'Report to the right agencies',
          text: 'Report Social Security impersonation to the SSA Office of the Inspector General, IRS impersonation to TIGTA, and file at ReportFraud.ftc.gov. Add IC3 if a wire or online transfer was involved.',
        },
        {
          window: 'Week 1',
          title: 'Expect follow-up attempts',
          text: 'Anyone who paid is added to a list of proven targets and resold. Expect calls offering to recover your money or claiming to investigate the first scam. Treat every one as fraudulent.',
        },
      ],
    },
    {
      type: 'report',
      title: 'Report a government imposter scam',
      text: 'Report SSA impersonation to the SSA OIG and IRS impersonation to the Treasury Inspector General for Tax Administration (TIGTA).',
      agencies: ['ssaOig', 'ftc', 'ic3', 'identityTheft'],
    },
    {
      type: 'p',
      text: 'The thing worth remembering, if the details fade, is that real government enforcement is slow and written. It arrives on paper, it explains what you are accused of owing, it tells you how to disagree, and it gives you time. Urgency delivered by telephone is not how any of this works — which means the pressure itself, not the story attached to it, is the reliable signal. A caller who cannot let you hang up and call back is telling you everything you need to know.',
    },
  ],
  howTo: {
    name: 'How to handle an IRS or Social Security scam call',
    description:
      'Verification steps for a suspected government imposter call and recovery steps if money or personal data was disclosed.',
    totalTime: 'PT1H',
    steps: [
      {
        name: 'Hang up without explaining',
        text: 'You owe an unsolicited caller nothing. Do not confirm any personal details, including whether the name they used is yours.',
      },
      {
        name: 'Apply the gift card test',
        text: 'No federal agency accepts gift cards, cryptocurrency or wire transfers. Any such request is conclusive proof of fraud.',
      },
      {
        name: 'Verify on a number you look up yourself',
        text: 'Call the IRS at 800-829-1040 or the SSA at 800-772-1213, found at IRS.gov and SSA.gov. Never use a number the caller provided.',
      },
      {
        name: 'Refuse any request to move money',
        text: 'There is no safe, secure or federal holding account. Legitimate agencies never ask you to relocate your funds.',
      },
      {
        name: 'Do not open the door to a collector',
        text: 'If someone was said to be coming for cash or valuables, call the local police non-emergency line instead.',
      },
      {
        name: 'Act the same day if you paid',
        text: 'Call your bank to request a recall, and notify gift card issuers with the card numbers and receipts.',
      },
      {
        name: 'Freeze credit and get an IRS IP PIN if you gave your SSN',
        text: 'Start at IdentityTheft.gov, freeze your credit at all three bureaus, and request an Identity Protection PIN from the IRS.',
      },
    ],
  },
  faq: [
    {
      question: 'Can my Social Security number actually be suspended?',
      answer:
        'No. There is no process by which a Social Security number is suspended, blocked, frozen or cancelled, and no department that performs such an action. Your number is permanent and remains valid regardless of any criminal investigation. The phrase exists only in scam scripts, which makes it one of the most reliable single indicators of fraud in this entire category.',
    },
    {
      question: 'Does the IRS ever call taxpayers?',
      answer:
        'IRS employees do sometimes call, but essentially never as first contact about a debt. Genuine collection begins with mailed notices sent over weeks or months, each stating the amount, the tax year and your appeal rights. The IRS does not threaten immediate arrest, demand payment within the hour, or specify a payment method other than check or the official electronic channels at IRS.gov.',
    },
    {
      question: 'The caller ID showed a real IRS number. How is that possible?',
      answer:
        'Caller ID is supplied by the calling party and is not authenticated. Setting it to any value, including a genuine agency switchboard, is straightforward and routine in these campaigns. Frameworks such as STIR/SHAKEN reduce spoofing on some traffic but do not eliminate it, particularly for calls originating outside major carrier networks. Treat a matching number as meaningless.',
    },
    {
      question: 'I gave them my Social Security number. What should I do?',
      answer:
        'Act this week. Place a free fraud alert or, better, a credit freeze with all three bureaus, which blocks new accounts being opened in your name. Start a personalized recovery plan at IdentityTheft.gov. Request an IRS Identity Protection PIN, which prevents a fraudulent tax return being filed under your number — this is the most common downstream use of a stolen SSN and the freeze alone does not stop it.',
    },
    {
      question: 'Is there any real "safe federal account" for protecting funds?',
      answer:
        'No. No US government agency maintains an account that citizens transfer money into for safekeeping during an investigation, and none will ever ask you to do so. This request is a defining feature of government imposter fraud and appears in bank impersonation scams too. It is worth teaching explicitly to older relatives, because it is conclusive on its own and requires no other knowledge to apply.',
    },
    {
      question: 'They knew my address and part of my SSN. Doesn’t that prove it was real?',
      answer:
        'It proves only that they bought or breached a dataset containing it. Names, addresses, employers, dates of birth and partial Social Security numbers circulate widely through data breaches and broker services. Fraudsters recite this information deliberately, as a credibility prop — the reasoning being that only an agency could know it. In practice, thousands of people can access it, and its use in an unsolicited call is a warning sign rather than reassurance.',
    },
  ],
  sources: [
    {
      label: 'How to Know It’s Really the IRS Calling or Knocking',
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/newsroom/how-to-know-its-really-the-irs-calling-or-knocking',
    },
    {
      label: 'Scam Awareness',
      publisher: 'Social Security Administration',
      url: 'https://www.ssa.gov/scam/',
    },
    {
      label: 'Report Social Security fraud',
      publisher: 'SSA Office of the Inspector General',
      url: 'https://oig.ssa.gov/report/',
    },
    {
      label: 'Identity theft recovery plans',
      publisher: 'Federal Trade Commission',
      url: 'https://www.identitytheft.gov/',
    },
  ],
  related: [
    'ai-voice-cloning-emergency-scams',
    'bank-fraud-alert-text-scam',
    'gift-card-scams',
  ],
};
