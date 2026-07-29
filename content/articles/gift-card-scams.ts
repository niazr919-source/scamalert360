import type { Article } from '../types';

export const article: Article = {
  slug: 'gift-card-scams',
  category: 'credit-cards',
  title: 'Gift Card Scams: Why Fraudsters Ask for Them & Card Draining',
  shortTitle: 'Gift Card Scams & Draining',
  description:
    'Nobody legitimate is ever paid in gift cards. Learn why fraudsters insist on them, how in-store card draining works, and what to do in the first hour after paying.',
  keywords: [
    'gift card scam',
    'gift card draining',
    'scammer asked for gift cards',
    'tampered gift card',
    'apple gift card scam',
    'gift card scam refund',
  ],
  published: '2026-01-09',
  updated: '2026-07-17',
  authorId: 'editorial-team',
  readingMinutes: 9,
  quickAnswer:
    'A gift card is a bearer instrument: whoever holds the numbers holds the money, with no name attached and no reversal mechanism. That is precisely why fraudsters demand them. No legitimate business or agency is ever paid in gift cards, and separately, cards on store racks are sometimes tampered with so the balance is drained the moment you load it.',
  keyTakeaways: [
    'Gift cards cannot be reversed, traced to a person, or disputed like a card payment.',
    'The request itself is the tell — no agency, utility, employer or bank is paid this way.',
    'Report to the card brand within the hour; unspent balances are occasionally frozen.',
    'Card draining is a separate problem: inspect packaging before buying, and keep receipts.',
  ],
  body: [
    {
      type: 'p',
      text: 'Almost every scam eventually needs an answer to one question: how does the money actually get out? For a fraudster, that is a harder problem than persuasion. Bank transfers can be recalled, card charges reversed, and receiving accounts frozen. The payment method has to be one where possession is final.',
    },
    {
      type: 'p',
      text: 'Gift cards solve this. A gift card is a bearer instrument — the value belongs to whoever holds the number and PIN, with no account holder, no identity check and no reversal process. Once you read those digits aloud, the balance can be spent or resold within minutes from anywhere in the world. There is no bank to call and no transaction to dispute, because from the retailer\'s perspective nothing irregular happened.',
    },
    {
      type: 'p',
      text: 'This makes gift cards uniquely useful in a way that turns out to be an advantage for you: the request is a reliable signal in itself. You do not need to evaluate the caller\'s story, their credentials, or the number on your screen. If the payment method is gift cards, the answer is no.',
    },
    {
      type: 'keyStat',
      value: 'A bearer instrument',
      label: 'Gift card value transfers to whoever holds the number and PIN, with no identity attached and no reversal mechanism',
      source: 'Federal Trade Commission — gift card scam guidance',
      url: 'https://consumer.ftc.gov/articles/gift-card-scams',
    },
    { type: 'h2', text: 'Who asks for gift cards, and what they claim' },
    {
      type: 'p',
      text: 'The pretexts vary enormously; the payment demand never does. Recognizing the list below is more useful than trying to evaluate any individual story.',
    },
    {
      type: 'table',
      caption: 'Common gift card demands and the reality',
      headers: ['The claim', 'The reality'],
      rows: [
        [
          'IRS, SSA or police demanding payment of a debt or fine',
          'No government agency accepts gift cards. Federal payments go to the US Treasury.',

        ],
        [
          'Tech support charging for a security plan',
          'Microsoft and Apple do not take gift cards, and never call about infections.',
        ],
        [
          'Your boss urgently needing cards for client gifts',
          'Business email compromise. Verify by phone on a number you already have.',
        ],
        [
          'Utility company threatening same-day disconnection',
          'Utilities have documented arrears processes and accept normal payment methods.',
        ],
        [
          'A grandchild or relative needing bail money',
          'Courts do not take gift cards. Hang up and call the relative directly.',
        ],
        [
          'A romantic partner with a temporary emergency',
          'Requests for gift cards from someone you have not met in person are fraud.',
        ],
        [
          'A prize or lottery requiring a fee to release winnings',
          'Legitimate prizes never require advance payment of any kind.',
        ],
        [
          'An employer sending funds for equipment',
          'Real employers ship equipment or reimburse; they do not route you through gift cards.',
        ],
      ],
    },
    {
      type: 'alert',
      variant: 'danger',
      title: 'One rule replaces this entire table',
      text: 'Nobody legitimate is ever paid in gift cards. Not a government agency, not a court, not a utility, not a bank, not a tech company, not your employer, not a landlord, not a debt collector. If someone insists on gift cards as payment, that alone is conclusive — you do not need to assess anything else about the story, and you do not owe them an explanation before hanging up.',
    },
    { type: 'h2', text: 'The scripts used at the register' },
    {
      type: 'p',
      text: 'Fraudsters know that retail staff are trained to intervene, and that many stores now display warnings at the gift card rack. So the script includes instructions for getting past that, and hearing any of them should stop you where you stand.',
    },
    {
      type: 'list',
      items: [
        'Stay on the phone throughout the purchase, so you never have a private moment to reconsider.',
        'Split the purchase across several stores to avoid limits and staff attention.',
        'If asked, say the cards are gifts for family — a direct instruction to lie to the cashier.',
        'Buy from different registers or use self-checkout.',
        'Photograph the back of each card and send the images immediately, before leaving the store.',
        'Do not discuss the transaction with anyone, including staff, because the "investigation is confidential".',
      ],
    },
    {
      type: 'alert',
      variant: 'warning',
      title: 'If you are being told to lie about why you are buying them',
      text: 'That instruction exists for one reason: the truth would stop the transaction. Any legitimate purpose survives being said out loud at a checkout. If a caller has told you what to say to a cashier, hang up before you pay — and if you are already at the register, tell the cashier what is happening. Retail staff intervene in this situation regularly and are usually trained for it.',
    },
    { type: 'h2', text: 'Gift card draining: a different problem' },
    {
      type: 'p',
      text: 'This one has nothing to do with a caller. In card draining, criminals take cards from an in-store rack, record the barcode, card number and PIN, restore the packaging, and return them. The card sits inactive with zero balance, so nothing looks wrong. When you buy it and it is activated at the register, the value becomes available — and automated scripts monitoring those numbers spend it, sometimes within minutes.',
    },
    {
      type: 'p',
      text: 'The recipient opens a card with no balance, usually long after purchase, and the trail is cold. A few checks at the point of purchase remove most of the risk.',
    },
    {
      type: 'checklist',
      title: 'Checking a gift card before you buy it',
      intro: 'Ten seconds at the rack.',
      items: [
        'Inspect the packaging for tears, re-glued edges, or a sleeve that slides off too easily.',
        'Check whether the PIN scratch-off strip has been scratched and covered over with a sticker.',
        'Compare the card against others on the rack — a mismatched sleeve or barcode is a warning.',
        'Confirm the number on the card matches the number on the packaging.',
        'Take cards from the back of the rack rather than the front, and avoid displays near the entrance.',
        'Keep the receipt and the physical card together; without both, a claim is almost impossible.',
        'Ask the recipient to check the balance promptly rather than months later.',
        'Prefer buying gift cards directly from the retailer’s own website or customer service desk.',
      ],
    },
    { type: 'h2', text: 'What to do in the first hour after paying a scammer' },
    {
      type: 'p',
      text: 'Recovery odds are genuinely poor, and it would be dishonest to suggest otherwise. But they are not always zero, and the variable that matters most is speed. Cards are not always drained instantly — there is sometimes a window of minutes to hours, and a freeze request inside that window occasionally works.',
    },
    {
      type: 'timeline',
      title: 'Gift card scam recovery timeline',
      steps: [
        {
          window: 'Minutes 0–15',
          title: 'Call the card brand’s fraud line',
          text: 'Not the retailer that sold it — the brand on the card. Apple, Google Play, Amazon, Steam, Target and Walmart all operate gift card fraud lines. Give the card numbers and ask them to freeze any unspent balance. Do this before anything else.',
        },
        {
          window: 'Minutes 15–30',
          title: 'Notify the store where you bought them',
          text: 'Some retailers can assist, particularly if the cards were purchased very recently and you have the receipts. Keep the physical cards and receipts together — without both, most claims cannot proceed.',
        },
        {
          window: 'Hour 1',
          title: 'Stop all contact',
          text: 'Do not send more cards, and do not respond to any further requests. Screenshot the messages first as evidence, then block. Expect claims that one more payment will release everything — that is the script continuing.',
        },
        {
          window: 'Same day',
          title: 'Report to the FTC and IC3',
          text: 'File at ReportFraud.ftc.gov and with IC3. Include the card brands, numbers, amounts, purchase locations and the contact details of whoever asked.',
        },
        {
          window: 'Days 1–3',
          title: 'Protect anything else you disclosed',
          text: 'If you also shared personal or banking details, treat it as identity exposure: fraud alert or credit freeze at all three bureaus, and a plan at IdentityTheft.gov.',
        },
        {
          window: 'Ongoing',
          title: 'Expect the recovery scam',
          text: 'Anyone who paid once is added to a resold list of proven targets. Firms offering to recover gift card losses for a fee are a second fraud, without exception.',
        },
      ],
    },
    {
      type: 'alert',
      variant: 'info',
      title: 'Keep the cards and the receipts',
      text: 'People often throw away drained cards in frustration. Do not. The physical card and the purchase receipt are the only evidence supporting any claim, and card brands generally cannot investigate without the numbers. Photograph both, keep the originals, and hold on to them even if the first response is a refusal.',
    },
    {
      type: 'report',
      title: 'Report a gift card scam',
      text: 'Call the card brand first — that is the only step with any chance of recovering funds.',
      agencies: ['ftc', 'ic3', 'identityTheft'],
    },
    {
      type: 'p',
      text: 'What makes gift card fraud worth understanding is how little judgment it requires from you. Most scam advice asks you to assess plausibility under pressure, which is exactly the condition in which people assess badly. This one collapses to a single fact with no exceptions: legitimate organizations are not paid in gift cards. You can hold that rule without knowing anything about tax law, bank procedures or the story you are being told — and it is worth saying out loud to the older people in your life, because it is the one rule that reliably survives the moment.',
    },
  ],
  howTo: {
    name: 'What to do after paying a scammer with gift cards',
    description:
      'Immediate recovery steps after gift card fraud, and how to inspect gift cards for draining before purchase.',
    totalTime: 'PT1H',
    steps: [
      {
        name: 'Stop and send nothing further',
        text: 'Do not buy more cards or send additional numbers, whatever you are told about releasing the earlier payment.',
      },
      {
        name: 'Call the card brand’s fraud line immediately',
        text: 'Contact Apple, Google Play, Amazon, Steam or the relevant brand — not the store — give the card numbers and ask them to freeze any unspent balance.',
      },
      {
        name: 'Notify the retailer that sold the cards',
        text: 'Some retailers can help if the purchase was recent. Bring or reference the receipts.',
      },
      {
        name: 'Keep the physical cards and receipts',
        text: 'These are the only evidence supporting a claim. Photograph them and retain the originals even after a refusal.',
      },
      {
        name: 'Block the contact and preserve evidence',
        text: 'Screenshot the conversation, then stop replying and block. Do not negotiate.',
      },
      {
        name: 'Report to the FTC and IC3',
        text: 'Include card brands, numbers, amounts, purchase locations and the requester’s contact details.',
      },
      {
        name: 'Refuse all recovery offers',
        text: 'Any firm offering to recover gift card losses for an upfront fee is a follow-up scam.',
      },
    ],
  },
  faq: [
    {
      question: 'Why do scammers always want gift cards?',
      answer:
        'Because gift cards are bearer instruments. The value belongs to whoever holds the number and PIN, with no account holder, no identity verification and no reversal mechanism. A fraudster can take the numbers over the phone and spend or resell the balance within minutes from anywhere in the world. Unlike a bank transfer, there is nothing to recall, and unlike a card payment, there is nothing to dispute.',
    },
    {
      question: 'Can I get my money back after sending gift card numbers?',
      answer:
        'Sometimes, though the odds are poor and depend almost entirely on speed. Cards are not always drained instantly, so calling the card brand’s fraud line within the first hour occasionally results in an unspent balance being frozen. Call the brand on the card rather than the retailer, have the numbers and receipts ready, and keep the physical cards. Report to the FTC and IC3 regardless of the outcome.',
    },
    {
      question: 'What is gift card draining?',
      answer:
        'A separate scam with no caller involved. Criminals take cards from a store rack, record the card number and PIN, reseal the packaging and return them. Because the card is not yet activated, nothing appears wrong. When you buy it and it is activated at the register, automated scripts monitoring those numbers spend the balance — often within minutes. The recipient later opens a card worth nothing.',
    },
    {
      question: 'How do I avoid buying a tampered gift card?',
      answer:
        'Inspect before buying: check for torn or re-glued packaging, a PIN strip that has been scratched and covered with a sticker, and any mismatch between the number on the card and the number on the sleeve. Take cards from the back of the rack rather than the front, avoid displays near store entrances, and keep the receipt with the card. Buying directly from the retailer’s own website avoids the problem entirely.',
    },
    {
      question: 'My boss emailed asking me to buy gift cards for clients. Is that real?',
      answer:
        'Almost certainly not — this is one of the most common forms of business email compromise. The request typically arrives by email or text, claims the sender is stuck in a meeting and cannot talk, and stresses urgency and discretion. Verify by calling your manager on a number you already have, never by replying to the message or using a number it supplies. Legitimate corporate purchasing does not run through an employee’s personal card and gift card codes.',
    },
    {
      question: 'The caller said the investigation is confidential. Should I keep it quiet?',
      answer:
        'No. Instructions to keep a payment secret from family, colleagues or store staff exist for exactly one reason: telling someone would end the scam. No genuine legal process, agency investigation or corporate purchase requires you to conceal a gift card purchase from a cashier or a relative. Treat a secrecy request about money as conclusive evidence of fraud on its own.',
    },
  ],
  sources: [
    {
      label: 'Gift Card Scams',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/gift-card-scams',
    },
    {
      label: 'How to Spot, Avoid, and Report Tech Support Scams',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams',
    },
    {
      label: 'Internet Crime Complaint Center (IC3)',
      publisher: 'Federal Bureau of Investigation',
      url: 'https://www.ic3.gov/',
    },
    {
      label: 'Identity theft recovery plans',
      publisher: 'Federal Trade Commission',
      url: 'https://www.identitytheft.gov/',
    },
  ],
  related: [
    'tech-support-popup-scam',
    'irs-social-security-imposter-calls',
    'ai-voice-cloning-emergency-scams',
  ],
};
