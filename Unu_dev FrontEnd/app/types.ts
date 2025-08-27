export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};
export type PostsMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export type StrapiResponse<T> = {
  date: T[];
};
export type StrapiProject = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      large?: { url: string };
      medium?: { url: string };
      small?: { url: string };
    };
  };
  url: string;
  date: string;
  category: string;
  featured: boolean;
};
