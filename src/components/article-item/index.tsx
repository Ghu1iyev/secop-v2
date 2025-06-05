import Image from "next/image";
import React from "react";

const ArticleItem = () => {
  return (
    <div className="border-b py-[20px] sm:py-[30px] flex gap-[24px] items-center border-b-[#424242] ">
      <div className="relative flex-none w-[78px] sm:w-[93px]   h-[82px] sm:h-[96px] overflow-hidden rounded-[10px]">
        <Image
        alt=""
        fill
        placeholder="blur"
        blurDataURL="/assets/images/jpg/8a7324733c75c962d29ca33a935286eebf42afac.jpg"
        src="/assets/images/jpg/8a7324733c75c962d29ca33a935286eebf42afac.jpg"
        objectFit="cover"
      />
      </div>
      <div>
        <p className="text-[13px] sm:text-[18px] font-monda text-[#fff]">Time to read : 3 min</p>
        <p className="text-[14px] sm:text-[15px] font-monda text-[#B0B0B0]">Audits & Compliance</p>
        <h3 className="mt-[18px] sm:mt-[20px] text-[16px] sm:text-[22px] font-vesber sm:overflow-hidden sm:whitespace-nowrap sm:text-ellipsis">The Role of AI in Next-Gen Security Operations</h3>
      </div>
    </div>
  );
};

export default ArticleItem;
