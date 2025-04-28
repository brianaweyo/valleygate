"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch, FaUser, FaChevronDown } from "react-icons/fa";

interface LinkItem {
  label: string;
  href: string;
}

interface DropdownItem {
  title: string;
  mainHref: string;
  links: LinkItem[];
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cascadingLinks, setCascadingLinks] = useState<LinkItem[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: DropdownItem[] = [
    { title: "Home", mainHref: "/", links: [
      { href: "/home#about-us", label: "About Us" },
      { href: "#services", label: "Our Services" },
      { href: "#projects", label: "Our Projects" },
      { href: "#clients", label: "Our Clients" },
      { href: "#testimonials", label: "Testimonials" }
    ]},
    { title: "About Us", mainHref: "/about#top", links: [
      { href: "/about#mission", label: "Our Mission" },
      { href: "/about#team", label: "Our Team" },
      { href: "/about#history", label: "Company History" },
      { href: "/about#values", label: "Core Values" },
      { href: "/about#careers", label: "Careers" }
    ]},
    { title: "Services", mainHref: "/services#top", links: [] },
    { title: "Industries", mainHref: "/industries#top", links: [
      { href: "/industries#healthcare", label: "Healthcare" },
      { href: "/industries#finance", label: "Finance & Banking" },
      { href: "/industries#retail", label: "Retail & E-Commerce" },
      { href: "/industries#energy", label: "Energy & Utilities" },
      { href: "/industries#education", label: "Education & EdTech" }
    ]},
    { title: "Case Studies", mainHref: "/case-studies#top", links: [
      { href: "/case-studies#growth", label: "Business Growth Success" },
      { href: "/case-studies#turnaround", label: "Turnaround Stories" },
      { href: "/case-studies#innovation", label: "Innovation & Tech" },
      { href: "/case-studies#client-impact", label: "Client Impact Stories" }
    ]},
    { title: "Contact", mainHref: "/contact#top", links: [
      { href: "/contact#office", label: "Our Office" },
      { href: "/contact#support", label: "Customer Support" },
      { href: "/contact#partners", label: "Partnership Inquiries" }
    ]},
  ];

  // Handle cascade effect for desktop dropdowns
  useEffect(() => {
    if (activeDropdown) {
      const item = navItems.find(item => item.title === activeDropdown);
      if (item && item.links.length > 0) {
        setCascadingLinks([]);
        let delay = 0;
        item.links.forEach((link, index) => {
          setTimeout(() => {
            setCascadingLinks(prev => [...prev, link]);
          }, delay);
          delay += 50;
        });
      }
    } else {
      setCascadingLinks([]);
    }
  }, [activeDropdown]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchOpen(false);
  };

  return (
    <nav className="bg-[#374151] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <h1 className="text-lg font-bold">ValleyGate</h1>

          {/* Desktop Navigation - hidden on mobile */}
          <div className={`hidden md:flex items-center ${menuOpen ? 'hidden' : 'block'}`}>
            <ul className="flex space-x-6 mx-auto">
              {navItems.map((item) => (
                <li 
                  key={item.title} 
                  className="relative"
                  onMouseEnter={() => {
                    setActiveDropdown(item.title);
                    setExpandedMenu(item.title);
                  }}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setExpandedMenu(null);
                  }}
                >
                  <Link
                    href={item.mainHref}
                    className="hover:underline flex items-center py-2 px-1"
                  >
                    {item.title}
                    {item.links.length > 0 && (
                      <FaChevronDown className="ml-1 text-xs transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Desktop Dropdown with cascade */}
                  {expandedMenu === item.title && item.links.length > 0 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden">
                      <div className="py-1">
                        {cascadingLinks.map((link, index) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-2 hover:bg-gray-100 transition-all duration-200"
                            style={{
                              animation: `fadeInUp 0.3s ease-out ${index * 0.05}s forwards`,
                              opacity: 0
                            }}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button 
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  setUserMenuOpen(false);
                }}
                className="p-2 hover:text-gray-300 transition-colors"
                aria-label="Search"
              >
                <FaSearch className="text-lg" />
              </button>
              
              {searchOpen && (
                <form 
                  onSubmit={handleSearchSubmit}
                  className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-md shadow-lg z-50"
                >
                  <div className="flex">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
                    />
                    <button 
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
                    >
                      Go
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* User */}
            <div className="relative">
              <button 
                onClick={() => {
                  setUserMenuOpen(!userMenuOpen);
                  setSearchOpen(false);
                }}
                className="p-2 hover:text-gray-300 transition-colors"
                aria-label="User menu"
              >
                <FaUser className="text-lg" />
              </button>
              
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-50">
                  <Link
                    href="/signin"
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false);
                setUserMenuOpen(false);
              }}
              className="md:hidden p-2 hover:text-gray-300 transition-colors"
              aria-label="Main menu"
            >
              {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - only shown when menuOpen is true */}
        {menuOpen && (
          <div className="md:hidden bg-[#374151] px-4 pb-4">
            {navItems.map((item) => (
              <div key={item.title} className="pt-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.mainHref}
                    className="hover:underline py-2 block"
                    onClick={(e) => {
                      if (item.links.length > 0) {
                        e.preventDefault();
                        setExpandedMenu(expandedMenu === item.title ? null : item.title);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                  {item.links.length > 0 && (
                    <button
                      onClick={() => setExpandedMenu(expandedMenu === item.title ? null : item.title)}
                      className="p-2"
                      aria-expanded={expandedMenu === item.title}
                    >
                      <FaChevronDown
                        className={`text-xs transition-transform duration-200 ${
                          expandedMenu === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu with cascade */}
                {expandedMenu === item.title && item.links.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1 overflow-hidden">
                    {item.links.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2 px-2 hover:bg-gray-700 rounded transition-all duration-200"
                        style={{
                          animation: `fadeInLeft 0.3s ease-out ${index * 0.05}s forwards`,
                          opacity: 0
                        }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}