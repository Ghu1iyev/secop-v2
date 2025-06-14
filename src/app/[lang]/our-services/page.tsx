import { GetApi } from "@/lib/axios";
import ClientOurServices from "./clientServicePage";

type PageProps = {
  params: Promise<{
    lang?: string;
  }>;
};

export default async function OurServicePage({ params }: PageProps ) {
  const resolvedParams = await params;
  const language = resolvedParams.lang || "az";
  const service = await GetApi(`/services/?lang=${language}`) as {
    results: { name: string; text: string }[];
  };

  return <ClientOurServices data={service} />;
}
