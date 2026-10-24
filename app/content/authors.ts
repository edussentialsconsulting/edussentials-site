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
    bio: "[FOUNDER DRAFT] Aniruddha Sapru is the Founder and Principal Counsellor at Edussentials Consulting. He holds a postgraduate degree from the Indian Institute of Management, Indore. Before founding Edussentials, he worked with families on global admissions at The Red Pen, Collegepond, The Right Coll and Eduabroad. Students at Edussentials work directly with him.",
    type: "founder",
  },
} satisfies Record<string, Author>;

export type AuthorSlug = keyof typeof authors;
