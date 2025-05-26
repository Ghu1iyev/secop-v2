import Button from "@/components/Button";
import React from "react";

const Services = () => {
  return (
    <section className="grid grid-cols-2 gap-[100px] items-start mt-[80px]">
      <div>
        <h4 className="font-monda text-[20px] leading-[14px] text-[#B0B0B0]">
          Services
        </h4>
        <h3 className="text-[#fff] font-vesber leading-[42px] text-[36px] mt-[24px]">
          We provide modern design, development, and branding solutions tailored
          to elevate your digital presence.
        </h3>
      </div>
      <div>
        <p className="text-[#B0B0B0] leading-[34px] font-monda text-[20px] mb-[38px]">
          We offer creative and modern design solutions to help your business
          stand out in the digital world. We craft user-centered products that
          deliver real value. Our goal is to build engaging, functional, and
          scalable digital experiences. Whether you re launching a startup or
          growing your brand, we re here to support your vision.
        </p>
        <Button text="See Our Services" url="services" iconColor="#fff" customClass="bg-[#FF7A00]" />
      </div>
    </section>
  );
};

export default Services;
