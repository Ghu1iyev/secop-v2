"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const CertificateSwiper = () => {
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
        <SwiperSlide>
          <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
            <Image
              alt=""
              src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              fill
              placeholder="blur"
            />
          </div>
          <p className="font-monda mt-[24px] text-[#fff]">Certified Ethical Hacker (CEH)</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
            <Image
              alt=""
              src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              fill
              placeholder="blur"
            />
          </div>
          <p className="font-monda mt-[24px] text-[#fff]">Certified Ethical Hacker (CEH)</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
            <Image
              alt=""
              src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              fill
              placeholder="blur"
            />
          </div>
          <p className="font-monda mt-[24px] text-[#fff]">Certified Ethical Hacker (CEH)</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
            <Image
              alt=""
              src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              fill
              placeholder="blur"
            />
          </div>
          <p className="font-monda mt-[24px] text-[#fff]">Certified Ethical Hacker (CEH)</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
            <Image
              alt=""
              src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              fill
              placeholder="blur"
            />
          </div>
          <p className="font-monda mt-[24px] text-[#fff]">Certified Ethical Hacker (CEH)</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
            <Image
              alt=""
              src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              fill
              placeholder="blur"
            />
          </div>
          <p className="font-monda mt-[24px] text-[#fff]">Certified Ethical Hacker (CEH)</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
            <Image
              alt=""
              src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              fill
              placeholder="blur"
            />
          </div>
          <p className="font-monda mt-[24px] text-[#fff]">Certified Ethical Hacker (CEH)</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
            <Image
              alt=""
              src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              fill
              placeholder="blur"
            />
          </div>
          <p className="font-monda mt-[24px] text-[#fff]">Certified Ethical Hacker (CEH)</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
            <Image
              alt=""
              src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
              fill
              placeholder="blur"
            />
          </div>
          <p className="font-monda mt-[24px] text-[#fff]">Certified Ethical Hacker (CEH)</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CertificateSwiper;
