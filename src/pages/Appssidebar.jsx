import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock } from "react-icons/fi";
import Wrapper from "../components/Wrapper";
import Comingsoonmodal from "../components/Comingsoonmodal";

const CATEGORIES = [
  {
    id: "education",
    label: "Education",
    apps: [
      {
        tag: "APP",
        suite: "Commerce Suite",
        name: "CEDU Games",
        href: "https://cedu.cephassuite.com",
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
        href: "/cephas-hr",
        name: "CephasHR",
        description: "Multi-warehouse inventory valuation, batch tracking, and low-stock telemetry.",
        features: [
          "Clock-ins update active project hours and log task durations instantly.",
          "Task completions update project milestones and calculate output rates instantly.",
          "End-of-quarter performance review syncs directly to annual merit pay adjustments.",
        ],
      },
      {
        tag: "APP",
        suite: "Commerce Suite",
        name: "Work Management",
        href: "/cephas-hr",
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
        href: "/cephas-hr",
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
        name: "Cephas Books",
         href: "https://cephas-books.onrender.com",
        description: "Multi-warehouse inventory valuation, batch tracking, and low-stock telemetry.",
        features: [
          "Field attendance logs feed directly into payroll for automated calculations",
          "Onboarding creates SSO credentials, assigns roles, and triggers training flow",
          "Expense submissions auto-route for manager approval and hit payroll on cycle",
        ],
      },
      {
        tag: "APP",
        suite: "Commerce Suite",
        name: "Inventory Management",
         href: "https://cephas-books.onrender.com",
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
        href: "/agrolink",
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
        href: "/ceproam",
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
      // {
      //   tag: "ANALYTICS",
      //   suite: "Commerce Suite",
      //   name: "Lena Morales",
      //   description: "Comprehensive sales insights and customer behavior analysis.",
      //   features: [
      //     "Customizable dashboard widgets",
      //     "Predictive sales forecasting",
      //     "Multi-channel performance tracking",
      //   ],
      // },
      // {
      //   tag: "MARKETING",
      //   suite: "Commerce Suite",
      //   name: "Raj Patel",
      //   description: "Targeted campaign management with automated segmentation.",
      //   features: [
      //     "A/B testing tools",
      //     "Email and SMS automation",
      //     "Real-time engagement metrics",
      //   ],
      // },
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
      // {
      //   tag: "ANALYTICS",
      //   suite: "Commerce Suite",
      //   name: "Lena Morales",
      //   description: "Comprehensive sales insights and customer behavior analysis.",
      //   features: [
      //     "Customizable dashboard widgets",
      //     "Predictive sales forecasting",
      //     "Multi-channel performance tracking",
      //   ],
      // },
      // {
      //   tag: "MARKETING",
      //   suite: "Commerce Suite",
      //   name: "Raj Patel",
      //   description: "Targeted campaign management with automated segmentation.",
      //   features: [
      //     "A/B testing tools",
      //     "Email and SMS automation",
      //     "Real-time engagement metrics",
      //   ],
      // },
    ],
  },
];

// Suites with an href are direct links (they have no section on this page)
// const SUITES = [
//  { id: "ceephas-hr", label: "CephasHR", href: "/cephas-hr" },
//   { id: "cephas-book", label: "Cephas Book", href: "https://cephas-books.onrender.com" },
// ];

// Scroll-spy only tracks the category sections that exist on the page
const ALL_SECTION_IDS = CATEGORIES.map((s) => s.id);

// ---- Layout constants (adjust to match your real layout) -------------------

// Height of your fixed navbar in px. Set to 0 if you don't have one.
const NAVBAR_HEIGHT = 88;

// Fallback height of the pinned pill bar on mobile (it is measured for real).
const MOBILE_NAV_HEIGHT = 56;

// Tailwind's `md` breakpoint.
const MD_BREAKPOINT = 768;

// How far below the top of the screen a section heading should land.
function getScrollOffset() {
  const isMobile = window.innerWidth < MD_BREAKPOINT;
  return isMobile ? NAVBAR_HEIGHT + MOBILE_NAV_HEIGHT + 12 : NAVBAR_HEIGHT + 16;
}

// ---- Scroll helper --------------------------------------------------------

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - getScrollOffset();
  window.scrollTo({ top: y, behavior: "smooth" });
}

