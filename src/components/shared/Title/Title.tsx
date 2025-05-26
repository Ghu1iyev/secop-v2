import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

const Title = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-6 mt-20">
      <h1 className="text-xl font-normal leading-3 text-[#B0B0B0]">{title} </h1>
      <p className="text-5xl font-normal leading-10">{subtitle} </p>
    </div>
  );
};

export default Title;
