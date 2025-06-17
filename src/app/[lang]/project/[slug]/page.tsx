import { GetApi } from "@/lib/axios";
import ClientProjectPage from "./clientProjectPage";
import { DetailProjectProps } from "@/types/common";

type PageProps = {
  params: {
    lang: string;
    slug: string;
  };
};
export default async function ProjectPage({ params }: PageProps) {
  const { slug, lang } = params;

  const language = lang === "en" ? "en" : "az";

  const data = await GetApi(`/projects-detail/${slug}/?lang=${language}`);

  return <ClientProjectPage data={data as DetailProjectProps} />;
}
