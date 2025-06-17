import React from "react";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { useLanguage } from "@/context/LanguageProvider";

type ButtonProps = {
  text: string;
  url: string;
};

const Button = ({ text, url }: ButtonProps) => {
  const { language } = useLanguage();

  return (
    <Link
      className="group relative inline-flex items-center gap-[10px] rounded-2xl px-[16px] py-[17px] sm:px-[24px] sm:py-[19px] text-[16px] sm:text-[20px] font-monda text-white duration-200"
      href={`/${language}/${url}`}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-tr from-[#D4D4D466] via-[#28282880] to-[#0161A180] blur-[0.5px]"
        aria-hidden="true"
      ></span>
      <span
        className="pointer-events-none absolute inset-[1px] rounded-2xl bg-[#1e1e1e] transition-colors duration-200 group-hover:bg-[#0161A1]"
        aria-hidden="true"
      ></span>

      <span className="z-10">{text}</span>

      <IoMdArrowForward
        size={24}
        className="z-10 text-[#B0B0B0] transition-colors duration-200 group-hover:text-white"
      />
    </Link>
  );
};

export default Button;
