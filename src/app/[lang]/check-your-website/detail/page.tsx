"use client";
import React from "react";
import { CheckIcon } from "../../../../../public/assets/images/vector";

import { LineChart } from "@mantine/charts";

const CheckWebSiteInfo = () => {
  const data = [
    { date: "30k", Apples: 12000, Oranges: 15000, Tomatoes: 17000 },
    { date: "20k", Apples: 18000, Oranges: 16000, Tomatoes: 14000 },
    { date: "10k", Apples: 10000, Oranges: 12000, Tomatoes: 13000 },
    { date: "1Y", Apples: 16000, Oranges: 14000, Tomatoes: 20000 },
  ];
  return (
    <div className="container ">
      <div className="md:mt-20 mt-12 md:px-32">
        <div className="flex gap-5 items-center">
          <span>
            <CheckIcon />
          </span>
          <span className="font-monda text-2xl leading-8 font-medium ">
            198.42.11.200
          </span>
        </div>

        <div className="md:mt-20 mt-8">
          <h3 className="font-monda md:text-xl  text-base leading-8 font-medium">
            IP details
          </h3>

          <div className="grid grid-cols-[130px_1fr] gap-y-4  gap-x-4 md:mt-9 mt-4">
            <span className="text-[#B0B0B0] font-monda md:text-base font-normal text-sm ">
              Application
            </span>
            <span className="md:text-base text-sm font-monda font-normal md:leading-7 ">
              Server-other, winnuke software
            </span>

            <span className="text-[#B0B0B0] font-monda md:text-base font-normal text-sm ">
              Domein
            </span>
            <span className="md:text-base text-sm font-monda font-normal md:leading-7">
              Default domein, extra domain
            </span>

            <span className="text-[#B0B0B0] font-monda md:text-base font-normal text-sm ">
              Source
            </span>
            <span className="md:text-base text-sm font-monda font-normal md:leading-7">
              TCP-IP 2.21.2678.2:08253
            </span>

            <span className="text-[#B0B0B0] font-monda md:text-base font-normal text-sm ">
              Category
            </span>
            <span className="md:text-base text-sm font-monda font-normal md:leading-7">
              Botnet, launching, anonymisation, integration, protection, coating
            </span>

            <span className="text-[#B0B0B0] font-monda md:text-base font-normal text-sm ">
              Port
            </span>
            <span className="md:text-base text-sm font-monda font-normal md:leading-7">
              136, 139, 141, 142 (148)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckWebSiteInfo;
