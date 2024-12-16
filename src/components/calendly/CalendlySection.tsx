import React from 'react';
import CalendlyWidget from './CalendlyWidget';

const CALENDLY_URL = "https://calendly.com/dennis-vocaledge/15min";

const CalendlySection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-8">
      <CalendlyWidget url={CALENDLY_URL} />
    </div>
  );
};

export default CalendlySection;