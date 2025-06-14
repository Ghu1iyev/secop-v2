"use client";
import React from "react";
import CertificateSwiper from "@/components/swiper/certificates-swiper";
import TitleAnimation from "@/components/title-animation";
import { useTranslation } from "@/utils/i18n";

const Certificates = () => {
  const { t } = useTranslation();

  return (
    <section className="md:mt-[80px]" id="our-certificates">
      <TitleAnimation title={t("home.certificates.title")} />
      <div>
        <CertificateSwiper />
      </div>
    </section>
  );
};

export default Certificates;