// ---- Scroll-spy: highlights the section currently in view ------------------

function useScrollSpy(ids, onChange, lockRef) {
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      // Ignore while a click-initiated smooth scroll is still travelling
      if (Date.now() < lockRef.current) return;

      const offset = getScrollOffset() + 8;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      let current = ids[0];
      if (atBottom) {
        current = ids[ids.length - 1];
      } else {
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= offset) current = id;
        }
      }
      onChange(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, onChange, lockRef]);
}

// ---- "Stick while scrolling" hook -------------------------------------------
// Uses position: fixed (computed from scroll position) instead of CSS sticky,
// so it keeps working even if a parent has overflow hidden/auto.

function useStuck({ slotRef, boundaryRef, itemRef, top, fullWidth = false }) {
  const [style, setStyle] = useState(null); // null = normal, in-flow position

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const slot = slotRef.current;
      const boundary = boundaryRef.current;
      const item = itemRef.current;
      if (!slot || !boundary || !item) return;

      const s = slot.getBoundingClientRect();

      // Hasn't reached its pinning point yet
      if (s.top > top) {
        setStyle((prev) => (prev === null ? prev : null));
        return;
      }

      // Pin it, but let it leave with the content instead of overlapping
      // whatever comes after (footer etc.)
      const b = boundary.getBoundingClientRect();
      const t = Math.min(top, b.bottom - item.offsetHeight);

      const next = fullWidth
        ? { position: "fixed", top: t, left: 0, right: 0 }
        : { position: "fixed", top: t, left: s.left, width: s.width };

      setStyle((prev) =>
        prev &&
        prev.top === next.top &&
        prev.left === next.left &&
        prev.width === next.width
          ? prev
          : next
      );
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [slotRef, boundaryRef, itemRef, top, fullWidth]);

  return style;
}

// ---- Tag badge colors -----------------------------------------------------

const TAG_STYLES = {
  APP: "bg-blue-50 text-blue-700",
  ANALYTICS: "bg-purple-50 text-purple-700",
  MARKETING: "bg-amber-50 text-amber-700",
};

// ---- Sidebar (desktop, md and up) — stays fixed while you scroll ------------

