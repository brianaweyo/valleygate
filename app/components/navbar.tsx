"use client";

import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useDropdown } from "../hooks/useDropdown";

export default function Navbar() {
  return (
    <nav className="bg-[#374151] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">ValleyGate Consulting</h1>
        <ul className="flex space-x-6">
          {/* Navigation Links with Dropdowns */}
          <DropdownMenu title="Home" mainHref="#top" links={[
            { href: "/home#about-us", label: "About Us" },
            { href: "#services", label: "Our Services" },
            { href: "#projects", label: "Our Projects" },
            { href: "#clients", label: "Our Clients" },
            { href: "#testimonials", label: "Testimonials" }
          ]} />

          <DropdownMenu title="About Us" mainHref="/about#top" links={[
            { href: "/about#mission", label: "Our Mission" },
            { href: "/about#team", label: "Our Team" },
            { href: "/about#history", label: "Company History" },
            { href: "/about#values", label: "Core Values" },
            { href: "/about#careers", label: "Careers" }
          ]} />

          {/* ✅ Services as a Single Link (No Dropdown) */}
          <li>
            <Link href="/services#top" className="hover:underline">
              Services
            </Link>
          </li>

          <DropdownMenu title="Industries" mainHref="/industries#top" links={[
            { href: "/industries#healthcare", label: "Healthcare" },
            { href: "/industries#finance", label: "Finance & Banking" },
            { href: "/industries#retail", label: "Retail & E-Commerce" },
            { href: "/industries#energy", label: "Energy & Utilities" },
            { href: "/industries#education", label: "Education & EdTech" }
          ]} />

          <DropdownMenu title="Case Studies" mainHref="/case-studies#top" links={[
            { href: "/case-studies#growth", label: "Business Growth Success" },
            { href: "/case-studies#turnaround", label: "Turnaround Stories" },
            { href: "/case-studies#innovation", label: "Innovation & Tech" },
            { href: "/case-studies#client-impact", label: "Client Impact Stories" }
          ]} />

          <DropdownMenu title="Contact" mainHref="/contact#top" links={[
            { href: "/contact#office", label: "Our Office" },
            { href: "/contact#support", label: "Customer Support" },
            { href: "/contact#partners", label: "Partnership Inquiries" }
          ]} />
        </ul>
      </div>
    </nav>
  );
}

// ✅ DropdownMenu Component (No Changes Needed)
function DropdownMenu({ title, mainHref, links }) {
  const { isOpen, toggleDropdown, handleMouseEnter, handleMouseLeave, dropdownRef } = useDropdown();

  return (
    <li className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center space-x-1">
        {/* 🔹 Clickable Navbar Title (Links to First Section) */}
        <Link href={mainHref} className="hover:underline">{title}</Link>
        <button onClick={toggleDropdown} className="focus:outline-none flex items-center">
          <FaChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
        </button>
      </div>

      {/* 🔹 Dropdown Menu */}
      <div
        className={`absolute left-0 mt-2 w-56 bg-[#F3F4F6] shadow-lg rounded-lg py-2 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-2">
          {links.map((item, index) => (
            <li
              key={item.href}
              className={`opacity-0 transform transition-all duration-500 ${
                isOpen ? `opacity-100 translate-x-0 delay-[${index * 100}ms]` : "translate-x-2"
              }`}
            >
              <Link href={item.href} className="block px-6 py-2 text-gray-900 hover:text-gray-700" onClick={() => isOpen && toggleDropdown()}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
