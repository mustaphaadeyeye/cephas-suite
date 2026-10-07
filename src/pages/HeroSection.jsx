import { FiArrowRight, FiCloud, FiShield, FiZap } from "react-icons/fi";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//  IMAGES
const assetPathPrefix = "/assets";
const imgCephasAgroLink1Jpg1 = `${assetPathPrefix}/18fea.png`;
const imgCephasHrBrandmarkJpg1 = `${assetPathPrefix}/fd7e3.png`;
const imgGeminiGenerated = `${assetPathPrefix}/9135b.png`;
const imgVector23 = `${assetPathPrefix}/8b68e.svg`;
const imgLogoMark1 = `${assetPathPrefix}/0c974.svg`;

/* Shared easing for a smooth, professional feel */
const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------
   Scroll helpers
------------------------------------------------------------------- */
function useParallax(progress, distance) {
  const reduceMotion = useReducedMotion();
  return useTransform(progress, [0, 1], [0, reduceMotion ? 0 : distance]);
}

function useFade(progress, start, end) {
  const reduceMotion = useReducedMotion();
  return useTransform(progress, [start, end], [1, reduceMotion ? 1 : 0]);
}

/* ------------------------------------------------------------------
   Small reusable pieces
------------------------------------------------------------------- */
function AppIconContent({ kind }) {
  if (kind === "agro") {
    return (
      <div className="absolute inset-0 overflow-hidden rounded-sm">
        <img
          alt=""
          className="absolute h-[235.11%] left-[-21.6%] max-w-none top-[-68.44%] w-[316.29%]"
          src={imgCephasAgroLink1Jpg1}
        />
      </div>
    );
  }

  if (kind === "hr") {
    return (
      <div className="absolute inset-0 overflow-hidden rounded-sm">
        <img
          alt=""
          className="absolute h-[256.36%] left-[-66.09%] max-w-none top-[-74.55%] w-[242.06%]"
          src={imgCephasHrBrandmarkJpg1}
        />
      </div>
    );
  }

  if (kind === "gemini") {
    return (
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover size-full"
        src={imgGeminiGenerated}
      />
    );
  }

  return (
    <img
      alt=""
      className="absolute block inset-0 max-w-none size-full"
      src={imgLogoMark1}
    />
  );
}

