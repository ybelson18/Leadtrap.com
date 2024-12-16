"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { IconCheck } from "@tabler/icons-react";
import { CustomLink } from "./custom-link";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Beam from "./beam";
import { Switch } from "./switch";

interface PricingTier {
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlyTotal: number;
  features: string[];
  onClick: () => void;
  ctaText: string;
  ctaHref?: string;
  featured?: boolean;
}

export const PricingGrid = () => {
  const tiers: PricingTier[] = [
    {
      title: "Starter",
      description: "100 leads MONTHLY",
      monthlyPrice: 299,
      yearlyPrice: 249,
      yearlyTotal: 2990,
      features: [
        "AI Lead Agent",
        "AI Research Agent",
        "AI Follow-up Agent",
        "Multi-channel follow-ups (Email, SMS)",
        "Lead enrichment with 300M+ B2B database",
        "Session tracking & AI scoring",
        "24/7 customer support",
        "30 Days Free",
      ],
      onClick: () => {
        console.log("clicked");
      },
      ctaText: "Try 30 Days Free",
    },
    {
      title: "Pro+",
      description: "300 leads MONTHLY",
      monthlyPrice: 499,
      yearlyPrice: 415,
      yearlyTotal: 4990,
      features: [
        "Everything in Pro, +",
        "Advanced lead scoring",
        "Custom AI conversation flows",
        "Priority support",
        "Team collaboration tools",
        "CRM integration",
        "30 Days Free",
      ],
      onClick: () => {
        console.log("clicked");
      },
      ctaText: "Try 30 Days Free",
    },
    {
      title: "Enterprise",
      description: "Unlimited leads MONTHLY",
      monthlyPrice: 0,
      yearlyPrice: 0,
      yearlyTotal: 0,
      features: [
        "Everything in Mega, +",
        "Unlimited team members",
        "Custom enrichments",
        "Custom integrations",
        "Dedicated success manager",
        "Custom AI training",
        "Dedicated account management",
        "Custom SLA & support",
      ],
      onClick: () => {
        console.log("clicked");
      },
      ctaText: "Get a Demo",
      ctaHref: "https://calendly.com/ybelsonapple/30min",
    },
  ];
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="flex justify-center">
        <Switch checked={checked} setChecked={setChecked} />
      </div>
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 py-20 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <div
            key={tier.title + index}
            className={cn(
              "flex flex-col justify-between items-start px-6 py-4 rounded-lg relative overflow-hidden",
              tier.featured &&
                "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950"
            )}
          >
            {tier.featured && <Beam showBeam className="top-0 block" />}
            <div>
              <h3 className="text-base font-normal">{tier.title}</h3>
              {tier.title === "Enterprise" ? (
                <p className="text-lg text-neutral-400 mt-4 font-medium">Custom</p>
              ) : (
                <div className="price-container mt-4">
                  <p className="text-lg text-neutral-400 font-medium">
                    ${checked ? tier.yearlyPrice : tier.monthlyPrice} / month
                  </p>
                  {checked ? (
                    <p className="text-xs text-neutral-500 mt-1">
                      Billed annually at ${tier.yearlyTotal.toLocaleString()}
                    </p>
                  ) : (
                    <div className="text-xs text-transparent mt-1">
                      Billed annually at ${tier.yearlyTotal.toLocaleString()}
                    </div>
                  )}
                </div>
              )}
              <p className="text-sm text-neutral-400 mt-4">
                {tier.description}
              </p>
              <div className="mt-4">
                {tier.features.map((feature, idx) => (
                  <Step key={`feature-${index}-${idx}`}>{feature}</Step>
                ))}
              </div>
            </div>
            <Button
              variant={tier.featured ? "primary" : "muted"}
              onClick={tier.onClick}
              className="mt-4"
            >
              {tier.ctaText}
            </Button>
            {tier.ctaHref && (
              <CustomLink
                href={tier.ctaHref}
                className="text-sm text-neutral-400 mt-2"
              >
                {tier.ctaText}
              </CustomLink>
            )}
          </div>
        ))}
      </Container>
      {/* Removed Clients section */}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 items-start my-4">
      <IconCheck className="h-4 w-4 text-neutral-300 mt-0.5" />
      <div className="text-sm text-neutral-400">
        <Balancer>{children}</Balancer>
      </div>
    </div>
  );
};
