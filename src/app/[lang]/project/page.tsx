"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "@/components/shared/Title/Title";
import CompanySwiper from "@/components/swiper/company-swiper";

const slidesData = [
  {
    src: "/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg",
    alt: "Cisco Certified CyberOps Associate",
    title: "Cisco Certified CyberOps Associate",
    slug: "cyberops",
  },
  {
    src: "/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg",
    alt: "Cisco Certified CyberOps Associate",
    title: "Cisco Certified CyberOps Associate",
    slug: "cyberops",
  },
  {
    src: "/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg",
    alt: "Cisco Certified CyberOps Associate",
    title: "Cisco Certified CyberOps Associate",
    slug: "cyberops",
  },
  {
    src: "/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg",
    alt: "Cisco Certified CyberOps Associate",
    title: "Cisco Certified CyberOps Associate",
    slug: "cyberops",
  },
  {
    src: "/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg",
    alt: "Cisco Certified CyberOps Associate",
    title: "Cisco Certified CyberOps Associate",
    slug: "cyberops",
  },
];

const ProjectPage = () => {
  return (
    <div className="container">
      <div className="mt-20">
        <Title
          title="Our Projects"
          subtitle="Trusted solutions. Proven results."
        />
      </div>
      <div className="mt-20">
        <Swiper
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          loop
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            500: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="mySwiper"
        >
          {slidesData.map(({ src, alt, title, slug }, i) => (
            <SwiperSlide key={i}>
              <Link href={`/project/${slug}`}>
                <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    placeholder="blur"
                    blurDataURL={src}
                  />
                </div>
                <p className="font-monda mt-[24px]">{title}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-20">
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={3000}
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
          allowTouchMove={false}
          className="mySwiper"
        >
          {slidesData.map(({ src, alt, title }, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  placeholder="blur"
                  blurDataURL={src}
                />
              </div>
              <p className="font-monda mt-[24px]">{title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-20">
        <CompanySwiper />
      </div>
    </div>
  );
};

export default ProjectPage;
