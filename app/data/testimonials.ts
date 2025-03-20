export interface Testimonial {
    quote: string;
    author: string;
    organization: string;
    image?: string; // Optional profile image
  }
  
  // Array of testimonials
  export const testimonials: Testimonial[] = [
    {
      quote: "Their expertise helped us transform our business. Highly recommend!",
      author: "John Doe",
      organization:"WHO",
      image: "/images/hero-image.jpeg",
    },
    {
      quote: "A game-changer for our company. The results speak for themselves.",
      author: "Jane Smith",
      organization:"UNEP" , 
      image: "/images/hero-image.jpeg",
    },
    {
      quote: "Exceptional service and strategic insights that elevated our brand.",
      author: "Michael Johnson",
      organization:"IEEE",
      image: "/images/hero-image.jpeg",
    },
    {
      quote: "Their consulting solutions provided clarity and direction for our team.",
      author: "Sarah Williams",
      organization:"GoK",
      image: "images/hero-image.jpeg",
    },
    {
      quote: "Reliable and results-driven consultancy service. Highly satisfied!",
      author: "David Brown",
      organization:"IMF",
      image: "/images/hero-image.jpeg",
    },
  ];
  