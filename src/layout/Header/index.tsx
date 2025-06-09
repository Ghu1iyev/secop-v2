"use client";
import Link from "next/link";
import MobileVersion from "./mobile";
import { Select } from "@mantine/core";
import React, { useState } from "react";
import { useTranslation } from "@/utils/i18n";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";
import {
  LanguageIcon,
  LogoIcon,
  MenuIcon,
} from "../../../public/assets/images/vector";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
          <div>
            <Link href={`/${language}`}>
              <LogoIcon className="w-24 md:w-28 lg:w-[137px]" />
            </Link>
          </div>

          <div className="lg:flex justify-between items-center font-monda lg:gap-24 xl:gap-[136px] hidden">
            <nav>
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

            <div className="flex items-center">
              <Select
                placeholder="Language"
                value={language === "az" ? "AZE" : "ENG"}
                onChange={handleLanguageChange}
                data={["AZE", "ENG"]}
                rightSection={
                  <IoIosArrowDown size={16} className="text-white" />
                }
                styles={{
                  input: {
                    width: "100px",
                    backgroundColor: "#121212CC",
                    color: "#B0B0B0",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    borderRadius: "0.75rem",
                  },
                  dropdown: {
                    backgroundColor: "#1F1F1F",
                  },
                }}
              />
            </div>
          </div>

          <div className="lg:hidden flex justify-normal items-center gap-2">
            <LanguageIcon />

            <div onClick={handleOpenMenu}>
              <MenuIcon />
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
