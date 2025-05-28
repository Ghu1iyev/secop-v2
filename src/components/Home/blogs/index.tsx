import Title from "@/components/shared/Title/Title";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <section>
      <div className="flex justify-end">
        <div className="w-6/12">
          <Title
            title="Blogs"
            subtitle="Empowering you with knowledge to stay safe in a connected world."
          />
        </div>
      </div>
      <div className="flex mb-[80px] gap-[100px] mt-[80px]">
        <div className="w-[20%] flex-none">
          <h4 className="font-vesber text-[#fff] text-[18px]">All articles</h4>
          <p className="font-monda text-[#B0B0B0]">
            Our Product Designer transforms complex security systems into
            simple, user-friendly interfaces. By blending usability with
            precision, every design supports both function and trust. Their work
            ensures our tools are as intuitive as they are secure.
          </p>
        </div>
        <div className="flex w-full flex-col gap-[40px]">
          <div className="flex relative justify-between w-full border-t border-t-[#424242] pt-[40px] item group">
            <span className="text-[17px] text-[#B0B0B0] font-monda">/ 001</span>
            <div>
              <p className="text-[#B0B0B0] text-[20px] font-monda">
                ASU ABDULLA
              </p>
              <h4 className="text-[#fff] text-[32px] font-vesber">
                UX/UI for Security Tools
              </h4>
            </div>
            <ul className="text-[18px] font-monda text-[#B0B0B0] pr-[75px]">
              <li>Strategy</li>
              <li>Branding</li>
              <li>UX/UI</li>
              <li>Design</li>
            </ul>
            <Link
              className="absolute w-[85px] h-[85px] inline-flex items-center justify-center text-[#fff] bg-[#2A2A2A] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#929292] rounded-full opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
              href="/"
            >
              View
            </Link>
          </div>
          <div className="flex relative justify-between w-full border-t border-t-[#424242] pt-[40px] item group">
            <span className="text-[17px] text-[#B0B0B0] font-monda">/ 002</span>
            <div>
              <p className="text-[#B0B0B0] text-[20px] font-monda">
                ASU ABDULLA
              </p>
              <h4 className="text-[#fff] text-[32px] font-vesber">
                UX/UI for Security Tools
              </h4>
            </div>
            <ul className="text-[18px] font-monda text-[#B0B0B0] pr-[75px]">
              <li>Strategy</li>
              <li>Branding</li>
              <li>UX/UI</li>
              <li>Design</li>
            </ul>
            <Link
              className="absolute w-[85px] h-[85px] inline-flex items-center justify-center text-[#fff] bg-[#2A2A2A] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#929292] rounded-full opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
              href="/"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
