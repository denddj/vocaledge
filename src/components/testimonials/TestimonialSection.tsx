import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-aqua-800/70 to-aqua-600/70 py-10 relative overflow-hidden"> {/* Reduced padding */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-xl font-bold text-cream-50">
            Trusted by Industry Leaders
          </h2>
        </motion.div>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default TestimonialSection;