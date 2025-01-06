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
      title: "Traps Your Leads",
      description:
        "The moment a potential buyer shows intent, your agent pounces. No more leads ghosting you.",
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
      title: "Researches Every Prospect",
      description:
        "While engaging, your agent is digging deep into who your customer is, what they'll spend, and how ready they are to buy. It will find the relevant information on virtually every lead you need to close, so there's zero guesswork.",
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
      title: "Scores and Delivers Your Leads",
      description:
        "Your agent is scoring and routing leads instantly. High-value prospects hit your inbox, SMS and Calendar. No leads wasted, everything tracked.",
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
      title: "Automates Lead Follow-Ups",
      description:
        "While your competition is sleeping, your agent is sending personalized follow-ups that are closing. Email and SMS that hit hard and fast.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/manageleads.png"
            alt="dashboard"
            width="1200"
            height="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconSunglassesFilled className="h-8 w-8 text-secondary" />,
      title: "You Just Watch",
      description:
        "Watch your agent work its magic with your endless stream of fully-managed, premium leads straight to your inbox, phone, and calendar. See exactly which prospects are worth pursuing and your expected payoff. Zero clicks needed.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/third.png"
            alt="dashboard"
            width="1200"
            height="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
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
            Lead. Trap. Close.
          </Heading>
          <Subheading className="text-center text-white">
            Stop chasing and start trapping. Our AI lead agent delivers qualified opportunities straight to your inbox daily, and then manages them for you.
          </Subheading>
          <p className="text-lg mt-4 font-semibold text-white text-center px-2">
            Plus, you&apos;ll only pay for the leads we send you.
          </p>
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
