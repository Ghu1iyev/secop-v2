"use client";
import React from "react";
import Button from "@/components/Button";
import Title from "@/components/shared/Title/Title";
import { useTranslation } from "@/utils/i18n";

const Services = () => {
  const { t } = useTranslation();
  // const {data} = useQuery({
  //   queryKey: ['services'],
  //   queryFn: () => GetApi('/services'),
  //   staleTime: 1000 * 60 * 10,
  //   refetchOnWindowFocus: false
  // })
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[34px] md:gap-[180px] items-start md:mt-[80px]">
      <Title
        title={t("home.services.title")}
        subtitle={t("home.services.subtitle")}
        fontSize="md:text-[36px]"
      />
      <div>
        <p className="text-[#B0B0B0] leading-[24px] sm:leading-[34px] font-monda text-[15px] sm:text-[20px] mb-[38px]">
          {t("home.services.description")}
        </p>
        <Button text={t("home.services.button")} url="services" />
      </div>
    </section>
  );
};

export default Services;
