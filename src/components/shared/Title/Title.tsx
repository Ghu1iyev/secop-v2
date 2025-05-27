import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

const Title = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-6 mt-20">
      <h4 className="text-xl font-normal leading-3 text-[#B0B0B0]">{title} </h4>
      <p className="text-[36px] font-vesber leading-10 text-[#fff]">{subtitle} </p>
    </div>
  );
};

export default Title;
