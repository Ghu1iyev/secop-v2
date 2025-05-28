import Title from "@/components/shared/Title/Title";
import React from "react";
import LatestBlog from "./latest-blog";
import ArticleItem from "@/components/article-item";
import { ScrollArea } from "@mantine/core";
import classes from './blog.module.scss';

const Blog = () => {
  return (
    <main className="container">
      <div className="w-[990px]">
        <Title
          title="Blogs"
          fontSize="text-[48px]"
          subtitle="Insights and updates on cybersecurity, tech, and innovation — straight from our team."
        />
      </div>
      <h4 className="text-[#B0B0B0] text-[20px] font-monda my-[80px]">
        The latest Blogs
      </h4>
      <div className="mb-[80px] grid grid-cols-4 gap-[24px]">
        <LatestBlog />
        <LatestBlog />
        <LatestBlog />
        <LatestBlog />
      </div>
      <div className="mt-[80px] flex gap-[140px]">
        <div className="w-[30%] flex-none">
          <p className="text-[#fff] text-[20px] font-vesber mb-[24px]">
            All articles
          </p>
          <ul className="text-[#B0B0B0] text-[20px] font-monda">
            <li>Cybersecurity</li>
            <li>UI/UX for Security Tools</li>
            <li>Network Infrastructure</li>
            <li>Network Infrastructure</li>
            <li>Network Infrastructure</li>
          </ul>
        </div>
        <div className="w-full mb-[150px] flex flex-col">
          <ScrollArea classNames={classes} h={900}>
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default Blog;
