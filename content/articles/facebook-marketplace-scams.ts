import type { Article } from '../types';

export const article: Article = {
  slug: 'facebook-marketplace-scams',
  category: 'everyday',
  title: 'Facebook Marketplace Scams: Fake Buyers, Deposits & Google Voice Codes',
  shortTitle: 'Facebook Marketplace Scams',
  description:
    'Why a Marketplace buyer wants to send you a verification code, why deposits are always Zelle, and how to sell and buy locally without getting caught.',
  keywords: [
    'facebook marketplace scam',
    'marketplace buyer scam',
    'google voice code scam',
    'marketplace verification code scam',
    'is this buyer a scammer',
    'facebook marketplace deposit scam',
  ],
  published: '2026-03-19',
  updated: '2026-07-22',
  authorId: 'editorial-team',
  readingMinutes: 10,
  quickAnswer:
    'A buyer who asks you to send them a verification code "to prove you are real" is hijacking your phone number to create a Google Voice account in your name. No legitimate buyer needs a code. Sell locally, meet in public, take cash or verify funds inside your own app, and never accept a payment screenshot as proof.',
  keyTakeaways: [
    'Never share a verification code with a buyer or seller. There is no legitimate reason for one.',
    'A screenshot is not a payment. Refresh your own app and see the funds before handing anything over.',
    'Zelle deposits for items you have not seen are effectively cash and are not recoverable.',
    'Overpayment followed by a refund request is the same trap in every marketplace.',
  ],
  body: [
    {
      type: 'p',
      text: 'You list a sofa. Within minutes a buyer messages: interested, can collect tomorrow, but they have been scammed before and want to check you are a real person. They will send a code to your phone — could you just read it back?',
    },
    {
      type: 'p',
      text: 'The request sounds cautious, even considerate. It is the most common scam on the platform, and what it actually does is use your phone number to create a Google Voice account controlled by the scammer. The code arrives from Google because they entered your number on Google\'s own verification screen; passing it back completes the setup. They now hold a phone number verified against you, which is used to run further scams while the trail leads to your number.',
    },
    {
      type: 'p',
      text: 'Marketplace fraud is unusually worth understanding because both sides are targeted, and the schemes are highly formulaic. The stories change; the mechanisms do not. Learn six patterns and essentially everything you encounter is a variation on one of them.',
    },
    { type: 'h2', text: 'Scams that target sellers' },
    { type: 'h3', text: '1. The verification code' },
    {
      type: 'p',
      text: 'Covered above. Any buyer requesting a code is hijacking your number, most often for Google Voice. There is no scenario in which a genuine buyer needs a code sent to your phone, and no verification feature on any marketplace works this way. The correct answer is always no.',
    },
    { type: 'h3', text: '2. The fake payment screenshot' },
    {
      type: 'p',
      text: 'The buyer arrives, shows a convincing "payment sent" screen, and takes the item. No money moves. The screen is either edited or a lookalike page. A variant sends a fake email claiming the payment is held in escrow and will be released once you provide tracking or a shipping fee. Verify inside your own app, refreshed, before anything changes hands.',
    },
    { type: 'h3', text: '3. The overpayment refund' },
    {
      type: 'p',
      text: 'The buyer sends more than the asking price, blames a typo, and asks you to return the difference. The original payment is later reversed as stolen; the refund you sent is not. This is identical in structure to the accidental transfer scam and to fake check employment fraud.',
    },
    { type: 'h3', text: '4. The shipping-only buyer' },
    {
      type: 'p',
      text: 'They cannot collect in person, and offer to arrange a courier — sometimes with a relative or an agent paying on their behalf. This exists to move the transaction out of local, cash, face-to-face conditions where fraud is hardest. On a local marketplace, an insistence on shipping for a bulky item is a signal in itself.',
    },
    { type: 'h2', text: 'Scams that target buyers' },
    { type: 'h3', text: '5. The deposit to hold' },
    {
      type: 'p',
      text: 'A listing priced below market, high interest, and a request for a Zelle or Cash App deposit to hold it. The photos are stolen from a genuine listing elsewhere. Because these transfers are authorized by you and settle almost instantly, recovery is close to zero. This is the dominant scam in rentals, event tickets, puppies and vehicles.',
    },
    { type: 'h3', text: '6. The rental and vehicle variant' },
    {
      type: 'p',
      text: 'An apartment or car priced attractively, an owner conveniently out of state, and a request for a deposit before viewing. Sometimes an inspection or shipping service is invented as an escrow. Never pay a deposit on a property or vehicle you have not physically seen, and treat any third-party escrow suggested by the seller as fake unless you independently verified it exists.',
    },
    {
      type: 'alert',
      variant: 'danger',
      title: 'Never share a verification code, with anyone, ever',
      text: 'This deserves stating on its own because it spans every scam on this site. A one-time code is proof that someone is trying to complete an action right now — a login, an account creation, a password reset, a payment. Whoever asks you to read it aloud is the person performing that action. Marketplaces, banks, delivery firms and buyers never need a code from you. There is no exception worth remembering.',
    },
    {
      type: 'table',
      caption: 'Payment methods ranked for marketplace safety',
      headers: ['Method', 'Safety for a local sale', 'Why'],
      rows: [
        [
          'Cash, in person',
          'Best',
          'No reversal risk, no account details exchanged. Meet in a public place.',
        ],
        [
          'PayPal goods and services',
          'Good for buyers',
          'Purchase protection applies if the item never arrives or is misdescribed.',
        ],
        [
          'Credit card',
          'Good for buyers',
          'Chargeback rights are the strongest consumer protection available.',
        ],
        [
          'Venmo or PayPal friends-and-family',
          'Poor',
          'Waives buyer protection entirely — which is why scammers request it.',
        ],
        [
          'Zelle',
          'Poor',
          'Bank-to-bank, near-instant, no purchase protection and effectively final.',
        ],
        [
          'Cash App',
          'Poor',
          'No purchase protection on standard peer payments.',
        ],
        [
          'Gift cards or crypto',
          'Never',
          'No legitimate marketplace transaction uses these.',
        ],
      ],
    },
    {
      type: 'checklist',
      title: 'Red flags in a marketplace conversation',
      intro: 'Two or more of these should end the transaction.',
      items: [
        'They ask you to send or confirm a verification code for any reason.',
        'They want to move immediately to text, WhatsApp or email, off the platform.',
        'The profile was created recently, has no photo, or has no history.',
        'They offer to pay more than you asked, or overpay and request a refund.',
        'They insist on shipping a bulky item listed for local collection.',
        'They request a deposit to hold an item or property you have not seen.',
        'They show a payment screenshot instead of funds visible in your own app.',
        'The price is far below market for the condition described.',
        'They refuse a phone or video call, or will not answer specific questions about the item.',
        'They introduce an unfamiliar escrow, shipping or inspection service.',
      ],
    },
    { type: 'h2', text: 'Selling safely' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Keep all communication inside the platform. Off-platform chats leave no record for disputes and are where pressure tactics work.',
        'Take cash for local sales, and count it before the item leaves. If you prefer electronic payment, confirm it inside your own app, refreshed, before handover.',
        'Meet in a public place with cameras. Many police departments operate designated exchange zones in their parking lots — search for one in your area.',
        'Bring someone with you, and tell a third person where you are going and when you expect to be back.',
        'Never invite a buyer into your home. For furniture and appliances, meet at the door or in the driveway.',
        'Refuse every code request, every overpayment, and every proposal to ship a locally listed bulky item.',
        'Screenshot the profile and conversation before you meet, since accounts are frequently deleted after a scam.',
      ],
    },
    { type: 'h2', text: 'Buying safely' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Never pay a deposit for something you have not seen in person. This single rule eliminates most buyer-side losses.',
        'Reverse image search the listing photos. Stolen images appearing on other listings or stock sites is conclusive.',
        'Pay in person, in cash, after inspecting — or use a credit card or PayPal goods-and-services if the sale must be remote.',
        'Check the profile age and history. Accounts created days ago with no activity are the norm for scam listings.',
        'Insist on a video call showing the item, with something specific held up. Scammers using stolen photos cannot comply.',
        'Verify vehicles and rentals independently: run the VIN, check the property against county records, and confirm the seller actually owns it.',
        'Treat any escrow, shipping or inspection service the seller proposes as fake unless you found it independently and verified it exists.',
      ],
    },
    { type: 'h2', text: 'If you have already been caught' },
    {
      type: 'timeline',
      title: 'Marketplace scam response',
      steps: [
        {
          window: 'Immediately',
          title: 'If you shared a code, secure the account it belonged to',
          text: 'Identify which service sent it. For a Google Voice hijack, go to voice.google.com, sign in, and reclaim or unlink your number. Then change the password on that account and check for unfamiliar devices and recovery options.',
        },
        {
          window: 'Within the hour',
          title: 'Contact your bank or the payment app',
          text: 'Ask for a recall on any transfer you sent — this only works while funds remain in the receiving account. Report the transaction in-app as well, and record the claim number.',
        },
        {
          window: 'Same day',
          title: 'Preserve evidence and report the account',
          text: 'Screenshot the listing, profile and full conversation before they are deleted, then report the account to the platform. Reporting is the fastest route to stopping the same listing reaching others.',
        },
        {
          window: 'Same day',
          title: 'Do not return an overpayment',
          text: 'If money arrived unexpectedly or in excess, do not send any of it back. Report it inside the app and let the platform reverse it. A manual return goes to the fraudster and is not reversed.',
        },
        {
          window: 'Days 1–3',
          title: 'File official reports',
          text: 'Report at ReportFraud.ftc.gov and with IC3. For an in-person theft or a threatening encounter, file with local police — you will need a report number for most insurance and bank claims.',
        },
        {
          window: 'Week 1',
          title: 'Escalate a denied claim',
          text: 'If your bank or the payment app refuses a claim you believe is valid, file a CFPB complaint naming the institution.',
        },
      ],
    },
    {
      type: 'report',
      title: 'Report a marketplace scam',
      text: 'Report the account to the platform first — that is what removes the listing. Then file federally.',
      agencies: ['ftc', 'ic3', 'cfpb'],
    },
    {
      type: 'p',
      text: 'Marketplace fraud rewards a small number of habits far more than vigilance. Meet in public, take cash, verify funds in your own app rather than on someone else\'s screen, never pay for something unseen, and never read out a code. Those five rules cover essentially every pattern above, and none of them require you to correctly judge whether a particular stranger is honest — which is the judgment these scams are specifically designed to defeat.',
    },
  ],
  howTo: {
    name: 'How to buy and sell safely on Facebook Marketplace',
    description:
      'Practical safety procedure for local marketplace transactions, plus recovery steps after a scam.',
    totalTime: 'PT30M',
    steps: [
      {
        name: 'Refuse every verification code request',
        text: 'No legitimate buyer or seller needs a code sent to your phone. The request exists to hijack your number, usually for Google Voice.',
      },
      {
        name: 'Keep communication on the platform',
        text: 'Off-platform chats leave no record for disputes and are where pressure tactics are applied.',
      },
      {
        name: 'Meet in a public exchange zone',
        text: 'Use a police-designated exchange location or a busy area with cameras. Bring someone and tell a third person where you are.',
      },
      {
        name: 'Take cash, or verify funds in your own app',
        text: 'Count cash before the item leaves. Never accept a screenshot as proof — refresh your own app and see the balance change.',
      },
      {
        name: 'Never pay a deposit for an unseen item',
        text: 'Inspect in person first. Reverse image search the listing photos and check the profile’s age and history.',
      },
      {
        name: 'Reject overpayments and refund requests',
        text: 'Do not return excess funds manually. Report the transaction in-app and let the platform reverse it.',
      },
      {
        name: 'Act fast if caught',
        text: 'Reclaim any hijacked number at voice.google.com, request a recall from your bank, screenshot everything, and report the account.',
      },
    ],
  },
  faq: [
    {
      question: 'Why does a buyer want to send me a verification code?',
      answer:
        'To hijack your phone number. They enter your number on Google Voice’s signup page, which causes Google to text you a genuine verification code. Reading it back completes the creation of a Google Voice account tied to your number, which they then use to run further scams while the trail points at you. No marketplace has a verification feature that works this way, and no legitimate buyer needs a code from you under any circumstances.',
    },
    {
      question: 'I already gave someone a Google Voice code. How do I undo it?',
      answer:
        'Go to voice.google.com and sign in with your Google account. If your number was claimed, use the option to reclaim or unlink it — Google provides a flow specifically for this. Then change your Google password, review devices with access, and check your recovery phone and email for unfamiliar entries. Act quickly, because the longer the number stays linked the more activity is attached to it.',
    },
    {
      question: 'Is Zelle safe for Marketplace purchases?',
      answer:
        'No, and this is the most common way buyers lose money. Zelle moves directly between bank accounts, settles in minutes, and carries no purchase protection — functionally it is cash sent at a distance. Because you authorized the transfer, you fall outside the strongest federal protections. It is fine for paying someone you know personally, and a poor choice for any stranger. Use cash in person, or a credit card or PayPal goods-and-services remotely.',
    },
    {
      question: 'A buyer showed me a payment confirmation but nothing arrived. What happened?',
      answer:
        'You were shown a fake — either an edited screenshot or a lookalike page built to mimic the app’s payment-sent screen. These are convincing enough to work under the time pressure of an in-person handover. There is also a variant using fake "payment held in escrow, send tracking to release" emails. The only reliable check is opening your own app, refreshing, and seeing the balance change.',
    },
    {
      question: 'Someone overpaid and wants the difference back. Should I refund them?',
      answer:
        'No. The original payment was almost certainly funded by a stolen card or hacked account and will be reversed out of your balance once reported. The refund you send goes to an account the fraudster controls and is not reversed, leaving you out the full amount. Do not send anything back. Report the transaction inside the app, let the platform reverse it, and stop replying to the sender.',
    },
    {
      question: 'How can I tell if a listing is using stolen photos?',
      answer:
        'Reverse image search them — save the images and upload them to Google Images or TinEye. Stolen photos frequently appear on real estate sites, other marketplaces or stock libraries. Also ask for a video call with the item in view and something specific held up, such as a handwritten note with today’s date. A seller using stolen photos cannot produce that, and the request is entirely reasonable for anything of value.',
    },
  ],
  sources: [
    {
      label: 'Shopping online and marketplace scams',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-avoid-scam',
    },
    {
      label: 'Mobile Payment Apps: How to Avoid a Scam',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/what-know-about-payment-apps',
    },
    {
      label: 'Internet Crime Complaint Center (IC3)',
      publisher: 'Federal Bureau of Investigation',
      url: 'https://www.ic3.gov/',
    },
    {
      label: 'Submit a complaint about a financial product or service',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/complaint/',
    },
  ],
  related: [
    'p2p-accidental-transfer-scam',
    'fake-remote-work-check-deposit-scams',
    'gift-card-scams',
  ],
};
