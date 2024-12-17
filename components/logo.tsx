import { Link } from "next-view-transitions";
import React from "react";
import Image from 'next/image'

type LogoProps = {
  noLink?: boolean;
};

export const Logo = ({ noLink }: LogoProps) => {
  const content = (
    <div className="font-normal flex items-center space-x-2 text-sm relative z-20">
      <Image 
        src="/logos/leadtrap.png"
        alt="LeadTrap Logo"
        width={256}
        height={256}
        className="h-10 w-10 md:h-12 md:w-12"
      />
      <span className="text-white font-bold text-lg md:text-xl">LeadTrap</span>
    </div>
  );

  if (noLink) {
    return content;
  }

  return (
    <Link href="/" className="block hover:opacity-80 transition-opacity duration-200">
      {content}
    </Link>
  );
};
