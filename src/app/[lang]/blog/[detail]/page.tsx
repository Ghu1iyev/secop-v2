import { GetApi } from "@/lib/axios";
import ClientBlogDetail from "./clientBlogDetail";
import { BlogDetailProps } from "@/types/common";

type PageProps = {
  params: Promise<{
    detail: string;
  }>;
};

export default async function BlogDetail({params} : PageProps) {
     const { detail } = await params;
    const data = await GetApi(`/articles/${detail}`);
    return <ClientBlogDetail data={data as BlogDetailProps}/>
}