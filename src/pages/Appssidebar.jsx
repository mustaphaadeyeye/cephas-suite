import React, { useState } from "react";
import Wrapper from "../components/Wrapper";

const CATEGORIES = [
  {
    id: "education",
    label: "Education",
    apps: [
      {
        tag: "APP",
        suite: "Commerce Suite",
        name: "GEDU Games",
        description: "Fun educational games designed for kids of all ages to learn and play.",
        features: [
          "Real-time FIFO/LIFO tracking",
          "Automated stock transfer manifests",
          "Dynamic low-stock reorder points",
        ],
      },
      {
        tag: "ANALYTICS",
        suite: "Commerce Suite",
        name: "K12",
        description: "AI-driven platform for school management, learning, and finance.",
        features: [
          "Customizable dashboard widgets",
          "Predictive sales forecasting",
          "Multi-channel performance tracking",
        ],
      },
      {
        tag: "ANALYTICS",
        suite: "Commerce Suite",
        name: "Higher Education",
        description: "Integrated platform for higher education management: ERP, student information, and learning analytics.",
        features: [
          "Customizable dashboard widgets",
          "Predictive sales forecasting",
          "Multi-channel performance tracking",
        ],
      },
    ],
  },
  {
    id: "people",
    label: "People",
    apps: [
      {
        tag: "APP",
        suite: "Commerce Suite",
        name: "Work Management",
        description: "Multi-warehouse inventory valuation, batch tracking, and low-stock telemetry.",
        features: [
          "Real-time FIFO/LIFO tracking",
          "Automated stock transfer manifests",
          "Dynamic low-stock reorder points",
        ],
      },
      {
        tag: "ANALYTICS",
        suite: "Commerce Suite",
        name: "Time Tracking & PM Overview",
        description: "Comprehensive sales insights and customer behavior analysis.",
        features: [
          "Customizable dashboard widgets",
          "Predictive sales forecasting",
          "Multi-channel performance tracking",
        ],
      },
      {
        tag: "MARKETING",
        suite: "Commerce Suite",
        name: "Marketing",
        description: "Targeted campaign management with automated segmentation.",
        features: [
          "A/B testing tools",
          "Email and SMS automation",
          "Real-time engagement metrics",
        ],
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    apps: [
      {
        tag: "APP",
        suite: "Commerce Suite",
        name: "Inventory Management",
        description: "Multi-warehouse inventory valuation, batch tracking, and low-stock telemetry.",
        features: [
          "Real-time FIFO/LIFO tracking",
          "Automated stock transfer manifests",
          "Dynamic low-stock reorder points",
        ],
      },
      {
        tag: "ANALYTICS",
        suite: "Commerce Suite",
        name: "Cooperative & MFB",
        description: "Comprehensive sales insights and customer behavior analysis.",
        features: [
          "Customizable dashboard widgets",
          "Predictive sales forecasting",
          "Multi-channel performance tracking",
        ],
      },
    ],
  },
  {
    id: "agriculture",
    label: "Agriculture",
    apps: [
      {
        tag: "APP",
        suite: "Commerce Suite",
        name: "AgroLink",
        description: "Multi-warehouse inventory valuation, batch tracking, and low-stock telemetry.",
        features: [
          "Real-time FIFO/LIFO tracking",
          "Automated stock transfer manifests",
          "Dynamic low-stock reorder points",
        ],
      },
    ],
  },
  {
    id: "real-estate",
    label: "Real Estate",
    apps: [
      {
        tag: "APP",
        suite: "Commerce Suite",
        name: "CEPROAM",
        description: "Multi-warehouse inventory valuation, batch tracking, and low-stock telemetry.",
        features: [
          "Real-time FIFO/LIFO tracking",
          "Automated stock transfer manifests",
          "Dynamic low-stock reorder points",
        ],
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    apps: [
      {
        tag: "APP",
        suite: "Commerce Suite",
        name: "Cephas Stock",
        description: "Multi-warehouse inventory valuation, batch tracking, and low-stock telemetry.",
        features: [
          "Real-time FIFO/LIFO tracking",
          "Automated stock transfer manifests",
          "Dynamic low-stock reorder points",
        ],
      },
      {
        tag: "ANALYTICS",
        suite: "Commerce Suite",
        name: "Lena Morales",
        description: "Comprehensive sales insights and customer behavior analysis.",
        features: [
          "Customizable dashboard widgets",
          "Predictive sales forecasting",
          "Multi-channel performance tracking",
        ],
      },
      {
        tag: "MARKETING",
        suite: "Commerce Suite",
        name: "Raj Patel",
        description: "Targeted campaign management with automated segmentation.",
        features: [
          "A/B testing tools",
          "Email and SMS automation",
          "Real-time engagement metrics",
        ],
      },
    ],
  },
  {
    id: "oil-gas",
    label: "Oil & Gas",
    apps: [
      {
        tag: "APP",
        suite: "Commerce Suite",
        name: "Cephas Stock",
        description: "Multi-warehouse inventory valuation, batch tracking, and low-stock telemetry.",
        features: [
          "Real-time FIFO/LIFO tracking",
          "Automated stock transfer manifests",
          "Dynamic low-stock reorder points",
        ],
      },
      {
        tag: "ANALYTICS",
        suite: "Commerce Suite",
        name: "Lena Morales",
        description: "Comprehensive sales insights and customer behavior analysis.",
        features: [
          "Customizable dashboard widgets",
          "Predictive sales forecasting",
          "Multi-channel performance tracking",
        ],
      },
      {
        tag: "MARKETING",
        suite: "Commerce Suite",
        name: "Raj Patel",
        description: "Targeted campaign management with automated segmentation.",
        features: [
          "A/B testing tools",
          "Email and SMS automation",
          "Real-time engagement metrics",
        ],
      },
    ],
  },
];

const SUITES = [
  { id: "cell-hr", label: "Cell-HR" },
  { id: "cephas-book", label: "Cephas Book" },
];

// Height of your fixed/sticky navbar in px. Adjust to match your real navbar,
// or set to 0 if you don't have one.
const SCROLL_OFFSET = 88;

// ---- Scroll helper --------------------------------------------------------

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
}

// ---- Tag badge colors -----------------------------------------------------

const TAG_STYLES = {
  APP: "bg-blue-50 text-blue-700",
  ANALYTICS: "bg-purple-50 text-purple-700",
  MARKETING: "bg-amber-50 text-amber-700",
};

// ---- Sidebar ---------------------------------------------------------------

function Sidebar({ activeId, onNavigate }) {
  const [appsOpen, setAppsOpen] = useState(true);

  return (
    <nav className="w-56 shrink-0 pr-6 hidden md:block">
      <div>
        <button
          type="button"
          onClick={() => setAppsOpen((v) => !v)}
          className="w-full flex items-center justify-between text-sm font-semibold text-gray-900 py-2"
        >
          Apps
          <svg
            className={`h-4 w-4 text-gray-400 transition-transform ${appsOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {appsOpen && (
          <ul className="mt-1 space-y-1">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(cat.id)}
                  className={`w-full text-left text-sm px-2 py-1.5 rounded-md transition-colors ${
                    activeId === cat.id
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-gray-900 py-2">Suites</p>
        <ul className="mt-1 space-y-1">
          {SUITES.map((suite) => (
            <li key={suite.id}>
              <button
                type="button"
                onClick={() => onNavigate(suite.id)}
                className={`w-full text-left text-sm px-2 py-1.5 rounded-md transition-colors ${
                  activeId === suite.id
                    ? "bg-indigo-50 text-indigo-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {suite.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ---- Card -------------------------------------------------------------

function AppCard({ app }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${TAG_STYLES[app.tag] || "bg-gray-100 text-gray-700"}`}>
          {app.tag}
        </span>
        <span className="text-xs text-gray-400">Part of {app.suite}</span>
      </div>

      <h3 className="font-semibold text-gray-900 mb-1">{app.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{app.description}</p>

      <ul className="space-y-2 mb-5">
        {app.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="h-4 w-4 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                clipRule="evenodd"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-auto w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 flex items-center justify-center gap-1.5 transition-colors"
      >
        Open App
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}

// ---- Content sections -------------------------------------------------

function CategorySection({ category }) {
  return (
    <section id={category.id} className="scroll-mt-24 mb-14">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{category.label}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.apps.map((app) => (
          <AppCard key={app.name + category.id} app={app} />
        ))}
      </div>
    </section>
  );
}

function SuiteSection({ suite }) {
  return (
    <section id={suite.id} className="scroll-mt-24 mb-14">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{suite.label}</h2>
      <p className="text-sm text-gray-500">No apps in this suite yet.</p>
    </section>
  );
}

// ---- Root component -----------------------------------------------------

export default function AppsSidebar() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);

  const handleNavigate = (id) => {
    setActiveId(id);
    scrollToSection(id);
  };

  return (
    <Wrapper className="flex py-8">
      <Sidebar activeId={activeId} onNavigate={handleNavigate} />
      <div className="flex-1 min-w-0">
        {CATEGORIES.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
        {SUITES.map((suite) => (
          <SuiteSection key={suite.id} suite={suite} />
        ))}
      </div>
    </Wrapper>
  );
}