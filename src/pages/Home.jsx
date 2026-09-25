
import React from 'react'
import { motion } from "framer-motion"
import HeroSection from "./HeroSection"
import Wrapper from '../components/Wrapper'
import firstImg from "../assets/Logo.png"
import secondImg from "../assets/logone.png"
import thirdImg from "../assets/logotwo.png"
import fourthImg from "../assets/logothree.png"
import { Grid2x2, BarChart3, Sparkles, ShieldCheck } from "lucide-react";
import BusinessSection from './BusinessSection'
import IndustrySolutions from './Industrysolutions'
import ArchitectureCTA from './ArchitectureCTA'

const Home = () => {
  return (
    <div className='bg-slate-50'>
      <HeroSection />
      <BrandSection />
      <Organization />
      <BusinessSection />
      <IndustrySolutions />
      <ArchitectureCTA />

      {/* <SoftwareSolutions/> */}
    </div>
  )
}

const BrandSection = () => {
  const brandContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const brandItem = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className='bg-slate-50'>
      <Wrapper>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='text-[#4F5674] text-center text-[30px]'
        >
          Brands that Trust Us
        </motion.h1>

        <motion.div
          variants={brandContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className='flex justify-between mt-5'
        >
          <motion.img
            variants={brandItem}
            src={firstImg}
            alt=""
          />

          <motion.img
            variants={brandItem}
            src={secondImg}
            alt=""
          />

          <motion.img
            variants={brandItem}
            src={thirdImg}
            alt=""
          />

          <motion.img
            variants={brandItem}
            src={fourthImg}
            alt=""
          />
        </motion.div>
      </Wrapper>
    </div>
  )
}

const features = [
  {
    icon: Grid2x2,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    eyebrow: "Single Source of Truth",
    eyebrowColor: "text-indigo-500",
    title: "Unified Ecosystem",
    description:
      "Eliminate software silos. Combine HR, Accounting, Inventory, CRM, and Procurement into a single, cohesive source of truth instead of juggling dozens of disconnected apps.",
  },
  {
    icon: BarChart3,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    eyebrow: "Zero Bloat Billing",
    eyebrowColor: "text-emerald-500",
    title: "Modular by Design",
    description:
      "Pay only for what you use. Activate the exact modules your business needs today — whether School Management, Payroll, or LMS — and add capabilities as you grow.",
  },
  {
    icon: Sparkles,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    eyebrow: "AI-Powered Workflows",
    eyebrowColor: "text-violet-500",
    title: "Intelligent Automation",
    description:
      "AI-powered decision-making. Automate routine administrative workflows, reduce human error, and unlock real-time predictive analytics to steer organizational strategy.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    eyebrow: "Multi-Sector Ready",
    eyebrowColor: "text-orange-500",
    title: "Enterprise-Grade Adaptability",
    description:
      "Built for diverse sectors. Custom-tailored architecture designed to support businesses, healthcare institutions, government agencies, and academic centers alike.",
  },
];

const FeatureCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  eyebrow,
  eyebrowColor,
  title,
  description
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconBg}`}
      >
        <Icon className={`w-4.5 h-4.5 ${iconColor}`} size={18} />
      </motion.div>

      <div className="flex flex-col gap-2">
        <span className={`text-[11px] font-semibold tracking-wide ${eyebrowColor}`}>
          {eyebrow}
        </span>

        <h3 className="text-[15px] font-semibold text-slate-900">
          {title}
        </h3>

        <p className="text-[13px] leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Organization = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full bg-slate-50 py-16">
      <Wrapper>

        <motion.h1
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight max-w-2xl"
        >
          Everything your organization needs.{" "}
          <span className="text-indigo-500">Nothing it doesn't.</span>
        </motion.h1>

        <motion.p
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-slate-500 text-[15px] max-w-2xl leading-relaxed"
        >
          Replace fragmented tools with one intelligent ERP ecosystem. From startups to
          multinational enterprises, scale operations seamlessly across Africa and beyond.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>

      </Wrapper>
    </div>
  );
};

export default Home

