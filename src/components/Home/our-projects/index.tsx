"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

const OurProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Global reach for effortless expansion",
      subtitle: "PROTECTION AVAILABLE ANYWHERE",
      description:
        "Available at Amazon, eBay, Wayfair, Descartes ShipRush and thousands more stores, Clyde optimizes protection for the global customers of the world's biggest digital retailers.",
      number: "01",
      image: "/assets/images/jpg/8a7324733c75c962d29ca33a935286eebf42afac.jpg",
    },
    {
      id: 2,
      title: "Seamless integration experience",
      subtitle: "EASY SETUP & MANAGEMENT",
      description:
        "Our platform integrates seamlessly with your existing e-commerce stack. From Shopify to custom solutions, we provide APIs and plugins that work with your current workflow.",
      number: "02",
      image: "/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg",
    },
    {
      id: 3,
      title: "Customer satisfaction guarantee",
      subtitle: "TRUSTED BY MILLIONS",
      description:
        "Over 95% customer satisfaction rate with lightning-fast claim resolution. Our dedicated support team processes claims in under 24 hours, ensuring your customers stay happy and loyal.",
      number: "03",
      image: "/assets/images/png/about.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Container section içindeyken progress hesapla
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Scroll progress hesapla (0-1 arası)
        const scrolled = Math.abs(rect.top);
        const maxScroll = containerHeight - windowHeight;
        const progress = Math.min(scrolled / maxScroll, 1);

        setScrollProgress(progress);

        // Slide geçişlerini hesapla
        const slideIndex = Math.min(
          Math.floor(progress * slides.length),
          slides.length - 1
        );

        setCurrentSlide(slideIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [slides.length]);

  return (
    <div className=" text-white">
      <section ref={containerRef} className="h-[300vh] relative">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Scroll Progress Bar - Top Right */}
          <div className="absolute top-[40%] right-8 z-40">
            <div className=" flex-col items-end gap-2">
              <div className="text-right">
                <div className="text-[17px] text-[#B0B0B0] font-monda mb-[10px]">{currentSlide + 1}</div>
              </div>
              <div className="w-1 h-32 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="w-full rounded-full transition-all duration-300 ease-out"
                  style={{
                    height: `${scrollProgress * 100}%`,
                    backgroundColor: "#FF7A00",
                  }}
                />
              </div>
              <div className="text-right mt-[10px]">
                <div className="text-[17px] text-[#B0B0B0] font-monda">
                  {slides.length}
                </div>
              </div>
            </div>
          </div>

          <div> 
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Visual */}
              <div className="relative">
                <div className="bg-[#2A2A2A] p-[48px] rounded-[30px] w-[685px] h-[635px]">
                  <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          fill
                          blurDataURL={slides[currentSlide]?.image}
                          placeholder="blur"
                          alt=""
                          src={slides[currentSlide]?.image}
                          className="object-cover rounded-[20px]"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="pr-[55px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-[20px] text-[#B0B0B0] font-monda mb-[24px]">
                      {slides[currentSlide]?.title}
                    </h3>
                    <h4 className="text-[36px] text-[#fff] font-vesber">
                      {slides[currentSlide]?.subtitle}
                    </h4>
                    <p className="text-[#B0B0B0] font-monda text-[20px]">
                      {slides[currentSlide]?.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-[38px]">
                <Button text="See All Project" url="/" />
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
