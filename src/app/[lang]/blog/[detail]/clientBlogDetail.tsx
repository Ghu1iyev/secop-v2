import React from "react";
import { ScrollArea } from "@mantine/core";
import classes from "../blog.module.scss";
import { BlogDetailProps } from "@/types/common";
import ArticleItem from "@/components/article-item";
import Image from "next/image";

const ClientBlogDetail = ({ data }: { data: BlogDetailProps }) => {
  return (
    <main className="container">
       <h1 className="text-[48px] mt-[80px] mb-[60px] font-vesber text-center">
        {data?.article?.name}
      </h1>
     <div className="my-[80px] rounded-[20px] p-[20px] w-full h-[300px] md:h-[515px] border-[#2A2A2A] border overflow-hidden bg-[#101010]">
       <div className="relative w-full h-full">
        <Image
          alt={data?.article?.name}
          src={data?.article?.image}
          blurDataURL={data?.article?.image}
          fill
          placeholder="blur"
        />
      </div>
     </div>
      <p className="text-[20px] text-[#B0B0B0] font-monda">
        {data?.article?.text}
      </p>
      <div className="pt-[80px] flex gap-[140px]">
        <div className="w-[30%] flex-none">
          <p className="text-[#fff] text-[20px] font-vesber mb-[24px]">
            All articles
          </p>
        </div>
        <div className="w-full mb-[150px] flex flex-col">
          <ScrollArea classNames={classes} h={850}>
            {data?.related_articles?.map((d, i: number) => (
              <ArticleItem key={i} data={d} />
            ))}
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default ClientBlogDetail;
