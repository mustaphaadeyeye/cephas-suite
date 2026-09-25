import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// ---- Sidebar (desktop, md and up) -----------------------------------------

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
          <motion.svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: appsOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>

        <AnimatePresence initial={false}>
          {appsOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="mt-1 space-y-1 overflow-hidden"
            >
              {CATEGORIES.map((cat) => (
                <li key={cat.id} className="list-none">
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
            </motion.ul>
          )}
        </AnimatePresence>
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

// ---- Mobile nav (below md): horizontally scrollable pill tabs -------------

function MobileNav({ activeId, onNavigate }) {
  const items = [...CATEGORIES, ...SUITES];

  return (
    <div className="md:hidden -mx-4 px-4 mb-6 sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
        {items.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            whileTap={{ scale: 0.94 }}
            className={`shrink-0 whitespace-nowrap text-sm px-3 py-1.5 rounded-full border transition-colors ${
              activeId === item.id
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {item.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ---- Card -------------------------------------------------------------

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

function AppCard({ app, index }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.08)" }}
      className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 flex flex-col"
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
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

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        className="mt-auto w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 flex items-center justify-center gap-1.5 transition-colors"
      >
        Open App
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.button>
    </motion.div>
  );
}

// ---- Content sections -------------------------------------------------

function CategorySection({ category }) {
  return (
    <motion.section
      id={category.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-24 mb-10 sm:mb-14"
    >
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{category.label}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {category.apps.map((app, i) => (
          <AppCard key={app.name + category.id} app={app} index={i} />
        ))}
      </div>
    </motion.section>
  );
}

function SuiteSection({ suite }) {
  return (
    <motion.section
      id={suite.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-24 mb-10 sm:mb-14"
    >
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{suite.label}</h2>
      <p className="text-sm text-gray-500">No apps in this suite yet.</p>
    </motion.section>
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
    <Wrapper className="flex flex-col md:flex-row py-6 sm:py-8">
      <Sidebar activeId={activeId} onNavigate={handleNavigate} />
      <div className="flex-1 min-w-0">
        <MobileNav activeId={activeId} onNavigate={handleNavigate} />
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