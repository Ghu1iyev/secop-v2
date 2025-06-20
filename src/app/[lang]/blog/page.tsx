"use client";
import React from "react";
// import classes from "./blog.module.scss";
import { GetApi } from "@/lib/axios";
import BlogCategories from "./blog-category";
import { useTranslation } from "@/utils/i18n";
import { useQuery } from "@tanstack/react-query";
import { useHeaders } from "@/hooks/useHeadersApi";
import Title from "@/components/shared/Title/Title";
import { ArticlesType, CategoriesType } from "@/types/common";
import LatestBlogSlider from "@/components/swiper/latest-blog-slider";

const Blog = () => {
  const { data } = useHeaders();
  const { t } = useTranslation();

  const { data: categories } = useQuery<CategoriesType>({
    queryKey: ["categories"],
    queryFn: () => GetApi("/article-categories/"),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  const { data: Articles } = useQuery<ArticlesType>({
    queryKey: ["articles"],
    queryFn: () => GetApi("/articles/"),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <main className="container">
      <div className="w-full mb-[40px] sm:mb-0 mt-[80px] lg:w-[990px]">
        <Title
          title={t("title.blogs")}
          fontSize="text-[20px] md:text-[48px]"
          subtitle={data?.results?.[0]?.blogs_title}
        />
      </div>
      <h4 className="text-[#B0B0B0] text-[20px] font-monda my-[20px] sm:my-[80px]">
        {t("title.latestBlogs")}
      </h4>
      <div className="pb-[80px]">
        <LatestBlogSlider data={Articles ?? { results: [] }} />
      </div>
      <BlogCategories
        categories={categories ?? { results: [] }}
        articles={Articles ?? { results: [] }}
      />
    </main>
  );
};

export default Blog;
