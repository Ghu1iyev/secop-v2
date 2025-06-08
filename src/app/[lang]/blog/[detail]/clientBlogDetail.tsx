import React from "react";
import ArticleItem from "@/components/article-item";
import { ScrollArea } from "@mantine/core";
import classes from "../blog.module.scss";

const ClientBlogDetail = () => {
  return (
    <main className="container">
      <h1 className="text-[48px] mb-[60px] font-vesber text-center mt-[80px]">
        Employee Awareness & Training
      </h1>
      <p className="text-[20px] text-[#B0B0B0] font-monda">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
        tempore, consequuntur assumenda illum et accusamus natus cum
        consectetur, eius error aperiam numquam odit eligendi suscipit labore
        consequatur recusandae officia! Doloribus laudantium molestias
        consequatur deleniti, tenetur qui ratione dolorem assumenda possimus
        unde laboriosam vitae nulla! Nisi possimus omnis blanditiis
        exercitationem saepe enim doloribus sed pariatur optio quidem quia
        facilis harum inventore consequuntur, quo debitis libero animi. Fugit,
        reiciendis ratione vero doloribus saepe hic, perspiciatis beatae nam
        optio velit ipsam repellat sapiente minus eius. Quo doloribus nisi
        dicta, ipsam tempore distinctio tempora reprehenderit. Impedit eaque
        quisquam deserunt omnis libero, praesentium eligendi nam!
      </p>
      <div className="pt-[80px] flex gap-[140px]">
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

export default ClientBlogDetail;
