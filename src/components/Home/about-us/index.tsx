"use client";
import React from "react";
import Button from "@/components/Button";
import { useTranslation } from "@/utils/i18n";
import Title from "@/components/shared/Title/Title";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-[100px] items-center sm:py-[80px] mt-[80px]">
      <div>
        <Title
          title={t("home.about.title")}
          subtitle={t("home.about.subtitle")}
          fontSize="md:text-[48px]"
        />
      </div>
      <div>
        <p className="text-[#B0B0B0] font-monda text-[15px] sm:text-[20px] leading-[34px] mb-[32px] sm:mb-[38px]">
          {t("home.about.description")}
        </p>
        <Button text={t("home.about.button")} url="about-us" />
      </div>
    </section>
  );
};

export default AboutUs;
