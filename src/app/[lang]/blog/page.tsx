"use client";
import Title from "@/components/shared/Title/Title";
import React from "react";
import ArticleItem from "@/components/article-item";
import { Tabs } from "@mantine/core";
// import classes from "./blog.module.scss";
import LatestBlogSlider from "@/components/swiper/latest-blog-slider";
import { useQuery } from "@tanstack/react-query";
import { GetApi } from "@/lib/axios";
import { ArticlesType } from "@/types/common";


interface CategoriesType {
  results: {
    name: string;
  }[];
}

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
      <Tabs
        className="blog-categories mt-[80px] mb-[150px]"
        defaultValue="gallery"
        orientation="vertical"
      >
        <div className="md:w-[20%] mr-[100px] flex-none">
          <Tabs.List>
            <h4 className="font-vesber text-[#fff] text-[18px] mb-[24px]">
              All articles
            </h4>
            {categories?.results?.map((d, i: number) => (
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
              <ArticleItem data={d} key={i} />
            </Tabs.Panel>
          ))}
        </div>
      </Tabs>
    </main>
  );
};

export default Blog;
