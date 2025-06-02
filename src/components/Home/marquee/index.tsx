import React from 'react';
import { MdDone } from 'react-icons/md';

const items = [
  "Network Security Solutions and Infrastructure Protection",
  "Security Awareness Training",
  "Comprehensive Risk Assessment",
  "Secure Cloud Integration",
  "Real-time Threat Monitoring",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full my-[60px]">
      <div className="flex gap-[10px] animate-marquee">
        {[...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex gap-[10px] items-center bg-[#2A2A2A] rounded-[14px] text-white text-[12px] sm:text-[18px] font-monda px-4 py-2  whitespace-nowrap"
          >
            <MdDone />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
