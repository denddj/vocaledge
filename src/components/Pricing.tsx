import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from './pricing/PricingCard';
import { plans } from './pricing/pricingData';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-white relative" id="pricing">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-aqua-900 sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-aqua-700 max-w-3xl mx-auto">
            Choose The Perfect Plan For Your Business Needs
          </p>
        </motion.div>
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;