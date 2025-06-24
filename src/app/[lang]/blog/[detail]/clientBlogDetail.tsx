"use client";
import React from "react";
import { ScrollArea } from "@mantine/core";
import classes from "../blog.module.scss";
import { BlogDetailProps } from "@/types/common";
import ArticleItem from "@/components/article-item";
import Image from "next/image";
import { useTranslation } from "@/utils/i18n";

const ClientBlogDetail = ({ data }: { data: BlogDetailProps }) => {
  const { t } = useTranslation();
  const baseUrl = `https://${process.env.NEXT_PUBLIC_BASE_URL}`;
  return (
    <main className="container">
      <h1 className="text-[20px] md:text-[48px] mt-[80px] mb-0 md:mb-[60px] font-vesber text-center">
        {data?.article?.name}
      </h1>
      <div className="my-[20px] md:my-[80px] rounded-[20px] p-[20px] w-full h-[300px] md:h-[515px] border-[#2A2A2A] border overflow-hidden bg-[#101010]">
        <div className="relative w-full h-full">
          <Image
            alt={data?.article?.name}
            src={`${baseUrl}${data?.article?.image}` || ""}
            blurDataURL={`${baseUrl}${data?.article?.image}` || ""}
            fill
            placeholder="blur"
          />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data?.article?.text }} />
      <div className="border-t border-solid border-t-[#2A2A2A] py-[48px] mt-[50px]">
        <p className="text-[#B0B0B0] mb-[12px] font-monda text-[18px]">
          {t("blog_detail.author")}
        </p>
        <p className="text-[22px] text-[#fff] font-monda font-medium">
          {data?.article?.author}
        </p>
      </div>
      {(data?.related_articles ?? []).length > 0 && (
        <div className="pt-[80px] flex flex-col sm:flex-row gap-[20px] sm:gap-[140px]">
          <div className="w-[30%] flex-none">
            <p className="text-[#fff] text-[20px] font-monda mb-[24px]">
              {t("blog_detail.title")}{" "}
            </p>
          </div>
          <div className="w-full mb-[150px] flex flex-col">
            <ScrollArea classNames={classes} mah={850}>
              {data?.related_articles?.map((d, i: number) => (
                <ArticleItem key={i} data={d} />
              ))}
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  );
};

export default ClientBlogDetail;
