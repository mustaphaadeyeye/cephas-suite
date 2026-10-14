
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../assets/LogoMark.svg";
import Wrapper from "./Wrapper";
import Button from "./Button";

const navItems = [
  { label: "Product", path: "/product", hasDropdown: true },
  { label: "Solution", path: "/solution", hasDropdown: true },
  // { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about", hasDropdown: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu when navigating to another page.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1 text-sm font-medium ${
      isActive ? "text-[#173FD7]" : "text-[#111111]"
    } hover:text-[#173FD7]`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center justify-between text-sm font-medium ${
      isActive ? "text-[#173FD7]" : "text-[#111111]"
    } hover:text-[#173FD7]`;

  /* ---------- Simplified navbar for the Get Started flow ---------- */
  if (pathname === "/get-started") {
    return (
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-[#F4F5FB]">
        <Wrapper>
          <div className="flex h-[78px] items-center justify-between">
            <NavLink to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Cephas Suite"
                className="h-10 w-auto object-contain"
              />
              <h1 className="text-[16px] font-black text-[#111320]">
                Cephas Suite
              </h1>
            </NavLink>

            <Link
              to="/"
              className="flex items-center gap-1 text-xs text-[#4F5674] hover:text-[#111320]"
            >
              <ChevronLeft size={14} />
              Back to site
            </Link>
          </div>
        </Wrapper>
      </nav>
    );
  }

  /* ---------- Default navbar ---------- */
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-[#F4F5FB]">
      <Wrapper>
        <div className="flex h-[78px] items-center justify-between">
          <div className="flex items-center gap-4">
            <NavLink to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Cephas Suite"
                className="h-10 w-auto object-contain"
              />
              <h1 className="text-[16px] font-black text-[#111320]">
                Cephas Suite
              </h1>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClass}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown size={14} strokeWidth={1.8} />
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link
              to="/sign-in"
              className="text-sm text-[#4F5674] transition cursor-pointer hover:text-[#173FD7]"
            >
              Sign in
            </Link>

            <Link to="/get-started">
              <Button className="cursor-pointer rounded-[8px] bg-[#193FD3] px-8 py-3 text-sm font-medium text-white hover:bg-[#1535b8]">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white py-5 lg:hidden">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={mobileNavLinkClass}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={15} />}
                </NavLink>
              ))}

              {/* Mobile Sign In */}
              <Link
                to="/sign-in"
                className="text-sm font-medium text-[#4F5674] transition hover:text-[#173FD7]"
              >
                Sign in
              </Link>

              {/* Mobile Get Started */}
              <Link to="/get-started">
                <Button className="w-full cursor-pointer rounded-[8px] bg-[#193FD3] py-3 text-sm font-medium text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Wrapper>
    </nav>
  );
};

export default Navbar;
