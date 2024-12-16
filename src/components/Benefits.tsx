import React from 'react';
import { motion } from 'framer-motion';
import BenefitsGrid from './benefits/BenefitsGrid';
import SectionTitle from './common/SectionTitle';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-cream-50" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionTitle>What Can AI Voice Agents Do?</SectionTitle>
        </motion.div>

        <BenefitsGrid />
      </div>
    </section>
  );
};

export default Benefits;