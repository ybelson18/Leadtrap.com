import { Link } from "next-view-transitions";
import React from "react";
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex items-center space-x-3 text-sm relative z-20"
    >
      <Image 
        src="/logos/leadtrap.png"
        alt="LeadTrap Logo"
        width={256}
        height={256}
        className="h-12 w-12"
      />
      <span className="text-white font-bold text-xl">LeadTrap</span>
    </Link>
  );
};
