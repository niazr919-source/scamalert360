import type { Article } from '../types';

export const article: Article = {
  slug: 'unpaid-toll-text-scam',
  category: 'ai-cyber',
  title: 'Unpaid Toll Text Scam: E-ZPass, SunPass & FasTrak Smishing',
  shortTitle: 'Unpaid Toll Text Scam',
  description:
    'A text claims you owe a small unpaid toll and threatens a late fee. Learn why toll smishing is so common, and how to check your real toll balance safely.',
  keywords: [
    'unpaid toll text scam',
    'ezpass scam text',
    'sunpass text scam',
    'fastrak scam text',
    'toll by mail scam',
    'is the unpaid toll text real',
  ],
  published: '2026-03-04',
  updated: '2026-07-23',
  authorId: 'editorial-team',
  readingMinutes: 9,
  quickAnswer:
    'Toll authorities do not collect unpaid tolls by text link, and the amounts in these messages are deliberately trivial so you pay without thinking. The goal is your card details and, increasingly, a one-time passcode that lets the sender add your card to their own phone wallet. Check your balance by going to the toll agency yourself.',
  keyTakeaways: [
    'The $6.99 toll is bait. Your card number and any code you enter are the actual target.',
    'Toll agencies bill unpaid tolls by mail to the registered vehicle owner, never by cold text.',
    'These campaigns name whichever system is regional — E-ZPass, SunPass, FasTrak, TxTag, PA Turnpike.',
    'Receiving one means nothing about you. They are blasted to number blocks, drivers or not.',
  ],
  body: [
    {
      type: 'p',
      text: 'It usually arrives on a weekday morning. "E-ZPass: You have an outstanding toll of $6.99. To avoid a late fee of $50.00, please settle your balance." A link follows, and often a warning that your vehicle registration could be suspended.',
    },
    {
      type: 'p',
      text: 'Toll smishing became one of the highest-volume consumer text scams in the United States because it solved a problem that other phishing lures struggle with: plausibility at scale. Almost everyone drives, most people have passed through an electronic toll at some point, and — crucially — hardly anyone knows their exact toll balance. There is no mental figure to contradict the message.',
    },
    {
      type: 'p',
      text: 'The amounts are calibrated. Six or seven dollars is small enough that disputing it costs more attention than paying it, and the threatened $50 penalty makes paying feel like the economically rational move. That asymmetry is the whole mechanism. The message is not trying to convince you it is important; it is trying to convince you it is trivial.',
    },
    {
      type: 'keyStat',
      value: 'Billed by mail, not by text',
      label: 'US toll authorities pursue unpaid tolls through mailed violation notices to the registered vehicle owner — a process that does not begin with a cold SMS',
      source: 'Federal Trade Commission — consumer alerts on toll scams',
      url: 'https://consumer.ftc.gov/consumer-alerts',
    },
    { type: 'h2', text: 'Why these texts are so convincing' },
    {
      type: 'p',
      text: 'Three design choices do most of the work, and recognizing them is more useful than memorizing any particular wording.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Regional accuracy. Campaigns rotate the brand to match the recipient\'s area code — E-ZPass in the Northeast, SunPass in Florida, FasTrak in California, TxTag in Texas. Seeing the correct local system feels like evidence the sender knows something about you. It is not; it is a lookup on your area code.',
        'An unverifiable claim. You cannot immediately recall whether you owe $6.99 in tolls. Unlike a fake bank charge, there is nothing to contradict.',
        'Cheap resolution. The proposed fix is small, immediate and administrative. Scams that ask for a lot trigger scrutiny; scams that ask for pocket change trigger compliance.',
      ],
    },
    {
      type: 'alert',
      variant: 'warning',
      title: 'The newer variant wants a code, not a payment',
      text: 'Increasingly the fake toll page asks you to "verify your identity" with a code sent to your phone. That code is real — it was triggered by the sender attempting to enroll your card in a mobile wallet on their own device, or to log into your bank. Entering it completes the action. A card added to someone else\'s phone wallet can then be tapped in shops with no further access to your account, which is why this variant is more damaging than the fee itself.',
    },
    {
      type: 'table',
      caption: 'Real toll notices vs. toll smishing',
      headers: ['Signal', 'Genuine toll authority', 'Scam text'],
      rows: [
        [
          'First contact',
          'Mailed violation notice to the registered owner',
          'Unsolicited SMS to a phone number',
        ],
        [
          'Amount',
          'Itemized by crossing, with date and location',
          'A single round-ish figure with no detail',
        ],
        [
          'Link domain',
          'Official state or agency domain, often .gov',
          'Lookalike such as ezpass-toll.info or a shortener',
        ],
        [
          'Threat',
          'Statutory penalties explained in the notice',
          '"Registration suspended", "late fee", 12–48 hour deadline',
        ],
        [
          'Payment page',
          'Reached by you, through the agency site or app',
          'Reached only by tapping the texted link',
        ],
        [
          'Asks for a passcode',
          'Never',
          'Common in the current variant',
        ],
      ],
    },
    { type: 'h2', text: 'How to check whether you actually owe a toll' },
    {
      type: 'p',
      text: 'The check takes a couple of minutes and definitively settles it. The rule is identical to every other notification scam: go to the organization yourself rather than following the message.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Do not tap the link. Screenshot the message if you plan to report it.',
        'Identify your actual toll provider. If you have a transponder, it is on the device or your account statements.',
        'Search for the agency independently, or type the address you already know, and log in to your account there. Every major US toll system exposes your balance and crossing history.',
        'Check the vehicle. If you have no transponder and have not driven a toll road, there is nothing to owe.',
        'If a balance genuinely exists, pay it inside the agency\'s own site or app — never through a link you were sent.',
        'Forward the text to 7726 (SPAM) and delete it.',
      ],
    },
    {
      type: 'checklist',
      title: 'Red flags in a toll text',
      intro: 'These messages are unusually formulaic. One flag is enough.',
      items: [
        'You received it by text without ever registering a phone number with a toll agency.',
        'The domain is not the official agency site — check the registered domain before the first single slash.',
        'A deadline of 12, 24 or 48 hours, or a threat to suspend your registration.',
        'The amount is small and unitemized, with no crossing date or location.',
        'The message names a toll system that does not operate where you drive.',
        'The page asks for card details rather than logging you into an existing account.',
        'You are asked to enter a verification code that arrived separately.',
        'The sender is an email address, a long international number, or an iMessage account.',
      ],
    },
    {
      type: 'alert',
      variant: 'info',
      title: 'Getting the text says nothing about you',
      text: 'These are blasted to sequential and breached number blocks with no knowledge of whether the recipient drives, owns a car, or has ever used a toll road. People do receive them for states they have never visited. It is not evidence that your data was leaked or that any account was compromised.',
    },
    { type: 'h2', text: 'If you already paid or entered a code' },
    {
      type: 'timeline',
      title: 'Toll scam recovery timeline',
      steps: [
        {
          window: 'Minutes 0–15',
          title: 'Freeze the card and request a new number',
          text: 'Lock it in your banking app, then call the number on the back of the card. Reissue matters here — the details are already captured and watching the account is not enough.',
        },
        {
          window: 'Minutes 15–30',
          title: 'If you entered a code, check for a wallet enrollment',
          text: 'Ask your bank specifically whether your card was added to a mobile wallet or a new device in the last hour, and have any such enrollment removed. This is the step people miss, and it is how the card keeps being used after reissue is requested.',
        },
        {
          window: 'Hour 1',
          title: 'Secure the account',
          text: 'Force a password reset, remove unrecognized devices and payees, and move off SMS-based two-factor authentication to an app or passkey where your bank supports it.',
        },
        {
          window: 'Day 1',
          title: 'Dispute and monitor',
          text: 'Dispute unauthorized charges in writing. Turn on transaction alerts at the lowest threshold and watch for small test charges rather than large ones.',
        },
        {
          window: 'Days 1–3',
          title: 'Report it',
          text: 'File at ReportFraud.ftc.gov and with IC3, and forward the original message to 7726 so the sending number feeds carrier blocklists.',
        },
      ],
    },
    {
      type: 'report',
      title: 'Report a toll scam text',
      text: 'Also worth notifying your real toll agency — most maintain a fraud page and track impersonation of their brand.',
      agencies: ['ftc', 'spam7726', 'ic3'],
    },
    {
      type: 'p',
      text: 'Toll smishing is worth understanding not because it is dangerous in isolation — the individual loss is often small — but because it is the clearest demonstration of a principle that governs this entire category. The scam is not built around a convincing story. It is built around an amount too small to be worth thinking about, attached to a fact you cannot immediately verify. Once you notice that structure, the same defense works everywhere: never resolve a notification through the notification.',
    },
  ],
  howTo: {
    name: 'How to check an unpaid toll text safely',
    description:
      'Verification steps for a text claiming an unpaid toll, and recovery steps if card details or a passcode were entered.',
    totalTime: 'PT20M',
    steps: [
      {
        name: 'Do not tap the link',
        text: 'Screenshot the message for reporting. Every risk in this scam begins with navigating from the text.',
      },
      {
        name: 'Identify your real toll provider',
        text: 'Check your transponder or account statements. A message naming a system you do not use is fabricated.',
      },
      {
        name: 'Log in to the agency directly',
        text: 'Type the agency address yourself or use its official app, and review your balance and crossing history there.',
      },
      {
        name: 'Pay only inside the official site or app',
        text: 'If a balance genuinely exists, settle it through the agency’s own portal, never through a texted link.',
      },
      {
        name: 'Freeze the card if you paid',
        text: 'Lock it in your banking app and call the number on the back to report compromise and request a new card number.',
      },
      {
        name: 'Check for mobile wallet enrollment if you entered a code',
        text: 'Ask your bank whether your card was added to a new device or wallet in the last hour, and have it removed.',
      },
      {
        name: 'Report and forward to 7726',
        text: 'File at ReportFraud.ftc.gov, report to IC3, and forward the text to 7726 to feed carrier blocklists.',
      },
    ],
  },
  faq: [
    {
      question: 'Is the unpaid toll text real or a scam?',
      answer:
        'If it arrived as an unsolicited text with a payment link, treat it as a scam. US toll authorities pursue unpaid tolls by mailing a violation notice to the registered vehicle owner, itemized by crossing date and location. They do not open with a cold SMS demanding a small payment through a link. The reliable check is to log in to your actual toll account by typing the agency address yourself.',
    },
    {
      question: 'Why did I get an E-ZPass text when I live nowhere near an E-ZPass state?',
      answer:
        'Because the sender does not know where you live. Campaigns pick a toll brand by area code, and area codes travel with people who move. Numbers are also sourced from breaches and generated in blocks, so recipients frequently include people who do not drive at all. Receiving a message for the wrong region is itself a strong signal it is fraudulent.',
    },
    {
      question: 'I paid the toll. What is the actual damage?',
      answer:
        'Losing the few dollars is trivial; losing your card details is not. The page captured your full card number, expiry, CVV and billing address, which is everything needed for card-not-present fraud and is often resold in bulk. Freeze the card and request a new number rather than simply monitoring. If you also entered a verification code, ask your bank whether your card was enrolled in a mobile wallet on another device.',
    },
    {
      question: 'What happens if I ignore a real unpaid toll?',
      answer:
        'Genuine unpaid tolls escalate slowly and visibly: a mailed notice, then administrative fees, and in some states eventual registration or renewal holds. None of that happens within the 24 hours these texts threaten. The manufactured deadline exists specifically to stop you taking the two minutes needed to check your real balance.',
    },
    {
      question: 'Should I reply to ask them to stop?',
      answer:
        'No. Any reply confirms your number is active and read by a person, which typically increases the volume you receive. Criminal senders treat STOP as engagement rather than an opt-out. Forward the message to 7726, block the sender, and delete it.',
    },
    {
      question: 'Can the text harm my phone if I do not enter anything?',
      answer:
        'Receiving it cannot. Opening the link on an updated phone is very unlikely to cause harm on its own — phishing pages need you to type something or approve an installation. If you tapped through and entered nothing, close it and move on. Do not revisit the page to investigate.',
    },
  ],
  sources: [
    {
      label: 'Consumer alerts on toll and delivery text scams',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/consumer-alerts',
    },
    {
      label: 'How to Recognize and Report Spam Text Messages',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-recognize-and-report-spam-text-messages',
    },
    {
      label: 'Internet Crime Complaint Center (IC3)',
      publisher: 'Federal Bureau of Investigation',
      url: 'https://www.ic3.gov/',
    },
  ],
  related: [
    'usps-package-delivery-text-scam',
    'bank-fraud-alert-text-scam',
    'quishing-qr-code-scams',
  ],
};
