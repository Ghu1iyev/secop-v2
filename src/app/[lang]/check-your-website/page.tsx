"use client";
import React, { useState } from "react";
import { TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/utils/i18n";
import Title from "@/components/shared/Title/Title";
import { useLanguage } from "@/context/LanguageProvider";

const CheckWebsitePage = () => {
  const router = useRouter();
  const { language } = useLanguage();
  const { t } = useTranslation();

  const [error, setError] = useState("");
  const [domainValue, setDomainValue] = useState("");

  const isValidDomain = (domain: string): boolean => {
    const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/;
    return domainRegex.test(domain);
  };

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedDomain = domainValue.trim().toLowerCase();

    if (!trimmedDomain) {
      setError(t("check.errors.empty"));
      return;
    }

    if (!isValidDomain(trimmedDomain)) {
      setError(t("check.errors.invalid"));
      return;
    }

    setError("");
    router.push(
      `/${language}/check-your-website/detail?domain=${trimmedDomain}`
    );
  };

  return (
    <div className="my-[180px] w-full">
      <div className="flex flex-col justify-center items-center container">
        <div className="w-full lg:w-[50%]">
          <Title
            title={t("check.title")}
            subtitle={t("check.subtitle")}
            fontSize="lg:text-4xl text-xl"
            centered
          />
        </div>

        <div className="lg:text-4xl text-xl w-full lg:w-auto">
          <form
            onSubmit={handleCheck}
            className="mt-4 lg:mt-16 lg:w-[683px] w-full flex flex-col md:flex-row"
          >
            <TextInput
              name="domain"
              size="lg"
              placeholder={t("check.placeholder")}
              value={domainValue}
              onChange={(e) => {
                setDomainValue(e.currentTarget.value);
                setError("");
              }}
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
                {t("check.button")}
              </span>
            </button>
          </form>
          {error && (
            <p className="text-red-600 text-sm font-monda leading-5 ">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckWebsitePage;
