"use client";
import { teamTypes } from "@/types/common";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ResponsiveTeam = ({ data }: {data: teamTypes | undefined}) => {
  return (
    <div className="md:hidden">
      <Swiper
        autoplay={{ delay: 0, disableOnInteraction: false }}
        slidesPerView={4}
        speed={3000}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          420: {
            slidesPerView: 1.4,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[Autoplay]}
        loop={true}
        allowTouchMove={false}
        className="mySwiper"
      >
        {data?.results?.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="mt-20">
              <div className="rounded-xl overflow-hidden object-cover relative w-full h-[300px] md:h-[412px]">
                <Image
                  alt={member?.full_name}
                  src={member?.image || ""}
                  blurDataURL={member?.image || ""}
                  fill
                  objectFit="cover"
                  placeholder="blur"
                />
              </div>
              <div className="flex flex-col gap-4 lg:gap-6">
                <div className="mt-6">
                  <h2 className="font-vesber text-[#fff] font-normal leading-8 text-2xl">
                    {member?.full_name}
                  </h2>
                  <h3 className="font-monda font-normal leading-4 lg:leading-8 tracking-tight text-sm  text-[#ffffff]">
                    {member?.position}
                  </h3>
                </div>
                <p className="text-sm lg:text-base font-normal leading-4 font-monda text-[#9e9e9e]">
                  {member?.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ResponsiveTeam;
