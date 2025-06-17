import React from "react";
import { GetApi } from "@/lib/axios";
import { useTranslation } from "@/utils/i18n";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/context/LanguageProvider";

type ContactInfo = {
  results: {
    bottom_text: string;
    phone: string;
    location: string;
    mail: string;
  }[];
};

const ContactInfo = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const { data } = useQuery<ContactInfo>({
    queryKey: ["contact-page-info", language],
    queryFn: () => GetApi(`/contact-page-info/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const md = data?.results?.[0];

  return (
    <section className="grid justify-between grid-cols-1 md:grid-cols-2 gap-[50px] sm:gap-[100px] sm:mt-[60px]">
      <div>
        <p className="text-[#B0B0B0] text-[18px] leading-[27px] font-monda">
          {md?.bottom_text}
        </p>
      </div>
      <div className="mb-[100px]">
        <ul>
          <li>
            <div className="mb-[30px]">
              <p className="text-[18px] md:text-[20px] font-vesber text-[#B0B0B0] leading-[32px] mb-[10px] tracking-wide">
                {t("contact.letsTalk")}
              </p>
              <p className="text-[18px] md:text-[25px] font-medium font-vesber leading-[30px] text-[#fff]">
                {md?.phone}
              </p>
            </div>
          </li>
          <li>
            <div className="mb-[30px]">
              <p className="text-[18px] md:text-[20px] font-vesber text-[#B0B0B0] leading-[32px] mb-[10px] tracking-wide">
                {t("contact.emailUs")}
              </p>
              <p className="text-[18px] md:text-[25px] font-medium font-vesber leading-[30px] text-[#fff]">
                {md?.mail}
              </p>
            </div>
          </li>
          <li>
            <div className="mb-[30px]">
              <p className="text-[18px] md:text-[20px] font-vesber text-[#B0B0B0] leading-[32px] mb-[10px] tracking-wide">
                {t("contact.visitOffice")}
              </p>
              <p className="text-[18px] md:text-[25px] font-medium font-vesber leading-[30px] text-[#fff]">
                {md?.location}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactInfo;
