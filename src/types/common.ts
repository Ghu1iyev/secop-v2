export interface ClientFeedbackProps {
  results: {
    company: string;
    text: string;
  }[];
}

export interface CategoryType {
  results: {
    name: string;
  }[];
}
export interface ArticlesType {
  results: {
    name: string;
    image: string;
    created_at: string;
    category: {
      name: string;
    };
    author: string;
  }[];
}

export interface ProjectItem {
  id: number;
  slug: string;
  name: string;
  list_text: string;
  detail_text: string;
  image: string;
  client: string;
  duration: string;
  services_provided: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProjectProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProjectItem[];
}

export interface AboutUsProps {
  results: {
    subtitle_1: string;
    text_1: string;
  }[];
}