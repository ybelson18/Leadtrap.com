import React from "react";
import { Grid } from "./grid";

export const FeaturesGrid = () => {
  const features = [
    {
      title: "Instant Lead Response",
      description:
        "Engage with website visitors the moment they arrive, turning casual browsers into qualified leads within seconds.",
    },
    {
      title: "Intelligent Lead Capture",
      description:
        "Automatically engage and qualify website visitors with AI-driven conversations that feel natural and personalized.",
    },
    {
      title: "Advanced Lead Analytics",
      description:
        "Gain deep insights into your leads with detailed analytics, including firmographic data, engagement metrics, and conversion rates.",
    },
    {
      title: "Lead Management Dashboard",
      description:
        "Organize and track all your leads in one intuitive dashboard, ensuring no opportunity slips through the cracks.",
    },
    {
      title: "Smart Lead Scoring",
      description:
        "Automatically score and prioritize leads based on behavior, engagement, and firmographic data to focus on the most promising opportunities.",
    },
    {
      title: "Real-Time Notifications",
      description:
        "Stay informed with instant alerts about new leads and engagement across multiple channels including email, SMS, and Slack.",
    },
    {
      title: "Automated Follow-ups",
      description:
        "Keep leads engaged with intelligent, automated follow-up sequences that maintain conversation momentum.",
    },
    {
      title: "Performance Reporting",
      description:
        "Track your ROI with comprehensive reports showing lead generation metrics, conversion rates, and agency attribution data.",
    },
  ];
  return (
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
