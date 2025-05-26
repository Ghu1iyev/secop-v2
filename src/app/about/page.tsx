import Title from "@/components/shared/Title/Title";
import Image from "next/image";
import React from "react";

const Aboutpage = () => {
  return (
    <div className="container">
      <Title
        title="About Us"
        subtitle="Cyber threats evolve, and so do we — to keep your digital assets safe."
      />

      <div className="flex gap-36 mt-20">
        <div className="w-[40%] h-[94px] ">
          <Image
            alt="about"
            src={"/assets/images/png/about.jpg"}
            className="rounded-3xl"
            width={554}
            height={494}
            style={{ height: "494px" }}
          />
        </div>
        <div className="w-[50%] mt-5 ">
          <h3 className="font-vesber font-medium text-3xl leading-8 ">
            Where We Started
          </h3>
          <div className="w-[442] h-[1px] bg-[#2A2A2A] my-10"></div>
          <p className=" text-base font-normal leading-7 font-monda  h-80 overflow-y-auto">
            SECOP was founded with a clear vision — to bridge the gap between
            complex IT infrastructures and practical, reliable security
            solutions. What began as a small team of cybersecurity and network
            enthusiasts has grown into a trusted partner for businesses seeking
            digital protection. From day one, our mission has been to make
            security smarter, stronger, and more accessible. What drove us
            wasn’t just technology — it was the need for trust in a connected
            world. Every system we build today reflects that same purpose we
            started with.We’ve grown, but our core commitment to secure,
            reliable, and user-focused solutions remains unchanged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
