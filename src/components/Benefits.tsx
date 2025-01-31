import React from 'react';
import BenefitsGrid from './benefits/BenefitsGrid';
import SectionTitle from './common/SectionTitle';
import FadeInSection from './animations/FadeInSection';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white relative" id="benefits">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeInSection>
          <div className="text-center">
            <SectionTitle>What Can AI Voice Agents Do?</SectionTitle>
          </div>
        </FadeInSection>

        <BenefitsGrid />
      </div>
    </section>
  );
};

export default Benefits;