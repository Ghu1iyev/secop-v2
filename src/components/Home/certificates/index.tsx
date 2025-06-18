"use client";
import React from "react";
import CertificateSwiper from "@/components/swiper/certificates-swiper";
import TitleAnimation from "@/components/title-animation";
import { CertificateProps } from "@/types/common";

const Certificates = ({data, title} : {data: CertificateProps, title?: string}) => {

  return (
    <section className="md:mt-[80px]" id="our-certificates">
      <TitleAnimation title={title || ""} />
      <div>
        <CertificateSwiper data={data}/>
      </div>
    </section>
  );
};

export default Certificates;
