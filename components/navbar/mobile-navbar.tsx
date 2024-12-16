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
        "flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200",
        showBackground &&
          " bg-neutral-900  shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]"
      )}
    >
      <NavBarItem href="/">
        <Logo noLink />
      </NavBarItem>
      <IoIosMenu
        className="text-white h-6 w-6"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-start justify-start space-y-10 pt-5 text-xl text-zinc-600 transition duration-200 hover:text-zinc-800">
          <div className="flex items-center justify-between w-full px-2.5 py-1.5">
            <NavBarItem href="/">
              <Logo noLink />
            </NavBarItem>
            <div className="flex items-center space-x-2">
              <IoIosClose
                className="h-8 w-8 text-white"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[14px] px-8">
            <NavBarItem href="/" onClick={() => setOpen(false)}>
              Home
            </NavBarItem>
            {navItems.map((navItem: any, idx: number) => (
              <>
                {navItem.children && navItem.children.length > 0 ? (
                  <>
                    {navItem.children.map((childNavItem: any, childIdx: number) => (
                      <NavBarItem
                        key={`link-${idx}-${childIdx}`}
                        href={childNavItem.link}
                        onClick={() => setOpen(false)}
                      >
                        {childNavItem.title}
                      </NavBarItem>
                    ))}
                  </>
                ) : (
                  <NavBarItem
                    key={`link-${idx}`}
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    target={navItem.target}
                  >
                    {navItem.title}
                  </NavBarItem>
                )}
              </>
            ))}
          </div>
          <div className="flex flex-row w-full items-start gap-2.5 px-8 py-4">
            <Button>Get a demo</Button>
            <Button
              variant="simple"
              as={Link}
              href="/login"
              onClick={() => {
                setOpen(false);
              }}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
