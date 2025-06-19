import { GetApi } from "@/lib/axios";
import ClientProjectPage from "./clientProjectPage";
import { DetailProjectProps } from "@/types/common";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
    lang?: string;
  }>;
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, lang } = await params;
  const language = lang || "az";
  const data = await GetApi<DetailProjectProps>(`/projects-detail/${slug}/?lang=${language}`);

  return {
    title: data?.name || "",
    description: data?.list_text || "",
    openGraph: {
      title: data?.name,
      description: data?.list_text || "",
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${language}/project/${slug}`,
      images: [
        {
          url: data?.image || "",
          width: 1200,
          height: 630,
          alt: data?.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.name,
      description: data?.list_text || "",
      images: [data?.image || ""],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug, lang } = await params;
  const language = lang || "az";
  const data = await GetApi(`/projects-detail/${slug}/?lang=${language}`);
  return <ClientProjectPage data={data as DetailProjectProps} />;
}
