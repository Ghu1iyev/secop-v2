import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  fontSize?: string;
};

const Title = ({ title, subtitle, fontSize }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-5 lg:gap-6 ">
      <h4 className="lg:text-xl text-base md:text-lg font-normal lg:leading-3 text-[#B0B0B0]">
        {title}{" "}
      </h4>
      <p
        className={`lg:text-[36px] text-xl md:text-2xl font-vesber lg:leading-10  text-[#fff] ${fontSize}`}
      >
        {subtitle}{" "}
      </p>
    </div>
  );
};

export default Title;
