import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";
import { CancelIcon } from "../../../public/assets/images/vector";
import { useTranslation } from "@/utils/i18n";

const MobileVersion = ({
  closeMenu,
  isClosing,
}: {
  closeMenu: () => void;
  isClosing: boolean;
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[9999] bg-white text-[#1E1E1E] p-10 pt-16 font-monda transition-transform duration-300 ease-in-out 
        ${isClosing ? "animate-slide-left-out" : "animate-slide-left"}`}
    >
      <div className="flex justify-end">
        <button onClick={closeMenu}>
          <CancelIcon className="cursor-pointer" />
        </button>
      </div>

      <div>
        <span className="text-[#B0B0B0] text-sm font-medium">Menu</span>
        <nav className="mt-8 text-base font-semibold tracking-tighter leading-8">
          <ul className="space-y-2">
            <li>
              <Link href={`/${language}`}>
                <span onClick={closeMenu}>{t("navbar.home")}</span>
              </Link>
            </li>
            <li>
              <Link href={`/${language}/about`}>
                <span onClick={closeMenu}>{t("navbar.about us")}</span>
              </Link>
            </li>
            <li>
              <Link href={`/${language}/our-services`}>
                <span onClick={closeMenu}>{t("navbar.services")}</span>
              </Link>
            </li>
            <li>
              <Link href={`/${language}/project`}>
                <span onClick={closeMenu}>{t("navbar.projects")}</span>
              </Link>
            </li>
            <li>
              <Link href={`/${language}/blog`}>
                <span onClick={closeMenu}>{t("navbar.blog")}</span>
              </Link>
            </li>
            <li>
              <Link href={`/${language}/contact-us`}>
                <span onClick={closeMenu}>{t("navbar.contacts")}</span>
              </Link>
            </li>
            <li>
              <Link href={`/${language}/check-your-website`}>
                <p onClick={closeMenu}>{t("navbar.checkWebsite")}</p>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-8 text-sm font-semibold tracking-tighter flex flex-col gap-3">
          <span className="font-medium text-sm leading-4 text-[#B0B0B0]">
            Get in touch
          </span>
          <span>info@secop.com</span>
        </div>
      </div>
    </div>
  );
};

export default MobileVersion;
