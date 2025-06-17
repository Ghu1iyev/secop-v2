"use client";
import React from "react";
import Button from "@/components/shared/Button";
import { useTranslation } from "@/utils/i18n";
import Title from "@/components/shared/Title/Title";
import { useHeaders } from "@/hooks/useHeadersApi";

const Services = () => {
  const { t } = useTranslation();
  const {data} = useHeaders()

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[34px] md:gap-[180px] items-start md:mt-[80px]">
      <Title
        title={t("home.services.title")}
        subtitle={data?.results?.[0]?.service_title}
        fontSize="md:text-[36px]"
      />
      <div>
        <p className="text-[#B0B0B0] leading-[24px] sm:leading-[34px] font-monda text-[15px] sm:text-[20px] mb-[38px]">
          {data?.results?.[0]?.service_text}
        </p>

        <Button text={t("home.services.button")} url="our-services" />
      </div>
    </section>
  );
};

export default Services;
