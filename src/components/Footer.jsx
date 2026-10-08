import { useState } from "react";
import { Zap } from "lucide-react";
import Wrapper from "../components/Wrapper";
// import Comingsoonmodal from "../components/Comingsoonmodal";

import Logo from "../assets/LogoMark.svg";
import Comingsoonmodal from "./Comingsoonmodal";


const FOOTER_LINKS = [
  {
    heading: "Standalone Apps",
    links: [
      { label: "CEDU Games", href: "https://cedu.cephassuite.com" },
      { label: "Cephas AgroLink", href: "/agrolink" },
      { label: "CEPROAM", href: "/ceproam" },
    ],
  },
  {
    heading: "Integrated Suites",
    links: [
      { label: "CEHR", href: "/cephas-hr" },
      { label: "CEPHAS Books", href: "https://cephas-books.onrender.com" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Education" },
      { label: "Manufacturing" },
      { label: "Organisation" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Cephas SSO" },
      { label: "Developer APIs" },
      { label: "App Directory" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Cephas" },
      { label: "Cephas Hub" },
      { label: "Contact Sales" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
  { label: "Data Protection (NDPR/GDPR)" },
  { label: "Security Standards" },
];

// Renders a real link when href exists, otherwise a Coming Soon trigger
const FooterLink = ({ link, className, onComingSoon }) => {
  const isExternal = link.href?.startsWith("http");

  if (link.href) {
    return (
      <a
        href={link.href}
        className={className}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {link.label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onComingSoon(link.label)}
      className={`${className} text-left`}
    >
      {link.label}
    </button>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  // null = modal closed, otherwise the name of the clicked item
  const [comingSoon, setComingSoon] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-[#E5E7F0]">
      <Wrapper className="px-4 sm:px-6 py-12 sm:py-14">
        {/* Top: brand + subscribe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src={Logo} alt="" />
              <p className="font-Dm font-bold text-[#111320] text-lg">
                Cephas Suite
              </p>
            </div>

            <p className="font-Dm text-[#6B7290] text-sm mt-3 max-w-sm leading-relaxed">
              Cloud infrastructure & ERP software powering high-efficiency
              enterprises across Africa.
            </p>

            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1.5 mt-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>

              <span className="font-jet text-[11px] text-emerald-700">
                All Systems Operational{" "}
                <span className="font-semibold">99.98%</span>
              </span>
            </div>
          </div>

          {/* Subscribe */}
          <div className="w-full lg:max-w-md lg:justify-self-end">
            <p className="font-jet text-[#4C5DE8] uppercase text-[10px] font-medium tracking-widest">
              Product Changelog
            </p>

            <p className="font-Dm font-bold text-[#111320] text-base sm:text-lg mt-2">
              Subscribe to the Cephas Changelog
            </p>

            <p className="font-Dm text-[#6B7290] text-sm mt-1">
              New features, releases, and platform updates — straight to your
              inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2 mt-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribed(false);
                }}
                placeholder="Enter your work email..."
                required
                className="flex-1 min-w-0 px-4 py-2.5 rounded-lg border border-[#E5E7F0] text-sm text-[#111320] placeholder:text-[#9AA0BC] focus:outline-none focus:border-[#4C5DE8]/60 focus:ring-2 focus:ring-[#4C5DE8]/10"
              />

              <button
                type="submit"
                className="shrink-0 w-full sm:w-auto bg-[#4C5DE8] hover:bg-[#3d4ed9] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>

            {subscribed && (
              <p className="mt-3 font-Dm text-sm text-emerald-600">
                ✓ You have successfully subscribed to the Cephas Changelog.
              </p>
            )}
          </div>
        </div>

        {/* Link columns */}
        <div className="border-t border-[#E5E7F0] mt-10 sm:mt-12 pt-10 sm:pt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="font-jet text-[10px] font-medium uppercase tracking-widest text-[#9AA0BC]">
                {col.heading}
              </p>

              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      link={link}
                      onComingSoon={setComingSoon}
                      className="font-Dm text-sm text-[#4F5674] hover:text-[#4C5DE8] transition-colors"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E7F0] mt-10 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-center sm:text-left">
          <p className="font-Dm text-xs text-[#9AA0BC]">
            © 2026 Cephas Suite Technologies Inc. All rights reserved.
          </p>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <FooterLink
                  link={link}
                  onComingSoon={setComingSoon}
                  className="font-Dm text-xs text-[#9AA0BC] hover:text-[#4C5DE8] transition-colors whitespace-nowrap"
                />
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>

      <Comingsoonmodal
        open={comingSoon !== null}
        onClose={() => setComingSoon(null)}
        name={comingSoon}
      />
    </footer>
  );
};

export default Footer;