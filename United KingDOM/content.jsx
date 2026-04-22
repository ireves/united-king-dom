// Shared data and small building blocks for all three variations.

const UKD = {
  name: 'UNITED KINGDOM',
  nameSplit: ['UNITED KING', 'DOM'],
  slogan: 'BREAK THE GAG',
  subSlogan: 'A plain-English guide to voting in the UK — written for people who weren\u2019t taught this in school.',
  meta: 'UK · general elections · local elections · updated Apr 2026',
};

const ELIGIBILITY = [
  { q: 'Are you 18 or over on polling day?',         hint: 'Scotland/Wales local + Senedd: 16+ can vote.' },
  { q: 'Are you a British, Irish, or qualifying Commonwealth citizen?', hint: 'EU citizens: local elections only (rules vary).' },
  { q: 'Do you live at a UK address (or qualify as an overseas voter)?', hint: 'Students can register at both term-time and home.' },
  { q: 'Are you NOT legally excluded?',              hint: 'E.g. currently detained for a criminal conviction.' },
];

const REGISTER_STEPS = [
  { n: '01', t: 'Go to gov.uk/register-to-vote', d: 'It is the only official route. Five minutes, free, works on a phone.' },
  { n: '02', t: 'Have your NI number handy',     d: 'Find it on a payslip, in your HMRC app, or on any tax letter.' },
  { n: '03', t: 'Pick your address',             d: 'Students can register at both term-time and home. Vote once only.' },
  { n: '04', t: 'Confirm by email',              d: 'You\u2019ll get confirmation within a few days. Done.' },
];

const DATES = [
  { d: '14 MAY 2026', l: 'Local elections — England' },
  { d: '29 APR 2026', l: 'Last day to register (local)' },
  { d: '22 APR 2026', l: 'Postal vote deadline (5pm)' },
  { d: '24 APR 2026', l: 'Proxy vote deadline (5pm)' },
  { d: '23 APR 2026', l: 'Voter Authority Certificate deadline' },
];

const IDS = [
  'UK passport (in-date or expired)',
  'Photocard driving licence (full or provisional)',
  'Older/Disabled Person\u2019s bus pass',
  'Oyster 60+ / Freedom Pass',
  'PASS card (proof-of-age)',
  'Blue Badge',
  'Biometric immigration document',
  'Voter Authority Certificate (free, apply at gov.uk)',
];

const HOW_TO_VOTE = [
  { k: 'IN PERSON', t: 'At your polling station',  d: 'Find yours on your poll card or at wheredoivote.co.uk. Open 7am–10pm. Bring photo ID.' },
  { k: 'BY POST',   t: 'Ballot through the door',  d: 'Apply online at gov.uk. Must arrive back by 10pm on polling day — post it early.' },
  { k: 'BY PROXY',  t: 'Someone votes for you',    d: 'Useful if you\u2019re away, ill, or working. Apply online; you choose who votes on your behalf.' },
];

const FAQS = [
  { q: 'I\u2019ve moved. Do I need to re-register?', a: 'Yes. Registration is tied to your address. Re-register every time you move — takes five minutes at gov.uk/register-to-vote.' },
  { q: 'I\u2019m a student — where do I register?',   a: 'You can register at BOTH your term-time and home addresses. You may only vote once in the same election type — pick the one where your vote matters more to you.' },
  { q: 'Do I need ID?',                               a: 'For UK parliamentary and English local elections, yes — accepted photo ID only. If you don\u2019t have any, apply for a free Voter Authority Certificate at gov.uk.' },
  { q: 'I\u2019m not British. Can I vote?',           a: 'Irish and qualifying Commonwealth citizens can vote in all UK elections. EU citizens can vote in some local elections depending on where you live. Check gov.uk/eligibility-to-vote.' },
  { q: 'What if I\u2019m not on the register by the deadline?', a: 'You can\u2019t vote in that election. That\u2019s it. So register now — it takes no time and stays valid unless you move.' },
  { q: 'Is my info private?',                         a: 'You can opt out of the \u201Copen register\u201D used for marketing. You will still appear on the full register used for voting. Tick the box when you register.' },
];

const STANCES = [
  { issue: 'HOUSING',       note: 'Rent caps? Right-to-buy? New builds? Each party draws this line differently.' },
  { issue: 'CLIMATE',       note: 'Net zero target year. Oil & gas licences. Home insulation spending.' },
  { issue: 'EDUCATION',     note: 'Tuition fees. Maintenance loans. Free school meals thresholds.' },
  { issue: 'MENTAL HEALTH', note: 'NHS waitlists. School counsellors. Crisis-line funding.' },
  { issue: 'WORK & WAGES',  note: 'Minimum wage age tiers. Zero-hours rules. Apprenticeship levy.' },
  { issue: 'VOTING AGE',    note: 'Lower to 16 for all UK elections? Currently only Scotland & Wales.' },
];

// tiny arrow
const Arrow = ({ s = 12 }) => (
  <svg width={s} height={s} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="square" />
  </svg>
);

Object.assign(window, { UKD, ELIGIBILITY, REGISTER_STEPS, DATES, IDS, HOW_TO_VOTE, FAQS, STANCES, Arrow });
