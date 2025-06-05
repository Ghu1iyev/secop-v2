"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const testimonials = [
  {
    company: "NexaTech Solutions",
    text: "Working with SECOP was a seamless experience from start to finish. Their team helped us redesign our customer portal with a clear UX strategy and clean, modern UI. We've seen a 40% increase in user engagement since the launch.",
  },
  {
    company: "PixelForge Inc.",
    text: "SECOP delivered beyond expectations. Their modern design principles helped our brand feel more cohesive and future-ready.",
  },
  {
    company: "CloudSync Ltd.",
    text: "From the first meeting to final delivery, SECOP's team was communicative, skilled, and efficient. The final product speaks for itself.",
  },
];

const CompanySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pt-[80px] md:pb-[80px] relative ">
      <div className="absolute top-4 left-[60px] flex items-center space-x-2 z-10">
        <span className="font-monda text-[#fff] text-[20px] sm:text-[24px]">
          {String(activeIndex + 1).padStart(2, "0")}/
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>
      <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper-tech-info"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-6 md:px-6">
              <div>
                <p className="text-[15px] sm:text-[30px] text-[#fff] font-monda">
                  {item.company}
                </p>
              </div>
              <div>
                <p className="leading-[24px] sm:leading-[47px] text-[#fff] font-vesber text-[20px] sm:text-[42px]">{`"${item.text}"`}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CompanySwiper;
