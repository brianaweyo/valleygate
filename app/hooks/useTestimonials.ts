import { useState, useEffect } from "react";
import { Testimonial } from "../data/testimonials"; // Import type

export function useTestimonials(testimonials: Testimonial[], intervalTime = 5000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [testimonials.length, intervalTime]);

  return testimonials[index];
}
