import { GetApi } from "@/lib/axios";
import ClientBlogDetail from "./clientBlogDetail";
import { BlogDetailProps } from "@/types/common";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{
    detail: string;
    lang?: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { detail, lang } = await params;
  const language = lang || "az";
  const data = await GetApi<BlogDetailProps>(`/articles/${detail}/?lang=${language}`);

  return {
    title: data?.article?.name || "",
    description: data?.article?.text || "",
    openGraph: {
      title: data?.article?.name,
      description:  data?.article?.text || "",
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${language}/blog/${detail}`,
      images: [
        {
          url: process.env.NEXT_PUBLIC_SITE_URL + (data?.article?.image || ""),
          width: 1200,
          height: 630,
          alt: data?.article?.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.article?.name,
      description: data?.article?.text || "",
      images: process.env.NEXT_PUBLIC_SITE_URL + (data?.article?.image || ""),
    },
  };
}


export default async function BlogDetail({params} : PageProps) {
    const { detail, lang } = await params;
    const language = lang || "az";
    const data = await GetApi(`/articles/${detail}/?lang=${language}`);
    return <ClientBlogDetail data={data as BlogDetailProps}/>
}