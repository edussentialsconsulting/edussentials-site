// Content registry for blog posts and opinion pieces.
// Agent 3 publishing contract: each article is one file in app/content/,
// registered here. The template, schema, sitemap and index pages all
// derive from this registry. Nothing else needs to change per article.

export type ArticleCategory =
  | "Essays & Applications"
  | "Admissions Data & Process"
  | "Profile & Planning"
  | "Courses & Careers"
  | "Scholarships & Aid"
  | "Choosing an Advisor"
  | "Opinions";

export type ArticleSection = {
  id?: string;
  /** Optional H2 for the section */
  heading?: string;
  /** Paragraphs. `lead` renders as a bold run-in at the start of the paragraph. */
  paragraphs: { lead?: string; quote?: boolean; text: string; links?: { text: string; href: string }[] }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type Article = {
  /** URL segment under /blog/ */
  slug: string;
  category: ArticleCategory;
  title: string;
  /** Short display title for index cards and breadcrumbs */
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  /** Hero standfirst under the H1 */
  standfirst: string;
  datePublished: string; // ISO date
  dateModified: string; // ISO date
  author: { name: string; url: string };
  showContents?: boolean;
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  related: { href: string; label: string }[];
  cta?: { heading: string; body: string };
};

// ---- Registry ----
import { studentInternship } from "../content/what-makes-a-student-internship-worth-doing";
import { changingDegreeSubject } from "../content/changing-degree-subject-after-enrolment";
import { mastersAfterWorkExperience } from "../content/choosing-a-masters-after-work-experience";
import { familyDegreeDisagreement } from "../content/when-parents-and-students-disagree-on-a-degree";
import { testingDegreeInterest } from "../content/how-to-test-a-degree-interest-before-applying";
import { returningToHobbies } from "../content/returning-to-hobbies-at-any-age";
import { anotherDegreeAfterMba } from "../content/another-degree-abroad-after-mba";
import { mastersCareerChange } from "../content/masters-for-a-career-change";
import { aiCollaboration } from "../content/using-ai-without-outsourcing-your-thinking";
import { ivyLeaguePersonalStatement } from "../content/ivy-league-personal-statement";
import { ivyLeagueFromIndia } from "../content/ivy-league-from-india";
import { supplementalEssays } from "../content/supplemental-essays";
import { commonAppEssaysAnalysis } from "../content/common-app-essays-that-worked-analysis";
import { studyAbroadAfter12th } from "../content/study-abroad-after-12th";
import { ucasForIndianStudents } from "../content/ucas-for-indian-students";
import { strongLetterOfRecommendation } from "../content/how-to-ask-for-a-strong-letter-of-recommendation";
import { universityShortlist } from "../content/how-to-assess-a-university-shortlist";

export const articles: Article[] = [
  studentInternship,
  changingDegreeSubject,
  mastersAfterWorkExperience,
  familyDegreeDisagreement,
  testingDegreeInterest,
  returningToHobbies,
  anotherDegreeAfterMba,
  mastersCareerChange,
  aiCollaboration,
  universityShortlist,
  studyAbroadAfter12th,
  ucasForIndianStudents,
  strongLetterOfRecommendation,
  ivyLeaguePersonalStatement,
  ivyLeagueFromIndia,
  supplementalEssays,
  commonAppEssaysAnalysis,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
