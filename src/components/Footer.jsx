import React from "react";
import { Mail } from "lucide-react";
import Logo from "../assets/LogoMark.svg";
import Wrapper from "./Wrapper";


const Footer = () => {
  const footerLinks = [
    {
      title: "STANDALONE APPS",
      links: ["CEDU Games", "Cephas AgroLink", "CEPROAM"],
    },
    {
      title: "INTEGRATED SUITES",
      links: ["CEHR", "CEPHAS Books"],
    },
    {
      title: "SOLUTIONS",
      links: ["Education", "Manufacturing", "Organisation"],
    },
    {
      title: "PLATFORM",
      links: ["Cephas SSD", "Developer APIs", "App Directory"],
    },
    {
      title: "COMPANY",
      links: ["About Cephas", "Cephas Hub", "Contact Sales"],
    },
  ];

  return (
    <footer className=" bg-white px-6 pt-10 text-[#8494bb]  shadow ">
     

      <div className="px-12">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 gap-10 pb-10 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center">
                {/* Logo icon */}
                <img src={Logo} alt="" />
              </div>

              <h2 className=" font-bold text-[#172447]">
                Cephas Suite
              </h2>
            </div>

            {/* Description */}
            <p className="mt-3 max-w-[340px] text-[15px] leading-[1.6] text-[#8b9bc0]">
              Cloud infrastructure & ERP software powering
              <br />
              high-efficiency enterprises across Africa.
            </p>

            {/* System status */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#e8f8f5] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#11aa82]" />

              <span className=" font-medium text-[#08a67d]">
                All Systems Operational
              </span>

              <span className=" text-[#65bca9]">
                99.98%
              </span>
            </div>
          </div>

          {/* RIGHT - CHANGELOG */}
          <div>
            <p className=" font-bold uppercase tracking-[2px] text-[#5062e9]">
              Product Changelog
            </p>

            <h3 className="mt-2 font-bold text-[#172447]">
              Subscribe to the Cephas Changelog
            </h3>

            <p className="mt-1  text-[#8b9bc0]">
              New features, releases, and platform updates — straight to your
              inbox.
            </p>

            {/* Form */}
            <form className="mt-3 flex max-w-[500px] gap-1.5">
              <div className="relative flex-1">
                <Mail
                  size={13}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#91a1c5]"
                />

                <input
                  type="email"
                  placeholder="Enter your work email..."
                  className="h-[31px] w-full rounded-[5px] border border-[#dce2f0] bg-[#f8f9fd] pl-9 pr-3 text-[8px] text-[#172447] outline-none placeholder:text-[#9aa8c5] focus:border-[#5363e8]"
                />
              </div>

              <button
                type="submit"
                className="h-[31px] rounded-[5px] bg-[#4c5bea] px-4 text-[8px] font-medium text-white transition hover:bg-[#3d4bd5]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#edf0f6]" />

        {/* ================= LINKS ================= */}
        <div className="grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className=" font-bold tracking-[1.8px] text-[#26385f]">
                {column.title}
              </h4>

              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className=" text-[#8292b7] transition hover:text-[#4c5bea]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#edf0f6]" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-4 py-4 text-[8px] text-[#a0acc4] md:flex-row md:items-center md:justify-between">
          
          {/* Copyright */}
          <p>
            © 2026 Cephas Suite Technologies Inc. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="hover:text-[#4c5bea]">
              Privacy Policy
            </a>

            <span className="text-[#d2d7e3]">|</span>

            <a href="#" className="hover:text-[#4c5bea]">
              Terms of Service
            </a>

            <span className="text-[#d2d7e3]">|</span>

            <a href="#" className="hover:text-[#4c5bea]">
              Data Protection (NDPR/GDPR)
            </a>

            <span className="text-[#d2d7e3]">|</span>

            <a href="#" className="hover:text-[#4c5bea]">
              Security Standards
            </a>
          </div>
        </div>
      </div>
       
    </footer>
  );
};

export default Footer;