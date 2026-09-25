
import { FiArrowRight, FiCloud, FiShield, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------
   IMAGES
------------------------------------------------------------------- */
const assetPathPrefix = "/assets";
const imgCephasAgroLink1Jpg1 = `${assetPathPrefix}/18fea.png`;
const imgCephasHrBrandmarkJpg1 = `${assetPathPrefix}/fd7e3.png`;
const imgGeminiGenerated = `${assetPathPrefix}/9135b.png`;
const imgVector23 = `${assetPathPrefix}/8b68e.svg`;
const imgLogoMark1 = `${assetPathPrefix}/0c974.svg`;

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

function HeroLines() {
  const cx = hub.x;
  const cy = hub.top + ICON_HALF;

  return (
    <div className="absolute left-1/2 top-0 w-0 h-0 pointer-events-none">
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
            <stop
              offset="0"
              stopColor="#4c5de8"
              stopOpacity="0.85"
            />
            <stop
              offset="1"
              stopColor="#4c5de8"
              stopOpacity="0.3"
            />
          </linearGradient>

          <linearGradient
            id="fanLeft"
            gradientUnits="userSpaceOnUse"
            x1={cx}
            y1="0"
            x2={cx - FAN_REACH}
            y2="0"
          >
            <stop
              offset="0"
              stopColor="#4c5de8"
              stopOpacity="0.85"
            />
            <stop
              offset="1"
              stopColor="#4c5de8"
              stopOpacity="0.3"
            />
          </linearGradient>
        </defs>

        {[1, -1].map((dir) =>
          FAN_ENDS.map((dy, i) => {
            const ty = cy + dy;

            return (
              <path
                key={`${dir}-${i}`}
                d={`M ${cx} ${cy} C ${cx + dir * 260} ${cy}, ${cx + dir * 480} ${ty}, ${cx + dir * FAN_REACH} ${ty}`}
                fill="none"
                stroke={
                  dir === 1
                    ? "url(#fanRight)"
                    : "url(#fanLeft)"
                }
                strokeWidth="1"
              />
            );
          })
        )}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
export default function Home() {
  return (
    <div className="bg-[#fafbff] w-full overflow-x-hidden">
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: 879 }}
      >
        <HeroLines />

        {/* Vector line decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-[49.51%] right-[39.76%] top-[0] h-0 pointer-events-none"
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
        <div className="max-w-[1280px] mx-auto px-20 pt-[100px] flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex flex-col items-center w-full"
          >
            <p className="font-['Bricolage_Grotesque'] font-extrabold leading-[78px] text-[#111320] text-[80px] text-center tracking-[-2px] max-w-[978px]">
              Run your entire enterprise on one operational engine.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mt-5 font-['DM_Sans'] font-normal leading-[28.05px] text-[#4f5674] text-[17px] text-center max-w-[580px]"
          >
            Deploy precision point apps to resolve immediate bottlenecks, or activate complete multi-department suites under a single login, unified database, and consolidated invoice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="mt-9 flex gap-[12px] items-center"
          >
            <button className="bg-[#4c5de8] flex gap-[7px] items-center px-[22px] py-[11px] rounded-[8px] hover:bg-[#3d4ed9] transition-colors">
              <span className="font-['DM_Sans'] font-semibold leading-[21px] text-[14px] text-center text-white tracking-[-0.14px] whitespace-nowrap">
                Explore Standalone Apps
              </span>

              <FiArrowRight
                className="shrink-0 text-white"
                size={14}
              />
            </button>

            <button className="border border-[#4f5674] flex items-center px-[22px] py-[11px] rounded-[8px] hover:bg-[rgba(79,86,116,0.05)] transition-colors">
              <span className="font-['DM_Sans'] font-semibold leading-[21px] text-[#4f5674] text-[14px] text-center tracking-[-0.14px] whitespace-nowrap">
                Browse Integrated Suites
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="mt-10 flex gap-[28px] items-center"
          >
            {heroBadges.map(({ Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.55 + index * 0.1,
                }}
                className="flex gap-[7px] items-center"
              >
                <Icon
                  className="shrink-0 text-[#4c5de8]"
                  size={16}
                />

                <span className="font-['DM_Sans'] font-medium leading-[19.5px] text-[#4f5674] text-[13px] whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating app icons */}
        {floatingIcons.map(({ x, top, bg, kind }, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5 + i * 0.08,
              ease: "easeOut",
            }}
            className="absolute -translate-x-1/2 pointer-events-none"
            style={{
              left: `calc(50% + ${x}px)`,
              top,
            }}
          >
            <AppIcon
              bg={bg}
              kind={kind}
            />
          </motion.div>
        ))}
      </section>
    </div>
  );
}



