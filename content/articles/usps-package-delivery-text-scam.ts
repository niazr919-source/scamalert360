import type { Article } from '../types';

export const article: Article = {
  slug: 'usps-package-delivery-text-scam',
  category: 'ai-cyber',
  title: 'USPS Text Scam: "Your Package Could Not Be Delivered" Explained',
  shortTitle: 'USPS Package Delivery Text Scam',
  description:
    'A text says your USPS package needs a small redelivery fee to release it. Here is how the scam works, why the fee is not the point, and what to do.',
  keywords: [
    'usps text scam',
    'package delivery scam text',
    'usps tracking scam',
    'your package could not be delivered text',
    'fake usps text message',
    'smishing delivery scam',
  ],
  published: '2026-02-11',
  updated: '2026-07-21',
  authorId: 'editorial-team',
  readingMinutes: 9,
  quickAnswer:
    'USPS does not text you about undeliverable packages unless you signed up for tracking alerts, and it never charges a redelivery fee by text link. The small fee is bait — the real objective is your full card number, address and any one-time passcode you enter on the fake payment page.',
  keyTakeaways: [
    'The $0.30–$3.00 "redelivery fee" is not the theft. Your card details are.',
    'USPS never asks for payment or personal details through a link in an unsolicited text.',
    'Real USPS tracking numbers are 20–22 digits; scam texts use short or malformed ones.',
    'Track any package by typing the number into usps.com yourself — never through a texted link.',
  ],
  body: [
    {
      type: 'p',
      text: 'The message is short and almost boring, which is exactly why it works. "USPS: Your package has been held at our facility due to an incomplete address. Please update your details within 24 hours to arrange redelivery." A link follows. Sometimes there is a tracking number that looks plausible at a glance.',
    },
    {
      type: 'p',
      text: 'Nearly everyone is waiting on something. That is the entire premise. Delivery smishing does not need to be clever or personalized because in any given week a large fraction of the population has a parcel in transit, and the message costs effectively nothing to send to a hundred thousand phones. The sender has no idea whether you ordered anything. They are betting on the base rate.',
    },
    {
      type: 'p',
      text: 'What makes this campaign unusually effective is the size of the ask. A redelivery fee of $1.99 does not trigger the alarm that a request for $500 would. It feels like friction, not theft — an annoying administrative charge. And that is deliberate, because the fee is not what the operation is collecting.',
    },
    {
      type: 'keyStat',
      value: '20–22 digits',
      label: 'The length of a genuine USPS tracking number. Scam texts routinely use shorter or malformed strings that no USPS system would generate',
      source: 'United States Postal Inspection Service',
      url: 'https://www.uspis.gov/news',
    },
    { type: 'h2', text: 'What the fake fee is actually for' },
    {
      type: 'p',
      text: 'When you land on the cloned USPS page and enter your details to pay $1.99, you hand over a complete card-not-present package: full card number, expiry date, CVV, cardholder name, billing address and often your phone number. The $1.99 may not even be charged. In many campaigns the page returns a plausible error and redirects you to the real usps.com, so nothing feels wrong and you never think about it again.',
    },
    {
      type: 'p',
      text: 'The card data is then either used directly or sold in bulk. The first sign is usually a small test charge — a few dollars at an unfamiliar merchant — placed to confirm the card is live before anything larger is attempted. People routinely dismiss these as forgotten subscriptions, which is precisely the reaction the test is designed to produce.',
    },
    {
      type: 'p',
      text: 'A second, more damaging variant asks you to "verify your identity" with a code sent to your phone. That code is not from the scam site. It is a genuine one-time passcode triggered by the fraudster attempting to log into your bank, add a payee, or enroll your card in a mobile wallet on their own device. Typing it into their page completes that action.',
    },
    {
      type: 'table',
      caption: 'Genuine USPS communication vs. delivery smishing',
      headers: ['Signal', 'Real USPS', 'Scam text'],
      rows: [
        [
          'Unsolicited texts',
          'Only if you enrolled in Informed Delivery or tracking alerts',
          'Arrives with no enrollment, often for a package you never ordered',
        ],
        [
          'Redelivery fees',
          'Never charged by text link',
          'Small fee, framed as urgent and administrative',
        ],
        [
          'Tracking number',
          '20–22 digits, verifiable on usps.com',
          'Short, malformed, or absent entirely',
        ],
        [
          'Link domain',
          'usps.com only',
          'usps-tracking.info, uspspost.co, or a link shortener',
        ],
        [
          'Requests card details',
          'Never by text',
          'Core of the page',
        ],
        [
          'Deadline',
          'No 24-hour ultimatums',
          'Manufactured urgency to stop you checking',
        ],
      ],
    },
    {
      type: 'alert',
      variant: 'danger',
      title: 'Read the domain, not the words before it',
      text: 'The meaningful part of a URL is the registered domain immediately before the first single slash. "usps.delivery-update.co" is not a USPS site — the real domain is "delivery-update.co", and "usps" is a subdomain the attacker created for free. This single reading habit defeats most phishing links you will ever receive.',
    },
    { type: 'h2', text: 'Why delivery scams spike around holidays' },
    {
      type: 'p',
      text: 'Volume rises sharply from late November through January, and around major retail events. The reason is simple base rates again: when more people have parcels in transit, a higher share of random recipients will find the message plausible. The same campaigns are recycled with FedEx, UPS, DHL and Amazon branding, and the template barely changes — only the logo and the sender name.',
    },
    {
      type: 'p',
      text: 'A related variant arrives as a physical door hanger or slip rather than a text, carrying a QR code to "reschedule delivery". It resolves to the same category of cloned payment page. We cover the mechanics of that in our guide to QR code phishing.',
    },
    {
      type: 'checklist',
      title: 'Red flags in a delivery text',
      intro: 'Any one of these is enough to delete the message.',
      items: [
        'You did not enroll in tracking alerts from that carrier.',
        'The message asks for a payment of any size to release a package.',
        'The link domain is not exactly usps.com (or fedex.com, ups.com, dhl.com).',
        'The tracking number is short, malformed, or missing.',
        'There is a deadline — "within 24 hours", "or it will be returned".',
        'The message arrives from an email address or a long international number.',
        'You are asked to enter a verification code that was texted to you separately.',
        'The page asks for your full card details rather than routing to a known checkout.',
      ],
    },
    { type: 'h2', text: 'How to check a delivery notification safely' },
    {
      type: 'p',
      text: 'There is a single rule that makes every one of these messages harmless, and it costs about fifteen seconds: never navigate from the notification. Go to the carrier yourself.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Do not tap the link. Screenshot the message first if you intend to report it.',
        'Open usps.com by typing it, or use the official USPS app you installed from an app store.',
        'Paste the tracking number from the text into the site\'s own tracking box. If it is invalid or unknown, the message was fabricated.',
        'Cross-check against your order confirmations. If nothing is in transit, you have your answer.',
        'Sign up for USPS Informed Delivery if you want genuine notifications. Real alerts you opted into are far easier to distinguish from fakes.',
        'Forward the text to 7726 (SPAM), then delete it. This is free on all major US carriers and feeds carrier-level blocklists.',
      ],
    },
    {
      type: 'alert',
      variant: 'info',
      title: 'If you only tapped the link, you are almost certainly fine',
      text: 'Visiting a phishing page does not by itself compromise your phone. Harm begins when you enter data or install something. If you opened the page, entered nothing, and installed nothing, close it and move on. Do not go back to "have another look" — that is the action that turns a harmless tap into a loss.',
    },
    { type: 'h2', text: 'If you already entered your card details' },
    {
      type: 'timeline',
      title: 'Delivery scam recovery timeline',
      steps: [
        {
          window: 'Minutes 0–15',
          title: 'Lock the card in your banking app',
          text: 'Most banking apps have an instant freeze toggle. Use it, then call the number on the back of the card to report the details as compromised and request a reissue with a new number.',
        },
        {
          window: 'Minutes 15–30',
          title: 'Deal with any code you entered',
          text: 'If you typed a verification code into the page, treat your account as accessed. Call your bank, ask them to review the last hour of activity, force a password reset, and remove unrecognized devices and payees from your profile.',
        },
        {
          window: 'Hour 1',
          title: 'Change reused passwords',
          text: 'If you entered a password that you use anywhere else, change it everywhere, starting with your email. Email is the recovery channel for everything else you own.',
        },
        {
          window: 'Day 1',
          title: 'Dispute charges and turn on alerts',
          text: 'Dispute anything unrecognized in writing. Enable transaction alerts at the lowest threshold your bank allows, and watch specifically for small test charges.',
        },
        {
          window: 'Days 1–3',
          title: 'Report it',
          text: 'File at ReportFraud.ftc.gov, report to the US Postal Inspection Service since USPS branding was impersonated, and forward the original text to 7726.',
        },
        {
          window: 'Week 1',
          title: 'Add credit protections if identity data was captured',
          text: 'If you entered your address and date of birth alongside card details, place a free fraud alert or credit freeze with all three bureaus.',
        },
      ],
    },
    {
      type: 'report',
      title: 'Report a fake USPS text',
      text: 'Forwarding to 7726 takes ten seconds and is the step that most directly protects other people.',
      agencies: ['ftc', 'spam7726', 'ic3'],
    },
    {
      type: 'p',
      text: 'The durable lesson here is smaller than it looks. Delivery smishing is not a sophisticated attack; it is a cheap message that exploits a moment when almost everyone is expecting something. It fails completely against one habit — going to the carrier yourself instead of following the notification. That habit generalizes to bank alerts, toll notices, tax messages and everything else in this category, which is why it is worth building once rather than learning six separate warning lists.',
    },
  ],
  howTo: {
    name: 'How to verify a USPS delivery text and respond to a fake one',
    description:
      'Verification steps for an unexpected package delivery notification, and recovery steps if card details were entered.',
    totalTime: 'PT30M',
    steps: [
      {
        name: 'Do not tap the link',
        text: 'Screenshot the message for reporting, then leave it. Navigating from the notification is the only thing that puts you at risk.',
      },
      {
        name: 'Go to the carrier directly',
        text: 'Type usps.com yourself or open the official app, and paste the tracking number into the site’s own tracking box.',
      },
      {
        name: 'Treat an invalid tracking number as proof',
        text: 'Genuine USPS tracking numbers are 20–22 digits. If the site does not recognize it, the message was fabricated.',
      },
      {
        name: 'Never pay a redelivery fee by text link',
        text: 'USPS does not collect redelivery fees this way. Any payment request arriving by unsolicited text is fraudulent.',
      },
      {
        name: 'Lock your card immediately if you paid',
        text: 'Freeze the card in your banking app, then call the number on the back to report compromise and request a new number.',
      },
      {
        name: 'Escalate if you entered a verification code',
        text: 'Assume the account was accessed. Ask your bank to review recent activity, force a password reset and remove unknown devices.',
      },
      {
        name: 'Report and block',
        text: 'Forward the text to 7726, file at ReportFraud.ftc.gov, and report USPS impersonation to the Postal Inspection Service.',
      },
    ],
  },
  faq: [
    {
      question: 'Does USPS ever text about undelivered packages?',
      answer:
        'Only if you actively enrolled — through Informed Delivery, or by requesting tracking updates for a specific shipment. USPS does not send unsolicited delivery notifications to people who did not sign up, and it never charges a redelivery fee through a link in a text message. If you received a message you did not opt into, it is fraudulent regardless of how legitimate it looks.',
    },
    {
      question: 'I paid the $1.99 redelivery fee. How bad is it?',
      answer:
        'The $1.99 is the least of it. What matters is that a fraudster now holds your full card number, expiry, CVV and billing address — everything needed for card-not-present fraud, which can be used or resold within hours. Freeze the card in your banking app immediately and request a new number. Do not simply watch the account and hope; the card data is already out.',
    },
    {
      question: 'How can I tell if a USPS tracking number is real?',
      answer:
        'Genuine USPS tracking numbers are 20 to 22 digits long. The reliable test is not counting digits, though — it is pasting the number into the tracking box on usps.com, reached by typing the address yourself. If USPS does not recognize the number, the message was fabricated. Never use a tracking link supplied in the message itself.',
    },
    {
      question: 'Is it dangerous to just click the link without entering anything?',
      answer:
        'On an updated phone, generally not. Loading a phishing page does not install anything by itself; the danger comes from what you type into it or agree to install. If you tapped through, entered no data and installed nothing, close the page and carry on. Keeping your operating system updated matters because it closes the browser-level flaws that could otherwise shorten that chain.',
    },
    {
      question: 'Why do I get these texts when I never gave USPS my number?',
      answer:
        'Because the sender does not know who you are. These are untargeted blasts to large blocks of numbers, sourced from data breaches, brokers, or simply generated sequentially. The message names USPS because a large share of any random population is expecting a parcel. Receiving one does not mean any account of yours was compromised.',
    },
    {
      question: 'Should I reply STOP to make them stop?',
      answer:
        'No. Replying anything — including STOP — confirms that your number is active and monitored by a real person, which typically increases the volume you receive rather than reducing it. Legitimate marketing honors STOP; criminal senders treat it as a signal. Forward the message to 7726 and delete it instead.',
    },
  ],
  sources: [
    {
      label: 'How to Recognize and Report Spam Text Messages',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-recognize-and-report-spam-text-messages',
    },
    {
      label: 'Smishing and package delivery scam alerts',
      publisher: 'United States Postal Inspection Service',
      url: 'https://www.uspis.gov/news',
    },
    {
      label: 'How to Recognize and Avoid Phishing Scams',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams',
    },
    {
      label: 'Internet Crime Complaint Center (IC3)',
      publisher: 'Federal Bureau of Investigation',
      url: 'https://www.ic3.gov/',
    },
  ],
  related: ['unpaid-toll-text-scam', 'quishing-qr-code-scams', 'bank-fraud-alert-text-scam'],
};
