import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-4xl font-extrabold text-aqua-900 sm:text-5xl">
      {children}
    </h2>
  );
};

export default SectionTitle;