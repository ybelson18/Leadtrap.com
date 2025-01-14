"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconBolt } from "@tabler/icons-react";

const b2bEnrichments = [
  "Phone Number",
  "Professional Profile",
  "LinkedIn Profile URL",
  "Company Name",
  "Company Domain",
  "Job Title",
  "Department",
  "Seniority Level",
  "Company Industry",
  "Company Size",
  "Company Revenue",
  "Company Headquarters Location",
  "Role Type",
  "Work Email Address",
  "Phone Number Validation",
  "Social Media Profiles",
  "Work History",
  "Education Background",
  "Certifications and Skill Set",
  "Company LinkedIn Profile",
  "Technology Stack Used by the Company",
  "Geolocation of Contact",
  "Recent News About the Contact's Company",
  "Company Founding Year",
  "Existing Customers",
  "Competitors",
  "Company Subsidiaries or Parent Organization",
  "Lead Score",
  "Budget",
  "Timeline",
  "Challenges or Pain Points",
  "Desired Features/Services",
  "Purchase Intent",
  "Lead Value",
  "Decision-Making Process",
  "Growth or Expansion Plans",
  "Property Valuations",
  "CRE Portfolio Value",
  "And more..."
];

const b2cEnrichments = [
  "Mobile Phone Number",
  "Instagram",
  "Twitter (X)",
  "LinkedIn Profile",
  "Work Experience",
  "Gender",
  "Age Range",
  "Geographic Location",
  "Neighborhood Information",
  "Credit Score",
  "Current Weather",
  "Email Verification",
  "Browsing Interests",
  "Lead Score",
  "Lead Value",
  "Budget Prediction",
  "Purchase Intent",
  "Behavioral Patterns",
  "Engagement History",
  "Session Duration",
  "Preferred Content Types",
  "Frequently Viewed Pages",
  "Device Type",
  "Time Spent on Website",
  "Content Engagement Rate",
  "Feedback Sentiment",
  "Proximity to Nearby Locations or Events",
  "Budget",
  "Timeline Preferences",
  "Current Challenges",
  "Intent Strength",
  "Demographics",
  "Family or Personal Context",
  "Purchase History or Brand Loyalty",
  "And more..."
];

export const LeadDataToggle = () => {
  const [isB2B, setIsB2B] = useState(true);

  return (
    <div className="w-full py-20">
      {/* Header with icon */}
      <div className="flex justify-center mb-4">
        <div className="h-12 w-12 bg-charcoal rounded-lg flex items-center justify-center">
          <IconBolt className="h-6 w-6 text-cyan-500" />
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-12">
        <div className="bg-neutral-900/50 p-1 rounded-lg inline-flex">
          <button
            onClick={() => setIsB2B(true)}
            className={`px-6 py-2 rounded-md transition-all ${
              isB2B 
                ? 'bg-neutral-800 text-white' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            B2B Data
          </button>
          <button
            onClick={() => setIsB2B(false)}
            className={`px-6 py-2 rounded-md transition-all ${
              !isB2B 
                ? 'bg-neutral-800 text-white' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            B2C Insights
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          key={isB2B ? "b2b" : "b2c"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {isB2B ? "Premium B2B Lead Data" : "Proprietary B2C Insights"}
          </h2>
          <p className="text-neutral-400 text-center text-xl mb-16">
            {isB2B 
              ? "Hours of lead research done instantly, giving you the insights you need to close" 
              : "Deep consumer insights that help you understand and connect with your audience"
            }
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {Array.from({ length: 3 }).map((_, colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colIndex * 0.1 }}
                className="flex flex-col space-y-2"
              >
                {(isB2B ? b2bEnrichments : b2cEnrichments)
                  .slice(colIndex * 13, (colIndex + 1) * 13)
                  .map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (colIndex * 13 + index) * 0.02 }}
                      className="flex items-start gap-3 group"
                    >
                      <span className="text-neutral-500 group-hover:text-cyan-500 transition-colors min-w-[1.5rem]">
                        {colIndex * 13 + index + 1}.
                      </span>
                      <span className="text-neutral-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
