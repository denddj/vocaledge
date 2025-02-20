import React, { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  height?: number;
  minWidth?: number;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  url,
  height = 700,
  minWidth = 320
}) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
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
      data-url={url}
      style={{ 
        minWidth: `${minWidth}px`,
        height: `${height}px`
      }}
    />
  );
};

export default CalendlyWidget;