"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { Heading } from "./heading";

const questions = [
  {
    id: 1,
    title: "What is LeadTrap?",
    description:
      "LeadTrap is an AI-powered sales platform that transforms your website into a dynamic lead generation engine. It works 24/7 to engage visitors, capture leads, and nurture them into qualified opportunities—all without requiring a dedicated sales team.",
  },
  {
    id: 2,
    title: "How does LeadTrap work?",
    description:
    " LeadTrap integrates with your website to engage visitors in real-time conversations, capture their information, and enrich it with valuable insights. It then follows up across multiple channels (email, SMS, social media) to nurture leads until they're ready to convert. The system automatically routes high-value prospects to your inbox, SMS, or Slack.",
  },
  {
    id: 3,
    title: "What makes LeadTrap different from a chatbot?",
    description:
      "Unlike basic chatbots that focus on customer support, LeadTrap is a complete AI salesperson. It's specifically designed for service businesses, offering lead enrichment, automated follow-ups, and sophisticated conversation capabilities. Plus, it's more affordable and can be set up instantly (Drift ).",
  },
  {
    id: 4,
    title: "How much does LeadTrap cost?",
    description:
      "Our pricing is based on lead volume, with three flexible plans: Starter ($299/month for 100 leads), Pro+ ($499/month for 300 leads), and Enterprise (custom pricing for unlimited leads). All plans include a 30-day free trial to experience LeadTrap's value before you commit.",
  },
  {
    id: 5,
    title: "Do I need technical expertise to use LeadTrap?",
    description:
      "Not at all! LeadTrap is designed to be intuitive and user-friendly. You can set it up quickly with no technical expertise required. We handle all the complex technical aspects, so you can focus on growing your business.",
  },
  {
    id: 6,
    title: "What kind of businesses is LeadTrap best suited for?",
    description:
      "LeadTrap is perfect for both B2B and B2C businesses that need high-quality leads. Our AI agent adapts its research approach based on whether a lead is B2B or B2C, delivering world-class information that helps close deals in both contexts. For B2B, we provide deep company insights and decision-maker details, while for B2C, we focus on individual preferences and buying signals. This versatility makes LeadTrap ideal for any business looking to convert website visitors into qualified leads.",
  },
  {
    id: 7,
    title: "How does LeadTrap handle lead enrichment?",
    description:
      "For B2B leads, we have access to data on more than 300M+ business contacts, enriched with demographic, firmographic, and technographic details to provide a deep understanding of each lead. For consumer leads, we capture location data on all website visitors, geographic data enrichments, and their entire viewing session to understand their interests. Our super nerdy, proprietary AI then analyzes this data to provide intelligent lead scoring and insights.",
  },
  {
    id: 8,
    title: "What happens if I outgrow my plan?",
    description:
      "We love seeing our customers' businesses thrive! When you first outgrow your subscription, we'll automatically extend your capacity by up to 80% at no extra cost to keep your momentum going. If your success continues and you outgrow the plan again, we'll help you transition to a plan that matches your growing business, ensuring you can capture every valuable opportunity that comes your way.",
  },
  {
    id: 9,
    title: "Can LeadTrap integrate with my existing tools?",
    description:
      "Yes! LeadTrap can send notifications and leads to your email, SMS, Slack, or WhatsApp. It's designed to fit seamlessly into your existing workflow while providing additional insights and automation capabilities. We will soon be rolling out CRM integrations as well.",
  },
  {
    id: 10,
    title: "What kind of results can I expect?",
    description: (
      <span>
        You&#39;ll probably start seeing targeted ads from {" "}
        <a
          href="https://www.jamesedition.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 underline"
        >
          JamesEdition
        </a>
        . Our clients typically see up to 4X increase in lead generation compared to traditional contact forms. LeadTrap&#39;s automated follow-ups and enriched lead information also lead to higher conversion rates and more efficient sales processes.
      </span>
    ),
  },
  {
    id: 11,
    title: "How do I get started with LeadTrap?",
    description:
      "Getting started is easy! Sign up for a free trial, and we'll help you set up LeadTrap on your website. You'll start capturing and converting leads right away, and our team is here to support you every step of the way.",
  },
];

export const FAQs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-20 px-8">
      <Heading className="pt-4">Frequently asked questions</Heading>
      <div className="grid  gap-10 pt-20">
        {questions.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
