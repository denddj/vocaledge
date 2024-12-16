import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import TestimonialSlide from './TestimonialSlide';
import TestimonialDots from './TestimonialDots';

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
    <div className="relative flex flex-col">
      <div className="relative h-32"> {/* Reduced height for testimonial content */}
        <AnimatePresence mode="wait">
          <TestimonialSlide
            key={currentIndex}
            testimonial={testimonials[currentIndex]}
          />
        </AnimatePresence>
      </div>
      <div className="mt-12"> {/* Increased margin-top to create more space */}
        <TestimonialDots
          total={testimonials.length}
          current={currentIndex}
          onSelect={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;