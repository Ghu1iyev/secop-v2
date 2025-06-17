"use client";
import React from "react";
import { GetApi } from "@/lib/axios";
import { useTranslation } from "@/utils/i18n";
import { AboutUsProps } from "@/types/common";
import Button from "@/components/shared/Button";
import { useQuery } from "@tanstack/react-query";
import Title from "@/components/shared/Title/Title";
import { useLanguage } from "@/context/LanguageProvider";

const AboutUs = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const { data } = useQuery<AboutUsProps>({
    queryKey: ["about", language],
    queryFn: () => GetApi(`/about/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
  return (
    <section className="sm:py-[80px] mt-[80px]">
      {data?.results?.slice(0, 1).map((d, i: number) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-[100px] items-center"
          key={i}
        >
          <div>
            <Title
              title={t("home.about.title")}
              subtitle={d?.subtitle_1}
              fontSize="md:text-[48px]"
            />
          </div>
          <div>
            <p className="text-[#B0B0B0] font-monda text-[15px] sm:text-[20px] leading-[34px] mb-[32px] sm:mb-[38px]">
              {d?.text_1}
            </p>
            <Button text={t("home.about.button")} url="about-us" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutUs;
