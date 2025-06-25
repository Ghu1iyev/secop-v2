import { useLanguage } from "@/context/LanguageProvider";
import { useTranslation } from "@/utils/i18n";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const { language } = useLanguage();
  const { t } = useTranslation();

  return (
    <footer className="container pb-20">
      <div className="lg:px-24 mt-20 ">
        <h3 className="text-[#fff] lg:text-[76px] text-5xl font-normal tracking-wider">
          {t("footer.letsTalk")}
        </h3>
      </div>

      <div className="flex flex-col gap-[34px] md:flex-row md:justify-between lg:leading-8 leading-6 lg:mt-20 lg:px-24 mt-12 lg:text-base text-sm w-full">
        <div>
          <p className="text-[#fff] font-semibold lg:pb-5 ">
            {t("footer.company")}
          </p>
          <ul>
            <li className="text-[#B0B0B0 ] hidden lg:block">
              <Link href={`/${language}`}>{t("footer.navigation.home")}</Link>
            </li>
            <li className="text-[#B0B0B0]">
              <Link href={`/${language}/about`}>
                {t("footer.navigation.aboutUs")}
              </Link>
            </li>

            <li className="text-[#B0B0B0]">
              <Link href={`/${language}/#team`}>
                {t("footer.navigation.team")}
              </Link>
            </li>

            <li className="text-[#B0B0B0] hidden lg:block">
              <Link href={`/${language}/contact-us`}>
                {t("footer.navigation.contacts")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#fff] font-semibold lg:pb-5 ">
            {t("footer.navigation.certificates")}
          </p>
          <ul>
            <li className="text-[#B0B0B0]">
              <Link href={`/${language}/#our-certificates`}>
                {t("footer.navigation.teamCertificates")}
              </Link>
            </li>
            <Link href={`/${language}/#our-certificates`}>
              <li className="text-[#B0B0B0]">
                {t("footer.navigation.ourCertificates")}
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:block">
          <p className="text-[#fff] font-semibold lg:pb-5 ">
            {t("footer.navigation.services")}
          </p>
          <ul>
            <li className="text-[#B0B0B0]">
              <Link href={`/${language}/project`}>
                {t("footer.navigation.projects")}
              </Link>
            </li>
            <li className="text-[#B0B0B0]">
              <Link href={`/${language}/our-services`}>
                {t("footer.navigation.services")}
              </Link>
            </li>
            <li className="text-[#B0B0B0]">
              <Link href={`/${language}/blog`}>
                {t("footer.navigation.blog")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#fff] font-semibold lg:pb-5 ">
            {t("footer.navigation.social")}
          </p>
          <ul>
            <a
              href="https://www.linkedin.com/company/secop-co/"
              rel="noopener noreferrer"
            >
              <li className="text-[#B0B0B0]">{t("footer.social.linkedin")}</li>
            </a>

            <a
              href="https://www.instagram.com/secop.co/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <li className="text-[#B0B0B0]">{t("footer.social.instagram")}</li>
            </a>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-[#fff] font-semibold lg:pb-5 ">SECOP</li>
            <div className="flex justify-between flex-col lg:gap-12 gap-7">
              <li className="text-[#B0B0B0]">
                &copy; {new Date().getFullYear()}.{t("footer.legal.copyright")}.
              </li>
              <li className="text-[#B0B0B0]">
                {t("footer.legal.terms")}. {t("footer.legal.sitemap")}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
