import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container pt-16 flex justify-between items-center">
      <div>
        <Link href={"/"}>
          {/* <LogoIcon /> */}
        </Link>
      </div>

      <div className="flex justify-between items-center gap-[136px]">
        <nav>
          <ul className="flex gap-14 text-xl font-semibold text-[#B0B0B099]">
            <li>
              <Link href={"about"}>About Us</Link>
            </li>
            <li>
              <Link href={"projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"services"}>Services</Link>
            </li>
            <li>
              <Link href={"certificates"}>Certificates</Link>
            </li>
            <li>
              <Link href={"team"}>Team</Link>
            </li>
            <li>
              <Link href={"contacts"}>Contacts</Link>
            </li>
          </ul>
        </nav>

        {/* <div>
          <Select>
            <SelectTrigger className="w-[121px] rounded-xl bg-[#121212CC] border-[#2A2A2A] text-[#B0B0B0] font-semibold text-xl ">
              <SelectValue placeholder="ENG" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="aze">AZE</SelectItem>
                <SelectItem value="eng">ENG</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}
      </div>
    </header>
  );
}