"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/utils/i18n";

const HomeBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full  h-[300px] md:h-[514px] mt-[50px] md:mt-[80px] rounded-[20px] md:rounded-[60px] overflow-hidden">
      <div className="w-[60%] md:text-[55px] font-monda text-[#fff] absolute top-0 left-0 bg-[#000] z-20 rounded-br-[20px] md:rounded-br-[60px] pl-[10px] pb-[10px] pr-[40px]">
        <p
          className="w-full md:leading-[68px] p-3 tracking-wide
"
        >
          {t("home.banner.security_priority")}
        </p>
      </div>
      <Image
        src="/assets/images/jpg/sec-web.jpg"
        blurDataURL="/assets/images/jpg/sec-web.jpg"
        objectFit="cover"
        fill
        placeholder="blur"
        alt="home banner"
      />
    </div>
  );
};

export default HomeBanner;
