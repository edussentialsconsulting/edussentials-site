export type Author = {
  name: string;
  slug: string;
  role: string;
  bio: string;
  photo?: string;
  linkedIn?: string;
  type: "founder" | "guest";
};

export const DEFAULT_AUTHOR = "aniruddha-sapru";

export const authors = {
  [DEFAULT_AUTHOR]: {
    name: "Aniruddha Sapru",
    slug: DEFAULT_AUTHOR,
    role: "Founder and Principal Counsellor",
    bio: "Aniruddha Sapru spent several years advising families at four of India's established admissions firms before founding Edussentials, where he takes on fewer students and works with each one directly. He holds a postgraduate degree from IIM Indore. He reviews every essay himself and would rather tell a family their university list needs rethinking than reassure them. On this blog he writes about the decisions that shape an application, and pushes back on advice that sounds good but does nothing.",
    type: "founder",
  },
} satisfies Record<string, Author>;

export type AuthorSlug = keyof typeof authors;
