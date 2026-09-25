import React from "react";
import Wrapper from "../components/Wrapper";



const THEMES = {
  green: {
    badge: "text-emerald-600",
    calloutBg: "bg-emerald-50",
    calloutText: "text-emerald-700",
    calloutIcon: "text-emerald-500",
  },
  blue: {
    badge: "text-blue-600",
    calloutBg: "bg-blue-50",
    calloutText: "text-blue-700",
    calloutIcon: "text-blue-500",
  },
  orange: {
    badge: "text-orange-600",
    calloutBg: "bg-orange-50",
    calloutText: "text-orange-700",
    calloutIcon: "text-orange-500",
  },
};

const SEGMENTS = [
  {
    theme: "green",
    icon: "🌱",
    title: "Growing Startups & Lean SMBs",
    employees: "1-15 EMPLOYEES",
    description:
      "Transitioning away from paper receipts and spreadsheets; need immediate setup with zero IT overhead.",
    archLabel: "Targeted Modular Apps",
    archDescription: "Start with Cephas Invoicing + Cephas POS. Add apps as volume expands.",
    callout: "Instant self-serve setup; live in under 30 minutes.",
  },
  {
    theme: "blue",
    icon: "📈",
    title: "Mid-Market Challengers",
    employees: "16-100 EMPLOYEES",
    description:
      "Multiple departments experiencing communication lag; manual CSV imports between systems cause data errors.",
    archLabel: "Targeted Bundled Suite",
    archDescription: "Deploy Cephas Commerce Suite or Cephas People Ops Suite.",
    callout: "Guided onboarding; CSV data migration assistance.",
  },
  {
    theme: "orange",
    icon: "🏢",
    title: "Multi-Branch Enterprises",
    employees: "100+ EMPLOYEES",
    description:
      "Complex hierarchies, cross-branch transfers, statutory audits, custom role-based permissions.",
    archLabel: "Cephas Full Enterprise Core",
    archDescription: "Unified database layer spanning all 14 Apps and 4 Suites via Cephas SSO.",
    callout: "Dedicated Solution Architect; customized implementation SLA.",
  },
];

// ---- Card -------------------------------------------------------------

function SegmentCard({ segment }) {
  const theme = THEMES[segment.theme];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col h-full">
      <span className="text-2xl mb-4" aria-hidden="true">
        {segment.icon}
      </span>

      <h3 className="font-semibold text-gray-900 mb-1">{segment.title}</h3>
      <p className={`text-xs font-semibold tracking-wide mb-3 ${theme.badge}`}>
        {segment.employees}
      </p>

      <p className="text-sm text-gray-500 mb-5">{segment.description}</p>

      <div className="border-t border-gray-100 pt-4 mb-4">
        <p className="text-[11px] font-medium tracking-wide text-gray-400 mb-1.5">
          Recommended architecture
        </p>
        <p className="font-semibold text-gray-900 mb-1">{segment.archLabel}</p>
        <p className="text-sm text-gray-500">{segment.archDescription}</p>
      </div>

      <div className={`mt-auto rounded-lg px-3 py-2.5 flex items-start gap-2 ${theme.calloutBg}`}>
        <svg
          className={`h-4 w-4 shrink-0 mt-0.5 ${theme.calloutIcon}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
            clipRule="evenodd"
          />
        </svg>
        <p className={`text-sm font-medium ${theme.calloutText}`}>{segment.callout}</p>
      </div>
    </div>
  );
}

// ---- Root component -----------------------------------------------------

export default function CustomerSegments() {
  return (
    <div className="mt-8">
        <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SEGMENTS.map((segment) => (
          <SegmentCard key={segment.title} segment={segment} />
        ))}
      </div>
      </Wrapper>
    </div>
  );
}