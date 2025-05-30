import React from "react";
import { CancelIcon } from "../../../public/assets/images/vector";

const MobileVersion = ({
  closeMenu,
  isClosing,
}: {
  closeMenu: () => void;
  isClosing: boolean;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 bg-white text-[#1E1E1E] p-10 pt-16 font-monda transition-transform duration-300 ease-in-out
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
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Certificates</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Contacts</li>
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
