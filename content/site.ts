// All site copy + data. Anything in [BRACKETS] is a placeholder for the trainer's real information —
// replace it before launch. Nothing here is a real claim about the trainer.

export type IconName =
  | "pointer" | "toggle" | "target" | "message-square" | "message-circle" | "key" | "support"
  | "trending-up" | "move" | "moon";

export type Faq = { q: string; a: string };
export type Value = { label: string; icon: IconName; text: string };
/** Skill row: meta line reads "{year}, {category}". `url` (e.g. an Instagram clip) makes the row a link. */
export type Project = { year: string; category: string; title: string; url?: string; image?: string };
export type ProcessStep = { title: string; text: string };
export type Media = { label: string; src?: string; href?: string };
export type Card = {
  title: string;
  text?: string;
  media?: Media[];
  photo?: Media;
  meta?: { label: string; value: string }[];
};
export type Service = {
  slug: string;
  title: string;
  titleLines: string[];
  blurb: string;
  format: string;
  intro: string;
  includes: string[];
  process: ProcessStep[];
  values: Value[];
  faqs: Faq[];
};

export const person = {
  name: "[TRAINER NAME]",
  role: "Calisthenics Coach & Athlete",
  email: "[EMAIL]",
  avatar: "/images/avatar.svg",
  portrait: "/images/avatar.svg",
};

const instagramHandle = "[INSTAGRAM_HANDLE]"; // without the @
const whatsappNumber = "[WHATSAPP_NUMBER]"; // international format, digits only, e.g. 4915112345678

export const links = {
  instagram: `https://instagram.com/${instagramHandle}`,
  instagramHandle: `@${instagramHandle}`,
  whatsapp: `https://wa.me/${whatsappNumber}`,
  email: `mailto:${person.email}`,
};

/** Web3Forms access key (public by design) — get one free at web3forms.com with the trainer's email. */
export const web3formsKey = "[WEB3FORMS_ACCESS_KEY]";

export const nav = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Apply", href: "/apply" },
];

export const socials = [
  { label: "Instagram", href: links.instagram },
  { label: "WhatsApp", href: links.whatsapp },
  { label: "Email", href: links.email },
];

export const hero = {
  lead: "Calisthenics coaching for people who want real strength, clean technique and skills they never thought they could do — built step by step around you.",
  subtitleLines: ["Calisthenics Coach", "& Athlete"],
  // Swap for a black-and-white cut-out PNG (transparent background) — it sits on #e0e0e0.
  portrait: "/images/portrait-placeholder.svg",
};

export const footer = {
  marquee: "Reach Out -",
  portrait: "/images/portrait-placeholder.svg",
  details: [
    { label: "Based", value: "[LOCATION]" },
    { label: "Mail", value: person.email, href: links.email },
    { label: "WhatsApp", value: `+${whatsappNumber}`, href: links.whatsapp },
  ],
};

export const stats = [
  { value: "[YEARS EXPERIENCE]", label: "Years of experience" },
  { value: "[CLIENT COUNT]", label: "Clients coached" },
  { value: "[CERTIFICATION COUNT]", label: "Certifications" },
  { value: "[ACHIEVEMENT]", label: "Achievements" },
];

export const coachIntro = {
  title: "What I coach",
  tag: "Coaching",
  lines: [
    "Stuck on the same number of pull-ups, or not sure where to start?",
    "I coach strength, skills and mobility with a clear plan built around your level and your goals.",
  ],
};

export const capabilities = [
  {
    number: "01.",
    title: "Strength",
    text: "Build a strong base with pull-ups, dips, push-ups, rows and squats — then keep progressing with harder variations and added weight.",
    items: ["Pulling strength", "Pushing strength", "Legs & core"],
  },
  {
    number: "02.",
    title: "Calisthenics skills",
    text: "Learn the skills step by step, with progressions matched to your current level so every session moves you closer.",
    items: ["Planche & front lever", "Muscle-up", "Handstand"],
  },
  {
    number: "03.",
    title: "Mobility",
    text: "Open up shoulders, wrists, hips and hamstrings so you can reach better positions and train without pain.",
    items: ["Shoulder & wrist prep", "Hips & hamstrings", "Active range of motion"],
  },
  {
    number: "04.",
    title: "Body transformation",
    text: "Build muscle and lose fat with structured training and simple, sustainable habits around it.",
    items: ["Muscle building", "Fat loss", "Habits & consistency"],
  },
  {
    number: "05.",
    title: "Conditioning",
    text: "Improve work capacity and endurance so you recover faster between sets and between sessions.",
    items: ["Work capacity", "Endurance circuits", "Recovery between sets"],
  },
];

