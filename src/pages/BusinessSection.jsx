import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Wrapper from "../components/Wrapper";

const bannerFeatures = [
  {
    title: "All-in-One",
    highlight: "Architecture",
    highlightColor: "text-indigo-400",
    description: "100% cloud-native consolidation of cross-departmental operations",
  },
  {
    title: "Tailored",
    highlight: "Modularity",
    highlightColor: "text-emerald-400",
    description: "Zero bloat — subscribe strictly to relevant department stacks",
  },
  {
    title: "Africa-First",
    highlight: "Scale",
    highlightColor: "text-orange-400",
    description: "High-performance infrastructure with local and global compliance",
  },
];

const suites = [
  {
    title: "CephasHR",
    tags: ["HRMS", "Payroll Management", "Project Management"],
    workflows: [
      "POS sale automatically updates Ledger and reduces stock count in real time",
      "Low-stock trigger fires a purchase order via Invoicing with approval workflow",
      "End-of-day POS reconciliation syncs directly to monthly financial close",
    ],
  },
  {
    title: "Cephas Books",
    tags: ["Sales", "Purchases", "Expenses", "Budgeting"],
    workflows: [
      "Field attendance logs feed directly into payroll for automated calculations",
      "Onboarding creates SSO credentials, assigns roles, and triggers training flow",
      "Expense submissions auto-route for manager approval and hit payroll on cycle",
    ],
  },
];

const SuiteCard = ({ title, tags, workflows, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 flex flex-col"
    >
      <span className="text-[11px] font-semibold tracking-wide text-indigo-500">
        Integrated Suite
      </span>
      <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <span className="text-[11px] font-semibold tracking-wide text-slate-400">
          Cross-Module Workflows
        </span>
        <ul className="mt-4 flex flex-col gap-3">
          {workflows.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 w-4 h-4 shrink-0 text-emerald-500" />
              <span className="text-[13px] leading-relaxed text-slate-500">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-7 w-full rounded-xl bg-indigo-500 py-3 text-[14px] font-semibold text-white flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors">
        Explore
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

const DarkBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="rounded-2xl bg-[#0A0B14] px-6 py-8 sm:px-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:divide-x sm:divide-white/10">
        {bannerFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: "easeOut" }}
            className="sm:pl-8 first:pl-0"
          >
            <h3 className="text-white font-semibold text-[15px]">
              {feature.title} <span className={feature.highlightColor}>{feature.highlight}</span>
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
      >
        <div>
          <h4 className="text-white font-semibold text-[15px]">
            Ready to consolidate your operations?
          </h4>
          <p className="mt-1 text-[13px] text-slate-400">
            Join leading enterprises already running on the Cephas platform.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button className="rounded-xl bg-indigo-500 px-5 py-2.5 text-[13px] font-semibold text-white flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors">
            Explore Modular Solutions
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="rounded-xl bg-white/10 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-white/15 transition-colors">
            Request a Product Demo
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BusinessSection = () => {
  return (
    <div className="w-full bg-slate-50 px-4 py-10 sm:px-10 lg:px-16">
      <DarkBanner />

      <div className="mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl sm:text-3xl font-bold text-slate-900"
        >
          Top Suite for <span className="text-indigo-500">Every Business</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-500"
        >
          Discover our all-in-one ERP software designed for businesses of all sizes
          and industries. Whether you're a small startup or a large enterprise,
          manage and grow your operations smoothly across Africa and beyond.
        </motion.p>

        <div className="mt-6 relative border-t border-slate-200">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute top-0 left-0 w-16 border-t-2 border-indigo-500"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {suites.map((suite, index) => (
            <SuiteCard key={suite.title} {...suite} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;