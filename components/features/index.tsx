import React from "react";
import { GradientContainer } from "../gradient-container";
import { Container } from "../container";
import { FaBolt } from "react-icons/fa";
import { LeadDataToggle } from "../lead-data-toggle";

export const Features = () => {
  return (
    <GradientContainer className="md:my-20">
      <Container className="py-5 md:py-20 max-w-5xl mx-auto relative z-40">
        <div className="flex justify-center items-center overflow-hidden">
          <FaBolt className="h-6 w-6 text-cyan-500" />
        </div>
        <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white pt-2 md:pt-4 text-4xl md:text-6xl">
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
        </h2>
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
            Get premium, ready-to-close leads flowing straight to your inbox the instant our code goes live.
            <div className="mt-3 md:mt-6 flex justify-center">
              <button className="group hover:-translate-y-0.5 active:scale-[0.98] bg-secondary relative z-10 hover:bg-secondary/90 border border-secondary text-black text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset] flex space-x-2 items-center group !text-lg">
                <span>Get a demo</span>
                <svg 
                  stroke="currentColor" 
                  fill="currentColor" 
                  strokeWidth="0" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true" 
                  className="text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" 
                  height="1em" 
                  width="1em" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </span>
        </h2>

        <LeadDataToggle />
      </Container>
    </GradientContainer>
  );
};
