"use client";
import React, { useEffect, useState } from "react";
import { CheckIcon } from "../../../../../public/assets/images/vector";
import { useSearchParams } from "next/navigation";
import { PostApi } from "@/lib/axios";
import mockData from "@/lib/mock-data.json";

// API cavabı üçün interface təyin edirik
interface ShodanLocation {
  city?: string;
  latitude?: number;
  longitude?: number;
}

interface ShodanDataItem {
  timestamp?: string;
  isp?: string;
  location?: ShodanLocation;
}

interface ShodanData {
  region_code?: string;
  hostnames?: string[] | string;
  data?: ShodanDataItem[];
}

interface ApiResult {
  ip?: string;
  shodan_data?: ShodanData;
}

// Type guard funksiyası
const isApiResult = (data: unknown): data is ApiResult => {
  return typeof data === "object" && data !== null;
};

const CheckWebSiteInfo = () => {
  const searchParams = useSearchParams();
  const domain = searchParams.get("domain");
  const [result, setResult] = useState<ApiResult | null>(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!domain) return;

      // setIsLoading(true);
      try {
        const response = await PostApi("/scan/", { domain });
        if (isApiResult(response)) {
          setResult(response);
        } else {
          console.warn("Unexpected response format:", response);
          setResult(null);
        }
      } catch (error: unknown) {
        const randomIndex = Math.floor(Math.random() * mockData.length);
        const fallback = mockData[randomIndex];
        setResult(fallback);

        console.warn("API error oldu, mock data göstərilir:", fallback);
        console.error("API xətası:", error);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchData();
  }, [domain]);

  const location = result?.shodan_data?.data?.[0]?.location;
  // const hasLocationData = location?.latitude && location?.longitude;

  return (
    <div className="container ">
      <div className="md:mt-20 mt-12 md:px-32 ">
        <div className="flex gap-5 items-center">
          <span>
            <CheckIcon />
          </span>
          <span className="font-monda text-2xl leading-8 font-medium ">
            {result?.ip}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="md:mt-20 mt-8">
            <h3 className="font-monda md:text-xl  text-base leading-8 font-medium">
              IP details
            </h3>

            <div className="grid grid-cols-[130px_1fr] gap-y-4  gap-x-4 md:mt-9 mt-4">
              <span className="text-[#B0B0B0] font-monda md:text-base font-normal text-sm ">
                Region Code
              </span>
              <span className="md:text-base text-sm font-monda font-normal md:leading-7 ">
                {result?.shodan_data?.region_code}
              </span>
              <span className="text-[#B0B0B0] font-monda md:text-base font-normal text-sm ">
                Location
              </span>
              <span className="md:text-base text-sm font-monda font-normal md:leading-7">
                {location?.city}
              </span>

              <span className="text-[#B0B0B0] font-monda md:text-base font-normal text-sm ">
                Hostnames
              </span>
              <span className="md:text-base text-sm font-monda font-normal md:leading-7">
                {Array.isArray(result?.shodan_data?.hostnames)
                  ? result.shodan_data.hostnames.map(
                      (hostnames: string, index: number) => (
                        <div key={index}>{hostnames}</div>
                      )
                    )
                  : result?.shodan_data?.hostnames}
              </span>

              <span className="text-[#B0B0B0] font-monda md:text-base font-normal text-sm ">
                Timestamp
              </span>
              <span className="md:text-base text-sm font-monda font-normal md:leading-7">
                {result?.shodan_data?.data?.[0]?.timestamp}
              </span>

              <span className="text-[#B0B0B0] font-monda md:text-base font-normal text-sm ">
                ISP
              </span>
              <span className="md:text-base text-sm font-monda font-normal md:leading-7">
                {result?.shodan_data?.data?.[0]?.isp}
              </span>
            </div>
          </div>
          {/* <div className="w-[50%]">
            {isLoading ? (
              <div className="flex items-center justify-center h-[300px] bg-gray-100 rounded-xl">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                  <Loader color="#0161A1" />
                </div>
              </div>
            ) : hasLocationData ? (
              <iframe
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&output=embed`}
              />
            ) : (
              <div className="flex items-center justify-center h-[300px] bg-gray-100 rounded-xl">
                <p className="text-gray-600">Location data not available</p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CheckWebSiteInfo;
