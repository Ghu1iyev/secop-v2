"use client";
import Link from "next/link";
import MobileVersion from "./mobile";
import { Select } from "@mantine/core";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LogoIcon, MenuIcon } from "../../../public/assets/images/vector";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  return (
    <>
      {!isMenuOpen && (
        <header className="container pt-16 flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <LogoIcon className="w-24 md:w-28 lg:w-[137px]" />
            </Link>
          </div>

          <div className="lg:flex justify-between items-center lg:gap-24 xl:gap-[136px] hidden">
            <nav>
              <ul className="flex gap-14 lg:gap-6 xl:text-xl text-lg font-semibold text-[#B0B0B099]">
                <li>
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/project"}>Projects</Link>
                </li>
                <li>
                  <Link href={"/our-services"}>Services</Link>
                </li>
                <li>
                  <Link href={"/blog"}>blogs</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contacts</Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center">
              <Select
                placeholder="ENG"
                data={["AZE", "ENG"]}
                rightSection={
                  <IoIosArrowDown size={16} className="text-white" />
                }
                classNames={{
                  dropdown: "custom-dropdown",
                }}
                styles={{
                  input: {
                    width: "100px",
                    fontFamily: "Monda",
                    height: "46px",
                    backgroundColor: "#121212CC",
                    borderColor: "#2A2A2A",
                    color: "#B0B0B0",
                    fontWeight: 600,
                    lineHeight: "30px",
                    fontSize: "1.25rem",
                    borderRadius: "0.75rem",
                  },
                  dropdown: {
                    backgroundColor: "#1F1F1F",
                    borderColor: "#2A2A2A",
                  },
                }}
              />
            </div>
          </div>

          <div className="lg:hidden" onClick={handleOpenMenu}>
            <MenuIcon />
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
