"use client";
import React from "react";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import Title from "@/components/shared/Title/Title";
import { useTranslation } from "@/utils/i18n";
import { Tabs } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { GetApi } from "@/lib/axios";
import { ArticlesType, CategoryType } from "@/types/common";


const Blogs = () => {
  const { t } = useTranslation();

  const { data: CategoryData } = useQuery<CategoryType>({
    queryKey: ["article-categories"],
    queryFn: () => GetApi("/article-categories/"),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
  const { data: Articles } = useQuery<ArticlesType>({
    queryKey: ["articles"],
    queryFn: () => GetApi("/articles/"),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <section className="pt-[80px]">
      <div className="flex justify-end">
        <div className="w-6/12">
          <Title
            title={t("home.blogs.title")}
            subtitle={t("home.blogs.subtitle")}
            fontSize="md:text-[36px]"
          />
        </div>
      </div>
      <Tabs className="blog-categories mt-[80px] mb-[150px]" defaultValue="gallery" orientation="vertical">
        <div className="md:w-[20%] mr-[100px] flex-none">
          <Tabs.List>
            <h4 className="font-vesber text-[#fff] text-[18px] mb-[24px]">
              All articles
            </h4>
            {CategoryData?.results?.map((d, i: number) => (
              <Tabs.Tab
                key={i}
                value={d?.name?.toLowerCase().replace(/\s+/g, "-")}
              >
                {d?.name}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </div>

        <div className="w-full">
          {Articles?.results?.map((d, i: number) => (
          <Tabs.Panel
            key={i}
            value={d?.category?.name?.toLowerCase().replace(/\s+/g, "-")}
          >
            <div className="flex flex-col md:flex-row relative justify-between w-full border-t border-t-[#424242] py-[30px] sm:py-[40px] item group">
              <span className="text-[17px] text-[#B0B0B0] hidden md:block font-monda">
                / {i + 1}
              </span>
              <div>
                <p className="text-[#B0B0B0] md:text-[20px] font-monda text-[16px]">
                  {d?.author}
                </p>
                <h4 className="text-[#fff] text-[20px] md:text-[32px] font-vesber">
                  {d?.name}
                </h4>
              </div>
              <ul className="text-[16px] md:text-[18px] font-monda text-[#B0B0B0] pr-[75px]">
                <li>{d?.category?.name}</li>
              </ul>
              <Link
                href="/"
                className="text-[#FF7A00] items-center text-[15px] font-monda sm:hidden flex gap-[10px] py-[17px]"
              >
                Read Article
                <IoMdArrowForward color="#FF7A00" size={20} />
              </Link>
              <Link
                className="hidden absolute w-[85px] h-[85px] sm:inline-flex items-center justify-center text-[#fff] bg-[#2A2A2A] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#929292] rounded-full opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                href="/"
              >
                View
              </Link>
            </div>
          </Tabs.Panel>
        ))}
        </div>
      </Tabs>
    </section>
  );
};

export default Blogs;
