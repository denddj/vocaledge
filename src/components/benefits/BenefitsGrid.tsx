import React from 'react';
import BenefitCard from './BenefitCard';
import { benefits } from './benefitsData';

const BenefitsGrid: React.FC = () => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          benefit={benefit}
          index={index}
        />
      ))}
    </div>
  );
};

export default BenefitsGrid;