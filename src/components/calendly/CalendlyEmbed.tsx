import React, { useEffect } from 'react';

const CalendlyEmbed: React.FC = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/dennis-vocaledge/15min"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

export default CalendlyEmbed;