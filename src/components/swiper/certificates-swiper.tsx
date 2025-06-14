"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { GetApi } from "@/lib/axios";
import { useLanguage } from "@/context/LanguageProvider";

type CertificateProps = {
  results: {
    image: string;
    name: string;
  }[];
};
const CertificateSwiper = () => {
  const {language} = useLanguage()
  const { data } = useQuery<CertificateProps>({
    queryKey: ["certificates"],
    queryFn: () => GetApi(`/certificates/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[Autoplay]}
        loop={true}
        className="mySwiper"
      >
        {data?.results?.map((d, i: number) => (
          <SwiperSlide key={i}>
            <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
              <Image
                alt={d?.name}
                src={d?.image || ""}
                blurDataURL={d?.image || ""}
                fill
                placeholder="blur"
              />
            </div>
            <p className="font-monda mt-[24px] text-[#fff]">{d?.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CertificateSwiper;
