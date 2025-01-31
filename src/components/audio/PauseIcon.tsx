import React from 'react';

interface PauseIconProps {
  className?: string;
}

const PauseIcon: React.FC<PauseIconProps> = ({ className = "w-16 h-16" }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="10" y1="8" x2="10" y2="16" />
      <line x1="14" y1="8" x2="14" y2="16" />
    </svg>
  );
};

export default PauseIcon;