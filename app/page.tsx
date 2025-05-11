'use client';
import Link from 'next/link';

import { motion, AnimatePresence } from "framer-motion";
import { useTestimonials } from "./hooks/useTestimonials";
import { testimonials } from "./data/testimonials";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";
import HeroVideoCarousel from './components/Indexherovideo';
import { PartnerShowcase } from "./components/Partners";
import { partners } from "./data/partners";


export default function Home() {

  const { scrollRef, scrollLeft, scrollRight } = useHorizontalScroll();
  const currentTestimonial = useTestimonials(testimonials, 6000);

  return (
    <div className="">
      
      <HeroVideoCarousel
        videos={[
          '/videos/heroesvideo1.mp4',
          '/videos/heroesvideo2.mp4',
          '/videos/heroesvideo3.mp4',
          '/videos/monevideo.mp4',
        ]}
        heading="Transforming Businesses with Expert Consultancy"
        subheading="We help businesses achieve growth, efficiency, and innovation."
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
       />

           {/* Navigation Anchor Links */}
           <div className="sticky top-0 bg-[#E5E7EB] shadow-sm z-10">
             <div className="container mx-auto px-4 py-4 overflow-x-auto">
               <div className="flex space-x-6 md:space-x-8 justify-center md:justify-start">
                 <Link href="#about-us" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
                   Who Are We
                 </Link>
                 <Link href="#services" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
                   Services
                 </Link>
                 <Link href="#case-studies" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
                   Case Studies
                 </Link>
                 <Link href="#why-choose-us" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
                   Why Choose Us?
                 </Link>
                 <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
                   Testimonials
                 </Link>
               </div>
             </div>
           </div>

      {/* About Us Section */}
      <section id="about-us" className="relative min-h-[600px] flex items-center bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-8 py-20">
          
          {/* Left: Polygon-Shaped Video */}
          <div className="relative w-full md:w-1/2 h-[400px] overflow-hidden">
            <div className="polygon-video w-full h-full">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/videos/teamvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right: About Us Text */}
          <div className="w-full md:w-1/2 text-gray-900 text-center md:text-left px-8">
            <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg leading-relaxed mb-6">
              With over 20 years of experience, we specialize in providing tailored 
              consultancy solutions to help businesses thrive in a competitive landscape. 
              Our team of experts is dedicated to delivering results that matter.
            </p>
            <a
              href="/about"
              className="inline-block bg-[#4B5563] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Learn More About Us
            </a>
          </div>

        </div>
      </section>




      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>

          <div className="relative">
            {/* Left Scroll Button */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent border border-white text-white p-3 rounded-full z-10 transition hover:bg-gray-200/30"
              onClick={scrollLeft}
            >
              ◀
            </button>

            {/* Scrollable Services Container */}
            <div
              ref={scrollRef}
              className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide py-4 px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[
                { title: "Business Strategy", description: "Develop a winning strategy.", bg: "bg-[#E5E7EB]", text: "text-gray-900" },
                { title: "Digital Transformation", description: "Leverage technology for growth.", bg: "bg-[#F3F4F6]", text: "text-gray-900" },
                { title: "Financial Consulting", description: "Optimize financial performance.", bg: "bg-[#4B5563]", text: "text-white" },
                { title: "Management Consulting", description: "Streamline operations.", bg: "bg-[#E5E7EB", text: "text-gray-900" },
                { title: "Marketing & Branding", description: "Enhance brand presence.", bg: "bg-[#F3F4F6]", text: "text-gray-900" },
                { title: "Technology Consulting", description: "Future-proof with tech.", bg: "bg-[#4B5563]", text: "text-white" },
              ].map((service, index) => (
                <div key={index} className={`${service.bg} min-w-[400px] h-60 p-10 rounded-xl shadow-lg flex-shrink-0`}>
                  <h3 className={`text-2xl font-bold ${service.text} mb-4`}>{service.title}</h3>
                  <p className={`${service.text}`}>{service.description}</p>
                </div>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border border-white text-white p-1.5 rounded-full z-10 transition hover:bg-gray-200/30"
              onClick={scrollRight}
            >
              ▶
            </button>
          </div>
        </div>
      </section>


      {/* Case Studies */}
      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Increased Revenue by 30%
              </h3>
              <p className="text-gray-600">
                We helped a retail client streamline operations and boost revenue.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reduced Costs by 20%
              </h3>
              <p className="text-gray-600">
                A manufacturing client saved millions through our cost-cutting
                strategies.
              </p>
            </div>
          </div>
        </div>
      </section>


    
      <PartnerShowcase 
        partners={partners}
        bgFrom="from-indigo-50"
        bgTo="to-teal-50"
        scrollDuration={45}
      />


      {/* Why Choose Us? */}
      <section id="why-choose-us" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tailored Solutions
              </h3>
              <p className="text-gray-600">
                We customize our approach to meet your unique needs.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proven Methodologies
              </h3>
              <p className="text-gray-600">
                Our strategies are backed by years of success.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Dedicated Support
              </h3>
              <p className="text-gray-600">
                We’re with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>


      
      {/* Testimonials */}
        <section id="testimonials" className="bg-[#E5E7EB] py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Our Clients Say
          </h2>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div


                  // key={currentTestimonial.quote}
                // initial={{ opacity: 0, rotate: -5 }}
                // animate={{ opacity: 1, rotate: 0 }}
                // exit={{ opacity: 0, rotate: 5 }}
                // transition={{ duration: 0.8, ease: "easeInOut" }}
                
                key={currentTestimonial.quote}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}


                // key={currentTestimonial.quote}
                // initial={{ opacity: 0, scale: 0.9 }}
                // animate={{ opacity: 1, scale: 1 }}
                // exit={{ opacity: 0, scale: 0.9 }}
                // transition={{ duration: 0.8, ease: "easeInOut" }}

              // key={currentTestimonial.quote}
              // initial={{ y: 20, opacity: 0 }}
              // animate={{ y: 0, opacity: 1 }}
              // exit={{ y: -20, opacity: 0 }}
              // transition={{ type: "spring", stiffness: 100 }}
            
                className="bg-[#F3F4F6] p-6 rounded-lg shadow-md border border-gray-200 w-full flex flex-col items-center"
                     >
                {currentTestimonial.image && (
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    className="w-30 h-30 rounded-full mb-4"
                  />
                )}
                <p className="text-gray-900">"{currentTestimonial.quote}"</p>
                <p className="text-gray-900 font-semibold mt-4">- {currentTestimonial.author}</p>
                <p className="text-gray-950 font-bold mt-1"> {currentTestimonial.organization}</p> 
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}