function AppIcon({ bg, kind }) {
  return (
    <div className="drop-shadow-[0px_4px_4.2px_rgba(93,107,240,0.18)] relative size-[62px] shrink-0">
      <div className={`absolute inset-0 rounded-[7px] ${bg}`} />

      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-[calc(50%+0.5px)] rounded-[7px] shadow-[0px_-4px_9px_5px_rgba(255,255,255,0.15)] size-[49px] top-[calc(50%-0.5px)]" />

      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[34px] top-1/2">
        <AppIconContent kind={kind} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Data
------------------------------------------------------------------- */
const floatingIcons = [
  { x: -625, top: 453, bg: "bg-[#f4f5fb]", kind: "agro" },
  { x: -3, top: 605, bg: "bg-[#4c5de8]", kind: "logo" },
  { x: 209, top: 598, bg: "bg-[#f4f5fb]", kind: "agro" },
  { x: -203, top: 622, bg: "bg-[#f4f5fb]", kind: "hr" },
  { x: -405, top: 590, bg: "bg-[#f4f5fb]", kind: "gemini" },
  { x: -504, top: 735, bg: "bg-[#f4f5fb]", kind: "logo" },
  { x: 544, top: 715, bg: "bg-[#f4f5fb]", kind: "logo" },
  { x: 416, top: 598, bg: "bg-[#f4f5fb]", kind: "hr" },
  { x: 515, top: 461, bg: "bg-[#f4f5fb]", kind: "gemini" },
];

const ICON_HALF = 31;
const hub = floatingIcons[1];

const heroBadges = [
  { Icon: FiZap, label: "Zero integration maintenance" },
  { Icon: FiShield, label: "Single Sign-On built-in" },
  { Icon: FiCloud, label: "Instant cloud provisioning" },
];

const FAN_ENDS = [-210, -130, -60, 60, 130, 210];
const FAN_REACH = 1000;

/* ------------------------------------------------------------------
   Hero connection lines (desktop only)
------------------------------------------------------------------- */
function HeroLines({ progress }) {
  const reduceMotion = useReducedMotion();
  const opacity = useFade(progress, 0.1, 0.7);
  const cx = hub.x;
  const cy = hub.top + ICON_HALF;

  return (
    <motion.div
      style={{ opacity }}
      className="absolute left-1/2 top-0 w-0 h-0 pointer-events-none hidden lg:block"
    >
      <svg
        width="1"
        height="1"
        className="overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="fanRight"
            gradientUnits="userSpaceOnUse"
            x1={cx}
            y1="0"
            x2={cx + FAN_REACH}
            y2="0"
          >
            <stop offset="0" stopColor="#4c5de8" stopOpacity="0.85" />
            <stop offset="1" stopColor="#4c5de8" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient
            id="fanLeft"
            gradientUnits="userSpaceOnUse"
            x1={cx}
            y1="0"
            x2={cx - FAN_REACH}
            y2="0"
          >
            <stop offset="0" stopColor="#4c5de8" stopOpacity="0.85" />
            <stop offset="1" stopColor="#4c5de8" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {[1, -1].map((dir) =>
          FAN_ENDS.map((dy, i) => {
            const ty = cy + dy;

            return (
              <motion.path
                key={`${dir}-${i}`}
                d={`M ${cx} ${cy} C ${cx + dir * 260} ${cy}, ${cx + dir * 480} ${ty}, ${cx + dir * FAN_REACH} ${ty}`}
                fill="none"
                stroke={dir === 1 ? "url(#fanRight)" : "url(#fanLeft)"}
                strokeWidth="1"
                initial={
                  reduceMotion ? false : { pathLength: 0, opacity: 0 }
                }
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: {
                    duration: 1.6,
                    delay: 0.9 + i * 0.06,
                    ease: EASE,
                  },
                  opacity: {
                    duration: 0.4,
                    delay: 0.9 + i * 0.06,
                  },
                }}
              />
            );
          })
        )}
      </svg>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Badges marquee
------------------------------------------------------------------- */
const COPIES = 4;
const SPEED = 40; // pixels per second

function HeroBadgesMarquee({ heroBadges }) {
  const reduceMotion = useReducedMotion();
  const copyRef = useRef(null);
  const [copyWidth, setCopyWidth] = useState(0);

  useEffect(() => {
    const el = copyRef.current;
    if (!el) return;
    const measure = () => setCopyWidth(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [heroBadges]);

  if (reduceMotion) {
    return (
      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-x-[28px] gap-y-3 items-center px-4">
        {heroBadges.map(({ Icon, label }) => (
          <div key={label} className="flex gap-[7px] items-center">
            <Icon className="shrink-0 text-[#4c5de8]" size={16} />
            <span className="font-['DM_Sans'] font-medium leading-[19.5px] text-[#4f5674] text-[13px] whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
      className="mt-8 sm:mt-10 w-full overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <motion.div
        className="flex w-max will-change-transform"
        animate={copyWidth ? { x: [0, -copyWidth] } : { x: 0 }}
        transition={{
          duration: copyWidth ? copyWidth / SPEED : 0,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {Array.from({ length: COPIES }).map((_, copy) => (
          <div
            key={copy}
            ref={copy === 0 ? copyRef : null}
            aria-hidden={copy > 0}
            className="flex shrink-0 items-center gap-x-[28px] pr-[28px]"
          >
            {heroBadges.map(({ Icon, label }) => (
              <div key={label} className="flex gap-[7px] items-center">
                <Icon className="shrink-0 text-[#4c5de8]" size={16} />
                <span className="font-['DM_Sans'] font-medium leading-[19.5px] text-[#4f5674] text-[13px] whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Headline
------------------------------------------------------------------- */
const HEADLINE_CLASS =
  "font-['Bricolage_Grotesque'] font-extrabold leading-[1.1] lg:leading-[78px] text-[#111320] text-[36px] sm:text-[52px] md:text-[64px] lg:text-[80px] text-center tracking-[-1px] lg:tracking-[-2px] max-w-[978px]";

function HeadlineWord({ word, index, progress }) {
  const y = useParallax(progress, -(30 + index * 14));
  const color = useTransform(
    progress,
    [0.02 + index * 0.03, 0.2 + index * 0.03],
    ["#111320", "#4c5de8"]
  );
  const opacity = useFade(progress, 0.45 + index * 0.02, 0.75 + index * 0.02);

  return (
    <motion.span
      style={{ y, opacity }}
      aria-hidden="true"
      className="inline-block will-change-transform"
    >
      <motion.span
        className="inline-block will-change-transform"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3.6,
          delay: 1.4 + index * 0.16,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.6,
        }}
      >
        <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
          <motion.span
            className="inline-block will-change-transform"
            style={{ color }}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.8, ease: EASE },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      </motion.span>
    </motion.span>
  );
}

function AnimatedHeadline({ text, progress }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <p className={HEADLINE_CLASS}>{text}</p>;
  }

  const words = text.split(" ");

  return (
    <motion.p
      aria-label={text}
      className={HEADLINE_CLASS}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.09, delayChildren: 0.1 },
        },
      }}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <HeadlineWord word={word} index={i} progress={progress} />
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.p>
  );
}

function ScrollLayer({ progress, distance, fadeStart, fadeEnd, className, children }) {
  const y = useParallax(progress, distance);
  const opacity = useFade(progress, fadeStart, fadeEnd);

  return (
    <motion.div style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

function IconParallax({ progress, distance, children }) {
  const y = useParallax(progress, distance);
  return <motion.div style={{ y }}>{children}</motion.div>;
}

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
export default function Home() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  // FIX: hooks must be called INSIDE the component, not at module level.
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/product");
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.4,
  });

  return (
    <div className="bg-[#fafbff] w-full overflow-x-hidden">
      {/* min-height applies only at lg (where the floating icons and lines
          are visible). Below lg the section shrinks to its content. */}
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden pb-12 sm:pb-16 lg:pb-0 lg:min-h-[879px]"
      >
        <HeroLines progress={progress} />

        {/* Vector line decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-[49.51%] right-[39.76%] top-[0] h-0 pointer-events-none hidden md:block"
        >
          <div className="absolute inset-[-1px_0]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector23}
            />
          </div>
        </motion.div>

        {/* Hero content */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-[100px] flex flex-col items-center">
          <div className="flex flex-col items-center w-full">
            <AnimatedHeadline
              text="Run your entire enterprise on one operational engine."
              progress={progress}
            />
          </div>

          <ScrollLayer
            progress={progress}
            distance={-70}
            fadeStart={0.12}
            fadeEnd={0.42}
            className="flex justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="mt-4 sm:mt-5 font-['DM_Sans'] font-normal leading-[1.55] lg:leading-[28.05px] text-[#4f5674] text-[15px] sm:text-[16px] lg:text-[17px] text-center max-w-[580px]"
            >
              Deploy precision point apps to resolve immediate bottlenecks, or activate complete multi-department suites under a single login, unified database, and consolidated invoice.
            </motion.p>
          </ScrollLayer>

          <ScrollLayer
            progress={progress}
            distance={-50}
            fadeStart={0.18}
            fadeEnd={0.5}
            className="w-full sm:w-auto flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
              className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-[12px] items-center w-full sm:w-auto px-4 sm:px-0"
            >
              <motion.button
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.2, ease: EASE }}
                onClick={handleExploreClick}
                className="group bg-[#4c5de8] flex gap-[7px] items-center justify-center px-[22px] py-[11px] rounded-[8px] hover:bg-[#3d4ed9] transition-colors w-full sm:w-auto"
              >
                <span className="font-['DM_Sans'] font-semibold leading-[21px] text-[14px] text-center text-white tracking-[-0.14px] whitespace-nowrap">
                  Explore Standalone Apps
                </span>

                <FiArrowRight
                  className="shrink-0 text-white transition-transform duration-200 group-hover:translate-x-1"
                  size={14}
                />
              </motion.button>

              <motion.button
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.2, ease: EASE }}
                onClick={handleExploreClick}
                className="border border-[#4f5674] flex items-center justify-center px-[22px] py-[11px] rounded-[8px] hover:bg-[rgba(79,86,116,0.05)] transition-colors w-full sm:w-auto"
              >
                <span className="font-['DM_Sans'] font-semibold leading-[21px] text-[#4f5674] text-[14px] text-center tracking-[-0.14px] whitespace-nowrap">
                  Browse Integrated Suites
                </span>
              </motion.button>
            </motion.div>
          </ScrollLayer>

          <ScrollLayer
            progress={progress}
            distance={-30}
            fadeStart={0.25}
            fadeEnd={0.6}
            className="w-full"
          >
            <HeroBadgesMarquee heroBadges={heroBadges} />
          </ScrollLayer>
        </div>

        {/* Floating app icons: desktop only */}
        <div className="hidden lg:block">
          {floatingIcons.map(({ x, top, bg, kind }, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 pointer-events-none"
              style={{
                left: `calc(50% + ${x}px)`,
                top,
              }}
            >
              <IconParallax progress={progress} distance={-(50 + (i % 4) * 35)}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 + i * 0.08,
                    ease: EASE,
                  }}
                >
                  <motion.div
                    animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                    transition={{
                      duration: 4 + (i % 3) * 0.6,
                      delay: 1.6 + i * 0.15,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  >
                    <AppIcon bg={bg} kind={kind} />
                  </motion.div>
                </motion.div>
              </IconParallax>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}