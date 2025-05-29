"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Team = () => {
  const teamData = [
    {
      name: "Aslan Ashirov",
      role: "Founder & CEO",
      image: "/assets/images/png/team.jpg",
      description:
        "As CEO of SECOP, I lead our strategic vision and ensure we stay ahead in an ever-changing digital security landscape. My role is to align innovation with trust — building a company that delivers both technical excellence and lasting partnerships.",
    },
    {
      name: "Asu Abdulla",
      role: "Founder & CEO",
      image: "/assets/images/png/team2.jpg",
      description:
        "As CEO of SECOP, I lead our strategic vision and ensure we stay ahead in an ever-changing digital security landscape. My role is to align innovation with trust — building a company that delivers both technical excellence and lasting partnerships.",
    },
    {
      name: "Aslan Ashirov",
      role: "Founder & CEO",
      image: "/assets/images/png/team.jpg",
      description:
        "As CEO of SECOP, I lead our strategic vision and ensure we stay ahead in an ever-changing digital security landscape. My role is to align innovation with trust — building a company that delivers both technical excellence and lasting partnerships.",
    },
    {
      name: "Aslan Ashirov",
      role: "Founder & CEO",
      image: "/assets/images/png/team.jpg",
      description:
        "As CEO of SECOP, I lead our strategic vision and ensure we stay ahead in an ever-changing digital security landscape. My role is to align innovation with trust — building a company that delivers both technical excellence and lasting partnerships.",
    },
    {
      name: "Aslan Ashirov",
      role: "Founder & CEO",
      image: "/assets/images/png/team.jpg",
      description:
        "As CEO of SECOP, I lead our strategic vision and ensure we stay ahead in an ever-changing digital security landscape. My role is to align innovation with trust — building a company that delivers both technical excellence and lasting partnerships.",
    },
    {
      name: "Aslan Ashirov",
      role: "Founder & CEO",
      image: "/assets/images/png/team.jpg",
      description:
        "As CEO of SECOP, I lead our strategic vision and ensure we stay ahead in an ever-changing digital security landscape. My role is to align innovation with trust — building a company that delivers both technical excellence and lasting partnerships.",
    },
  ];

  return (
    <>
      <Swiper
        autoplay={{ delay: 0, disableOnInteraction: false }}
        slidesPerView={4}
        speed={3000}
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 0 },
          500: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 55 },
        }}
        modules={[Autoplay]}
        loop={true}
        allowTouchMove={false}
        className="mySwiper"
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="mt-20 group transition-all duration-300">
              <div className="h-full">
                <Image
                  className="rounded-xl object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  alt={member.name}
                  width={326}
                  height={412}
                  src={member.image}
                  style={{ height: "412px" }}
                />
              </div>
              <div className="flex flex-col gap-6 transition-all duration-300 group-hover:text-white">
                <div className="mt-6">
                  <h2 className="font-vesber font-normal leading-8 text-2xl transition-all duration-300">
                    {member.name}
                  </h2>
                  <h3 className="font-monda font-normal leading-8 tracking-tight text-[#B0B0B0] group-hover:text-white transition-all duration-300">
                    {member.role}
                  </h3>
                </div>
                <p className="text-base font-normal leading-4 font-monda text-[#3A3A3A] group-hover:text-white transition-all duration-300">
                  {member.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Team;
