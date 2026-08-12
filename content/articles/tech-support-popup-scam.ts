import type { Article } from '../types';

export const article: Article = {
  slug: 'tech-support-popup-scam',
  category: 'ai-cyber',
  title: 'Fake Virus Warning Popups: How Tech Support Scams Really Work',
  shortTitle: 'Tech Support Popup Scam',
  description:
    'A full-screen "Microsoft security alert" with a siren is not a virus detection. Learn what the popup actually is and how to close it safely.',
  keywords: [
    'microsoft security warning scam',
    'fake virus warning popup',
    'tech support scam',
    'computer locked popup scam',
    'fake windows defender alert',
    'how to close a scam popup',
  ],
  published: '2026-01-22',
  updated: '2026-07-16',
  authorId: 'editorial-team',
  readingMinutes: 10,
  quickAnswer:
    'The popup is just a web page — it has not scanned your computer and found nothing, because a website cannot scan your computer. It is designed to look unclosable so you call the number. Close the browser with Task Manager or Force Quit, and never call the number or let anyone connect to your machine.',
  keyTakeaways: [
    'No website can detect a virus on your computer. The "scan results" are a pre-written animation.',
    'Microsoft, Apple and Google never put a phone number in a security warning.',
    'The popup cannot lock your computer — it fakes fullscreen so the close button seems missing.',
    'The real damage begins if you grant remote access, not from seeing the page.',
  ],
  body: [
    {
      type: 'p',
      text: 'It arrives without warning, usually after a mistyped address or a click on an ad. The screen fills. There is a siren, or a robotic voice repeating that your computer has been locked. Red text warns that your banking credentials are being transmitted, that Windows Defender has detected a trojan, that you must not restart your computer. A phone number is displayed prominently, described as Microsoft Support, and the page will not close.',
    },
    {
      type: 'p',
      text: 'Almost everything on that screen is false, and one thing in particular is worth internalizing before anything else: a website cannot scan your computer. The security model of every modern browser exists specifically to prevent a page from reading your files, enumerating your processes, or inspecting your system. The scan you are watching is an animation written in advance. It shows the same "infections" to every visitor, and it plays identically on a brand-new machine that has never been online.',
    },
    {
      type: 'p',
      text: 'The alarming design has a single purpose, and it is not to inform you. It is to move you off the screen and onto the telephone, where a person can talk you into granting access to your machine. Everything harmful in this scam happens on that call.',
    },
    { type: 'h2', text: 'Why the popup seems impossible to close' },
    {
      type: 'p',
      text: 'People often conclude their computer really is locked, because the page genuinely does resist closing. That impression comes from a handful of ordinary web techniques, none of which involve any access to your system.',
    },
    {
      type: 'list',
      items: [
        'Fullscreen mode is requested by the page, which hides the browser toolbar and the close button so the window looks like a system-level takeover.',
        'A dialog loop repeatedly triggers alert boxes, so dismissing one immediately spawns another and the page appears frozen.',
        'A navigation guard fires a "Are you sure you want to leave?" prompt on every attempt to close.',
        'The cursor is hidden or replaced, or the page captures the pointer so clicks do not land where you expect.',
        'Audio autoplays a siren or a synthesized voice, which is the single most effective element for producing panic.',
        'The page is styled as a pixel-accurate copy of a Windows or macOS system dialog, including the correct fonts and iconography.',
      ],
    },
    {
      type: 'alert',
      variant: 'success',
      title: 'How to close it, on any device',
      text: 'On Windows: press Ctrl + Shift + Esc to open Task Manager, select your browser, and choose End Task. On a Mac: press Cmd + Option + Esc, select the browser, and choose Force Quit. On a phone: close the browser from the app switcher. Then reopen your browser and decline any offer to restore the previous tabs — restoring reloads the same page. You do not need to call anyone, and nothing is being deleted while you decide.',
    },
    { type: 'h2', text: 'What happens if you call the number' },
    {
      type: 'p',
      text: 'The person who answers is a call centre operator following a script refined across thousands of calls. They will sound calm, technically fluent and genuinely helpful, and they will spend the first minutes building credibility rather than asking for anything. Then they will ask to connect to your computer to "run diagnostics" — using legitimate remote access software such as AnyDesk, TeamViewer or LogMeIn, which is exactly why the download looks safe and passes antivirus.',
    },
    {
      type: 'p',
      text: 'Once connected, a standard sequence follows. They open Windows Event Viewer and present routine warning entries — present on every healthy computer — as evidence of infection. They may run netstat and describe normal network connections as intruders, or open a command prompt and type alarming text directly into it. The performance is designed to convert your uncertainty into their authority.',
    },
    {
      type: 'p',
      text: 'The payment request follows, typically several hundred dollars for a multi-year "support plan". But the more serious exposure is the access itself: while connected, they can install persistent remote tools, harvest saved browser passwords, read your email, and open your online banking with your own logged-in session.',
    },
    {
      type: 'alert',
      variant: 'danger',
      title: 'The refund reversal is the most damaging variant',
      text: 'Months later, a caller offers a refund because the company is "closing down". They connect remotely, open your banking, and ask you to enter a refund amount — then edit what you see on screen so it appears they sent far too much, say $20,000 instead of $200. They ask you to return the difference, often in gift cards or a wire. Nothing was ever sent; you are looking at a manipulated display of your own account. Victims have sent very large sums this way, so treat any unsolicited refund offer involving remote access as fraud without exception.',
    },
    {
      type: 'table',
      caption: 'Genuine security software vs. a scam popup',
      headers: ['Signal', 'Real security software', 'Scam popup'],
      rows: [
        [
          'Where it appears',
          'In its own application window or system notification',
          'Inside a browser tab or fullscreen web page',
        ],
        [
          'Phone number',
          'Never included in an alert',
          'Large, prominent, urgent',
        ],
        [
          'Detection claim',
          'Names a specific file path it quarantined',
          'Vague counts of "infections" and stolen credentials',
        ],
        [
          'Tone',
          'Neutral and factual',
          'Sirens, countdowns, warnings not to restart',
        ],
        [
          'Requested action',
          'Quarantine or remove, inside the app',
          'Call, then install remote access software',
        ],
        [
          'Payment',
          'Handled through your account or an app store',
          'Card over the phone, gift cards, wire, or crypto',
        ],
      ],
    },
    { type: 'h2', text: 'Where these popups come from' },
    {
      type: 'p',
      text: 'They rarely mean your computer is compromised. The common delivery routes are mundane: a malicious advertisement served through a legitimate ad network, a typo in a domain name, a redirect from a free streaming or download site, an aggressive browser notification you accidentally allowed, or a browser extension gone bad.',
    },
    {
      type: 'p',
      text: 'That last one is worth checking if the popups keep returning. Site notification permissions, once granted, can push alerts that appear even when the browser is closed. Reviewing the notification permissions in your browser settings and revoking anything unfamiliar resolves most recurring cases.',
    },
    {
      type: 'checklist',
      title: 'Signs the alert is fake',
      intro: 'Any single one of these is conclusive.',
      items: [
        'It appears in a browser window rather than in a security application.',
        'It displays a phone number to call.',
        'It claims to have scanned your computer from a web page.',
        'It plays a siren, a voice recording, or shows a countdown.',
        'It tells you not to restart or shut down your computer.',
        'It uses a Microsoft, Apple, Google or Norton logo alongside a support number.',
        'It asks you to install remote access software to fix the problem.',
        'The requested payment is in gift cards, cryptocurrency, or a wire transfer.',
      ],
    },
    { type: 'h2', text: 'If you already gave someone access' },
    {
      type: 'timeline',
      title: 'Tech support scam recovery timeline',
      intro: 'Assume everything on the machine was readable while they were connected.',
      steps: [
        {
          window: 'Immediately',
          title: 'Disconnect the computer from the internet',
          text: 'Turn off Wi-Fi or unplug the cable. This ends the remote session at once. Do not let a caller talk you out of it — they will say disconnecting will damage your system, which is untrue.',
        },
        {
          window: 'Minutes 5–20',
          title: 'Remove the remote access software',
          text: 'Uninstall AnyDesk, TeamViewer, LogMeIn, UltraViewer or anything else installed during the call. Also check for unfamiliar programs added the same day and any newly created user accounts.',
        },
        {
          window: 'Minutes 20–60',
          title: 'Change passwords from a different device',
          text: 'Use your phone or another computer, not the affected one. Start with your email, then banking, then anything sharing that password. Sign out all active sessions where the service offers it.',
        },
        {
          window: 'Hour 1',
          title: 'Call your bank if you paid or if banking was opened',
          text: 'Report the card as compromised and request reissue. If your online banking was opened during the session, ask them to review activity, force a password reset, and remove unrecognized devices and payees.',
        },
        {
          window: 'Day 1',
          title: 'Have the machine inspected, or reinstall',
          text: 'Run a full scan with reputable security software. If sensitive accounts were accessed, a clean operating system reinstall is the only way to be confident nothing persistent remains.',
        },
        {
          window: 'Days 1–7',
          title: 'Report and protect your identity',
          text: 'File at ReportFraud.ftc.gov and with IC3. If personal documents were on the machine, place a fraud alert or credit freeze with all three bureaus.',
        },
      ],
    },
    {
      type: 'report',
      title: 'Report a tech support scam',
      text: 'Include the phone number displayed, the website address if you have it, and any software you were asked to install.',
      agencies: ['ftc', 'ic3', 'identityTheft'],
    },
    {
      type: 'p',
      text: 'One reframing helps more than any checklist. Every genuine security tool on your computer is already running with the access it needs to protect you — it does not require your cooperation, and it certainly does not need you to phone anyone. So the moment an alert needs you to take an action outside the software itself, especially a phone call, you are not looking at a security product. You are looking at an advertisement that has been designed to frighten you, and the correct response is to close the window.',
    },
  ],
  howTo: {
    name: 'How to close a fake virus warning popup safely',
    description:
      'Steps to dismiss a scam security popup without calling the number, and recovery steps if remote access was granted.',
    totalTime: 'PT15M',
    steps: [
      {
        name: 'Do not call the number displayed',
        text: 'No legitimate security warning from Microsoft, Apple or Google includes a phone number. The number is the entire objective of the page.',
      },
      {
        name: 'Force the browser to close',
        text: 'Windows: Ctrl + Shift + Esc, select the browser, End Task. Mac: Cmd + Option + Esc, select the browser, Force Quit. Phone: close it from the app switcher.',
      },
      {
        name: 'Decline to restore tabs',
        text: 'Reopen the browser and refuse any offer to restore the previous session, which would reload the same page.',
      },
      {
        name: 'Revoke rogue notification permissions',
        text: 'Check your browser’s site notification settings and remove anything unfamiliar, which stops recurring popups.',
      },
      {
        name: 'Disconnect from the internet if you granted access',
        text: 'Turn off Wi-Fi or unplug the cable immediately. This ends the remote session regardless of what the caller claims.',
      },
      {
        name: 'Uninstall the remote access software',
        text: 'Remove AnyDesk, TeamViewer, LogMeIn or similar, and check for unfamiliar programs and new user accounts created that day.',
      },
      {
        name: 'Change passwords from a clean device and call your bank',
        text: 'Start with email, then banking. Report any card used as compromised and request reissue.',
      },
    ],
  },
  faq: [
    {
      question: 'Can a website really detect a virus on my computer?',
      answer:
        'No. Browsers deliberately isolate web pages from your file system and running processes — that isolation is one of the core security guarantees of the modern web. A page cannot enumerate your files, read your antivirus status, or identify malware. Any "scan" animation you see is pre-written and shows identical results to every visitor, including on a brand-new machine.',
    },
    {
      question: 'The popup says my computer is locked and I should not restart. Is that true?',
      answer:
        'It is false, and it is one of the most reliable indicators of a scam. The instruction exists because restarting closes the browser and destroys the illusion instantly. A web page cannot lock your computer; it can only make its own window difficult to close using fullscreen mode and repeated dialogs. Restarting is safe and nothing is being deleted while you decide.',
    },
    {
      question: 'I called the number but hung up before installing anything. Am I at risk?',
      answer:
        'Very little. If nothing was installed and you disclosed no card details or passwords, the main consequence is that your number is now on a list of people who respond, so expect follow-up calls claiming to be from Microsoft, your bank, or a refund department. Do not engage with them. If you gave your name and address only, stay alert for tailored follow-up attempts.',
    },
    {
      question: 'Does getting this popup mean I already have a virus?',
      answer:
        'Usually not. These pages are delivered through malicious advertising on otherwise legitimate sites, mistyped domains, redirects from streaming and download sites, or browser notification permissions you granted at some point. If they recur frequently, review your browser’s site notification settings and installed extensions, and run a scan with reputable security software.',
    },
    {
      question: 'They offered me a refund and now want money back. What is happening?',
      answer:
        'This is the refund reversal scam and it is the most costly variant. They connect remotely, open your banking, and manipulate what is displayed so it appears they refunded far too much. Nothing was sent — you are viewing an edited display of your own account. They then ask you to return the difference in gift cards or a wire. Disconnect immediately, do not send anything, and call your bank on the number printed on your card.',
    },
    {
      question: 'Does Microsoft ever call about problems with my computer?',
      answer:
        'Microsoft does not make unsolicited calls about malware on personal computers, and neither do Apple, Google or your internet provider. They have no mechanism to detect an infection on your machine from the outside and no reason to phone you about it. Any inbound call claiming otherwise is fraudulent, regardless of what the caller ID displays.',
    },
  ],
  sources: [
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
    'ai-voice-cloning-emergency-scams',
    'bank-fraud-alert-text-scam',
    'gift-card-scams',
  ],
};
