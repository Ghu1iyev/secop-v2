"use client";

import React from "react";
import { GetApi } from "@/lib/axios";
import { MdDone } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";

type ServicesProps = {
  results: {
    name: string;
  }[];
};

export default function Marquee() {
  const { data } = useQuery<ServicesProps>({
    queryKey: ["services"],
    queryFn: () => GetApi("/services/"),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full my-[60px]">
      <div className="flex gap-[10px] animate-marquee">
        {data?.results.map((text, i) => (
          <div
            key={i}
            className="flex gap-[10px] items-center bg-[#2A2A2A] rounded-[14px] text-white text-[12px] sm:text-[18px] font-monda px-4 py-2  whitespace-nowrap"
          >
            <MdDone />
            {text.name}
          </div>
        ))}
      </div>
    </div>
  );
}
