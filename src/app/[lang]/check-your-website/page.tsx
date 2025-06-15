"use client";
import React from "react";
import Title from "@/components/shared/Title/Title";
import { TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";

const CheckWebsitePage = () => {
  const router = useRouter();
  const { language } = useLanguage();

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${language}/check-your-website/detail`);
  };

  return (
    <div className="my-[180px] w-full">
      <div className="flex flex-col justify-center items-center container">
        <div className="w-full lg:w-[50%]">
          <Title
            title="Check Your Website Security"
            subtitle="Insert your website URL and get a free security status report in seconds."
            fontSize="lg:text-4xl text-xl"
            centered
          />
        </div>

        <div className="lg:text-4xl text-xl w-full lg:w-auto">
          <form
            onSubmit={handleCheck}
            className="my-4 lg:my-16 lg:w-[683px] w-full flex flex-col md:flex-row"
          >
            <TextInput
              size="lg"
              placeholder="example.com"
              className="form-input flex-1 rounded-md md:rounded-l-md"
              styles={{
                input: {
                  borderTopLeftRadius: "0.375rem",
                  borderBottomLeftRadius: "0.375rem",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                  borderColor: "#2A2A2A",
                },
              }}
            />
            <button
              type="submit"
              className="bg-[#FF7A00] md:rounded-r-md s:p-2 flex items-center justify-center md:px-6"
            >
              <span className="text-base md:text-xl font-monda font-normal text-white">
                Check your website
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckWebsitePage;
