"use client";
import React from "react";
import Image from "next/image";
import { GetApi } from "@/lib/axios";
import { Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

type PartnerProps = {
  results: {
    image: string;
  }[];
};
const PartnersSlider = () => {
  const { data } = useQuery<PartnerProps>({
    queryKey: ["corporation"],
    queryFn: () => GetApi("/corporation/"),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  return (
    <section className="pt-[80px] sm:pb-[80px]" id="partnerSlider">
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        slidesPerView={7}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 55,
          },
        }}
        modules={[Autoplay]}
        loop={true}
        className="mySwiper"
      >
        {data?.results?.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[30px]">
              <Image
                src={partner.image || "/assets/images/png/Logo.png"}
                alt="Partner Logo"
                fill
                className="object-contain"
                placeholder="blur"
                blurDataURL={partner.image || "/assets/images/png/Logo.png"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PartnersSlider;
