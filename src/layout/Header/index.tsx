"use client";
import Link from "next/link";
import MobileVersion from "./mobile";
import React, { useState } from "react";
import { useTranslation } from "@/utils/i18n";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";
import {
  ArrowIcon,
  LanguageIcon,
  LogoIcon,
  MenuIcon,
} from "../../../public/assets/images/vector";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguageMenu = () => {
    setShowLanguages((prev) => !prev);
  };

  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    setIsClosing(false);
  };

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleLanguageChange = (value: string | null) => {
    if (!value) return;

    const newLang = value === "AZE" ? "az" : "en";
    if (newLang !== language) {
      setLanguage(newLang);

      const segments = pathname.split("/").filter(Boolean);
      if (
        segments.length > 0 &&
        (segments[0] === "az" || segments[0] === "en")
      ) {
        segments[0] = newLang;
      } else {
        segments.unshift(newLang);
      }

      const newPath = "/" + segments.join("/");
      router.push(newPath);
    }
  };

  const { t } = useTranslation();

  return (
    <>
      {!isMenuOpen && (
        <header className="container pt-16 flex justify-between items-center">
          <div className="mr-5">
            <Link href={`/${language}`}>
              <LogoIcon className="w-24 md:w-28 lg:w-[137px]" />
            </Link>
          </div>

          <div className="lg:flex justify-between items-center font-monda lg:gap-24  ">
            <nav className="hidden lg:flex">
              <ul className="flex gap-14 lg:gap-6 xl:text-xl text-lg  font-semibold text-[#B0B0B099]">
                <li>
                  <Link href={`/${language}/about`}>
                    {t("navbar.about us")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${language}/project`}>
                    {t("navbar.projects")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${language}/our-services`}>
                    {t("navbar.services")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${language}/blog`}>{t("navbar.blog")}</Link>
                </li>
                <li>
                  <Link href={`/${language}/contact-us`}>
                    {t("navbar.contacts")}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-2 lg:gap-8  ">
              <div className="relative">
                <div onClick={toggleLanguageMenu}>
                  <LanguageIcon />
                </div>

                {showLanguages && (
                  <div className="absolute top-full mt-1 right-0 z-10 w-[90px] flex rounded-2xl bg-gradient-to-r ">
                    <div className="rounded-2xl w-[90px] border border-transparent transition flex items-center flex-col bg-[#2A2A2A] p-2 text-white font-monda ">
                      <p
                        onClick={() => {
                          handleLanguageChange("AZE");
                          setShowLanguages(false);
                        }}
                        className={`cursor-pointer text-[#B0B0B099]  z-10 hover:text-white ${
                          language === "az" ? "AZE" : "ENG"
                        }`}
                      >
                        AZE
                      </p>
                      <p
                        onClick={() => {
                          handleLanguageChange("ENG");
                          setShowLanguages(false);
                        }}
                        className={`cursor-pointer text-[#B0B0B099]  z-10 hover:text-white ${
                          language === "en" ? "AZE" : "ENG"
                        }`}
                      >
                        ENG
                      </p>
                      <span
                        className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-tr from-[#D4D4D466] via-[#2a2a2a] to-[#FF602680] blur-[0.5px]"
                        aria-hidden="true"
                      ></span>
                      <span className="absolute inset-[1px] bg-[#1e1e1e] rounded-2xl"></span>
                    </div>
                  </div>
                )}
              </div>

              <Link href={`/${language}/check-your-website`}>
                <div className="relative lg:inline-flex items-center gap-2   px-6 py-5 rounded-2xl text-white bg-[#2A2A2A] font-medium border border-transparent transition hidden">
                  <p className="text-xl font-monda leading-5 font-normal z-10">
                    {t("navbar.checkWebsite")}
                  </p>{" "}
                  <span className="z-10">
                    <ArrowIcon />
                  </span>{" "}
                  <span
                    className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-tr from-[#D4D4D466] via-[#2a2a2a] to-[#FF602680] blur-[0.5px]"
                    aria-hidden="true"
                  ></span>
                  <span className="absolute inset-[1px] bg-[#1e1e1e] rounded-2xl"></span>
                </div>
              </Link>

              <div className="lg:hidden flex justify-normal items-center gap-2">
                <div onClick={handleOpenMenu}>
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
        </header>
      )}

      {isMenuOpen && (
        <div className="lg:hidden">
          <MobileVersion closeMenu={handleCloseMenu} isClosing={isClosing} />
        </div>
      )}
    </>
  );
}