export const skillsIntro = {
  title: "Skills",
  tag: "Athlete",
  intro: "The skills from my own training — built with the same progressions I use with my clients.",
};

// Remove any skill the trainer doesn't have; add `url` to link a video of it.
export const skills: Project[] = [
  { year: "[YEAR]", category: "[BEST HOLD]", title: "Planche" },
  { year: "[YEAR]", category: "[BEST HOLD]", title: "Front lever" },
  { year: "[YEAR]", category: "[BEST REPS]", title: "Muscle-up" },
  { year: "[YEAR]", category: "[BEST HOLD]", title: "Handstand" },
  { year: "[YEAR]", category: "[BEST HOLD]", title: "Back lever" },
  { year: "[YEAR]", category: "[BEST HOLD]", title: "Human flag" },
  { year: "[YEAR]", category: "[BEST LIFT]", title: "Weighted calisthenics" },
  { year: "[YEAR]", category: "[DETAILS]", title: "[OTHER SKILL]" },
];

export const about = {
  title: `Hey — I'm ${person.name}`,
  tag: "About me",
  intro: "[YOUR STORY — who you are, how you found calisthenics and why you started coaching.]",
  more: "[COACHING EXPERIENCE — how long you’ve coached, who you coach and where.]",
  drivesMe: {
    title: "My story",
    cards: [
      { title: "Journey", text: "[YOUR CALISTHENICS JOURNEY — when you started, your first skills and the milestones along the way.]" },
      { title: "Background", text: "[BACKGROUND — sports, education or work before coaching.]" },
      { title: "Philosophy", text: "[YOUR COACHING PHILOSOPHY — what you believe about training and how you work with clients.]" },
    ],
  },
};

export const philosophyTitle = "Training philosophy";

export const values: Value[] = [
  { label: "Progressive overload.", icon: "trending-up", text: "Small, planned increases in difficulty — reps, leverage, hold time or added weight — so you keep getting stronger." },
  { label: "Individual.", icon: "pointer", text: "Your program is built around your level, goals, schedule and equipment. No copy-paste plans." },
  { label: "Skill progression.", icon: "key", text: "Every skill is broken into clear steps. You move on when you own the one you’re on." },
  { label: "Technique.", icon: "target", text: "Clean form first. Good positions build strength faster and keep your joints healthy." },
  { label: "Mobility.", icon: "move", text: "Range of motion is trained, not assumed — so you can reach and hold the positions the skills need." },
  { label: "Recovery.", icon: "moon", text: "Rest, sleep and smart volume are part of the plan. Progress happens between sessions too." },
];

export const faqs: Faq[] = [
  { q: "I’m a complete beginner. Is calisthenics for me?", a: "Yes. Every program starts from your current level. If you can’t do a pull-up yet, we start with the steps that get you there." },
  { q: "How does online coaching work?", a: "You get a personalized program, send videos of your sets for technique review, and your plan is adjusted as you progress. [CHECK-IN FREQUENCY & PLATFORM]" },
  { q: "What equipment do I need?", a: "A pull-up bar is the most important piece. Parallettes, rings, dip bars and resistance bands help. Your program is built around what you have access to." },
  { q: "How often do I need to train?", a: "Your program is built around the days you can realistically train and recover from. Consistency matters more than volume." },
  { q: "Do you help with nutrition?", a: "[NUTRITION — whether nutrition guidance is included, and in which programs.]" },
  { q: "How long until I get my first muscle-up or planche?", a: "It depends on your starting strength, bodyweight and consistency. After your assessment you get an honest estimate and a step-by-step progression." },
  { q: "How much does coaching cost?", a: "Pricing depends on the program and format: [PRICING]." },
  { q: "How do I apply?", a: "Fill in the application form with your current level and goals. I review every application and get back to you within [RESPONSE TIME] to set up your assessment." },
];

const process: ProcessStep[] = [
  { title: "Apply", text: "Fill in the application with your current level, goals and training history." },
  { title: "Assessment", text: "We go through your strength, mobility and technique to find your starting point and what’s holding you back." },
  { title: "Personalized program", text: "You get a plan built around your goals, schedule and equipment — with clear progressions for every skill." },
  { title: "Coaching", text: "You train, I coach: technique feedback, answers to your questions and adjustments to your plan along the way." },
  { title: "Progress", text: "We track your numbers and skills, retest regularly and set the next targets as you hit them." },
];

