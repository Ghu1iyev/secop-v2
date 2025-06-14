"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/utils/i18n";

const HomeBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[514px] mt-[80px] rounded-[60px] overflow-hidden">
      <div className="w-[60%] text-[55px] font-monda text-[#fff] absolute top-0 left-0 bg-[#000] z-20 rounded-br-[60px] pl-[10px] pb-[10px] pr-[40px]">
        <p
          className="w-full leading-[68px] p-3 tracking-wide
"
        >
          {t("home.banner.security_priority")}
        </p>
      </div>
      <Image
        src="/assets/images/jpg/secop.jpg"
        blurDataURL="/assets/images/jpg/secop-image.jpg"
        objectFit="cover"
        fill
        placeholder="blur"
        alt="home banner"
      />
    </div>
  );
};

export default HomeBanner;
