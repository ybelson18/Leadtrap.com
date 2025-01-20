"use client";
import React, { useRef, useEffect, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Beam from "./beam";
import { cn } from "@/lib/utils";
import { CustomLink } from "./custom-link";
import WaitlistForm from "./waitlist-form"; 

export const Hero = () => {
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapScript = `
      self.__wrap_n=self.__wrap_n||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);
      self.__wrap_b=(e,t,r)=>{
        let n=null==(r=r||document.querySelector('[data-br="'.concat(e,'"]')))?void 0:r.parentElement;
        if(!n)return;
        let l=e=>r.style.maxWidth=e+"px";
        r.style.maxWidth="";
        let a=n.clientWidth,o=n.clientHeight,i=a/2-.25,c=a+.5,u;
        if(a){
          for(l(i),i=Math.max(r.scrollWidth,i);i+1<c;)
            l(u=Math.round((i+c)/2)),n.clientHeight===o?c=u:i=u;
          l(c*t+a*(1-t))
        }
        r.__wrap_o||"undefined"!=typeof ResizeObserver&&(r.__wrap_o=new ResizeObserver(()=>{
          self.__wrap_b(0,+r.dataset.brr,r)
        })).observe(n)
      };
      self.__wrap_n!=1&&self.__wrap_b(":R4l7puja:",1);
      self.__wrap_n!=1&&self.__wrap_b(":R2l7puja:",1);
    `;

    const scriptEl = document.createElement('script');
    scriptEl.textContent = wrapScript;
    document.body.appendChild(scriptEl);

    return () => {
      document.body.removeChild(scriptEl);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    const checkScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    checkMobile();
    checkScroll();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1.2];
  };

  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-[70rem] md:min-h-[100rem] pt-20 md:pt-40 relative"
    >
      <Container className="flex  flex-col items-center justify-center">
        <div className="flex justify-center items-center mb-1 text-[#00A0E9]">
          <span className="mr-2">●</span>
          <span className="font-medium">Now Onboarding From Our Waitlist</span>
        </div>
        <Heading
          as="h1"
          className="text-5xl md:text-6xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 leading-[1] lg:leading-[1]"
        >
          <span
            className="text-white"
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              textWrap: 'balance'
            }}
            data-br=":R2l7puja:"
            data-brr="1"
          >
            <span 
              style={{ fontSize: '0.73em' }}
              className="block leading-[1.25] tracking-tight"
            >
              High-Quality Leads, Delivered to Your Inbox Automatically.{' '}
            </span>
          </span>
        </Heading>
        <Subheading className="text-center mt-2 md:mt-6 max-w-3xl mx-auto relative z-10">
          <span
            className="text-muted-foreground block max-w-[750px] mx-auto text-center text-[1.125rem] md:text-[1.5rem] leading-8 px-4 md:px-0"
            data-br=":R4l7puja:"
            data-brr="1"
          >
            Use LeadTrap to turn website visitors into qualified, ready-to-close leads delivered to your calendar.
            <br />
            Pay only for qualified leads.
          </span>
        </Subheading>
        <div className="flex items-center gap-4 justify-center my-10 relative z-10">
          <div className="relative inline-flex items-center flex-col">
            <WaitlistForm />
          </div>
        </div>
      </Container>

      <div className="text-center -mb-16 md:-mb-24 text-xl md:text-2xl font-medium text-white">
      Ditch forms, missed follow-ups, and bad lead info—our AI agent delivers leads like this 👇
      </div>

      <Container>
        <div className="mt-20 md:mt-32">
          <div className="flex items-center justify-center relative p-2 md:p-20 cursor-pointer w-full">
            <div
              className="w-full relative overflow-x-hidden md:overflow-x-visible max-w-[582px] mx-auto"
            >
              <Card translate={translate} scale={scale}>
                <Image
                  src={`/dashboard.png`}
                  alt="hero"
                  height={420}
                  width={910}
                  className={cn(
                    "mx-auto rounded-md transition-all duration-100 max-w-[100%] w-full",
                    hasScrolled ? "" : "grayscale",
                    "h-auto object-contain md:object-cover md:object-top"
                  )}
                  draggable={false}
                  priority
                />
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const Card = ({
  scale,
  translate,
  children,
}: {
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-4xl z-40 group -mt-12 mx-auto isolate group h-auto w-full border-4 border-neutral-900 p-2 md:p-2 bg-charcoal rounded-[30px] shadow-2xl relative"
    >
      <Beam showBeam className="-top-1 block" />
      <div className="absolute h-40 w-full bottom-0 md:-bottom-10 inset-x-0 scale-[1.2] z-20 pointer-events-none bg-charcoal [mask-image:linear-gradient(to_top,white_30%,transparent)]" />
      <div className="absolute inset-0 z-20  bg-transparent group-hover:bg-black/0 transition-all duration-200 flex items-center justify-center">
        {/* Removed VideoModal */}
      </div>
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-transparent md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};
