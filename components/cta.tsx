"use client";
import React, { useRef } from "react";
import { MacbookScroll } from "./macbook";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { AmbientColor } from "./ambient-color";
import { Container } from "./container";
import Image from 'next/image';

export const CTA = () => {
  return (
    <div className="relative">
      <AmbientColor />
      <Container className="flex flex-col md:flex-row justify-between items-center w-full px-8">
        <div className="flex flex-col">
          <motion.h2 className="text-white text-xl text-center md:text-left md:text-3xl font-bold mx-auto md:mx-0 max-w-xl ">
          Turn your website into money with 30 days free
          </motion.h2>
          <p className="max-w-md mt-8 mb-8 md:mb-0 text-center md:text-left text-sm md:text-base mx-auto md:mx-0 text-neutral-400">
          Start using AI to push an endless stream of premium, ready-to-close leads directly to your email, CRM, or Slack.</p>
        </div>
        <Button className="flex space-x-2 items-center group !text-lg">
          <span>Get a demo</span>
          <HiArrowRight className="text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
        </Button>
      </Container>

      <MacbookScroll src={`/dashboard.png`} showGradient={true} />

      <div className="w-full py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-10">
            <motion.div 
              className="flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
                rotate: [0, -15, 15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2.5,
                ease: "easeInOut"
              }}
            >
              <Image 
                src="/logos/leadtrap.png" 
                alt="LeadTrap" 
                width={256}
                height={256}
                className="h-48 w-48 md:h-64 md:w-64" 
              />
            </motion.div>
            <span className="text-white text-6xl md:text-9xl font-medium text-center w-full">
              LeadTrap
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