export const processIntro = {
  title: "How coaching works",
  tag: "Process",
  intro: "From your application to your first new skill — here’s what working together looks like.",
  steps: process,
};

export const services: Service[] = [
  {
    slug: "1-1-coaching",
    title: "1:1 Coaching",
    titleLines: ["1:1", "Coaching"],
    blurb: "Personal sessions in person, with my full attention on your technique.",
    format: "In person · [LOCATION]",
    intro: "The fastest way to learn: I’m there for every set, correcting your form in real time and adjusting the session to how you move that day.",
    includes: ["Assessment", "Personal program", "In-person sessions", "Technique correction", "Progress tracking"],
    process,
    values: values.slice(0, 4),
    faqs: [faqs[0], faqs[2], faqs[5], faqs[6], faqs[7]],
  },
  {
    slug: "online-coaching",
    title: "Online Coaching",
    titleLines: ["Online", "Coaching"],
    blurb: "A personalized program and remote coaching, wherever you train.",
    format: "Online",
    intro: "Train on your own schedule with a plan built for you. You send your sets, I review your technique and adjust your program as you progress.",
    includes: ["Assessment", "Personal program", "Video technique review", "Check-ins", "Program updates"],
    process,
    values: values.slice(0, 4),
    faqs: [faqs[1], faqs[2], faqs[3], faqs[6], faqs[7]],
  },
  {
    slug: "beginner-coaching",
    title: "Beginner Coaching",
    titleLines: ["Beginner", "Coaching"],
    blurb: "For anyone starting from zero who wants a safe, structured start.",
    format: "[IN PERSON / ONLINE]",
    intro: "No pull-up yet? That’s a perfect starting point. We build the foundations — strength, technique and mobility — and get your first pull-ups, dips and push-ups done right.",
    includes: ["Foundations", "First pull-up", "Technique basics", "Mobility", "Habits"],
    process,
    values: [values[1], values[0], values[3], values[5]],
    faqs: [faqs[0], faqs[2], faqs[3], faqs[4], faqs[7]],
  },
  {
    slug: "advanced-skill-coaching",
    title: "Advanced Skills",
    titleLines: ["Advanced", "Skills"],
    blurb: "For experienced athletes chasing the planche, front lever, muscle-up and more.",
    format: "[IN PERSON / ONLINE]",
    intro: "You have a solid base and want specific skills. I break each skill into progressions, find your weak links and program the strength work to close them.",
    includes: ["Skill assessment", "Planche", "Front lever", "Muscle-up", "Handstand", "Weighted"],
    process,
    values: [values[2], values[0], values[3], values[4]],
    faqs: [faqs[5], faqs[1], faqs[3], faqs[6], faqs[7]],
  },
];

export const programsPage = {
  titleLines: ["Coaching", "Programs"],
  tag: "Coaching",
  intro: "Choose how you want to train with me. Every program starts with an assessment and a plan built for you.",
  pricing: "Pricing depends on the program and format: [PRICING]. Apply and you’ll get all the details with your assessment.",
};

export const programsIntro = {
  title: "Coaching programs",
  tag: "Programs",
  intro: "In person or online, from your first pull-up to your first planche.",
};

export const progressionsIntro = {
  title: "Skill progressions",
  tag: "Progressions",
  lines: [
    "Every skill is a ladder. You climb one step at a time — and move up when you own the step you’re on.",
    "Here’s how the main skills are broken down.",
  ],
};

export const progressions = [
  {
    number: "01.",
    title: "Muscle-up",
    text: "Built on strong, high pulling and a clean transition over the bar.",
    items: ["Strict pull-ups", "Chest-to-bar pull-ups", "Straight bar dips", "Negative muscle-ups", "Assisted transitions", "Strict muscle-up"],
  },
  {
    number: "02.",
    title: "Planche",
    text: "A pushing strength skill built through gradually longer lever positions.",
    items: ["Planche leans", "Tuck planche", "Advanced tuck planche", "Straddle planche", "Full planche"],
  },
  {
    number: "03.",
    title: "Handstand",
    text: "Balance, body line and shoulder strength — trained against the wall first.",
    items: ["Wall plank & wrist prep", "Chest-to-wall handstand", "Kick-ups & bailing", "Heel & toe pulls", "Freestanding handstand"],
  },
  {
    number: "04.",
    title: "Front lever",
    text: "A pulling strength skill that builds serious lats and core.",
    items: ["Scap pulls & hanging leg raises", "Tuck front lever", "Advanced tuck front lever", "One-leg & straddle front lever", "Full front lever"],
  },
  {
    number: "05.",
    title: "Back lever",
    text: "Shoulder extension strength and mobility, built from the German hang up.",
    items: ["Skin the cat", "German hang", "Tuck back lever", "Straddle back lever", "Full back lever"],
  },
];

