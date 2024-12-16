import React from 'react';
import { motion } from 'framer-motion';
import { Benefit } from './benefitsData';

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-xl p-8 border border-cream-100 hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="text-aqua-500 mb-6">{benefit.icon}</div>
      <h3 className="text-2xl font-bold text-aqua-900 mb-4">
        {benefit.title}
      </h3>
      <p className="text-lg text-aqua-700 flex-grow">
        {benefit.description}
      </p>
    </motion.div>
  );
};

export default BenefitCard;