import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, X } from "lucide-react";
import Wrapper from "../components/Wrapper";
import { useNavigate } from "react-router-dom";

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
    href: "/cephas-hr",
    tags: ["HRMS", "Payroll Management", "Project Management"],
    workflows: [
      "Clock-ins update active project hours and log task durations instantly.",
      "Task completions update project milestones and calculate output rates instantly.",
      "End-of-quarter performance review syncs directly to annual merit pay adjustments.",
    ],
  },
  {
    title: "Cephas Books",
    href: "https://cephas-books.onrender.com",
    tags: ["Sales", "Purchases", "Expenses", "Budgeting"],
    workflows: [
      "Field attendance logs feed directly into payroll for automated calculations",
      "Onboarding creates SSO credentials, assigns roles, and triggers training flow",
      "Expense submissions auto-route for manager approval and hit payroll on cycle",
    ],
  },
];

const SuiteCard = ({ title, tags, workflows, index, href }) => {
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

              <span className="text-[13px] leading-relaxed text-slate-500">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={href || "#"}
        className="mt-7 w-full rounded-xl bg-indigo-500 py-3 text-[14px] font-semibold text-white flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors"
      >
        Explore
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
};

const DarkBanner = () => {
  const navigate = useNavigate();
  const [showDemoModal, setShowDemoModal] = useState(false);

  const handleProduct = () => {
    navigate("/product");
  };

  return (
    <>
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
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
                ease: "easeOut",
              }}
              className="sm:pl-8 first:pl-0"
            >
              <h3 className="text-white font-semibold text-[15px]">
                {feature.title}{" "}
                <span className={feature.highlightColor}>
                  {feature.highlight}
                </span>
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
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: "easeOut",
          }}
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
            <button
              onClick={handleProduct}
              className="rounded-xl bg-indigo-500 px-5 py-2.5 text-[13px] font-semibold text-white flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors"
            >
              Explore Modular Solutions
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowDemoModal(true)}
              className="rounded-xl bg-white/10 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-white/15 transition-colors"
            >
              Request a Product Demo
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Product Demo Modal */}
      {showDemoModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 overflow-y-auto"
          onClick={() => setShowDemoModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl my-auto"
          >
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Request a Product Demo
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Provide your company details and our team will get in touch
                with you about the Cephas platform.
              </p>
            </div>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setShowDemoModal(false);
              }}
            >
              {/* Company Name */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Company Name
                </label>

                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter your company name"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Company Email */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Company Email
                </label>

                <input
                  type="email"
                  name="companyEmail"
                  placeholder="Enter your company email"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Company Phone Number */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Company Phone Number
                </label>

                <input
                  type="tel"
                  name="companyPhone"
                  placeholder="Enter your company phone number"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Company Address */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Company Address
                </label>

                <textarea
                  name="companyAddress"
                  rows="3"
                  placeholder="Enter your company address"
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

            

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-500 py-3 text-sm font-semibold text-white hover:bg-indigo-600 transition-colors"
              >
                Request Demo
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
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
          Top Suite for{" "}
          <span className="text-indigo-500">Every Business</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-500"
        >
          Discover our all-in-one ERP software designed for businesses of all
          sizes and industries. Whether you're a small startup or a large
          enterprise, manage and grow your operations smoothly across Africa
          and beyond.
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