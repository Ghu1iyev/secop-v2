"use client";

import "swiper/css";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "@/utils/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "@/components/shared/Title/Title";
import { GetApi } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/context/LanguageProvider";
import { teamTypes } from "@/types/common";
import { useHeaders } from "@/hooks/useHeadersApi";


const OurTeams = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const {data} = useHeaders()

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { data: TeamData } = useQuery<teamTypes>({
    queryKey: ["team", language],
    queryFn: () => GetApi(`/team/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="hidden md:block w-full py-6 mt-[80px] " id="team">
      <div className="w-[680px] mb-[80px] ">
        <Title
          title={t("home.team.title")}
          subtitle={data?.results?.[0]?.team_title}
          fontSize="text-[20px] md:text-[36px]"
        />
      </div>
      <Swiper spaceBetween={10} slidesPerView={"auto"}>
        {TeamData?.results?.map((card, index: number) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div
              className="relative w-[250px] h-[315px] rounded-xl overflow-hidden transition-all duration-500 group hover:w-[600px] hover:h-[320px] flex"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Left image section */}
              <div
                className={`relative rounded-[20px] overflow-hidden h-full transition-all duration-500 ${
                  hoveredIndex === index ? "w-1/2 rounded-r-none" : "w-full"
                }`}
              >
                <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={card?.image}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="absolute bottom-[20px] flex w-full justify-center font-vesber text-[18px] text-white">
                  {card?.full_name}
                </p>
              </div>

              {/* Right text section */}
              <div
                className={`h-full bg-transparent border border-[#2A2A2A] text-white transition-all duration-500 p-6 flex flex-col justify-center rounded-r-xl ${
                  hoveredIndex === index
                    ? "w-1/2 opacity-100 delay-100"
                    : "w-0 opacity-0 delay-0"
                }`}
              >
                <h3
                  className={`text-[#3A3A3A] text-[20px] font-vesber mb-[30px] transition-opacity duration-200 ${
                    hoveredIndex === index
                      ? "opacity-100 delay-200"
                      : "opacity-0 delay-0"
                  }`}
                >
                  {card?.position}
                </h3>
                <p
                  className={`text-[#B0B0B0] text-[15px] font-monda transition-opacity duration-200 ${
                    hoveredIndex === index
                      ? "opacity-100 delay-300"
                      : "opacity-0 delay-0"
                  }`}
                >
                  {card?.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeams;
