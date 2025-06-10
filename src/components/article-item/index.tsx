import Image from "next/image";
import React from "react";

interface ArticleData {
  category: string;
  name: string;
  image?: string;
}

interface ArticleProps {
  data: ArticleData;
}
const ArticleItem = ({ data } : ArticleProps) => {
  return (
    <div className="border-b py-[20px] sm:py-[30px] flex gap-[24px] items-center border-b-[#424242] ">
      <div className="relative flex-none w-[78px] sm:w-[93px]   h-[82px] sm:h-[96px] overflow-hidden rounded-[10px]">
        <Image
          alt=""
          fill
          placeholder="blur"
          blurDataURL={data?.image || ""}
          src={data?.image || ""}
          objectFit="cover"
        />
      </div>
      <div>
        <p className="text-[13px] sm:text-[18px] font-monda text-[#fff]">
          Time to read : 3 min
        </p>
        <p className="text-[14px] sm:text-[15px] font-monda text-[#B0B0B0]">
          {data?.category}
        </p>
        <h3 className="mt-[18px] sm:mt-[20px] text-[16px] sm:text-[22px] font-vesber sm:overflow-hidden sm:whitespace-nowrap sm:text-ellipsis">
          {data?.name}
        </h3>
      </div>
    </div>
  );
};

export default ArticleItem;
