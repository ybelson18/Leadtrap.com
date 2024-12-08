"use client";
import { motion, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { FeatureIconContainer } from "./features/feature-icon-container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { StickyScroll } from "./ui/sticky-scroll";
import {
  IconKarate,
  IconSearch,
  IconTerminal,
  IconClipboardText,
  IconQuestionMark,
  IconMail,
  IconSunglassesFilled,
} from "@tabler/icons-react";
import { useScroll } from "framer-motion";
import { BlurImage } from "./blur-image";
import { LeadCalculator } from "./lead-calculator"; // Import the LeadCalculator component

export const Tools = () => {
  const content = [
    {
      icon: <IconKarate className="h-8 w-8 text-secondary" />,
      title: "Captures High-Intent Leads",
      description:
        "The moment a potential buyer shows intent, our AI pounces. No more leads ghosting you.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/first.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconSearch className="h-8 w-8 text-secondary" />,
      title: "Deep-Screens Every Prospect",
      description:
        "While engaging, it's digging deep into who your customer is, what they'll spend, and how ready they are to buy. With proprietary information on virtually every lead, there's zero guesswork.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/second-backup.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconClipboardText className="h-8 w-8 text-secondary" />,
      title: "Auto-Scores and Routes",
      description:
        "Every lead gets scored and routed instantly. High-value prospects hit your inbox, SMS and Slack. No leads wasted, everything tracked.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/fourth-backup.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconMail className="h-8 w-8 text-secondary" />,
      title: "Manages Everything Automatically",
      description:
        "While your competition is sleeping, it's sending follow-ups that are closing. Email and SMS that hit hard and fast.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/third.png"
            alt="dashboard"
            width="1200"
            height="1000"
            className="object-cover"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconSunglassesFilled className="h-8 w-8 text-secondary" />,
      title: "You Get to Watch",
      description:
        "Watch your leads turn into revenue in real-time. See exactly which prospects are worth pursuing and your expected payoff.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/third.png"
            alt="dashboard"
            width="1200"
            height="1000"
            className="object-cover"
          />
        </ImageContainer>
      ),
    },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgrounds = [
    "var(--charcoal)",
    "var(--neutral-900)",
    "var(--gray-900)",
  ];
  const index = Math.round(scrollYProgress.get() * (backgrounds.length - 1));

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{
        background: gradient,
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className="w-full relative h-full pt-20 md:pt-40"
    >
      <div className="px-6">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconQuestionMark className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
      </div>
      <motion.div className="flex flex-col gap-16 md:gap-24">
        <div>
          <Heading className="text-center text-white">
            Nice website. Where are your leads?
          </Heading>
          <Subheading>
            Stop paying for looks. Start paying for leads. We&apos;re all about filling up your pipeline with premium leads.
          </Subheading>
        </div>

        <div className="relative">
          <StickyScroll content={content} />
        </div>

        <div className="max-w-6xl mx-auto px-6 -mt-32">
          <LeadCalculator />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ImageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg relative shadow-2xl">
      {children}
      <div className="absolute bottom-0 w-full h-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div className="absolute bottom-0 w-40 mx-auto h-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </div>
  );
};
