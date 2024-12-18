import React from "react";
import { GradientContainer } from "../gradient-container";
import { Container } from "../container";
import { FaBolt } from "react-icons/fa";
import { LeadDataToggle } from "../lead-data-toggle";
import { CustomLink } from "../custom-link";
import { Button } from "../button";
import { HiArrowRight } from "react-icons/hi";

export const Features = () => {
  return (
    <GradientContainer className="md:my-20">
      <Container className="py-5 md:py-20 max-w-5xl mx-auto relative z-40">
        <div className="flex justify-center items-center overflow-hidden">
          <FaBolt className="h-6 w-6 text-cyan-500" />
        </div>
        <h1 className="max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white pt-2 md:pt-4 text-4xl md:text-6xl">
          <span
            data-br=":R577puja:"
            data-brr="1"
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              textDecoration: 'inherit',
              textWrap: 'balance'
            }}
          >
            Get Your First Premium Leads in Under Five Minutes
          </span>
        </h1>
        <h2 className="max-w-4xl my-1 md:my-4 mx-auto text-muted text-center font-normal text-lg md:text-2xl">
          <span
            data-br=":R777puja:"
            data-brr="1"
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              textDecoration: 'inherit',
              textWrap: 'balance'
            }}
          >
            The ready-to-close leads we send to your inbox and calendar come with world-class data and insights that you need to close.
            <div className="mt-3 md:mt-6 flex justify-center">
              <CustomLink 
                href="https://calendly.com/ybelsonapple/30min"
                target="_blank"
                className="no-underline"
              >
                <Button>
                  <span>Get a demo</span>
                  <HiArrowRight className="text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
                </Button>
              </CustomLink>
            </div>
          </span>
        </h2>

        <LeadDataToggle />
      </Container>
    </GradientContainer>
  );
};
