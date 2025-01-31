import React from 'react';
import { motion } from 'framer-motion';
import CalendlySection from './calendly/CalendlySection';

const BookCall: React.FC = () => {
  return (
    <section id="book-call" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-aqua-900 sm:text-5xl">
            Book a Discovery Call
          </h2>
          <p className="mt-4 text-xl text-aqua-700 max-w-3xl mx-auto">
            Schedule a 15-minute call with our team to explore how VocalEdge can transform your customer service
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CalendlySection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center text-aqua-600"
        >
          <p className="text-sm">
            Free 15-minute consultation • No commitment required • Learn how we can help
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;