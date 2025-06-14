import { GetApi } from "@/lib/axios";
import ClientBlogDetail from "./clientBlogDetail";
import { BlogDetailProps } from "@/types/common";

type PageProps = {
  params: Promise<{
    detail: string;
    lang?: string;
  }>;
};
export default async function BlogDetail({params} : PageProps) {
    const { detail, lang } = await params;
    const language = lang || "az";
    const data = await GetApi(`/articles/${detail}/?lang=${language}`);
    return <ClientBlogDetail data={data as BlogDetailProps}/>
}