import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

type ButtonProps = {
  text: string;
  url: string;
}

const Button = ({ text, url }: ButtonProps) => {
  return (
    <Link
      className={`bg-[#2A2A2A] text-[16px] text-[#fff] inline-flex items-center gap-[10px] font-monda rounded-[12px] py-[17px] sm:py-[19px] px-[16px] sm:px-[24px] duration-200 sm:text-[20px] hover:bg-[#FF7A00] group`} 
      href={`/${url}`}
    >
      {text}
      <IoMdArrowForward 
        size={24} 
        className="text-[#B0B0B0] group-hover:text-[#fff]" 
      />
    </Link>
  );
};

export default Button;
