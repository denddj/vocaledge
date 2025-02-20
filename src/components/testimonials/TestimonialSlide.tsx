import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../../types/testimonial';
import QuoteIcon from './QuoteIcon';

interface TestimonialSlideProps {
  testimonial: Testimonial;
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-2">
          <QuoteIcon />
        </div>
        <p className="text-base md:text-lg font-medium text-cream-50 mb-2">
          {testimonial.quote}
        </p>
        <div className="text-cream-200">
          <p className="font-semibold text-sm">{testimonial.author}</p>
          <p className="text-xs">{testimonial.role}</p>
          <p className="text-aqua-400 font-medium mt-0.5 text-sm">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSlide;