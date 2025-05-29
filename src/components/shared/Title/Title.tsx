import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

const Title = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-6  w-[60%] ">
      <h4 className="text-xl font-normal font-monda leading-3 text-[#B0B0B0]">
        {title}{" "}
      </h4>
      <p className="text-5xl font-vesber leading-[1.1] ">{subtitle} </p>
    </div>
  );
};

export default Title;
