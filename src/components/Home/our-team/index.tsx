"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Title from "@/components/shared/Title/Title";

const OurTeams = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = Array(8).fill({
    title: "Product Designer",
    description:
      "Our Product Designer transforms complex security systems into simple, user-friendly interfaces. By blending usability with precision, every design supports both function and trust. Their work ensures our tools are as intuitive as they are secure.",
    image: "/assets/images/jpg/8a7324733c75c962d29ca33a935286eebf42afac.jpg",
  });

  return (
    <div className="hidden md:block w-full py-6 mt-[80px]">
      <div className="w-[680px] mb-[80px]">
        <Title title="Meet Our Team" subtitle="Behind every secure system is a team like ours — driven by innovation, built on trust, and focused on your protection."/>
      </div>
      <Swiper
      spaceBetween={10}
      slidesPerView={"auto"}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} style={{ width: "auto" }}>
          <div
            className="relative w-[250px] h-[315px] rounded-xl overflow-hidden transition-all duration-500 group hover:w-[600px] hover:h-[320px] flex"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Left image section */}
            <div
              className={`relative rounded-[20px] overflow-hidden h-full transition-all duration-500 ${
                hoveredIndex === index ? "w-1/2 rounded-r-none" : "w-full"
              }`}
            >
              <Image
                src={card.image}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            {/* Right text section */}
            <div
              className={`h-full bg-transparent border border-[#2A2A2A] text-white transition-all duration-500 p-6 flex flex-col justify-center rounded-r-xl ${
                hoveredIndex === index ? 'w-1/2 opacity-100 delay-100' : 'w-0 opacity-0 delay-0'
              }`}
            >
              <h3
                className={`text-[#3A3A3A] text-[20px] font-vesber mb-[30px] transition-opacity duration-200 ${
                  hoveredIndex === index ? 'opacity-100 delay-200' : 'opacity-0 delay-0'
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-[#B0B0B0] text-[15px] font-monda transition-opacity duration-200 ${
                  hoveredIndex === index ? 'opacity-100 delay-300' : 'opacity-0 delay-0'
                }`}
              >
                {card.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default OurTeams;
