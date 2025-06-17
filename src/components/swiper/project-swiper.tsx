'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface ProjectProps {
  results: {
    name: string;
    image: string;
    slug: string;
  }[];
}

type ProjectSwiperProps = {
  data: ProjectProps;
  language: string;
  reverseDirection: boolean | undefined;
};
const ProjectSwiper = ({
  data,
  language,
  reverseDirection,
}: ProjectSwiperProps) => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: reverseDirection ,
        }}
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
        {data?.results?.map((project, i: number) => (
          <SwiperSlide key={i}>
            <Link href={`/${language}/project/${project?.slug}`}>
              <div className="relative h-[258px] w-full rounded-[16px] overflow-hidden">
                <Image
                  src={project.image || ""}
                  alt={project.name}
                  fill
                  placeholder="blur"
                  objectFit="cover"
                  blurDataURL={project.image || ""}
                />
              </div>
              <p className="font-monda mt-[24px]">{project.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectSwiper;
