import { useEffect, useRef } from 'react';

interface UseAudioElementProps {
  audioUrl: string;
  onCanPlayThrough: () => void;
  onError: () => void;
  onEnded: () => void;
}

export const useAudioElement = ({
  audioUrl,
  onCanPlayThrough,
  onError,
  onEnded
}: UseAudioElementProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = new Audio(audioUrl);
    
    audioElement.addEventListener('canplaythrough', onCanPlayThrough);
    audioElement.addEventListener('error', onError);
    audioElement.addEventListener('ended', onEnded);

    audioRef.current = audioElement;

    return () => {
      audioElement.removeEventListener('canplaythrough', onCanPlayThrough);
      audioElement.removeEventListener('error', onError);
      audioElement.removeEventListener('ended', onEnded);
      audioElement.pause();
    };
  }, [audioUrl, onCanPlayThrough, onError, onEnded]);

  return audioRef;
};