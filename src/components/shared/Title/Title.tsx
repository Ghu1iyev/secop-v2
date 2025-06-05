import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  fontSize?: string;
};

const Title = ({ title, subtitle, fontSize }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h4 className="text-[16px] md:text-[20px] font-normal leading-3 text-[#B0B0B0]">{title} </h4>
      <p
        className={`font-vesber text-[#fff] ${fontSize}`}
      >
        {subtitle}{" "}
      </p>
    </div>
  );
};

export default Title;
