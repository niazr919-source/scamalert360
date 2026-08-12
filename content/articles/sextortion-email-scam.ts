import type { Article } from '../types';

export const article: Article = {
  slug: 'sextortion-email-scam',
  category: 'ai-cyber',
  title: 'Sextortion Email Scam: "I Have Your Password" Blackmail Explained',
  shortTitle: 'Sextortion Email Scam',
  description:
    'An email says a hacker filmed you through your webcam and shows a real password. Here is why it is almost always an empty bluff, and exactly what to do.',
  keywords: [
    'sextortion email',
    'i have your password email scam',
    'bitcoin blackmail email',
    'webcam blackmail scam',
    'i recorded you email scam',
    'hacker email with my password',
  ],
  published: '2026-05-06',
  updated: '2026-07-25',
  authorId: 'editorial-team',
  readingMinutes: 9,
  quickAnswer:
    'A sextortion email claims a hacker recorded you through your webcam and demands Bitcoin to stay silent. Even when it shows a real password of yours, it is almost always a mass-sent bluff: the password came from an old data breach, not from any access to your device. Do not pay, do not reply — change that password everywhere and move on.',
  keyTakeaways: [
    'The password in the email came from a breached website, not from your computer being hacked.',
    'These are blasted to millions of addresses; the "recording" does not exist.',
    'Paying marks you as a payer and invites more demands — it never ends the threat.',
    'The one real task is to change any password shown and enable two-factor authentication.',
  ],
  body: [
    {
      type: 'p',
      text: 'The email is designed to make your stomach drop in the first line, and it often works because it opens with something true: one of your actual passwords, printed right there in the subject line or first sentence. The message then claims that this password was the key to installing malware on your device, that your webcam recorded you while you visited an adult website, and that unless you send a few thousand dollars in Bitcoin within 48 hours, the footage goes to all your contacts.',
    },
    {
      type: 'p',
      text: 'It is a terrifying message to receive, and the fear is the entire product. But once you understand where that password actually came from, the whole thing collapses into what it is: a template, sent to millions of addresses at once, betting that a small fraction of frightened recipients will pay before thinking. There is no malware, no recording, and in almost every case no access to your device at all.',
    },
    {
      type: 'p',
      text: 'This guide explains why the password is not the proof it appears to be, how to tell an empty threat from a genuine account compromise, and the short list of things actually worth doing in response.',
    },
    {
      type: 'keyStat',
      value: 'Billions of records',
      label: 'Old data breaches have exposed billions of email-and-password pairs, which are bought in bulk and fed straight into sextortion templates',
      source: 'FTC — consumer alert on sextortion scams',
      url: 'https://consumer.ftc.gov/consumer-alerts',
    },
    { type: 'h2', text: 'Where the password really came from' },
    {
      type: 'p',
      text: 'The password feels like undeniable proof because you assume only someone inside your computer could know it. In reality it almost always comes from a data breach at some website you used years ago — a forum, a shopping site, a game, a service that was hacked and had its user database stolen. Those stolen databases, containing email addresses paired with passwords, are traded and sold in enormous collections.',
    },
    {
      type: 'p',
      text: 'A scammer buys one of these lists and runs a single template against all of it, automatically inserting each recipient\'s own leaked password into their message. No individual attention, no hacking of your machine — just a mail-merge with a stolen spreadsheet. That is why the password shown is frequently one you recognize but haven\'t used in a long time: it is a snapshot from whenever that particular site was breached.',
    },
    {
      type: 'p',
      text: 'You can confirm this yourself. Enter your email address at Have I Been Pwned (haveibeenpwned.com), a reputable free service run by a security researcher, and it will list the known breaches your address appeared in. Seeing the source breach is often the moment the fear lifts — the password came from a leaked list, not from a camera in your bedroom.',
    },
    {
      type: 'alert',
      variant: 'success',
      title: 'The recording almost certainly does not exist',
      text: 'These campaigns are sent blind to millions of addresses with no knowledge of whether the recipient even has a webcam, visited any such site, or was ever recorded. The claim is generic because it has to work on everyone. If a real recording of a specific person existed, the extortionist would show a frame of it as proof — the fact that they only quote a breached password, and never any actual footage, is the tell.',
    },
    { type: 'h2', text: 'How to recognize the template' },
    {
      type: 'p',
      text: 'Sextortion emails vary in wording but follow a fixed skeleton. Recognizing the pattern makes each new variant obvious.',
    },
    {
      type: 'checklist',
      title: 'Signs it is the standard bluff',
      intro: 'Nearly every sextortion email hits most of these.',
      items: [
        'It leads with one of your passwords, or your phone number, to establish false credibility.',
        'It claims malware was installed that recorded you through your webcam.',
        'It never includes any actual footage, screenshot, or specific detail about you.',
        'It demands payment in Bitcoin or another cryptocurrency to a wallet address.',
        'It sets a short deadline — 24 or 48 hours — and warns against replying or going to the police.',
        'It claims it can see whether you have opened the email, to make the surveillance feel real.',
        'The same message, with the same wallet or wording, appears in scam-report forums when you search a distinctive phrase from it.',
      ],
    },
    {
      type: 'alert',
      variant: 'warning',
      title: 'The "I can see you opened this" claim is theater',
      text: 'Many of these emails insist they will know the moment you read the message, using a tracking pixel. Even where a tracking pixel is present, it reveals nothing about your device or your activity — only that an email was opened, which is ordinary marketing technology. It is included solely to make the surveillance story feel plausible. It is not evidence of anything on your computer.',
    },
    { type: 'h2', text: 'What to do' },
    {
      type: 'p',
      text: 'The correct response is almost anticlimactic, which is appropriate for a threat that is almost always hollow. Do not pay, and do not reply — replying confirms your address is read by a real person and moves you up the priority list for future attempts. Then spend fifteen minutes on the one thing that genuinely matters: closing off the leaked password.',
    },
    {
      type: 'timeline',
      title: 'Sextortion email response',
      steps: [
        {
          window: 'First',
          title: 'Do not pay and do not reply',
          text: 'Paying does not end the threat — it identifies you as someone who pays and invites repeat demands. Silence is the correct move. Do not negotiate, and do not send any part of the amount.',
        },
        {
          window: 'Minutes 0–15',
          title: 'Change the password shown, everywhere you used it',
          text: 'If the password in the email is one you still use anywhere, change it on every account that uses it, starting with your email. The real risk from this scam is not the fake recording — it is that a working password of yours is circulating.',
        },
        {
          window: 'Minutes 15–30',
          title: 'Turn on two-factor authentication',
          text: 'Enable two-factor authentication (an authenticator app or passkey, ideally) on your email, banking and any account that offers it. This makes a leaked password far less useful to anyone who has it.',
        },
        {
          window: 'Same day',
          title: 'Check your breach exposure',
          text: 'Look your email up at haveibeenpwned.com to see which breaches exposed you, and adopt a password manager so every account has a unique password. A reused password is the only thing that makes a leaked one dangerous.',
        },
        {
          window: 'Optional',
          title: 'Report it, then delete it',
          text: 'Report the email to the FTC and the FBI\'s IC3, then delete it. Reporting feeds pattern tracking; it will not trigger a personal investigation, and none is needed.',
        },
      ],
    },
    { type: 'h2', text: 'When it is not the standard bluff' },
    {
      type: 'p',
      text: 'The mass-email version described above is by far the most common and is essentially always empty. But two related situations are genuinely serious and deserve a different response. Knowing the difference matters.',
    },
    {
      type: 'p',
      text: 'The first is targeted sextortion, where someone actually has intimate images of you — usually because they were shared consensually with a person who later turned coercive, or obtained through a romance or catfishing scheme. If the sender references real, specific images or a real interaction rather than only a breached password, this is not the generic bluff. Do not pay (it escalates), preserve everything, and report it to the FBI\'s IC3 and, if you are under 18 or the victim is a minor, to the NCMEC CyberTipline immediately.',
    },
    {
      type: 'p',
      text: 'The second is a real account takeover. If a sextortion email arrives from your own email address and you can see it in your sent folder, or you find you can no longer log in, an attacker may actually control your account. In that case treat it as a live compromise: recover the account, change the password, sign out all sessions, and enable two-factor authentication at once.',
    },
    {
      type: 'alert',
      variant: 'danger',
      title: 'If a minor is being targeted, act immediately',
      text: 'Sextortion aimed at teenagers — often after a fake romantic contact on social media or gaming platforms — has driven tragic outcomes and is a law-enforcement priority. If you or a young person you know is being targeted with real images, do not pay and do not comply further. Preserve the messages and report to the FBI at ic3.gov and the NCMEC CyberTipline at report.cybertip.org right away. Investigators treat these cases urgently and non-judgmentally.',
    },
    {
      type: 'report',
      title: 'Report a sextortion email',
      text: 'For the generic bluff, reporting is optional but helpful. For any case involving real images or a minor, report to IC3 immediately.',
      agencies: ['ftc', 'ic3', 'identityTheft'],
    },
    {
      type: 'p',
      text: 'The reason this scam persists is not that it is clever — it is that it weaponizes shame, and shame makes people act quickly and quietly, which is exactly what a bluff needs. Naming the mechanism defuses it: a stranger who bought a leaked password list is gambling that embarrassment will stop you from thinking it through. It won\'t, once you know the password came from a breached website and the recording was never real. Change the password, enable two-factor authentication, and let the deadline pass. Nothing happens.',
    },
  ],
  howTo: {
    name: 'How to respond to a sextortion email',
    description:
      'Steps to handle a blackmail email that claims to have recorded you and shows one of your passwords.',
    totalTime: 'PT30M',
    steps: [
      {
        name: 'Do not pay or reply',
        text: 'Paying invites repeat demands and replying confirms your address is active. Stay silent.',
      },
      {
        name: 'Recognize the breached password',
        text: 'The password came from an old data breach, not your device. Confirm which breach at haveibeenpwned.com.',
      },
      {
        name: 'Change that password everywhere',
        text: 'If you still use the password shown, change it on every account, starting with email.',
      },
      {
        name: 'Enable two-factor authentication',
        text: 'Add an authenticator app or passkey to email, banking and key accounts so a leaked password is not enough to log in.',
      },
      {
        name: 'Adopt a password manager',
        text: 'Give every account a unique password so a single leak can never unlock others.',
      },
      {
        name: 'Escalate only if it is targeted',
        text: 'If the sender has real images, or a minor is involved, do not pay — preserve evidence and report to the FBI IC3 and, for minors, the NCMEC CyberTipline immediately.',
      },
    ],
  },
  faq: [
    {
      question: 'The email has my real password. Doesn’t that mean I was hacked?',
      answer:
        'Almost never. The password was almost certainly exposed in a data breach at a website you once used, then bought as part of a bulk list and inserted automatically into a template sent to millions of people. Knowing a leaked password requires no access to your device whatsoever. You can see which breach it came from by entering your email at haveibeenpwned.com. The real takeaway is simply to stop using that password anywhere.',
    },
    {
      question: 'Should I pay to make it go away?',
      answer:
        'No. In the standard mass-email version there is nothing to make go away — no recording exists. Worse, paying flags you as someone who pays, which reliably invites further and larger demands to the same address. There is no version of paying that ends the threat. Change the exposed password, enable two-factor authentication, and stop engaging.',
    },
    {
      question: 'Could they really have recorded me through my webcam?',
      answer:
        'In the generic mass-sent version, no. These emails go out blind to millions of addresses with no knowledge of who owns a webcam or visited any particular site — the claim is generic precisely because it must apply to everyone. If someone had actual footage of a specific person, they would include a frame of it as proof. Quoting only a breached password, and never any real image, is the signature of an empty bluff.',
    },
    {
      question: 'The email came from my own address. What does that mean?',
      answer:
        'Usually it is spoofing — forging the "from" field to look like your address, which is trivial and proves nothing. But verify: check your sent folder for a copy you did not write, and try logging in normally. If you cannot log in or see evidence of activity you did not perform, treat it as a real account takeover — recover the account, change the password, sign out all sessions, and enable two-factor authentication immediately.',
    },
    {
      question: 'What if they actually do have private images of me?',
      answer:
        'Then this is targeted sextortion, not the generic bluff, and the response differs. Still do not pay — complying almost always escalates the demands rather than ending them. Preserve all messages and evidence, stop further contact, and report to the FBI at ic3.gov. If the person targeted is under 18, report to the NCMEC CyberTipline at report.cybertip.org immediately; law enforcement prioritizes these cases and treats victims without judgment.',
    },
    {
      question: 'Do I need to report it?',
      answer:
        'For the ordinary mass-sent bluff, reporting is optional — it helps pattern tracking but will not trigger an investigation, and none is needed once you have changed the exposed password. Reporting is genuinely important, however, whenever real images are involved or a minor is being targeted. In those cases file with the FBI IC3 right away.',
    },
  ],
  sources: [
    {
      label: 'Sextortion and blackmail scam alerts',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/consumer-alerts',
    },
    {
      label: 'Sextortion — public awareness and reporting',
      publisher: 'Federal Bureau of Investigation',
      url: 'https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/sextortion',
    },
    {
      label: 'Internet Crime Complaint Center (IC3)',
      publisher: 'Federal Bureau of Investigation',
      url: 'https://www.ic3.gov/',
    },
    {
      label: 'How to Recognize and Avoid Phishing Scams',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams',
    },
  ],
  related: [
    'tech-support-popup-scam',
    'how-to-freeze-your-credit',
    'bank-fraud-alert-text-scam',
  ],
};
