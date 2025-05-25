import Button from "@/components/Button";
import React from "react";

const AboutUs = () => {
  return (
    <section className="grid grid-cols-2 gap-[100px] items-center py-[80px] mt-[80px]">
      <div>
        <h4 className="font-monda text-[#B0B0B0] text-[20px]">About Us</h4>
        <h3 className="font-vesber text-[48px] leading-[54px] mt-[24px]">
          Cyber threats evolve, and so do we — to keep your digital assets safe.
        </h3>
      </div>
      <div>
        <p className="text-[#B0B0B0] text-[20px] leading-[34px] mb-[38px]">
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
