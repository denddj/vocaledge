import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "The AI voice agent has transformed how we handle customer inquiries, reducing wait times by 80%.",
    author: "Sarah Chen",
    role: "Customer Success Director",
    company: "TechFlow Solutions"
  },
  {
    quote: "Our customer satisfaction scores increased by 45% within the first month of implementing VocalEdge.",
    author: "Michael Rodriguez",
    role: "Operations Manager",
    company: "Stellar Healthcare"
  },
  {
    quote: "The most natural-sounding AI voice system we've ever tested. Our clients can't tell it's not human.",
    author: "Emily Thompson",
    role: "Chief Innovation Officer",
    company: "Nova Retail Group"
  },
  {
    quote: "Seamless integration and 24/7 availability has revolutionized our customer support infrastructure.",
    author: "David Park",
    role: "Head of Customer Experience",
    company: "Quantum Finance"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-aqua-900 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-cream-50">
            Trusted by Industry Leaders
          </h2>
        </div>
        
        <div className="relative h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="max-w-3xl mx-auto text-center">
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-aqua-400 opacity-25" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-medium text-cream-50 mb-4">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="text-cream-200">
                  <p className="font-semibold">{testimonials[currentIndex].author}</p>
                  <p className="text-sm">{testimonials[currentIndex].role}</p>
                  <p className="text-aqua-400 font-medium mt-1">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cream-50 w-4' : 'bg-cream-50/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;