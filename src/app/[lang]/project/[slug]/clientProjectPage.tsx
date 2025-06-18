"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/utils/i18n";
import { IoIosArrowForward } from "react-icons/io";
import { useLanguage } from "@/context/LanguageProvider";
import { DetailProjectProps } from "@/types/common";

const ClientProjectPage = ({ data }: { data: DetailProjectProps }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <main className="container">
      <div className=" mt-20 lg:mt-36 lg:mb-12 mb-8">
        <div className=" text-base md:text-lg lg:text-xl font-monda text-[#B0B0B099] leading-7 flex items-center gap-5">
          <Link href={`/${language}`} className="hover:text-white">
            {t("title.home")}
          </Link>
          <span>
            <IoIosArrowForward />
          </span>
          <Link href={`/${language}/project`} className="hover:text-white">
            {t("title.projects")}
          </Link>
          <span>
            <IoIosArrowForward />
          </span>
          <span className="text-white font-semibold">
            {" "}
            {t("title.projectPage")}
          </span>
        </div>
      </div>

      <div className="p-8 md:p-12 lg:p-20 bg-[#121212] rounded-3xl w-100% h-auto ">
        <h2 className="lg:text-5xl md:text-3xl text-xl font-vesber">
          {data?.name}
        </h2>
        <div className="w-full h-[276px] md:h-[516px] mt-10 lg:mb-14 mb-10 relative">
          <Image
            src={data?.image || ""}
            alt=""
            blurDataURL={data?.image || ""}
            placeholder="blur"
            fill
            className="object-cover rounded-[20px] "
          />
        </div>

        <p className="font-vesber text-xl md:text-2xl lg:text-3xl leading-8">
          {t("projectDetail.title")}
        </p>
        <div className="w-full h-[1px] bg-[#2A2A2A] my-10"></div>

        <div className="font-monda text-xs md:text-sm lg:text-base leading-8 font-normal">
          <p>
            {t("projectDetail.client")}:{" "}
            <span className="text-[#B0B0B0]">{data?.client}</span>
          </p>

          <p>
            {t("projectDetail.duration")}:{" "}
            <span className="text-[#B0B0B0]">{data?.duration}</span>
          </p>

          <p>
            {t("projectDetail.servicesProvided")}:
            <span className="text-[#B0B0B0]">{data?.services_provided}</span>
          </p>
        </div>

        <div className=" mt-10 lg:mt-14">
          <p className="font-monda text-xs md:text-sm lg:text-base leading-8 font-normal text-[#B0B0B0]">
            {data?.detail_text}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ClientProjectPage;
