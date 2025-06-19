"use client";
import React from "react";
import Image from "next/image";
import az from "@/locale/az.json";
import en from "@/locale/en.json";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "@/utils/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/context/LanguageProvider";
import Link from "next/link";
interface LatestBlogProps {
  data: {
    results: {
      image: string;
      name: string;
      author: string;
      created_at: string;
      slug: string;
    }[];
  };
}

const LatestBlogSlider: React.FC<LatestBlogProps> = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const months = language === "az" ? az.blog.months : en.blog.months;

    const month = months[monthIndex];

    return `${t("blog.published")} ${month} ${day}`;
  };

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
        {data?.results?.slice(0, 4).map((d, i: number) => (
          <SwiperSlide key={i}>
            <Link href={`/${language}/blog/${d?.slug}`}>
              <div className="sm:max-w-[330px]">
                <div className="relative mb-[20px] w-full h-[235px] overflow-hidden rounded-[10px]">
                  <Image
                    src={d?.image || ""}
                    blurDataURL={d?.image || ""}
                    fill
                    placeholder="blur"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text=[16px] sm:text-[18px] mb-[6px] sm:mb-[12px] font-monda text-[#fff]">
                    {d?.created_at ? formatDate(d.created_at) : ""}
                  </p>
                  <p className="text-[13px] sm:text-[15px] text-[#B0B0B0] overflow-hidden whitespace-nowrap text-ellipsis">
                    {d?.author}
                  </p>
                  <h3 className="mt-[14px] sm:mt-[20px] text-[19px] sm:text-[22px] font-vesber overflow-hidden whitespace-nowrap text-ellipsis">
                    {d?.name}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LatestBlogSlider;
