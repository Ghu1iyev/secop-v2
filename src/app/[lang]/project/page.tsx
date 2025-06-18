'use client'
import { useQuery } from "@tanstack/react-query";
import { GetApi } from "@/lib/axios";
import { useTranslation } from "@/utils/i18n";
import ProjectSwiper from "@/components/swiper/project-swiper";
import CompanySwiper from "@/components/swiper/company-swiper";
import Title from "@/components/shared/Title/Title";
import { ProjectProps } from "@/types/common";
import { useLanguage } from "@/context/LanguageProvider";
import { useHeaders } from "@/hooks/useHeadersApi";

const ProjectPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { data: headerData } = useHeaders();
  const { data } = useQuery<ProjectProps>({
    queryKey: ["projects", language],
    queryFn: () => GetApi(`/projects/?lang=${language}`),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const firstTen = data?.results.slice(0, 10) || [];
  const rest = data?.results.slice(10) || [];

  return (
    <div className="container">
      <div className="mt-20">
        <Title
          title={t("title.projects")}
          subtitle={headerData?.results?.[0]?.projects_title}
          fontSize="lg:text-5xl md:text-3xl text-xl font-vesber"
        />
      </div>
      <div className="mt-20">
        <div className="my-[80px]">
          {firstTen.length > 0 && (
            <ProjectSwiper
              reverseDirection={false}
              data={{ results: firstTen }}
              language={language}
            />
          )}
        </div>
        <div>
          {rest.length > 0 && (
            <ProjectSwiper
              reverseDirection={true}
              data={{ results: rest }}
              language={language}
            />
          )}
        </div>
      </div>
      <div className="mt-20">
        <CompanySwiper />
      </div>
    </div>
  );
};

export default ProjectPage;
