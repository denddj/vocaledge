import React from 'react';
import faviconImage from '../../assets/images/favicon.png';

const Favicon: React.FC = () => {
  React.useEffect(() => {
    // Helper function to create or update link elements
    const createOrUpdateLink = (rel: string, sizes?: string) => {
      const existingLink = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ''}`);
      
      if (existingLink) {
        existingLink.href = faviconImage;
      } else {
        const newLink = document.createElement('link');
        newLink.rel = rel;
        newLink.href = faviconImage;
        if (sizes) {
          newLink.setAttribute('sizes', sizes);
        }
        document.head.appendChild(newLink);
      }
    };

    // Standard favicon
    createOrUpdateLink('icon');

    // Apple Touch Icon
    createOrUpdateLink('apple-touch-icon', '180x180');

    // Different sizes for better device support
    ['16x16', '32x32'].forEach(size => {
      createOrUpdateLink('icon', size);
    });
  }, []);

  return null;
};

export default Favicon;