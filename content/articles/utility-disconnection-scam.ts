import type { Article } from '../types';

export const article: Article = {
  slug: 'utility-disconnection-scam',
  category: 'banking',
  title: 'Utility Disconnection Scam: "Your Power Will Be Shut Off" Calls',
  shortTitle: 'Utility Disconnection Scam',
  description:
    'A caller claiming to be your electric, gas or water company threatens to cut off service within the hour unless you pay immediately. Learn how the scam works and how to verify a real bill.',
  keywords: [
    'utility disconnection scam',
    'electric company scam call',
    'power shut off scam',
    'utility bill scam payment',
    'fake utility company call',
    'pay electric bill gift card scam',
  ],
  published: '2026-04-29',
  updated: '2026-07-25',
  authorId: 'editorial-team',
  readingMinutes: 8,
  quickAnswer:
    'A caller says your electricity, gas or water will be disconnected within the hour unless you pay a "past-due" balance immediately, usually via a prepaid card, app or cryptocurrency. Real utilities do not operate this way — they send written notices and never demand instant payment by those methods. Hang up and call the number on your actual bill.',
  keyTakeaways: [
    'Real utilities send written disconnection notices well in advance — never a surprise same-hour call.',
    'Demanding a prepaid debit card, gift card, wire or crypto is proof of a scam.',
    'The urgency and the threat of imminent shut-off are the entire manipulation.',
    'Verify any claim by calling the number printed on your bill, never the number that called you.',
  ],
  body: [
    {
      type: 'p',
      text: 'The call comes during business hours, and the pressure is immediate. A representative from your electric company says your account is seriously past due and a disconnection crew has been dispatched — your power will be cut within the hour unless you settle the balance right now. To stop it, you are told to buy a prepaid debit card, or use a specific payment app, or in some versions send cryptocurrency, and to stay on the line while you do it.',
    },
    {
      type: 'p',
      text: 'The fear of losing heat, light, or water — especially for a business that cannot operate without power, or a household with children or medical needs — is designed to override the pause where you would normally think it through. That is why utility impersonation is one of the most common and effective imposter scams, and why it spikes during heat waves and cold snaps when a shut-off feels most threatening.',
    },
    {
      type: 'p',
      text: 'But real utility companies operate under regulations that make almost everything about this call impossible. Once you know how genuine disconnection actually works, the scam becomes easy to spot in seconds.',
    },
    {
      type: 'keyStat',
      value: 'Written notice, by law',
      label: 'Regulated utilities must provide advance written notice before disconnecting service — a surprise same-hour phone demand is not how the process works',
      source: 'FTC — consumer advice on impostor scams',
      url: 'https://consumer.ftc.gov/articles/how-avoid-imposter-scam',
    },
    { type: 'h2', text: 'How real utility billing actually works' },
    {
      type: 'p',
      text: 'Utilities are heavily regulated, and disconnection is a slow, documented process — the opposite of a surprise phone call. If you genuinely fall behind, you receive written notices, typically over weeks, with clear due dates and information about assistance programs and your right to dispute. Many jurisdictions also prohibit shut-offs during extreme weather or for households with certain medical needs.',
    },
    {
      type: 'p',
      text: 'A real utility also accepts normal payment methods — your bank account, a card through their official system, mailed checks, in-person payment centers. No legitimate utility requires you to pay a past-due balance using a prepaid gift card bought from a drugstore, a peer-to-peer app to an individual, or cryptocurrency. Those methods exist in the script for one reason: they cannot be reversed once the money is gone.',
    },
    {
      type: 'table',
      caption: 'Real utility company vs. the scam call',
      headers: ['Signal', 'Real utility', 'Scam caller'],
      rows: [
        [
          'First contact about a debt',
          'Mailed written notice, weeks ahead',
          'Sudden phone call demanding payment now',
        ],
        [
          'Timeline',
          'Advance due dates, chance to dispute or arrange help',
          '"Within the hour" or "a crew is on the way"',
        ],
        [
          'Payment methods',
          'Bank, card via official portal, check, in person',
          'Prepaid/gift card, payment app to a person, crypto, wire',
        ],
        [
          'Pressure to stay on the line',
          'None — you can hang up and call back',
          'Insists you stay on the phone while you pay',
        ],
        [
          'Caller ID',
          'Not a reliable signal either way',
          'Often spoofed to show the utility’s real number',
        ],
        [
          'Account details',
          'They have your real account information',
          'Vague, or asks you to confirm your account number',
        ],
      ],
    },
    {
      type: 'alert',
      variant: 'danger',
      title: 'The payment method is the giveaway',
      text: 'You do not need to know your account balance or argue about the bill. If a caller claiming to be your utility asks for payment by prepaid card, gift card, a peer-to-peer app, wire transfer, or cryptocurrency, it is a scam — full stop. No regulated utility in the US collects a past-due balance that way. That single fact resolves the call without any further discussion.',
    },
    { type: 'h2', text: 'The variations to watch for' },
    {
      type: 'p',
      text: 'The core threat — pay now or lose service — stays constant, but the details rotate. Recognizing the variants keeps you from being caught by a fresher-sounding version.',
    },
    {
      type: 'list',
      items: [
        'The overpayment refund: they claim you overpaid and need your bank details to "refund" you — a ploy to capture account information.',
        'The reconnection fee: aimed at people whose service was genuinely disconnected, demanding an upfront fee to restore it faster.',
        'The new-meter or equipment fee: a claimed charge for a "mandatory" smart-meter upgrade, payable immediately.',
        'The business-hours blitz: restaurants and small shops are called during peak service, when losing power is most costly and staff are most rushed.',
        'The text or email version: a "final notice" message with a payment link to a cloned utility page that harvests card details.',
        'The in-person follow-up: someone arrives claiming to be a technician who needs immediate payment or access — do not admit them; call the utility to verify.',
      ],
    },
    { type: 'h2', text: 'What to do when you get the call' },
    {
      type: 'timeline',
      title: 'Handling a utility disconnection call',
      steps: [
        {
          window: 'During the call',
          title: 'Do not pay, and hang up',
          text: 'Do not buy any card, send any app payment, or confirm account or bank details. You owe the caller no explanation. Simply end the call — a real utility will never object to you hanging up and calling back.',
        },
        {
          window: 'Next 5 minutes',
          title: 'Call the number on your bill',
          text: 'Find your account number and the customer service number on a past bill or the utility\'s official website (typed, not searched blindly), and call to ask whether there is genuinely any past-due balance. There almost never is.',
        },
        {
          window: 'If someone is at your door',
          title: 'Do not admit them or pay on the spot',
          text: 'If a supposed technician arrives demanding payment or access, keep the door closed and call the utility\'s published number to verify. Real field staff carry ID and their visits can be confirmed by the company.',
        },
        {
          window: 'If you already paid',
          title: 'Act immediately by payment method',
          text: 'For a prepaid or gift card, call the card brand\'s fraud line with the numbers and receipts to try to freeze the balance. For an app or card payment, contact your bank to attempt a recall. Speed matters.',
        },
        {
          window: 'Same day',
          title: 'Report it',
          text: 'Report to your real utility (they track impersonation of their brand and often post alerts), to the FTC, and to IC3 if money was sent electronically.',
        },
      ],
    },
    {
      type: 'alert',
      variant: 'info',
      title: 'Genuinely behind on a bill? You still have time and options',
      text: 'Even if you know you are behind, the real process gives you room: written notice, the ability to dispute, payment arrangements, and assistance programs like LIHEAP for energy costs. None of that collapses into a same-hour phone demand. If you are worried about a real balance, call the number on your bill and ask — calmly, on your own timeline.',
    },
    {
      type: 'report',
      title: 'Report a utility scam',
      text: 'Tell your actual utility first — then file federally. Contact your bank or card issuer immediately if any payment was made.',
      agencies: ['ftc', 'ic3', 'cfpb'],
    },
    {
      type: 'p',
      text: 'The utility disconnection scam works purely on manufactured urgency: it needs you to act before you can verify. Everything about a real utility bill runs on the opposite timeline — advance written notice, normal payment methods, the right to question the charge, and no penalty for taking an hour to check. So the pressure itself is the signal. A caller who cannot let you hang up and phone the number on your own bill is telling you, by that fact alone, that they are not your utility.',
    },
  ],
  howTo: {
    name: 'How to handle a utility disconnection scam call',
    description:
      'Steps to verify a threatened utility shut-off and respond safely if you already paid.',
    totalTime: 'PT30M',
    steps: [
      {
        name: 'Do not pay and hang up',
        text: 'Refuse any prepaid card, app, wire or crypto payment and end the call. A real utility will not object to you calling back.',
      },
      {
        name: 'Apply the payment-method test',
        text: 'No regulated utility collects a past-due balance by gift card, peer-to-peer app, wire or cryptocurrency. Any such request is conclusive.',
      },
      {
        name: 'Call the number on your bill',
        text: 'Use the customer service number from a past bill or the official website to confirm whether any balance is actually due.',
      },
      {
        name: 'Do not admit a door-to-door "technician"',
        text: 'If someone arrives demanding payment or access, keep the door closed and verify through the utility’s published number.',
      },
      {
        name: 'Act fast if you paid',
        text: 'Call the gift card brand’s fraud line or your bank to attempt to freeze or recall the payment, with receipts ready.',
      },
      {
        name: 'Report it',
        text: 'Notify your real utility, the FTC, and IC3 if money moved electronically.',
      },
    ],
  },
  faq: [
    {
      question: 'Will my power really be shut off within the hour?',
      answer:
        'No. Regulated utilities disconnect service through a slow, documented process that begins with written notice weeks in advance and includes your right to dispute the charge and arrange payment or assistance. A same-hour phone threat is not how any of it works — the imminent deadline exists only to stop you taking the few minutes needed to verify the claim. There is no crew on the way.',
    },
    {
      question: 'The caller ID showed my utility’s real number. Doesn’t that prove it’s them?',
      answer:
        'No. Caller ID is set by the caller and is routinely spoofed to display a legitimate company\'s real phone number. It is decoration, not identification. Treat the number on your screen as meaningless and verify by calling the customer service line printed on your actual bill or the utility\'s official website — a number you look up yourself, never the one that called you.',
    },
    {
      question: 'How can I tell if I actually owe a past-due balance?',
      answer:
        'Hang up and call the number on your bill, or log in to your utility account directly through their official website. Your real account status is there in black and white. If there genuinely is a balance, you will also have received written notice and will have options to dispute it or arrange payment — none of which requires paying a stranger on the phone with a prepaid card in the next hour.',
    },
    {
      question: 'They want me to pay with a prepaid card from the store. Is that ever legitimate?',
      answer:
        'Never, for a utility bill. No regulated US utility collects a past-due balance via prepaid debit cards, gift cards, peer-to-peer apps to an individual, wire transfers, or cryptocurrency. These methods are chosen precisely because they cannot be reversed. The moment a "utility" caller specifies any of them, you can end the call with certainty — no further discussion about the supposed balance is needed.',
    },
    {
      question: 'I run a small business and got this during the lunch rush. Why me?',
      answer:
        'Businesses are targeted deliberately, and timed for maximum pressure. A restaurant or shop losing power mid-service faces immediate, visible losses, and staff are too busy to stop and verify — exactly the conditions the scam needs. The defense is the same: no legitimate utility demands instant payment by irreversible methods, and you can always call the number on your bill to confirm before paying anything.',
    },
    {
      question: 'What if I actually am behind on my utility bill?',
      answer:
        'You still have the normal protections and time. Real utilities provide written notice, the ability to dispute, payment plans, and access to assistance programs such as LIHEAP for energy bills. A genuine past-due balance does not turn into a same-hour phone demand payable by gift card. If you are concerned, call the number on your bill and ask directly — on your own schedule, not a scammer\'s.',
    },
  ],
  sources: [
    {
      label: 'How To Avoid an Imposter Scam',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-avoid-imposter-scam',
    },
    {
      label: 'Utility scams — consumer advice',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/consumer-alerts',
    },
    {
      label: 'Internet Crime Complaint Center (IC3)',
      publisher: 'Federal Bureau of Investigation',
      url: 'https://www.ic3.gov/',
    },
  ],
  related: [
    'irs-social-security-imposter-calls',
    'gift-card-scams',
    'bank-fraud-alert-text-scam',
  ],
};
