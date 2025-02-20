import { useState, useEffect } from 'react';

interface UseImageReturn {
  loaded: boolean;
  error: Error | null;
}

export const useImage = (src: string): UseImageReturn => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setLoaded(true);
      setError(null);
    };

    img.onerror = () => {
      setError(new Error(`Failed to load image: ${src}`));
      setLoaded(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { loaded, error };
};