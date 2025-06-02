import Button from "@/components/Button";
import Title from "@/components/shared/Title/Title";
import React from "react";

const AboutUs = () => {
  return (
    <section className="grid grid-rows-2 md:grid-cols-2 md:gap-[100px] items-center sm:py-[80px] mt-[80px]">
      <div>
        <Title
          title="About Us"
          subtitle="Cyber threats evolve, and so do we — to keep your digital assets safe."
          fontSize="md:text-[48px]"
        />
      </div>
      <div>
        <p className="text-[#B0B0B0] text-[15px] sm:text-[20px] leading-[34px] mb-[32px] sm:mb-[38px]">
          At SECOP, we design and secure digital infrastructures with precision
          and purpose. Our team combines deep technical expertise with a passion
          for cybersecurity, helping businesses stay safe in an ever-evolving
          digital world. Security isn’t just what we do — it’s who we are.
        </p>
        <Button text="Learn About Us" url="about-us" />
      </div>
    </section>
  );
};

export default AboutUs;
