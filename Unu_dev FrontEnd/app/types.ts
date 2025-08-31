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
export type post = {
  id: string;
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  date: string;
  image: string;
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
export type StrapiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  body: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      large?: { url: string };
      medium?: { url: string };
      small?: { url: string };
    };
  };
};
