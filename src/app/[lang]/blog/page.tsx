import Title from "@/components/shared/Title/Title";
import React from "react";
import ArticleItem from "@/components/article-item";
import { ScrollArea } from "@mantine/core";
import classes from './blog.module.scss';
import LatestBlogSlider from "@/components/swiper/latest-blog-slider";

const Blog = () => {
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
      <LatestBlogSlider />
      </div>
      <div className="lg:pt-[80px] flex flex-col lg:flex-row gap-[15px] lg:gap-[140px]">
        <div className="w-full lg:w-[30%] flex-none">
          <p className="text-[#fff] text-[20px] font-vesber mb-[16px] sm:mb-[24px]">
            All articles
          </p>
          <ul className="text-[#B0B0B0] text-[14px] sm:text-[20px] font-monda">
            <li>Cybersecurity</li>
            <li>UI/UX for Security Tools</li>
            <li>Network Infrastructure</li>
            <li>Network Infrastructure</li>
            <li>Network Infrastructure</li>
          </ul>
        </div>
        <div className="w-full mb-[150px] flex flex-col">
          <ScrollArea classNames={classes} h={850}>
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
