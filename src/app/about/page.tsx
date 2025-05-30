import React from "react";
import Team from "./team";
import Image from "next/image";
import Title from "@/components/shared/Title/Title";
import Certificates from "@/components/Home/certificates";
import PartnersSlider from "@/components/swiper/partners-slider";

const Aboutpage = () => {
  return (
    <div className="container">
      <div className="mt-20 w-[40%]">
        <Title
          title="About Us"
          subtitle="Cyber threats evolve, and so do we — to keep your digital assets safe."
        />
      </div>
      <div className="flex gap-36 my-20">
        <div className="w-[40%] rounded-3xl ">
          <Image
            alt="about"
            src={"/assets/images/png/about.jpg"}
            className="rounded-3xl object-cover"
            width={554}
            height={494}
            style={{ height: "494px" }}
          />
        </div>
        <div className="w-[44%] mt-5 ">
          <h3 className="font-vesber font-medium text-3xl leading-8 ">
            Where We Started
          </h3>
          <div className="w-[442] h-[1px] bg-[#2A2A2A] my-10"></div>
          <div className=" text-base font-normal leading-7 font-monda  h-80 overflow-y-auto">
            SECOP was founded with a clear vision — to bridge the gap between
            complex IT infrastructures and practical, reliable security
            solutions. What began as a small team of cybersecurity and network
            enthusiasts has grown into a trusted partner for businesses seeking
            digital protection. From day one, our mission has been to make
            security smarter, stronger, and more accessible.
            <p className="mt-8">
              What drove us wasn’t just technology — it was the need for trust
              in a connected world. Every system we build today reflects that
              same purpose we started with.We’ve grown, but our core commitment
              to secure, reliable, and user-focused solutions remains unchanged.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-44 ">
        <div className=" w-[50%]">
          <Title
            title="Our Trusted Partners"
            subtitle="We grow stronger through collaboration — meet the trusted partners who help us shape secure digital futures"
          />
        </div>
        <PartnersSlider />
      </div>
      <div className="mt-20">
        <div className="w-[40%]">
          <Title
            title="Meet Our Team"
            subtitle="Meet the Experts Behind Our
          Secure Solutions"
          />
        </div>
        <Team />
        <div className="my-32">
          <Certificates />
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
