"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { CertificateProps } from "@/types/common";

const CertificateSwiper = ({data} : {data: CertificateProps}) => {
 
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
