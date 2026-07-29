import type { Article } from '../types';

export const article: Article = {
  slug: 'bank-fraud-alert-text-scam',
  category: 'banking',
  title: 'Bank Fraud Alert Text Scam: How Smishing Works & What to Do Next',
  shortTitle: 'Bank Fraud Alert Text Scam',
  description:
    'A fake bank fraud alert text is the opening move in a bank impersonation scam. Learn how smishing works, the three requests that are always fraud, and the recovery steps that still work.',
  keywords: [
    'bank fraud alert text',
    'fake bank sms refund',
    'smishing scam recovery',
    'bank impersonation scam',
    'did you authorize this transaction text',
    'fake fraud alert text message',
  ],
  published: '2025-11-04',
  updated: '2026-06-18',
  authorId: 'editorial-team',
  readingMinutes: 11,
  quickAnswer:
    'A text asking you to reply YES or NO to a suspicious charge is the bait, not the scam. Replying tells the fraudster your number is live and triggers a phone call from a spoofed bank number — and everything they ask for on that call is designed to move your money out. Never reply, never call the number in the text, and never repeat a code aloud.',
  keyTakeaways: [
    'The text itself cannot take your money. The follow-up phone call is where the loss happens.',
    'A real bank will never ask you to move money to a "safe account" — that account does not exist.',
    'One-time passcodes are the fraudster’s target. Reading one aloud authorizes the transaction.',
    'Wire and Zelle transfers you were tricked into sending are far harder to reverse than card charges — speed of reporting is everything.',
  ],
  body: [
    {
      type: 'p',
      text: 'It arrives at an inconvenient moment, which is not an accident. "FREE MSG: Chase Fraud Alert — Did you authorize a $412.87 purchase at BEST BUY #2214? Reply Y for yes, N for no." Your bank name is right. The amount is plausible but large enough to alarm. The formatting looks exactly like the alerts you have genuinely received before. And the only action requested is a single keystroke, which feels harmless.',
    },
    {
      type: 'p',
      text: 'That single keystroke is the entire point. This is smishing — SMS phishing — and the message is not trying to steal anything by itself. It is a filter, designed to sort millions of blasted phone numbers into the small subset belonging to people who bank at that institution, read their texts, and are willing to engage. Everyone who replies has just self-identified as a live, responsive customer, and moves into the next stage of the operation.',
    },
    {
      type: 'p',
      text: 'That next stage is a phone call, and it is where the actual theft happens. Understanding the difference between the two stages is what makes this scam survivable. The text is cheap and harmless. The call is expensive and dangerous. This guide walks through both, then covers exactly what to do in the first hour if you have already engaged — because in bank impersonation fraud, the recovery timeline is measured in minutes, not days.',
    },
    {
      type: 'keyStat',
      value: '$12.5 billion',
      label: 'Reported to the FTC in consumer fraud losses in 2024, with imposter scams the most-reported category',
      source: 'Federal Trade Commission, Consumer Sentinel Network',
      url: 'https://www.ftc.gov/news-events/news/press-releases',
    },
    { type: 'h2', text: 'How the smishing script actually works' },
    {
      type: 'p',
      text: 'Bank impersonation crews run a repeatable four-stage script. Each stage exists to make the next one more believable, and each has a specific tell that you can learn to recognize before any money moves.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Stage 1 — The blast. Tens of thousands of numbers receive an identical fraud alert naming a large bank. The sender has no idea whether you bank there. Statistically, enough recipients will that the campaign pays for itself.',
        'Stage 2 — The filter. You reply "N" or "NO" to dispute the charge. You have now confirmed three things: the number is active, a human reads it, and you bank at the named institution. Your number is promoted to a call list, often within seconds.',
        'Stage 3 — The callback. Your phone rings, often within one to five minutes. The caller ID displays your bank’s real customer service number, because outbound caller ID is trivially spoofable and nothing about it is verified. A calm, professional voice thanks you for flagging the transaction.',
        'Stage 4 — The extraction. The caller "secures" your account. Everything they instruct you to do from this point — read a code, move funds, install software, approve a prompt — transfers money or account control to them, using your own credentials and your own authorization.',
      ],
    },
    {
      type: 'alert',
      variant: 'danger',
      title: 'The stage-3 tell you can always rely on',
      text: 'The fraudster called you. That is the whole tell. Your bank does place outbound fraud calls, but a genuine bank agent will never object if you say "I’ll call you back on the number on my card." A fraudster will always object — because the moment you hang up, their spoofed caller ID advantage evaporates and the script collapses.',
    },
    { type: 'h2', text: 'Why the caller sounds so convincing' },
    {
      type: 'p',
      text: 'People who lose money to this scam are not careless. They are talking to someone who sounds exactly like a competent bank employee, because the operation has been refined across thousands of calls and the script borrows every trust signal a real bank uses.',
    },
    {
      type: 'p',
      text: 'The caller often already knows fragments of your data — the last four digits of your card, your city, sometimes your account opening year — harvested from earlier breaches or bought wholesale. They use partial verification against you: instead of asking you to prove who you are, they prove who they are by reciting information "only your bank would know." It is data that thousands of people have access to, but in the moment it lands as authoritative.',
    },
    {
      type: 'p',
      text: 'They also weaponize your own security instincts. The urgency is framed as protection: your money is at risk, and they are helping. Objecting feels like obstructing a rescue. This is deliberate — it converts your caution into cooperation, which is why "I was suspicious but they were so helpful" is the single most common thing victims say afterward.',
    },
    {
      type: 'table',
      caption: 'Real bank fraud team vs. impersonator: behavioral comparison',
      headers: ['Behavior', 'Genuine bank fraud team', 'Impersonator'],
      rows: [
        [
          'Asks for a one-time passcode',
          'Never. Codes are for you to enter, not to say out loud.',
          'Always — usually framed as "verifying it’s really you."',
        ],
        [
          'You offer to call back on the card number',
          'Encourages it. Will give you a case reference.',
          'Resists, stalls, or warns the line is "monitored."',
        ],
        [
          'Asks you to move money',
          'Never. Banks freeze accounts in place; they do not relocate funds.',
          'Core of the script — a "safe", "protected" or "holding" account.',
        ],
        [
          'Asks you to install software',
          'Never for fraud resolution.',
          'Common — remote access tools framed as "secure connection".',
        ],
        [
          'Pressure and timing',
          'Will let you pause, consult a spouse, or visit a branch.',
          'Manufactured deadlines; discourages telling anyone.',
        ],
        [
          'Asks for full card number / PIN / full SSN',
          'Never asks for a PIN. Verifies with partial data only.',
          'Requests full credentials, often "to close the compromised card."',
        ],
      ],
    },
    { type: 'h2', text: 'The four requests that mean it is always a scam' },
    {
      type: 'p',
      text: 'You do not need to evaluate the caller’s credibility, their accent, their hold music, or the number on your screen. You only need to listen for four specific requests. Every bank impersonation scam requires at least one of them, and no legitimate bank process requires any of them.',
    },
    {
      type: 'checklist',
      title: 'Hang up immediately if the caller asks you to…',
      intro: 'These are not "warning signs to weigh." Any single one ends the call.',
      items: [
        'Read back a one-time passcode, verification code, or any number that arrived by text or app notification.',
        'Transfer, wire or Zelle money to a "safe account", "secure holding account", or an account in your own name they have set up.',
        'Install remote-access or "bank security" software — AnyDesk, TeamViewer, or an app sent by link.',
        'Provide your full card number, PIN, full Social Security number, or online banking password.',
        'Withdraw cash, buy gift cards, or purchase cryptocurrency as part of a "fraud investigation" or "sting operation".',
        'Keep the call secret from family, or stay on the line while you drive to a branch or ATM.',
      ],
    },
    {
      type: 'alert',
      variant: 'warning',
      title: 'The "safe account" does not exist',
      text: 'No bank in the United States maintains a safe, secure, or holding account that customers transfer funds into during a fraud investigation. If an account is compromised, the bank freezes it, reissues cards and opens a new account through a documented process — always initiated by you, never by an inbound caller. The safe account is the single clearest signal of fraud in this entire category, and it is worth teaching to every older relative you have.',
    },
    { type: 'h2', text: 'What to do in the first hour' },
    {
      type: 'p',
      text: 'If you replied to a text but did nothing else, your exposure is low — your number was confirmed as active, nothing more. If you spoke to a caller and followed any instruction, treat the next sixty minutes as the recovery window. Funds that have not yet left the receiving institution can often be frozen; funds that have been cashed out rarely come back.',
    },
    {
      type: 'timeline',
      title: 'Bank impersonation recovery timeline',
      intro: 'Work top to bottom. Do not skip ahead to reporting before you have contacted your bank.',
      steps: [
        {
          window: 'Minutes 0–10',
          title: 'Call the number on the back of your card',
          text: 'Not the number the caller gave you, not a number from a search result, and not a callback in your recent-calls list. Read the number physically printed on your card or from your bank’s official app. Say the words "I am reporting fraud in progress" — that phrasing routes you to the team with authority to place immediate holds.',
        },
        {
          window: 'Minutes 10–20',
          title: 'Request a freeze, a recall, and new credentials',
          text: 'Ask explicitly for three things: a hold on the account, a recall or reversal attempt on any transfer that left, and reissued cards plus a forced password reset. Get a case or claim reference number before you hang up and write it down.',
        },
        {
          window: 'Minutes 20–40',
          title: 'Lock down the digital perimeter',
          text: 'Change your online banking password and email password from a different device if you installed anything the caller sent. Remove unrecognized devices from your banking app’s trusted list. If you granted remote access, disconnect that device from the internet and have it inspected before you use it for banking again.',
        },
        {
          window: 'Hours 1–24',
          title: 'File the written dispute',
          text: 'A phone report is not a dispute. Ask your bank how to submit written notice of unauthorized activity and submit it the same day. Written notice is what starts your formal protection clock under federal rules, and it creates the paper trail you will need if the first decision goes against you.',
        },
        {
          window: 'Days 1–3',
          title: 'Report to the FTC and IC3',
          text: 'File with ReportFraud.ftc.gov and, if a wire or online transfer was involved, with the FBI’s IC3. IC3 operates a recovery asset process that has succeeded in freezing domestic wire transfers, but it works on very short timelines — same-day filing matters materially.',
        },
        {
          window: 'Week 1',
          title: 'Add credit protections and escalate if needed',
          text: 'Place a free fraud alert and consider a credit freeze at all three bureaus. If your bank denies the claim and you believe the transaction was unauthorized, file a CFPB complaint — regulated institutions must respond substantively to those.',
        },
      ],
    },
    { type: 'h2', text: 'What you can actually get back' },
    {
      type: 'p',
      text: 'This is where honest guidance matters more than reassurance. Your protection depends almost entirely on how the money moved, and the differences are severe. The critical legal distinction is between an unauthorized transaction — one you did not make or approve — and an authorized push payment, where you were deceived into sending the money yourself. Consumer protection law is strong on the first and much weaker on the second.',
    },
    {
      type: 'table',
      caption: 'Reversibility by payment method',
      headers: ['How money left', 'Realistic recovery odds', 'What governs it'],
      rows: [
        [
          'Credit card charge',
          'Strong',
          'Fair Credit Billing Act dispute rights plus card network chargeback rules; liability for unauthorized use is capped at $50 and most issuers waive it.',
        ],
        [
          'Debit card charge',
          'Good if reported fast',
          'Regulation E. Liability escalates sharply with delay — report within two business days of learning of the loss to stay at the lowest tier.',
        ],
        [
          'Unauthorized online transfer',
          'Good',
          'Regulation E covers electronic transfers you did not authorize; notify within 60 days of the statement showing it.',
        ],
        [
          'Zelle / P2P you were tricked into sending',
          'Limited but improving',
          'Treated as authorized. Network rules have expanded reimbursement for imposter scams — always file the claim; do not assume refusal.',
        ],
        [
          'Domestic wire transfer',
          'Only if caught within hours',
          'Recall requests depend on the receiving bank’s cooperation and whether funds remain. IC3’s recovery asset team can help if filed same-day.',
        ],
        [
          'Gift cards, crypto, cash',
          'Very poor',
          'No reversal mechanism exists. Report anyway — card issuers occasionally freeze unspent balances.',
        ],
      ],
    },
    {
      type: 'alert',
      variant: 'info',
      title: 'File the claim even if you think you will be denied',
      text: 'People routinely talk themselves out of filing because they feel responsible for having been deceived. Do not. Reimbursement rules for scam-induced transfers have been expanded in recent years, banks apply discretion, and an unfiled claim is a guaranteed zero. Describe exactly what happened, including that you were impersonated into acting — that framing matters for how the claim is categorized.',
    },
    { type: 'h2', text: 'Where to report it' },
    {
      type: 'p',
      text: 'Reporting will not usually recover your money on its own, but it feeds the datasets that drive enforcement and carrier-level blocking. Forwarding the original text to 7726 takes ten seconds and is genuinely useful — it routes the sending number into carrier blocklists.',
    },
    {
      type: 'report',
      title: 'Report a bank impersonation scam',
      text: 'File with all that apply. Keep your bank case number handy — several forms ask for it.',
      agencies: ['ftc', 'ic3', 'cfpb', 'spam7726'],
    },
    { type: 'h2', text: 'Making yourself a harder target' },
    {
      type: 'p',
      text: 'You cannot stop the texts. Phone numbers leak through breaches you had no part in, and blasting them costs the sender almost nothing. What you can do is make sure that a text landing on your phone never leads to a loss — which mostly means building one habit and turning on a few settings.',
    },
    {
      type: 'list',
      items: [
        'Adopt the callback rule permanently: no financial conversation ever happens on a call you did not dial. Say it out loud to the caller — a real agent will accommodate it.',
        'Move off SMS-based two-factor authentication for your bank wherever an authenticator app or passkey is offered. SIM-swap attacks and code-reading scripts both target SMS specifically.',
        'Turn on transaction alerts in your banking app rather than relying on texts. In-app alerts cannot be spoofed; SMS can.',
        'Set a low-friction family verification phrase — a word only your household knows — and use it whenever anyone calls about money. It defeats both this scam and AI voice cloning.',
        'Never search for your bank’s phone number. Scam call centers buy search ads against those exact queries. Use the card, the app, or a statement.',
        'Freeze your credit at all three bureaus if you are not actively applying for credit. It is free, reversible, and blocks the most profitable follow-on use of stolen identity data.',
      ],
    },
    {
      type: 'p',
      text: 'One last framing that helps people more than any checklist: a bank never needs your cooperation to protect your own account. Every genuine protective action — freezing a card, blocking a charge, reissuing credentials — is something the bank can do unilaterally, from their side, without you reading them anything. So the moment a caller needs you to do something in order to secure your money, you are not talking to your bank. You are talking to someone who needs your hands on the controls, because they do not have access themselves.',
    },
  ],
  howTo: {
    name: 'What to do after replying to a fake bank fraud alert text',
    description:
      'A step-by-step recovery procedure for consumers who engaged with a bank impersonation smishing text or the follow-up phone call.',
    totalTime: 'PT1H',
    steps: [
      {
        name: 'Stop the call and do not act on any instruction',
        text: 'Hang up without explaining yourself. Do not read any code aloud, approve any app prompt, or move any funds, even if the caller says the transfer is already in progress.',
      },
      {
        name: 'Call the number printed on your bank card',
        text: 'Use the number physically on your card or inside your official banking app. Say you are reporting fraud in progress so you are routed to the team that can place immediate holds.',
      },
      {
        name: 'Request a freeze, a recall and new credentials',
        text: 'Ask for a hold on the account, a recall attempt on any transfer that already left, reissued cards and a forced password reset. Record the case reference number.',
      },
      {
        name: 'Secure your devices and logins',
        text: 'Change your banking and email passwords from a clean device. Remove unknown trusted devices. If you installed remote-access software, disconnect that device and have it inspected.',
      },
      {
        name: 'Submit a written dispute',
        text: 'Follow your bank’s written notice procedure the same day. A phone call alone does not start your formal protection clock under federal rules.',
      },
      {
        name: 'File official reports',
        text: 'Report at ReportFraud.ftc.gov, file with the FBI IC3 if a wire or online transfer was involved, and forward the original text to 7726.',
      },
      {
        name: 'Add credit protections',
        text: 'Place a free fraud alert or credit freeze with all three credit bureaus, and escalate to the CFPB if your bank denies a claim you believe was unauthorized.',
      },
    ],
  },
  faq: [
    {
      question: 'Is it dangerous just to reply to a bank fraud alert text?',
      answer:
        'Replying does not by itself give anyone access to your money or your phone. What it does is confirm that your number is live, monitored by a real person, and likely attached to the named bank — which promotes you onto a priority call list. The danger is the phone call that usually follows within minutes, not the reply itself. If you already replied, do not panic; simply do not accept the callback, and dial your bank yourself if you want to verify your account status.',
    },
    {
      question: 'How can the caller ID show my bank’s real phone number?',
      answer:
        'Caller ID is not a verified security signal. The number displayed on an incoming call is supplied by the caller’s own carrier or VoIP provider and is trivially set to any value, including your bank’s published customer service line. Anti-spoofing frameworks like STIR/SHAKEN reduce this for some traffic but do not eliminate it. Treat the caller ID as decoration, never as identification.',
    },
    {
      question: 'I read a one-time passcode to the caller. What did that authorize?',
      answer:
        'Almost certainly a real action on your real account — a login from their device, a new payee, a password reset, or a transfer. That is precisely why the code was requested at that moment. Call your bank immediately on the number on your card, tell them a passcode was disclosed under impersonation, and ask them to review and reverse any activity in the last hour, force a password reset, and remove unrecognized devices from your profile.',
    },
    {
      question: 'Will my bank refund money I sent to a "safe account" myself?',
      answer:
        'It depends on how it was sent and how the claim is categorized. Because you initiated the transfer, it is legally an authorized payment rather than an unauthorized one, which places it outside the strongest federal protections. However, reimbursement expectations for imposter-scam transfers have expanded, banks apply discretion, and outcomes vary widely by institution. Always file the claim, state clearly that you were deceived by someone impersonating the bank, and escalate to the CFPB if denied.',
    },
    {
      question: 'Should I click the link in the text to see if the site looks fake?',
      answer:
        'No. There is no safe amount of investigation on a phishing link. Even when the page is only a credential-harvesting clone, visiting it confirms your engagement and the page may closely replicate your bank’s real login. Screenshot the message for your report, forward it to 7726, and delete it. If you want to check your account, open your banking app directly.',
    },
    {
      question: 'How do I protect an older parent who keeps receiving these?',
      answer:
        'Two things outperform everything else. First, set a family verification phrase — a word known only within the household — that must be used in any conversation involving money, which defeats both impersonation calls and AI voice cloning. Second, write the bank’s real number on a card taped near their phone with a single instruction: "Hang up. Call this number." Removing the decision from the moment of pressure is far more effective than teaching a list of warning signs.',
    },
  ],
  sources: [
    {
      label: 'How to Recognize and Report Spam Text Messages',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-recognize-and-report-spam-text-messages',
    },
    {
      label: 'Phishing Scams — Consumer Advice',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams',
    },
    {
      label: 'Internet Crime Complaint Center (IC3) filing portal',
      publisher: 'Federal Bureau of Investigation',
      url: 'https://www.ic3.gov/',
    },
    {
      label: 'Electronic Fund Transfers (Regulation E) — consumer protections',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/rules-policy/regulations/1005/',
    },
    {
      label: 'Submit a complaint about a financial product or service',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/complaint/',
    },
  ],
  related: [
    'p2p-accidental-transfer-scam',
    'ai-voice-cloning-emergency-scams',
    'quishing-qr-code-scams',
  ],
};
