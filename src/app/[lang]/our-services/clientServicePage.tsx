"use client";
import React from "react";
import { useTranslation } from "@/utils/i18n";
import { useHeaders } from "@/hooks/useHeadersApi";
import Title from "@/components/shared/Title/Title";

interface ServiceProps {
  data: {
    results: {
      name: string;
      text: string;
    }[];
  };
}
const ClientOurServices = ({ data }: ServiceProps) => {
  const { t } = useTranslation();

  const { data: headersData } = useHeaders();
  return (
    <main className="container">
      <div className="mt-20">
        <Title
          title={t("title.services")}
          fontSize="lg:text-[48px] text-[20px]"
          subtitle={headersData?.results?.[0]?.service_title}
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
