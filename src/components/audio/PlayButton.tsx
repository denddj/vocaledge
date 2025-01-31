import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlayIcon from './icons/PlayIcon';
import VoiceWave from './VoiceWave';
import type { PlayButtonProps } from './types';

const PlayButton: React.FC<PlayButtonProps> = ({ isPlaying, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative w-32 h-32 flex items-center justify-center"
    >
      <div className="absolute inset-[-24px]">
        <VoiceWave isPlaying={isPlaying} />
      </div>
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            key="play"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 text-cream-50"
          >
            <PlayIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default PlayButton;