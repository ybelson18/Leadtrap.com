"use client";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { NavBarItem } from "@/components/navbar/navbar-item";
import { CustomLink } from "@/components/custom-link";

export const MobileNavbar = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  return (
    <div
      className={cn(
        "flex items-center justify-between w-full bg-transparent px-4 py-3 transition duration-200",
        showBackground &&
          "bg-neutral-900 shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]"
      )}
    >
      <div className="relative z-50">
        <NavBarItem href="/">
          <Logo noLink />
        </NavBarItem>
      </div>
      <IoIosMenu
        className="text-white h-6 w-6 cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-start justify-start pt-5">
          <div className="flex items-center justify-between w-full px-4 py-3">
            <div className="relative z-50">
              <NavBarItem href="/">
                <Logo noLink />
              </NavBarItem>
            </div>
            <IoIosClose
              className="h-8 w-8 text-white cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="flex flex-col w-full space-y-6 px-4 py-6">
            <NavBarItem href="/">Home</NavBarItem>
            {navItems.map((item: any) => (
              <NavBarItem key={item.title} href={item.link} target={item.target}>
                {item.title}
              </NavBarItem>
            ))}
          </div>
          <div className="flex flex-col w-full px-4 py-4 space-y-4">
            <CustomLink 
              href="https://calendly.com/ybelsonapple/30min"
              target="_blank"
              className="no-underline w-full"
            >
              <Button className="w-full">Get a demo</Button>
            </CustomLink>
            <Button
              variant="simple"
              as={Link}
              href="/login"
              className="w-full"
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
