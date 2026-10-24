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
    bio: "[FOUNDER DRAFT] Aniruddha Sapru is the founder of Edussentials Consulting. He works directly with students and families on their university applications, with attention to the thinking behind their choices and the evidence in their written work. His articles examine application decisions in detail and encourage students to retain ownership of their ideas and voice.",
    type: "founder",
  },
} satisfies Record<string, Author>;

export type AuthorSlug = keyof typeof authors;
