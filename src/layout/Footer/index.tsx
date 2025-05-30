import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="container pb-20">
      <div className="lg:px-24 mt-20 ">
        <h3 className="text-[#fff] lg:text-[76px] text-5xl font-normal tracking-wider">
          Let’s Talk.
        </h3>
      </div>

      <div className="flex flex-col gap-[34px] md:flex-row md:justify-between lg:leading-8 leading-6 lg:mt-20 lg:px-24 mt-12 lg:text-base text-sm w-full">
        <div>
          <p className="text-[#fff] font-semibold lg:pb-5 ">Company</p>
          <ul>
            <li className="text-[#B0B0B0 ] hidden lg:block">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-[#B0B0B0]">
              <Link href={"about"}>About Us</Link>
            </li>

            <li className="text-[#B0B0B0]">
              <Link href={"team"}>Team</Link>
            </li>

            <li className="text-[#B0B0B0] hidden lg:block">
              <Link href={"partners"}>Partners</Link>
            </li>
            <li className="text-[#B0B0B0] hidden lg:block">
              <Link href={"contacts"}>Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#fff] font-semibold lg:pb-5 ">Certificates</p>
          <ul>
            <li className="text-[#B0B0B0]"> TEAM Certificates</li>
            <li className="text-[#B0B0B0]">Our Certificates </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <p className="text-[#fff] font-semibold lg:pb-5 ">Services</p>
          <ul>
            <li className="text-[#B0B0B0]"> Projects</li>
            <li className="text-[#B0B0B0]">Services</li>
            <li className="text-[#B0B0B0]">Blog</li>
          </ul>
        </div>
        <div>
          <p className="text-[#fff] font-semibold lg:pb-5 ">Social</p>
          <ul>
            <li className="text-[#B0B0B0]">LinkedIn</li>
            <li className="text-[#B0B0B0]">Instagram</li>
            <li className="text-[#B0B0B0]">YouTube</li>
            <li className="text-[#B0B0B0]">Dribbble</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-[#fff] font-semibold lg:pb-5 ">SECOP</li>
            <div className="flex justify-between flex-col lg:gap-12 gap-7">
              <li className="text-[#B0B0B0]">
                &copy; {new Date().getFullYear()}. All rights are protected.
              </li>
              <li className="text-[#B0B0B0]">Terms. Sitemap.</li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
