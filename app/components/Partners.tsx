"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface Partner {
  name: string;
  logo: string;
  description: string;
  industry: string;
}

interface PartnerShowcaseProps {
  title?: string;
  description?: string;
  partners: Partner[];
  ctaText?: string;
  ctaLink?: string;
  bgFrom?: string;
  bgTo?: string;
  scrollDuration?: number;
}

export const PartnerShowcase: React.FC<PartnerShowcaseProps> = ({
  title = "Our Esteemed Partners",
  description = "We partner with forward-thinking enterprises across Africa and beyond to drive transformative change. From Nairobi to Lagos, Johannesburg to Dubai,our solutions deliver measurable impact across continents.",
  partners,
  ctaText = "Become a Partner",
  ctaLink = "/contact",
  bgFrom = "from-blue-50",
  bgTo = "to-green-50",
  scrollDuration = 40,
}) => {
  // Duplicate clients for seamless looping
  const duplicatedClients = [...partners, ...partners];

  return (
    <section className={`bg-[#F3F4F6] py-24 relative overflow-hidden`}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Scrolling cards */}
        <div className="relative h-[420px] overflow-hidden py-8">
          <motion.div 
            className="absolute top-0 left-0 flex space-x-8 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: scrollDuration, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedClients.map((partner, index) => (
              <ClientCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </motion.div>
        </div>

        {/* Navigation dots
        <div className="flex justify-center mt-8 space-x-3">
          {partners.slice(0, 3).map((_, i) => (
            <motion.button
              key={i}
              className="w-3 h-3 rounded-full bg-gray-300"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          ))}
        </div> */}

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href={ctaLink} 
            className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            {ctaText} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Sub-component for individual client cards
const ClientCard: React.FC<{ partner: Partner}> = ({ partner}) => {
  return (
    <motion.div
      className="relative w-72 h-80 bg-[#E5E7EB] rounded-2xl shadow-lg p-8 border border-gray-100 flex-shrink-0"
      initial={{ scale: 1, y: 0, zIndex: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
      whileHover={{
        scale: 1.1,
        y: -30,
        zIndex: 20,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
      }}
    >
      <div className="flex flex-col items-center h-full">
        <div className="h-24 flex items-center mb-6">
          <img 
            src={partner.logo} 
            alt={partner.name}
            className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="text-center">
          <h4 className="font-bold text-gray-900 text-xl mb-2">{partner.name}</h4>
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {partner.industry}
          </span>
          <p className="text-gray-600 leading-relaxed">
            {partner.description}
          </p>
        </div>
      </div>

      <motion.div 
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
          transition: { duration: 0.6 }
        }}
      />
    </motion.div>
  );
};