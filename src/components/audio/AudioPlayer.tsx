import React from 'react';
import { motion } from 'framer-motion';
import PlayButton from './PlayButton';
import { useAudioState } from './hooks/useAudioState';
import { useAudioElement } from './hooks/useAudioElement';
import type { AudioPlayerProps } from './types';

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const {
    isPlaying,
    setIsPlaying,
    isLoaded,
    error,
    handleCanPlayThrough,
    handleError,
    handleEnded
  } = useAudioState();

  const audioRef = useAudioElement({
    audioUrl,
    onCanPlayThrough: handleCanPlayThrough,
    onError: handleError,
    onEnded: handleEnded
  });

  const togglePlay = async () => {
    if (!audioRef.current || !isLoaded) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          try {
            await playPromise;
            setIsPlaying(true);
          } catch (err) {
            console.error('Error playing audio:', err);
            handleError();
            setIsPlaying(false);
          }
        }
      }
    } catch (err) {
      console.error('Error playing audio:', err);
      handleError();
      setIsPlaying(false);
    }
  };

  if (error) {
    return (
      <div className="text-aqua-600 text-sm">
        Failed to load audio. Please try again.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      className="bg-aqua-900 rounded-full p-6"
    >
      <PlayButton isPlaying={isPlaying} onClick={togglePlay} />
    </motion.div>
  );
};

export default AudioPlayer;