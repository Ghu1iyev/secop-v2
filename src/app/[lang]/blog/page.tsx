"use client";
import Title from "@/components/shared/Title/Title";
import React from "react";
import ArticleItem from "@/components/article-item";
import { ScrollArea, Tabs } from "@mantine/core";
import classes from "./blog.module.scss";
import LatestBlogSlider from "@/components/swiper/latest-blog-slider";
import { useQuery } from "@tanstack/react-query";
import { GetApi } from "@/lib/axios";

const test = [
  {
    id: 1,
    name: "category 1",
    slug: "category-1"
  },
  {
    id: 2,
    name: "category 2",
    slug: "category-2"
  },
]
interface BlogData {
  results: {
    image: string;
    name: string;
    author: string;
    created_at: string;
    category: string;
  }[];
}

interface CategoriesType {
  results: {
    name: string;
  }[];
}

const Blog = () => {
  const { data } = useQuery<BlogData>({
    queryKey: ["blogs"],
    queryFn: () => GetApi("/articles/"),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const { data: categories } = useQuery<CategoriesType>({
    queryKey: ["categories"],
    queryFn: () => GetApi("/article-categories/"),
    staleTime: 10 * 60 * 1000,
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
        <LatestBlogSlider data={data ?? { results: [] }} />
      </div>
      <div className="lg:pt-[80px] flex flex-col lg:flex-row gap-[15px] lg:gap-[140px]">
        <div className="w-full lg:w-[30%] flex-none">
          <p className="text-[#fff] text-[20px] font-vesber mb-[16px] sm:mb-[24px]">
            All articles
          </p>
          <ul className="text-[#B0B0B0] text-[14px] sm:text-[20px] font-monda">
            {categories?.results?.map((d, i: number) => (
              <li key={i}>{d?.name}</li>
            ))}
          </ul>
        </div>
        <div className="w-full mb-[150px] flex flex-col">
          <ScrollArea classNames={classes} h={850}>
            {data?.results?.map((d, i: number) => (
              <ArticleItem data={d} key={i} />
            ))}
          </ScrollArea>
        </div>
      </div>
      <Tabs defaultValue="gallery" orientation="vertical">
        <Tabs.List>
          {/* <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
          <Tabs.Tab value="messages">Messages</Tabs.Tab> */}
          {
            test?.map((d,i) => ( 
              <Tabs.Tab key={i} value={d?.slug}>{d?.name}</Tabs.Tab>
            ))
          }
        </Tabs.List>

        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </main>
  );
};

export default Blog;
