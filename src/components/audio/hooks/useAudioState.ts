import { useState, useCallback } from 'react';

export const useAudioState = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCanPlayThrough = useCallback(() => {
    setIsLoaded(true);
    setError(null);
  }, []);

  const handleError = useCallback(() => {
    setError('Failed to load audio file');
    setIsLoaded(false);
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return {
    isPlaying,
    setIsPlaying,
    isLoaded,
    setIsLoaded,
    error,
    setError,
    handleCanPlayThrough,
    handleError,
    handleEnded
  };
};