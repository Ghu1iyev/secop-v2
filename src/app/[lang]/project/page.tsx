"use client";

import React from "react";
import Title from "@/components/shared/Title/Title";
import CompanySwiper from "@/components/swiper/company-swiper";
import { useQuery } from "@tanstack/react-query";
import { GetApi } from "@/lib/axios";
import { useLanguage } from "@/context/LanguageProvider";
import { useHeaders } from "@/hooks/useHeadersApi";
import { useTranslation } from "@/utils/i18n";
import ProjectSwiper from "@/components/swiper/project-swiper";

interface ProjectProps {
  results: {
    name: string;
    image: string;
    slug: string;
  }[];
}

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
          {data && <ProjectSwiper reverseDirection={false} data={data} language={language} />}
        </div>
        <div>
          {data && <ProjectSwiper reverseDirection={true} data={data} language={language} />}
        </div>
      </div>
      <div className="mt-20">
        <CompanySwiper />
      </div>
    </div>
  );
};

export default ProjectPage;
