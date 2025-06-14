"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";
import { GetApi } from "@/lib/axios";
import { ClientFeedbackProps } from "@/types/common";
import { useLanguage } from "@/context/LanguageProvider";



const CompanySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {language} = useLanguage()
   const { data } = useQuery<ClientFeedbackProps>({
    queryKey: ["client-feedback"],
    queryFn: () => GetApi(`/client-feedbacks/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });


  return (
    <section className="pt-[80px] md:pb-[80px] relative ">
      <div className="absolute top-4 left-[60px] flex items-center space-x-2 z-10">
        <span className="font-monda text-[#fff] text-[20px] sm:text-[24px]">
          {String(activeIndex + 1).padStart(2, "0")}/
          {String(data?.results?.length).padStart(2, "0")}
        </span>
      </div>
      <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper-tech-info"
      >
        {data?.results?.map((d, i: number) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-6 md:px-6">
              <div>
                <p className="text-[15px] sm:text-[30px] text-[#fff] font-monda">
                  {d?.company}
                </p>
              </div>
              <div>
                <p className="leading-[24px] sm:leading-[47px] text-[#fff] font-vesber text-[20px] sm:text-[42px]">{`"${d?.text}"`}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CompanySwiper;
