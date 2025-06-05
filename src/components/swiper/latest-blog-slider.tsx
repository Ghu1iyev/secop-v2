"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const LatestBlogSlider = () => {
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
            spaceBetween: 0,
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
            <div className="sm:max-w-[330px]">
                 <div className="relative mb-[20px] w-full h-[235px] overflow-hidden rounded-[10px]">
                   <Image
                     src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     fill
                     placeholder="blur"
                     alt=""
                   />
                 </div>
                 <div>
                   <p className="text=[16px] sm:text-[18px] mb-[6px] sm:mb-[12px] font-monda text-[#fff]">
                     Published on May 21
                   </p>
                   <p className="text-[13px] sm:text-[15px] text-[#B0B0B0] overflow-hidden whitespace-nowrap text-ellipsis">
                     cybersecurity, data protection
                   </p>
                   <h3 className="mt-[14px] sm:mt-[20px] text-[19px] sm:text-[22px] font-vesber overflow-hidden whitespace-nowrap text-ellipsis">
                     Security Consulting & Strategy ffdff
                   </h3>
                 </div>
               </div>
          </SwiperSlide>
         <SwiperSlide>
            <div className="max-w-[330px]">
                 <div className="relative mb-[20px] w-full h-[235px] overflow-hidden rounded-[10px]">
                   <Image
                     src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     fill
                     placeholder="blur"
                     alt=""
                   />
                 </div>
                 <div>
                   <p className="text-[18px] mb-[12px] font-monda text-[#fff]">
                     Published on May 21
                   </p>
                   <p className="text-[15px] text-[#B0B0B0] overflow-hidden whitespace-nowrap text-ellipsis">
                     cybersecurity, data protection
                   </p>
                   <h3 className="mt-[20px] text-[22px] font-vesber overflow-hidden whitespace-nowrap text-ellipsis">
                     Security Consulting & Strategy ffdff
                   </h3>
                 </div>
               </div>
          </SwiperSlide>
         <SwiperSlide>
            <div className="max-w-[330px]">
                 <div className="relative mb-[20px] w-full h-[235px] overflow-hidden rounded-[10px]">
                   <Image
                     src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     fill
                     placeholder="blur"
                     alt=""
                   />
                 </div>
                 <div>
                   <p className="text-[18px] mb-[12px] font-monda text-[#fff]">
                     Published on May 21
                   </p>
                   <p className="text-[15px] text-[#B0B0B0] overflow-hidden whitespace-nowrap text-ellipsis">
                     cybersecurity, data protection
                   </p>
                   <h3 className="mt-[20px] text-[22px] font-vesber overflow-hidden whitespace-nowrap text-ellipsis">
                     Security Consulting & Strategy ffdff
                   </h3>
                 </div>
               </div>
          </SwiperSlide>
         <SwiperSlide>
            <div className="max-w-[330px]">
                 <div className="relative mb-[20px] w-full h-[235px] overflow-hidden rounded-[10px]">
                   <Image
                     src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     fill
                     placeholder="blur"
                     alt=""
                   />
                 </div>
                 <div>
                   <p className="text-[18px] mb-[12px] font-monda text-[#fff]">
                     Published on May 21
                   </p>
                   <p className="text-[15px] text-[#B0B0B0] overflow-hidden whitespace-nowrap text-ellipsis">
                     cybersecurity, data protection
                   </p>
                   <h3 className="mt-[20px] text-[22px] font-vesber overflow-hidden whitespace-nowrap text-ellipsis">
                     Security Consulting & Strategy ffdff
                   </h3>
                 </div>
               </div>
          </SwiperSlide>
         <SwiperSlide>
            <div className="max-w-[330px]">
                 <div className="relative mb-[20px] w-full h-[235px] overflow-hidden rounded-[10px]">
                   <Image
                     src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     fill
                     placeholder="blur"
                     alt=""
                   />
                 </div>
                 <div>
                   <p className="text-[18px] mb-[12px] font-monda text-[#fff]">
                     Published on May 21
                   </p>
                   <p className="text-[15px] text-[#B0B0B0] overflow-hidden whitespace-nowrap text-ellipsis">
                     cybersecurity, data protection
                   </p>
                   <h3 className="mt-[20px] text-[22px] font-vesber overflow-hidden whitespace-nowrap text-ellipsis">
                     Security Consulting & Strategy ffdff
                   </h3>
                 </div>
               </div>
          </SwiperSlide>
         <SwiperSlide>
            <div className="max-w-[330px]">
                 <div className="relative mb-[20px] w-full h-[235px] overflow-hidden rounded-[10px]">
                   <Image
                     src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
                     fill
                     placeholder="blur"
                     alt=""
                   />
                 </div>
                 <div>
                   <p className="text-[18px] mb-[12px] font-monda text-[#fff]">
                     Published on May 21
                   </p>
                   <p className="text-[15px] text-[#B0B0B0] overflow-hidden whitespace-nowrap text-ellipsis">
                     cybersecurity, data protection
                   </p>
                   <h3 className="mt-[20px] text-[22px] font-vesber overflow-hidden whitespace-nowrap text-ellipsis">
                     Security Consulting & Strategy ffdff
                   </h3>
                 </div>
               </div>
          </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LatestBlogSlider;
