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
              <Link href={`/${language}`}>{t("navbar.home")}</Link>
            </li>
            <li>
              <Link href={`/${language}/about`}>{t("navbar.about us")}</Link>
            </li>
            <li>
              <Link href={`/${language}/out-services`}>
                {t("navbar.services")}
              </Link>
            </li>
            <li>
              <Link href={`/${language}/project`}>{t("navbar.projects")}</Link>
            </li>

            <li>
              <Link href={`/${language}/blog`}>{t("navbar.blog")}</Link>
            </li>

            <li>
              <Link href={`/${language}/contact-us`}>
                {t("navbar.contacts")}
              </Link>
            </li>

            <li>
              <Link href={`/${language}/check-your-website`}>
                <p> {t("navbar.checkWebsite")}</p>
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
