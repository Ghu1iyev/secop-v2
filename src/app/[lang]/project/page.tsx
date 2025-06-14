"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GetApi } from "@/lib/axios";
import { Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "@/components/shared/Title/Title";
import CompanySwiper from "@/components/swiper/company-swiper";
import { useQuery } from "@tanstack/react-query";
import { GetApi } from "@/lib/axios";



type ProjectProps = {
  results: {
    name: string;
    image: string;
  }[];
};

const ProjectPage = () => {
  const { data } = useQuery<ProjectProps>({
    queryKey: ["projects"],
    queryFn: () => GetApi("/projects/"),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="container">
      <div className="mt-20">
        <Title
          title="Our Projects"
          subtitle="Trusted solutions. Proven results."
          fontSize="lg:text-5xl md:text-3xl text-xl font-vesber"
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
          {data?.results?.map((project, i) => (
            <SwiperSlide key={i}>
              <Link href={`/project/${i}`}>
                <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    placeholder="blur"
                    blurDataURL={project.image}
                  />
                </div>
                <p className="font-monda mt-[24px]">{project.name}</p>
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
          {data?.results?.map((project, i) => (
            <SwiperSlide key={i}>
              <Link href={`/project/${i}`}>
                <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    placeholder="blur"
                    blurDataURL={project.image}
                  />
                </div>
                <p className="font-monda mt-[24px]">{project.name}</p>
              </Link>
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
