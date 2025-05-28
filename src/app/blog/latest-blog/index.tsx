import Image from "next/image";
import React from "react";

const LatestBlog = () => {
  return (
    <div className="max-w-[330px]">
      <div className="relative mb-[20px] w-full h-[235px] overflow-hidden rounded-[10px]">
        <Image
          src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
          blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
          fill
          placeholder="blur"
          alt=""
        />
      </div>
      <div>
        <p className="text-[18px] mb-[12px] font-monda text-[#fff]">
          Published on May 21
        </p>
        <p className="text-[15px] text-[#B0B0B0] overflow-hidden whitespace-nowrap text-ellipsis">
          cybersecurity, data protection
        </p>
        <h3 className="mt-[20px] text-[22px] font-vesber overflow-hidden whitespace-nowrap text-ellipsis">
          Security Consulting & Strategy ffdff
        </h3>
      </div>
    </div>
  );
};

export default LatestBlog;
