import { CAL_LINK } from "./site";

export const BLOG_TOPICS = [
  {
    slug: "essays-applications",
    label: "Essays & Applications",
    intro: "[FOUNDER DRAFT] An application should help a reader understand the person behind the record. These articles examine how written work can do that without repeating achievements or borrowing someone else's voice. They cover the main personal statement and the different demands of university supplements, alongside the evidence that makes a recommendation useful. You can start with the part of the application you are working on and use the related reading to consider how it fits with the rest. The emphasis is on making thoughtful choices about what to include and giving each piece a clear purpose.",
  },
  {
    slug: "admissions-process",
    label: "Admissions & Process",
    intro: "[FOUNDER DRAFT] Understanding an application process begins with knowing what the institution is asking you to submit and how it will consider that information. These articles look at particular admissions systems from the perspective of students applying from India. They help you distinguish a decision about academic fit from a decision about how to complete an application. Use them to organise your questions before checking the requirements for your own courses and application year. Where a deadline or policy matters to your next step, confirm it with the relevant institution or application service before acting.",
  },
  {
    slug: "profile-planning",
    label: "Profile & Planning",
    intro: "[FOUNDER DRAFT] Planning ahead is useful when it gives you room to explore an interest and make choices you understand. This topic is a place to consider how academic work and experiences outside the classroom can inform those choices. The aim is to help you ask what an activity means to you before deciding how it might appear in an application. Read with your own circumstances in mind, including the time and support available to you. A plan should remain open to what you learn rather than requiring every interest to become an admissions claim.",
  },
  {
    slug: "courses-careers",
    label: "Courses & Careers",
    intro: "[FOUNDER DRAFT] Choosing a course involves thinking about what you want to study and what studying it will ask of you. This topic connects that decision with the practical questions around where to study and how the choice fits your circumstances. Start with the subject and your reasons for pursuing it, then examine the options against what your family can support. An attractive destination does not settle whether a particular course is suitable. Use the articles to identify questions that need closer investigation before you turn an initial interest into a university list.",
  },
  {
    slug: "scholarships-aid",
    label: "Scholarships & Aid",
    intro: "[FOUNDER DRAFT] Funding needs to be considered alongside a university choice, before an application list becomes difficult to change. This topic is a place to examine how financial support relates to the cost your family would still need to meet. Read each opportunity in the context of your own eligibility and the institution's current instructions. A possible award should not be treated as confirmed funding, and an attractive headline amount does not explain the full cost of attendance. Use the articles to prepare specific questions for the university and to make the assumptions in your financial plan visible.",
  },
  {
    slug: "choosing-an-advisor",
    label: "Choosing an Advisor",
    intro: "[FOUNDER DRAFT] Choosing an advisor starts with understanding what help you need and who will provide it. This topic is a place to consider the working relationship as well as the service being offered. Before making a decision, ask how the advisor will involve you in the work and what responsibility remains yours. Clear expectations make it easier to assess whether the support fits your circumstances. Use the articles to prepare questions about the engagement and to examine claims carefully, without treating a promised outcome as a substitute for understanding how the work will be done.",
  },
] as const;

export const BLOG_LEVELS = [
  { slug: "undergraduate", label: "Undergraduate" },
  { slug: "postgraduate", label: "Postgraduate" },
] as const;

// Display order for the reader panels.
export const BLOG_STAGES = [
  {
    slug: "applying-now",
    label: "Applying this year",
    description: "[FOUNDER DRAFT] Read about the applications you are preparing and the decisions still ahead.",
    featured: ["ucas-for-indian-students", "ivy-league-personal-statement", "how-to-ask-for-a-strong-letter-of-recommendation"],
    cta: {
      heading: "[FOUNDER DRAFT] Working on your applications?",
      body: "[FOUNDER DRAFT] Book a call to discuss where you are in the process and the support you need.",
      label: "Book a 45-minute call",
      href: CAL_LINK,
    },
  },
  {
    slug: "planning-early",
    label: "Planning early",
    description: "[FOUNDER DRAFT] Explore your study choices before committing to an application list.",
    featured: ["study-abroad-after-12th"],
    cta: {
      heading: "[FOUNDER DRAFT] Still exploring what to study?",
      body: "[FOUNDER DRAFT] Read about Career Labs as you consider your interests and possible directions for further study.",
      label: "[FOUNDER DRAFT] Explore Career Labs",
      href: "/career-labs",
    },
  },
  {
    slug: "postgraduate",
    label: "Postgraduate",
    description: "[FOUNDER DRAFT] Consider how your academic or professional work can support a postgraduate application.",
    featured: ["how-to-ask-for-a-strong-letter-of-recommendation"],
    cta: {
      heading: "[FOUNDER DRAFT] Preparing a postgraduate application?",
      body: "[FOUNDER DRAFT] Book a consultation to discuss your intended programmes and the support you need with applying.",
      label: "[FOUNDER DRAFT] Book a PG consultation",
      href: CAL_LINK,
    },
  },
] as const;

export const CTA_STAGE_PRECEDENCE = ["applying-now", "postgraduate", "planning-early"] as const;

export const RESERVED_BLOG_SLUGS = ["authors", "topics", "share", "opengraph-image", "twitter-image"] as const;
export type ArticleTopic = (typeof BLOG_TOPICS)[number]["label"];
export type ArticleLevel = (typeof BLOG_LEVELS)[number]["slug"];
export type ArticleStage = (typeof BLOG_STAGES)[number]["slug"];
