'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const OurTeams = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = Array(5).fill({
    title: 'Product Designer',
    description:
      'Our Product Designer transforms complex security systems into simple, user-friendly interfaces. By blending usability with precision, every design supports both function and trust. Their work ensures our tools are as intuitive as they are secure.',
    image: '/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg'
  });

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={'auto'}
      className="w-full py-6"
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} style={{ width: 'auto' }}>
          <div
            className="relative w-[220px] h-[320px] rounded-xl overflow-hidden transition-all duration-500 group hover:w-[600px] hover:h-[320px] flex"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Left image section */}
            <div
              className={`relative h-full transition-all duration-500 ${
                hoveredIndex === index ? 'w-1/2' : 'w-full'
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
              className={`h-full bg-[#0f0f0f] text-white transition-all duration-500 p-6 flex flex-col justify-center rounded-r-xl ${
                hoveredIndex === index ? 'w-1/2 opacity-100 delay-100' : 'w-0 opacity-0 delay-0'
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-2 transition-opacity duration-200 ${
                  hoveredIndex === index ? 'opacity-100 delay-200' : 'opacity-0 delay-0'
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm leading-relaxed transition-opacity duration-200 ${
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
  );
};

export default OurTeams;
