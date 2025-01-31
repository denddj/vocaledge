import React from 'react';

interface PlayIconProps {
  className?: string;
}

const PlayIcon: React.FC<PlayIconProps> = ({ className = "w-16 h-16" }) => {
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
      <polygon 
        points="10,8 16,12 10,16" 
        fill="currentColor" 
        stroke="none"
      />
    </svg>
  );
};

export default PlayIcon;