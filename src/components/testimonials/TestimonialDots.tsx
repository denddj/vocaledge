import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

const TestimonialDots: React.FC<TestimonialDotsProps> = ({ total, current, onSelect }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex justify-center mt-6 space-x-2"
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === current ? 'bg-cream-50 w-4' : 'bg-cream-50/30'
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </motion.div>
  );
};

export default TestimonialDots;