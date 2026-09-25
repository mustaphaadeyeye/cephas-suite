import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LogoMark.svg";
import Wrapper from "./Wrapper";
import Button from "./Button";


const navItems = [
  { label: "Product", path: "/product", hasDropdown: true },
  { label: "Solution", path: "/solution", hasDropdown: true },
  // { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about", hasDropdown: true},
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const [isDemoOpen, setIsDemoOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1 text-sm font-medium ${
      isActive ? "text-[#173FD7]" : "text-[#111111]"
    } hover:text-[#173FD7]`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center justify-between text-sm font-medium ${
      isActive ? "text-[#173FD7]" : "text-[#111111]"
    }`;

//   const handleOpenDemo = () => {
//     setIsDemoOpen(true);
//     setIsOpen(false); // close mobile menu if it's open
//   };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-[#F4F5FB]">
      <Wrapper>
        <div className="flex h-[78px] items-center justify-between">

          <div className="flex items-center gap-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={Logo}
              alt="CepahsHR"
              className="h-10 w-auto object-contain"
            />
          </NavLink>
            <h1 className="text-[#111320] font-black text-[16px]">Cephas Suite</h1>
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
                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                  />
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center gap-8">
            <button className="text-[#4F5674]">Sign in</button>
            <Button
            //   onClick={handleOpenDemo}
              className="rounded-[8px] bg-[#193FD3] px-8 py-3 text-sm font-medium text-white hover:bg-[#1535b8]"
            >
            Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
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
                  onClick={() => setIsOpen(false)}
                  className={mobileNavLinkClass}
                >
                  {item.label}

                  {item.hasDropdown && (
                    <ChevronDown size={15} />
                  )}
                </NavLink>
              ))}

              <Button
                // onClick={handleOpenDemo}
                className="w-full rounded-[8px] bg-[#193FD3] py-3 text-sm font-medium text-white cursor-pointer"
              >
              Get Started
              </Button>
            </div>
          </div>
        )}
      </Wrapper>

      {/* Book a Demo modal */}
      {/* <BookDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} /> */}
    </nav>
  );
};

export default Navbar;