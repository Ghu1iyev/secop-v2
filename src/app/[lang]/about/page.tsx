"use client";
import React from "react";
import Team from "./team";
import Image from "next/image";
import { GetApi } from "@/lib/axios";
import { useTranslation } from "@/utils/i18n";
import { useQuery } from "@tanstack/react-query";
import { useHeaders } from "@/hooks/useHeadersApi";
import Title from "@/components/shared/Title/Title";
import Certificates from "@/components/Home/certificates";
import PartnersSlider from "@/components/swiper/partners-slider";
import { CertificateProps, teamTypes } from "@/types/common";
import { useLanguage } from "@/context/LanguageProvider";

type ProjectProps = {
  results: {
    subtitle_1: string;
    text_1: string;
    image_1: string;
  }[];
};

const Aboutpage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const { data: headersData } = useHeaders();
  const { data } = useQuery<ProjectProps>({
    queryKey: ["about", language],
    queryFn: () => GetApi(`/about/?lang=${language}`),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const { data: TeamData } = useQuery<teamTypes>({
    queryKey: ["team", language],
    queryFn: () => GetApi(`/team/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
  const { data: TeamCertificate } = useQuery<CertificateProps>({
    queryKey: ["team-certificare", language],
    queryFn: () => GetApi(`/team-certificates/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const { data: Certificate } = useQuery<CertificateProps>({
    queryKey: ["certificates"],
    queryFn: () => GetApi(`/certificates/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const content = data?.results?.[0];
  return (
    <div className="container">
      <div className="mt-20 xl:w-[54%] w-full ">
        <Title
          title={t("title.about")}
          subtitle={headersData?.results?.[0]?.about_title}
          fontSize="lg:text-5xl md:text-3xl text-xl font-vesber"
        />
      </div>
      <div className=" flex flex-col gap-7 lg:flex-row my-10 lg:gap-36 lg:my-20 ">
        <div className="relative w-full lg:w-[40%] h-[338px] md:h-[400px] lg:h-[494px]">
          {content?.image_1 && (
            <Image
              src={content.image_1}
              alt="about"
              fill
              className="object-cover lg:object-cover rounded-3xl"
            />
          )}
        </div>
        <div className="lg:w-[44%] mt-5 ">
          <h3 className="font-vesber font-medium text-xl md:text-2xl lg:text-3xl leading-8 ">
            {content?.subtitle_1}
          </h3>
          <div className="w-[442] h-[1px] bg-[#2A2A2A] my-10"></div>
          <div className=" text-sm lg:text-base font-normal leading-7 font-monda  lg:h-80 overflow-y-auto">
            <p>{content?.text_1}</p>
          </div>
        </div>
      </div>
      <div className="lg:mt-44 mt-20">
        <div className="w-full lg:w-[50%]">
          <Title
            title={t("title.trustedPartners")}
            subtitle={headersData?.results?.[0]?.partner_title}
            fontSize="lg:text-5xl md:text-3xl text-xl font-vesber"
          />
        </div>
        <PartnersSlider />
      </div>
      <div className="mt-20">
        <div className="w-full lg:w-[40%]">
          <Title
            title={t("title.team")}
            subtitle={headersData?.results?.[0]?.team_title}
            fontSize="lg:text-5xl md:text-3xl text-xl font-vesber"
          />
        </div>
        {TeamData && <Team data={TeamData} />}
        <div className="my-32">
          {Certificate && <Certificates title="CERTIFICATES" data={Certificate} />}
        </div>
        <div className="my-32" id="team-certificates">
          {TeamCertificate && <Certificates title="TEAM CERTIFICATES" data={TeamCertificate} />}
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
