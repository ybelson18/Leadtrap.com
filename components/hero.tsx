"use client";
import React, { useRef, useEffect } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Beam from "./beam";

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

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1.2];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-[70rem] md:min-h-[100rem] pt-20 md:pt-40 relative overflow-hidden"
    >
      <Container className="flex  flex-col items-center justify-center">
        <Heading
          as="h1"
          className="text-5xl md:text-6xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 py-6"
        >
          <span
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              textDecoration: 'inherit',
              textWrap: 'balance'
            }}
            data-br=":R2l7puja:"
            data-brr="1"
          >
            Stop Chasing Leads
          </span>
        </Heading>
        <Subheading className="text-center mt-2 md:mt-6 max-w-3xl mx-auto relative z-10">
          <span
            style={{
              WebkitTextSizeAdjust: '100%',
              tabSize: 4,
              fontFeatureSettings: 'normal',
              fontVariationSettings: 'normal',
              WebkitTapHighlightColor: 'transparent',
              fontFamily: '__Inter_f50a95,__Inter_Fallback_f50a95',
              fontStyle: 'normal',
              WebkitFontSmoothing: 'antialiased',
              textAlign: 'center',
              fontWeight: 400,
              color: 'var(--neutral-200)',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              boxSizing: 'border-box',
              border: '0 solid #e5e7eb',
              display: 'inline-block',
              verticalAlign: 'top',
              textDecoration: 'inherit',
              textWrap: 'balance'
            }}
            data-br=":R4l7puja:"
            data-brr="1"
          >
            Use AI to push an endless stream of premium, ready-to-close leads straight to your inbox, phone, or Slack.
          </span>
        </Subheading>
        <div className="flex items-center gap-4 justify-center my-10 relative z-10">
          <div className="relative inline-flex items-center">
            <Button className="flex space-x-2 items-center group !text-lg relative z-20">
              <span>Get a demo</span>{" "}
              <HiArrowRight className="text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
            </Button>
            <div 
              className="w-32 h-24 bg-[#fff740] -rotate-3 p-3 shadow-lg text-xl leading-tight flex items-center justify-center transform hover:rotate-2 transition-transform duration-200 absolute -right-[112px]"
              style={{ 
                boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                transformOrigin: 'center center',
                fontFamily: 'var(--font-kalam), cursive',
                WebkitFontSmoothing: 'antialiased',
                color: 'rgb(0 0 0 / var(--tw-text-opacity))',
                ['--tw-text-opacity' as string]: '1',
                top: '-12px'
              }}
            >
              <div className="rotate-[3deg] text-center">First 30 days free!</div>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex  items-center justify-center relative p-2 md:p-20 cursor-pointer md:-mt-20">
        <div
          className="w-full relative"
          style={{
            perspective: "1000px",
          }}
        >
          <Card rotate={rotate} translate={translate} scale={scale}>
            <Image
              src={`/dashboard.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-md grayscale group-hover:grayscale-0 transition duration-200 object-cover object-left-top h-full  md:object-left-top"
              draggable={false}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        translateY: translate,
        // scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-6xl z-40 group -mt-12 mx-auto isolate group h-[20rem] md:h-[50rem] w-full border-4 border-neutral-900 p-2 md:p-2 bg-charcoal rounded-[30px] shadow-2xl relative"
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
