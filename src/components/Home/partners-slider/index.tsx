"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const PartnersSlider = () => {
  return (
    <section className="py-[80px]">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 0,
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
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30px]">
            <Image
              src="/assets/images/png/Logo.png"
              objectFit="contain"
              blurDataURL="/assets/images/png/Logo.png"
              fill
              placeholder="blur"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PartnersSlider;
