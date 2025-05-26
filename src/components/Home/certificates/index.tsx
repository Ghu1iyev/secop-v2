import CertificateSwiper from "@/components/swiper/certificates-swiper";
import React from "react";

const Certificates = () => {
  return (
    <section className="mt-[80px]">
      <div className="mb-[60px] flex justify-center items-center space-x-6 text-[#B0B0B0] font-vesber text-[70px] uppercase tracking-widest">
        <span>CERTIFICATES</span>
        <div className="w-16 h-[3px] bg-gray-400"></div>
        <span>CERTIFICATES</span>
        <div className="w-16 h-[3px] bg-gray-400"></div>
      </div>
      <div>
        <CertificateSwiper />
      </div>
    </section>
  );
};

export default Certificates;
