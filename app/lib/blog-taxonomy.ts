import { CAL_LINK } from "./site";

export const BLOG_TOPICS = [
  {
    slug: "essays-applications",
    label: "Essays & Applications",
    metaTitle: "Essays & Applications | Edussentials Consulting Blog",
    metaDescription: "What admissions readers look for in application essays and recommendation letters, written for students applying from India. No templates.",
    intro: "Most first drafts we see are not badly written. They are unrevealing. They restate the activity list and say very little about how the student actually thinks. The pieces here take each written part of an application on its own terms, from the Common App personal statement to the supplements individual universities set. Recommendation letters sit here too, because a reader weighs them as evidence alongside your own writing. You will not find templates. You will find what an admissions reader is looking for in each document, and where applicants from India most often miss it. Start with whatever you are drafting this week, and keep your own voice in it.",
  },
  {
    slug: "admissions-process",
    label: "Admissions & Process",
    metaTitle: "Admissions & Process | Edussentials Consulting Blog",
    metaDescription: "How UCAS and Ivy League admissions actually work for students applying from India, and what to check with each university before you apply.",
    intro: "Indian families often arrive with two different questions tangled together. Which universities are right for this student? And how does the application to them actually work? The second question gets most of the attention, usually too early. The pieces here keep them apart. They explain how UCAS works for UK courses and why Ivy League admissions follow a very different logic, with attention to what each system asks of an applicant from India. They are written to make the process legible, not to make it sound easier than it is. Deadlines and policies change every cycle, so treat any date or figure as a starting point and check it with the university before you act.",
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
    description: "Your deadlines fall this cycle. Start here for the essays and decisions in front of you now.",
    featured: ["ucas-for-indian-students", "ivy-league-personal-statement", "how-to-ask-for-a-strong-letter-of-recommendation"],
    cta: {
      heading: "Want an honest read on where your applications stand?",
      body: "We look at your shortlist and your drafts, then tell you plainly what needs work before the deadlines close in. The work is led by the founder and stays in your own voice. No pitch, no pressure.",
      label: "Book a 45-minute call",
      href: CAL_LINK,
    },
  },
  {
    slug: "planning-early",
    label: "Planning early",
    description: "For students still deciding what to study, whether that means a stream in school or a course after Class 12. Start before the choice is made for you.",
    featured: ["study-abroad-after-12th"],
    cta: {
      heading: "Choosing a stream or subjects soon?",
      body: "Career Labs gives students hands-on work in a field before they commit to it. A subject choice made after trying the work is easier to stand behind.",
      label: "Explore Career Labs",
      href: "/career-labs",
    },
  },
  {
    slug: "postgraduate",
    label: "Postgraduate",
    description: "For graduates and working professionals. A postgraduate application rests on evidence of what you have already done, so start with the people who can describe it.",
    featured: ["how-to-ask-for-a-strong-letter-of-recommendation"],
    cta: {
      heading: "Preparing a postgraduate application?",
      body: "We help you match programmes to your academic or professional record and plan recommendations that describe your work in detail. No pitch, no pressure.",
      label: "Book a PG consultation",
      href: CAL_LINK,
    },
  },
] as const;

export const CTA_STAGE_PRECEDENCE = ["applying-now", "postgraduate", "planning-early"] as const;

export const RESERVED_BLOG_SLUGS = ["authors", "topics", "share", "opengraph-image", "twitter-image"] as const;
export type ArticleTopic = (typeof BLOG_TOPICS)[number]["label"];
export type ArticleLevel = (typeof BLOG_LEVELS)[number]["slug"];
export type ArticleStage = (typeof BLOG_STAGES)[number]["slug"];
