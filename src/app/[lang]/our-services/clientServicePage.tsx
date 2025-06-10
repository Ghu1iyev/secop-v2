import Title from "@/components/shared/Title/Title";
import React from "react";

interface ServiceProps {
  data: {
    results: {
      name: string;
      text: string
    }[]
  }
}
const ClientOurServices = ({ data } : ServiceProps) => {
  return (
    <main className="container">
      <div className="mt-20">
        <Title
          title="Our Services"
          fontSize="text-[48px]"
          subtitle="Solutions That Safeguard Your Future."
        />
      </div>
      <div className="mt-[60px] mb-[180px] flex flex-col gap-[40px]">
        {data?.results?.map((d, i: number) => (
          <div
            key={i}
            className="grid grid-cols-2 gap-[30px] border-t border-t-[#424242] pt-[40px]"
          >
            <p className="text-[#B0B0B0] text-[20px] font-monda font-medium">
              {d?.name}
            </p>
            <p className="text-[20px] font-monda text-[#fff]">{d?.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ClientOurServices;
