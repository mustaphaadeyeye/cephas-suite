import Wrapper from "../components/Wrapper";
import CeduImg from "../assets/cedugames.png"
import EduImg from "../assets/edugames.png"
import ChrImg from "../assets/chr.png"

const colorThemes = {
  violet: {
    illustrationBg: "bg-violet-50",
    cardBg: "bg-violet-100",
    cardHex: "#ede9fe", 
    title: "text-violet-950",
    text: "text-violet-800",
    accent: "#7c3aed",
  },
  emerald: {
    illustrationBg: "bg-emerald-50",
    cardBg: "bg-emerald-100",
    cardHex: "#d1fae5",
    title: "text-emerald-950",
    text: "text-emerald-800",
    accent: "#059669",
  },
  orange: {
    illustrationBg: "bg-orange-50",
    cardBg: "bg-orange-100",
    cardHex: "#ffedd5",
    title: "text-orange-950",
    text: "text-orange-800",
    accent: "#ea580c",
  },
};

const solutions = [
  {
    theme: "violet",
    title: "Education",
    description:
      "Explore educational software like games, classroom tools, and management platforms.",
  },
  {
    theme: "emerald",
    title: "Peoples(HR)",
    description:
      "Explore workforce management tools like ATS, performance appraisals, and self-service portals.",
  },
  {
    theme: "violet",
    title: "Finance",
    description:
      "Explore financial platforms such as accounting systems, trading tools, and fraud detection.",
  },
  {
    theme: "orange",
    title: "Oil & Gas",
    description:
      "Explore energy solutions like reservoir simulation, pipeline SCADA, and production accounting.",
  },
  {
    theme: "violet",
    title: "Real Estate",
    description:
      "Explore property tech like MLS hubs, virtual tours, and lease management.",
  },
  {
    theme: "emerald",
    title: "Agriculture",
    description:
      "Explore smart farming tools like satellite crop monitoring, precision irrigation, and livestock tracking.",
  },
  {
    theme: "violet",
    title: "Healthcare",
    description:
      "Explore digital health tools such as EHR systems, telemedicine apps, and AI imaging platforms.",
  },
  {
    theme: "orange",
    title: "Manufacturing",
    description:
      "Explore industrial software such as CAD, MES, and automated inventory tools.",
  },
];


const SwooshMark = ({ color }) => (
  <svg viewBox="0 0 32 32" className="w-6 h-6">
    <path
      d="M4 20c4 6 20 6 24 0"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="9" cy="22" r="2.6" fill={color} />
  </svg>
);

const NetworkMark = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
    <circle cx="6" cy="6" r="2.1" fill="#334155" />
    <circle cx="17" cy="3" r="2.1" fill="#334155" />
    <circle cx="25" cy="10" r="2.1" fill="#334155" />
    <circle cx="12" cy="16" r="2.1" fill="#334155" />
    <circle cx="23" cy="21" r="2.1" fill="#334155" />
    <line x1="6" y1="6" x2="17" y2="3" stroke="#334155" strokeWidth="1.3" />
    <line x1="17" y1="3" x2="25" y2="10" stroke="#334155" strokeWidth="1.3" />
    <line x1="6" y1="6" x2="12" y2="16" stroke="#334155" strokeWidth="1.3" />
    <line x1="12" y1="16" x2="23" y2="21" stroke="#334155" strokeWidth="1.3" />
    <line x1="25" y1="10" x2="23" y2="21" stroke="#334155" strokeWidth="1.3" />
  </svg>
);

const ConfettiBadge = ({ label, color }) => (
  <div className="relative flex items-center justify-center w-full h-full">
    <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full" fill="none">
      <circle cx="6" cy="8" r="1.3" fill="#F59E0B" />
      <circle cx="34" cy="7" r="1.3" fill="#3B82F6" />
      <circle cx="33" cy="30" r="1.3" fill="#EC4899" />
      <circle cx="6" cy="30" r="1.3" fill="#10B981" />
      <circle cx="20" cy="4" r="1.1" fill="#8B5CF6" />
      <circle cx="20" cy="35" r="1.1" fill="#F97316" />
    </svg>
    <span
      className="text-[11px] font-extrabold leading-tight text-center px-1"
      style={{ color }}
    >
      {label}
    </span>
  </div>
);


const CardIllustration = ({ bg, accent, title }) => {
  return (
    <div className={`relative h-28 rounded-xl `}>
      <div className="absolute left-4 -bottom-14  rotate-[-10deg] flex items-center justify-center">
        <img src={ChrImg} alt="" />
      </div>
      <div className="absolute left-22 -bottom-17   rotate-[-5deg] flex items-center justify-center">
       <img src={EduImg} alt="" />
      </div>
      <div className="absolute left-42 -bottom-14   rotate-[-6deg] flex items-center justify-center">
       <img src={CeduImg} alt="" />
      </div>
    </div>
  );
};


const TAB_WIDTH_PCT = 45; 
const TAB_HEIGHT = 28; 
const RADIUS = 14; 

const SolutionCard = ({ theme, title, description }) => {
  const colors = colorThemes[theme];

  return (
    <div className="bg-slate-100/70 rounded-2xl p-3">
      <CardIllustration bg={colors.illustrationBg} accent={colors.accent} title={title} />

      <div className="relative" style={{ marginTop: TAB_HEIGHT + 6 }}>
        {/* Raised tab — LEFT side, tall */}
        <div
          className="absolute left-0 rounded-t-2xl"
          style={{
            top: -TAB_HEIGHT,
            width: `${TAB_WIDTH_PCT}%`,
            height: TAB_HEIGHT + RADIUS,
            backgroundColor: colors.cardHex,
          }}
        />
        {/* Smooth concave notch where the tab meets the lower right shelf */}
        <div
          className="absolute"
          style={{
            top: -RADIUS,
            left: `${TAB_WIDTH_PCT}%`,
            width: RADIUS,
            height: RADIUS,
            background: `radial-gradient(circle at bottom left, ${colors.cardHex} ${RADIUS}px, transparent ${RADIUS}px)`,
          }}
        />

       
        <div className={`relative rounded-2xl ${colors.cardBg} p-4`}>
          <h3 className={`text-[15px] font-semibold text-black`}>{title}</h3>
          <div className="h-px bg-black/10 my-2.5" />
          <p className={`text-[13px] leading-relaxed text-black`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const IndustrySolutions = () => {
  return (
    <div className="w-full bg-slate-50 px-6 py-10 sm:px-10 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
        Explore other software solutions available
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-500">
        Explore a variety of specialized software solutions tailored for different
        industries, helping businesses of all sizes streamline and expand their
        operations across Africa and beyond.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {solutions.map((solution, index) => (
          <SolutionCard key={`${solution.title}-${index}`} {...solution} />
        ))}
      </div>
    </div>
  );
};

export default IndustrySolutions;