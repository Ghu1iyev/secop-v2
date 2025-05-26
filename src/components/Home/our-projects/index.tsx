import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const OurProjects = () => {
  return (
    <section className="grid items-center mt-[80px] grid-cols-2 gap-[100px] mb-[60px]">
      <div className="bg-[#2A2A2A] p-[40px] rounded-[30px]">
        <div className="relative w-full h-[540px] rounded-[13px] overflow-hidden">
          <Image
            src="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
            blurDataURL="/assets/images/png/ba01947d8756425e65f7cdb33a7b49b58bbf8dc5.jpg"
            fill
            placeholder="blur"
            alt=""
          />
        </div>
      </div>
      <div>
        <h4 className="font-monda text-[#B0B0B0] text-[20px] leading-[14px]">
          Our Projects
        </h4>
        <h3 className="font-vesber text-[#fff] text-[36px] leading-[43px] mt-[24px]">
          CyberShield for AzNet Telecom
        </h3>
        <p className="text-[#B0B0B0] text-[20px] leading-[34px] font-monda mb-[38px]">
          In 2024, we conducted a full network security audit for AzNet Telecom,
          implemented advanced firewall systems, configured encrypted VPN
          access, and trained the in-house IT team on secure practices.
        </p>
        <Button text="See All Project" url="all-project" />
      </div>
    </section>
  );
};

export default OurProjects;
