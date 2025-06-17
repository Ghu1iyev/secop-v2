import { GetApi } from "@/lib/axios";
import ClientProjectPage from "./clientProjectPage";
import { DetailProjectProps } from "@/types/common";


type PageProps = {
  params: Promise<{
    slug: string;
    lang?: string;
  }>;
};
export default async function ProjectPage({ params }: PageProps) {
   const { slug, lang } = await params;
    const language = lang || "az";
    const data = await GetApi(`/projects-detail/${slug}/?lang=${language}`);
   return <ClientProjectPage data={data as DetailProjectProps}/>
} 