function Sidebar({ activeId, onNavigate, boundaryRef }) {
  const [appsOpen, setAppsOpen] = useState(true);
  const slotRef = useRef(null);
  const navRef = useRef(null);

  const stuck = useStuck({
    slotRef,
    boundaryRef,
    itemRef: navRef,
    top: NAVBAR_HEIGHT + 16,
  });

  return (
    <div className="hidden md:block w-56 shrink-0 pr-6 self-start">
      <div ref={slotRef}>
        <nav
          ref={navRef}
          className="overflow-y-auto"
          style={{
            maxHeight: `calc(100vh - ${NAVBAR_HEIGHT + 32}px)`,
            ...(stuck || {}),
          }}
        >
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

          {/* <div className="mt-6">
            <p className="text-sm font-semibold text-gray-900 py-2">Suites</p>
            <ul className="mt-1 space-y-1">
              {SUITES.map((suite) => (
                <li key={suite.id} className="list-none">
                  <a
                    href={suite.href}
                    className="block w-full text-left text-sm px-2 py-1.5 rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {suite.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </nav>
      </div>
    </div>
  );
}

// ---- Mobile nav (below md): pill tabs that stay pinned while you scroll -----

function MobileNav({ activeId, onNavigate, boundaryRef }) {
  const slotRef = useRef(null);
  const barRef = useRef(null);
  const scrollerRef = useRef(null);
  const buttonRefs = useRef({});
  const [barHeight, setBarHeight] = useState(MOBILE_NAV_HEIGHT);

  const stuck = useStuck({
    slotRef,
    boundaryRef,
    itemRef: barRef,
    top: NAVBAR_HEIGHT,
    fullWidth: true,
  });

  /* Reserve the bar's exact height so content doesn't jump when it pins */
  useEffect(() => {
    const measure = () => {
      if (barRef.current) setBarHeight(barRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* Keep the active pill centred in the bar as you scroll or tap */
  useEffect(() => {
    const scroller = scrollerRef.current;
    const btn = buttonRefs.current[activeId];
    if (!scroller || !btn) return;
    const left = btn.offsetLeft - scroller.clientWidth / 2 + btn.clientWidth / 2;
    scroller.scrollTo({ left, behavior: "smooth" });
  }, [activeId]);

  return (
    <div
      ref={slotRef}
      className="md:hidden mb-6"
      style={{ height: barHeight }}
    >
      <div
        ref={barRef}
        className={`z-30 bg-white/95 backdrop-blur border-b border-gray-100 ${
          stuck ? "px-4" : "-mx-4 px-4"
        }`}
        style={stuck || undefined}
      >
        <div
          ref={scrollerRef}
          className="relative flex gap-2 overflow-x-auto py-3 no-scrollbar"
        >
          {CATEGORIES.map((item) => (
            <motion.button
              key={item.id}
              ref={(el) => (buttonRefs.current[item.id] = el)}
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

          {/* Suites link straight out, so they are plain links, not tabs */}
          {/* {SUITES.map((suite) => (
            <a
              key={suite.id}
              href={suite.href}
              className="shrink-0 whitespace-nowrap text-sm px-3 py-1.5 rounded-full border bg-white text-gray-600 border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {suite.label}
            </a>
          ))} */}
        </div>
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

const BUTTON_BASE =
  "mt-auto w-full rounded-lg text-sm font-medium py-2.5 flex items-center justify-center gap-1.5 transition-colors";

function AppCard({ app, index, onComingSoon }) {
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

      {app.href ? (
        // Has a link: plain <a> (full page load, so Vercel rewrites and
        // external sites both work)
        <a
          href={app.href}
          className={`${BUTTON_BASE} bg-indigo-600 hover:bg-indigo-700 text-white`}
        >
          Open App
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      ) : (
        // No link yet: opens the Coming Soon modal
        <button
          type="button"
          onClick={() => onComingSoon(app.name)}
          className={`${BUTTON_BASE} bg-indigo-50 hover:bg-indigo-100 text-indigo-700`}
        >
          <FiClock className="h-4 w-4" />
          Coming Soon
        </button>
      )}
    </motion.div>
  );
}

// ---- Content sections -------------------------------------------------

function CategorySection({ category, onComingSoon }) {
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
          <AppCard
            key={app.name + category.id}
            app={app}
            index={i}
            onComingSoon={onComingSoon}
          />
        ))}
      </div>
    </motion.section>
  );
}

// ---- Root component -----------------------------------------------------

export default function AppsSidebar() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  // null = modal closed, otherwise the name of the app that was clicked
  const [comingSoon, setComingSoon] = useState(null);
  // Timestamp until which scroll-spy is paused (during a click-scroll)
  const lockRef = useRef(0);
  // The content column: the sidebar/pill bar pin while it is on screen
  const contentRef = useRef(null);

  const handleNavigate = (id) => {
    setActiveId(id);
    lockRef.current = Date.now() + 900;
    scrollToSection(id);
  };

  useScrollSpy(ALL_SECTION_IDS, setActiveId, lockRef);

  return (
    <Wrapper className="flex flex-col md:flex-row py-6 sm:py-8">
      <Sidebar activeId={activeId} onNavigate={handleNavigate} boundaryRef={contentRef} />
      <div ref={contentRef} className="flex-1 min-w-0">
        <MobileNav activeId={activeId} onNavigate={handleNavigate} boundaryRef={contentRef} />
        {CATEGORIES.map((cat) => (
          <CategorySection key={cat.id} category={cat} onComingSoon={setComingSoon} />
        ))}
      </div>

      <Comingsoonmodal
        open={comingSoon !== null}
        onClose={() => setComingSoon(null)}
        name={comingSoon}
      />
    </Wrapper>
  );
}