export const transformationsIntro = {
  title: "Transformations",
  tag: "Results",
  intro: "What clients achieved — with their consent, in their own numbers.",
};

export const transformations: Card[] = [1, 2, 3].map(() => ({
  title: "[CLIENT NAME]",
  text: "[CLIENT RESULT]",
  media: [{ label: "[BEFORE]" }, { label: "[AFTER]" }],
  meta: [
    { label: "Duration", value: "[DURATION]" },
    { label: "Strength", value: "[STRENGTH IMPROVEMENT]" },
    { label: "Skills achieved", value: "[SKILLS ACHIEVED]" },
  ],
}));

export const testimonialsIntro = {
  title: "Testimonials",
  tag: "Clients",
  intro: "In their words.",
};

export const testimonials: Card[] = [1, 2, 3].map(() => ({
  title: "[CLIENT NAME]",
  photo: { label: "Photo" },
  text: "“[CLIENT TESTIMONIAL]”",
  meta: [
    { label: "Program", value: "[PROGRAM]" },
    { label: "Result", value: "[CLIENT RESULT]" },
  ],
}));

export const resultsPage = {
  title: "Results",
  tag: "Clients",
  intro: "Transformations and feedback from the people I coach.",
};

export const certificationsIntro = {
  title: "Certifications",
  tag: "Qualified",
  intro: "[OPTIONAL — one line about your education and qualifications.]",
};

export const certifications: Card[] = [1, 2, 3].map(() => ({
  title: "[CERTIFICATION]",
  media: [{ label: "[CERTIFICATE IMAGE]" }],
  meta: [
    { label: "Organization", value: "[ORGANIZATION]" },
    { label: "Year", value: "[YEAR]" },
  ],
}));

export const galleryIntro = {
  title: "Gallery",
  tag: "Movement",
  intro: "Training, skills, mobility and coaching sessions.",
};

export const gallery: Media[] = [
  { label: "Training" },
  { label: "Skills" },
  { label: "Mobility" },
  { label: "Coaching" },
  { label: "Client sessions" },
];

export const instagram = {
  title: "Instagram",
  intro: "Training clips, skill tutorials and client progress — follow along.",
  // Replace href with individual post URLs and add `src` thumbnails for selected posts.
  posts: [1, 2, 3, 4].map((): Media => ({ label: "[POST]", href: links.instagram })),
};

export const applyPage = {
  title: "Apply",
  intro: "Tell me where you are now and where you want to go. I review every application personally and reply within [RESPONSE TIME].",
};

export const legal = {
  notice: {
    title: "Legal Notice",
    sections: [
      { heading: "Responsible", body: `${person.name}\n[ADDRESS]\n${person.email}` },
      { heading: "Disclaimer", body: "The content of this website has been created with care. However, no guarantee is given for the accuracy, completeness or timeliness of the content." },
      { heading: "Health", body: "Training content on this website is general information, not medical advice. Consult a doctor before starting a new training program, especially if you have injuries or health conditions." },
      { heading: "Copyright", body: "All content on this website is subject to copyright. Any use beyond the limits of copyright law requires written consent." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated on: 23.09.2026",
    sections: [
      { heading: "Overview", body: "This policy explains which personal data is processed when you visit this website and how it is used." },
      { heading: "Application form", body: "When you apply, the data you enter (such as name, age, contact details, location, training level, goals and message) is sent through Web3Forms (web3forms.com) to my email address. It is used only to review your application and reply to you." },
      { heading: "Contact", body: "If you contact me by email, WhatsApp or Instagram, the data you provide is used only to answer your request." },
      { heading: "Cookies", body: "This website only uses cookies that are needed for it to work, plus an optional preference you set in the cookie banner." },
      { heading: "Your rights", body: `You can request information about, correction of, or deletion of your data at any time: ${person.email}.` },
    ],
  },
};
