'use client';

import { useEffect, useState } from 'react';

interface HeroVideoCarouselProps {
  videos: string[];
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink?: string;
}

export default function HeroVideoCarousel({
  videos,
  heading,
  subheading,
  buttonText,
  buttonLink = '#',
}: HeroVideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="relative h-[50vh] md:h-[80vh] w-full  bg-black">

      {/* Video Backgrounds with Fade Effect */}
      {videos.map((src, index) => (
        <video
          key={src}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
      ))}

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text Content - Centered on mobile, left-aligned on desktop */}
      <div className="absolute inset-0 z-20 flex items-center justify-center md:justify-start px-6 md:px-12">
        <div className="text-white text-center md:text-left max-w-2xl space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">{heading}</h1>
          <p className="text-base md:text-xl text-gray-200">{subheading}</p>
          <a
            href={buttonLink}
            className="bg-[#4B5563] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block text-sm md:text-base"
          >
            {buttonText}
          </a>
        </div>
      </div>

    </section>
  );
}