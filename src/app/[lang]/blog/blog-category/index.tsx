import ArticleItem from "@/components/article-item";
import { ArticlesType, CategoriesType } from "@/types/common";
import { useTranslation } from "@/utils/i18n";
import { Tabs } from "@mantine/core";
import React from "react";

interface BlogCategoriesTypes {
  categories: CategoriesType;
  articles: ArticlesType;
}
const BlogCategories = ({ categories, articles }: BlogCategoriesTypes) => {
  const { t } = useTranslation();
  
  return (
    <Tabs
      className="blog-categories mt-[80px] mb-[150px]"
      defaultValue="i̇nkişaf-və-avtomatlaşdırma"
      orientation="vertical"
    >
      <div className="md:w-[20%] mr-[100px] flex-none">
        <Tabs.List>
          <h4 className="font-monda text-[#fff] text-[18px] mb-[24px]">
            {t("title.all")}{" "}
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
        {articles?.results?.map((d, i: number) => (
          <Tabs.Panel
            key={i}
            value={d?.category?.name?.toLowerCase().replace(/\s+/g, "-")}
          >
            <ArticleItem data={d} key={i} />
          </Tabs.Panel>
        ))}
      </div>
    </Tabs>
  );
};

export default BlogCategories;
