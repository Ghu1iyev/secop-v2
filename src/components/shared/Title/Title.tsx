import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  fontSize?: string;
  centered?: boolean;
};

const Title = ({
  title,
  subtitle,
  fontSize,
  centered = false,
}: SectionHeaderProps) => {
  return (
    <div
      className={`flex flex-col gap-6 ${
        centered ? "items-center text-center" : ""
      }`}
    >
      <h4 className="text-[16px] md:text-[20px] font-normal font-monda leading-3 text-[#B0B0B0]">
        {title}{" "}
      </h4>
      <p
        className={`font-vesber leading-7 lg:leading-[54px] text-[#fff] ${fontSize}`}
      >
        {subtitle}{" "}
      </p>
    </div>
  );
};

export default Title;
