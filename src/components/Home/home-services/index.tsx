import Button from "@/components/Button";
import Title from "@/components/shared/Title/Title";
import React from "react";

const Services = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[34px] md:gap-[180px] items-start md:mt-[80px]">
      <Title
        title="Services"
        subtitle="We provide modern design, development, and branding solutions tailored
          to elevate your digital presence."
        fontSize="md:text-[36px]"
      />
      <div>
        <p className="text-[#B0B0B0] leading-[24px] sm:leading-[34px] font-monda text-[15px] sm:text-[20px] mb-[38px]">
          We offer creative and modern design solutions to help your business
          stand out in the digital world. We craft user-centered products that
          deliver real value. Our goal is to build engaging, functional, and
          scalable digital experiences. Whether you re launching a startup or
          growing your brand, we re here to support your vision.
        </p>
        <Button text="See Our Services" url="services" />
      </div>
    </section>
  );
};

export default Services;
