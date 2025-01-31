import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { PricingPlan } from './pricingData';
import FadeInSection from '../animations/FadeInSection';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  return (
    <FadeInSection delay={index * 0.2}>
      <motion.div
        whileHover={{ y: -5 }}
        className={`relative bg-cream-50 rounded-xl shadow-xl p-8 border ${
          plan.popular ? 'border-aqua-500' : 'border-cream-200'
        } flex flex-col h-full`}
      >
        {plan.popular && (
          <div className="absolute top-0 right-6 transform -translate-y-1/2">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-aqua-500 text-white">
              Most Popular
            </span>
          </div>
        )}
        <h3 className="text-2xl font-bold text-aqua-900">{plan.name}</h3>
        <div className="mt-4">
          <div className="flex items-baseline">
            <span className="text-5xl font-extrabold text-aqua-800">{plan.price}</span>
            <span className="ml-1 text-xl font-semibold text-aqua-600">{plan.period}</span>
          </div>
          {plan.setupFee && (
            <p className="mt-2 text-sm text-aqua-600">Setup Fee: {plan.setupFee}</p>
          )}
          {plan.usageFee && (
            <p className="text-sm text-aqua-600">{plan.usageFee} Per Minute Usage Fee</p>
          )}
        </div>
        <p className="mt-4 text-lg text-aqua-700">{plan.description}</p>
        <ul className="mt-8 space-y-5 flex-grow">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <FiCheck className="flex-shrink-0 w-6 h-6 text-aqua-500" />
              <span className="ml-3 text-lg text-aqua-700">{feature}</span>
            </li>
          ))}
        </ul>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 w-full rounded-lg py-4 px-6 text-lg font-semibold transition-colors duration-300 bg-aqua-600 text-white hover:bg-aqua-700"
        >
          Get Started
        </motion.button>
      </motion.div>
    </FadeInSection>
  );
};

export default PricingCard;