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
    author: string;
    slug: string;
    category: {
      name: string;
    };
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

export interface BlogDetailProps {
  article: {
    name: string;
    text: string;
    image: string;
  };
    related_articles?: ArticlesType["results"];

}

export interface CategoriesType {
  results: {
    name: string;
  }[];
}


export interface ProjectProps {
    image: string;
    duration: string;
    name: string;
    services_provided: string;
    detail_text: string;
    client: string;
}

export interface teamTypes {
  results: {
    image: string;
    text: string;
    position: string;
    full_name: string;
  }[];
}