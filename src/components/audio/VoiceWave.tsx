import React from 'react';
import { motion } from 'framer-motion';
import type { VoiceWaveProps } from './types';

const VoiceWave: React.FC<VoiceWaveProps> = ({ isPlaying }) => {
  const innerBars = Array.from({ length: 24 }).map(() => 
    Math.random() * 12 + 12
  );
  const outerBars = Array.from({ length: 32 }).map(() => 
    Math.random() * 10 + 10
  );
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      {innerBars.map((baseHeight, index) => (
        <motion.div
          key={`inner-${index}`}
          initial={{ height: `${baseHeight}%`, opacity: 0.3 }}
          animate={isPlaying ? {
            height: [
              `${baseHeight}%`,
              `${baseHeight + 15}%`,
              `${baseHeight}%`,
              `${baseHeight - 5}%`,
              `${baseHeight}%`
            ],
            opacity: [0.4, 0.8, 0.6, 0.4, 0.4],
          } : { height: `${baseHeight}%`, opacity: 0.3 }}
          transition={{
            duration: 1.6,
            repeat: isPlaying ? Infinity : 0,
            delay: index * 0.05,
            ease: "easeInOut"
          }}
          className="absolute w-[1.5px] bg-cream-50/70 rounded-full origin-center"
          style={{
            transform: `rotate(${index * (360 / innerBars.length)}deg) translateY(-32px)`,
          }}
        />
      ))}
      
      {outerBars.map((baseHeight, index) => (
        <motion.div
          key={`outer-${index}`}
          initial={{ height: `${baseHeight}%`, opacity: 0.2 }}
          animate={isPlaying ? {
            height: [
              `${baseHeight}%`,
              `${baseHeight + 12}%`,
              `${baseHeight}%`,
              `${baseHeight - 4}%`,
              `${baseHeight}%`
            ],
            opacity: [0.3, 0.6, 0.4, 0.3, 0.3],
          } : { height: `${baseHeight}%`, opacity: 0.2 }}
          transition={{
            duration: 2,
            repeat: isPlaying ? Infinity : 0,
            delay: index * 0.03,
            ease: "easeInOut"
          }}
          className="absolute w-[1px] bg-cream-50/60 rounded-full origin-center"
          style={{
            transform: `rotate(${index * (360 / outerBars.length)}deg) translateY(-42px)`,
          }}
        />
      ))}
    </div>
  );
};

export default VoiceWave;