"use client";
import Title from "@/components/shared/Title/Title";
import React from "react";
// import classes from "./blog.module.scss";
import LatestBlogSlider from "@/components/swiper/latest-blog-slider";
import { useQuery } from "@tanstack/react-query";
import { GetApi } from "@/lib/axios";
import { ArticlesType, CategoriesType } from "@/types/common";
import BlogCategories from "./blog-category";



const Blog = () => {

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
      <div className="w-full mb-[40px] sm:mb-0 mt-[40px] lg:w-[990px]">
        <Title
          title="Blogs"
          fontSize="text-[20px] sm:text-[48px]"
          subtitle="Insights and updates on cybersecurity, tech, and innovation — straight from our team."
        />
      </div>
      <h4 className="text-[#B0B0B0] text-[20px] font-monda my-[20px] sm:my-[80px]">
        The latest Blogs
      </h4>
      <div className="pb-[80px]">
        <LatestBlogSlider data={Articles ?? { results: [] }} />
      </div>
      <BlogCategories categories={categories ?? { results: [] }} articles={Articles ?? { results: [] }} />
    </main>
  );
};

export default Blog;
