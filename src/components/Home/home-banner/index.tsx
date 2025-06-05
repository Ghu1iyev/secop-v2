import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="relative w-full h-[514px] mt-[80px] rounded-[60px] overflow-hidden">
      <div className="text-[55px] font-monda text-[#fff] absolute top-0 left-0 bg-[#000] z-50 rounded-br-[60px] pl-[10px] pb-[10px] pr-[40px]">
        <p>YOUR SECURITY IS</p>
        <p>UR PRIORITY</p>
      </div>
      <Image
        src="/assets/images/jpg/secop-image.jpg"
        blurDataURL="/assets/images/jpg/secop-image.jpg"
        objectFit="cover"
        fill
        placeholder="blur"
        alt="home banner"
      />
    </div>
  );
};

export default HomeBanner;
