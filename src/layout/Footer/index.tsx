import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="container pb-20">
      <div className="px-24">
        <h3 className="text-[#fff] text-[76px] font-normal tracking-wider">Let’s Talk.</h3>
      </div>

      <div className="flex justify-between leading-8 mt-20 px-24 text-base w-[100%]">
        <div>
          <p className="text-[#fff] font-semibold pb-5 ">Company</p>
          <ul>
            <li className="text-[#B0B0B0]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-[#B0B0B0]">
              <Link href={"about"}>About Us</Link>
            </li>

            <li className="text-[#B0B0B0]">
              <Link href={"team"}>Team</Link>
            </li>

            <li className="text-[#B0B0B0]">
              <Link href={"partners"}>Partners</Link>
            </li>
            <li className="text-[#B0B0B0]">
              <Link href={"contacts"}>Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#fff] font-semibold pb-5 ">Certificates</p>
          <ul>
            <li className="text-[#B0B0B0]"> TEAM Certificates</li>
            <li className="text-[#B0B0B0]">Our Certificates </li>
          </ul>
        </div>
        <div>
          <p className="text-[#fff] font-semibold pb-5 ">Services</p>
          <ul>
            <li className="text-[#B0B0B0]"> Projects</li>
            <li className="text-[#B0B0B0]">Services</li>
            <li className="text-[#B0B0B0]">Blog</li>
          </ul>
        </div>
        <div>
          <p className="text-[#fff] font-semibold pb-5 ">Social</p>
          <ul>
            <li className="text-[#B0B0B0]">LinkedIn</li>
            <li className="text-[#B0B0B0]">Instagram</li>
            <li className="text-[#B0B0B0]">YouTube</li>
            <li className="text-[#B0B0B0]">Dribbble</li>
            <li className="text-[#B0B0B0]"> GitHub</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-[#fff] font-semibold pb-5 ">SECOP</li>
            <div className="flex justify-between flex-col gap-12">
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