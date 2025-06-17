"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/shared/Button";
import { useTranslation } from "@/utils/i18n";
import { useQuery } from "@tanstack/react-query";
import { GetApi } from "@/lib/axios";
import { ProjectProps } from "@/types/common";
import { useLanguage } from "@/context/LanguageProvider";
import { Text } from "@mantine/core";

const OurProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useTranslation();
  const { language } = useLanguage();

  const { data } = useQuery<ProjectProps>({
    queryKey: ["projects", language],
    queryFn: () => GetApi(`/projects/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const slides = data?.results || [];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || slides.length === 0) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrolled = Math.abs(rect.top);
        const maxScroll = containerHeight - windowHeight;
        const progress = Math.min(scrolled / maxScroll, 1);

        setScrollProgress(progress);

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

  if (!slides.length) return null;

  return (
    <div className=" text-white">
      <section ref={containerRef} className="h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute top-[45%] lg:top-[40%] right-0 lg:right-[32px] z-40">
            <div className=" flex-col items-end gap-2">
              <div className="text-right">
                <div className="text-[17px] text-[#B0B0B0] font-monda mb-[10px]">
                  {currentSlide + 1}
                </div>
              </div>
              <div className="w-1 h-32 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="w-full rounded-full transition-all duration-300 ease-out"
                  style={{
                    height: `${scrollProgress * 100}%`,
                    backgroundColor: "#0161A1",
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

          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-16 items-center">
              <div className="relative">
                <div className="bg-[#2A2A2A] p-[20px] lg:p-[48px] rounded-[30px] w-full h-[350px] lg:h-[635px]">
                  <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={slides[currentSlide]?.id}
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
                          alt={slides[currentSlide]?.name || ""}
                          src={slides[currentSlide]?.image}
                          className="object-cover rounded-[20px]"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="lg:pr-[55px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slides[currentSlide]?.id}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-[16px] md:text-[20px] text-[#B0B0B0] font-monda mb-[24px]">
                      Our Projects
                    </h4>
                    <Text lineClamp={2}>
                      <h4 className="text-[20px] sm:text-[36px] text-[#fff] font-vesber">
                        {slides[currentSlide]?.list_text}
                      </h4>
                    </Text>
                    <Text  lineClamp={4}>
                      <p className="text-[#B0B0B0] font-monda text-[15px] mt-[25px] lg:text-[20px]">
                        {slides[currentSlide]?.detail_text}
                      </p>
                    </Text>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-[38px]">
                  <Button text={t("home.projects.seeAll")} url="/" />
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
