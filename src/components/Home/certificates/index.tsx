import CertificateSwiper from "@/components/swiper/certificates-swiper";
import TitleAnimation from "@/components/title-animation";
import React from "react";

const Certificates = () => {
  return (
    <section className="md:mt-[80px]" id="our-certificates">
      <TitleAnimation title="CERTIFICATES" />
      <div>
        <CertificateSwiper />
      </div>
    </section>
  );
};

export default Certificates;
