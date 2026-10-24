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
  },
  {
    slug: "courses-careers",
    label: "Courses & Careers",
  },
  {
    slug: "scholarships-aid",
    label: "Scholarships & Aid",
  },
  {
    slug: "choosing-an-advisor",
    label: "Choosing an Advisor",
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
    description: "[FOUNDER DRAFT] Explore fields of study before making subject choices.",
    featured: ["study-abroad-after-12th"],
    cta: {
      heading: "[FOUNDER DRAFT] Considering your subject choices?",
      body: "[FOUNDER DRAFT] Career Labs lets students test an interest through activities tied to real fields of work. Explore the formats before deciding what to study.",
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
