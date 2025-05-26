import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

type ButtonProps = {
  text: string;
  url: string;
  customClass?: string;  
  iconColor?: string;
}

const Button = ({text, url, customClass, iconColor}: ButtonProps) => {
  return (
    <Link
      className={`bg-[#2A2A2A] text-[#fff] inline-flex items-center gap-[10px] font-monda rounded-[12px] py-[19px] px-[24px] text-[20px] ${customClass}`} 
      href={`/${url}`}
    >
      {text} <IoMdArrowForward size={24} color={iconColor ? iconColor : "#B0B0B0"} />
    </Link>
  );
};

export default Button;
