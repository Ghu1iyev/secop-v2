import { useLanguage } from "@/context/LanguageProvider";
import { GetApi } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface HeadersProps {
  results: {
    home_title: string;
    contact_title: string;
    blogs_title: string;
    partner_title: string;
    about_title: string;
    team_title: string;
    certificate_title: string;
    team_certificates_title: string;
    service_title: string;
    projects_title: string;
    service_text: string;
  }[];
}
export const useHeaders = () => {
  const { language } = useLanguage();

  return useQuery<HeadersProps>({
    queryKey: ["settings", language],
    queryFn: () => GetApi(`/headers/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};
