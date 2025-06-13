"use client";
import React from "react";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import Title from "@/components/shared/Title/Title";
import { useTranslation } from "@/utils/i18n";

const Blogs = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[80px]">
      <div className="flex justify-end">
        <div className="w-6/12">
          <Title
            title={t("home.blogs.title")}
            subtitle={t("home.blogs.subtitle")}
            fontSize="md:text-[36px]"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col mb-[80px] gap-[100px] mt-[80px]">
        <div className="md:w-[20%] flex-none">
          <h4 className="font-vesber text-[#fff] text-[18px]">All articles</h4>
          <p className="font-monda text-[#B0B0B0]">
            Our Product Designer transforms complex security systems into
            simple, user-friendly interfaces. By blending usability with
            precision, every design supports both function and trust. Their work
            ensures our tools are as intuitive as they are secure.
          </p>
        </div>
        <div className="flex w-full flex-col gap-[20px] md:gap-[40px]">
          <div className="flex flex-col md:flex-row relative justify-between w-full border-t border-t-[#424242] pt-[30px] sm:pt-[40px] item group">
            <span className="text-[17px] text-[#B0B0B0] hidden md:block font-monda">
              / 001
            </span>
            <div>
              <p className="text-[#B0B0B0] md:text-[20px] font-monda text-[16px]">
                ASU ABDULLA
              </p>
              <h4 className="text-[#fff] text-[20px] md:text-[32px] font-vesber">
                UX/UI for Security Tools
              </h4>
            </div>
            <ul className="text-[16px] md:text-[18px] font-monda text-[#B0B0B0] pr-[75px]">
              <li>Strategy</li>
              <li>Branding</li>
              <li>UX/UI</li>
              <li>Design</li>
            </ul>
            <Link
              href="/"
              className="text-[#FF7A00] items-center text-[15px] font-monda sm:hidden flex gap-[10px] py-[17px]"
            >
              Read Article
              <IoMdArrowForward color="#FF7A00" size={20} />
            </Link>
            <Link
              className="hidden absolute w-[85px] h-[85px] sm:inline-flex items-center justify-center text-[#fff] bg-[#2A2A2A] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#929292] rounded-full opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
              href="/"
            >
              View
            </Link>
          </div>
          <div className="flex flex-col md:flex-row relative justify-between w-full border-t border-t-[#424242] pt-[30px] sm:pt-[40px] item group">
            <span className="text-[17px] text-[#B0B0B0] hidden md:block font-monda">
              / 002
            </span>
            <div>
              <p className="text-[#B0B0B0] md:text-[20px] font-monda text-[16px]">
                ASU ABDULLA
              </p>
              <h4 className="text-[#fff] text-[20px] md:text-[32px] font-vesber">
                UX/UI for Security Tools
              </h4>
            </div>
            <ul className="text-[16px] md:text-[18px] font-monda text-[#B0B0B0] pr-[75px]">
              <li>Strategy</li>
              <li>Branding</li>
              <li>UX/UI</li>
              <li>Design</li>
            </ul>
            <Link
              href="/"
              className="text-[#FF7A00] items-center text-[15px] font-monda sm:hidden flex gap-[10px] py-[17px]"
            >
              Read Article
              <IoMdArrowForward color="#FF7A00" size={20} />
            </Link>
            <Link
              className="hidden absolute w-[85px] h-[85px] sm:inline-flex items-center justify-center text-[#fff] bg-[#2A2A2A] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#929292] rounded-full opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
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
