import React from "react";
import Link from "next/link";
import { LogoIcon } from "../../../public/assets/images/vector";
import { Select } from "@mantine/core";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <header className="container pt-16 flex justify-between items-center">
      <div>
        <Link href={"/"}>
          <LogoIcon />
        </Link>
      </div>

      <div className="flex justify-between items-center gap-[136px]">
        <nav>
          <ul className="flex gap-14 text-xl font-semibold text-[#B0B0B099]">
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
              <Link href={"/certificates"}>Certificates</Link>
            </li>
            <li>
              <Link href={"/team"}>Team</Link>
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
            rightSection={<IoIosArrowDown size={16} className="text-white" />}
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
            }}
          />
        </div>
      </div>
    </header>
  );
}
