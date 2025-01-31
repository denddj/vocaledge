import React from 'react';
import { Link } from 'react-router-dom';
import { useImage } from '../../hooks/useImage';
import logoImage from '../../assets/images/transparent-logo.png';

interface LogoProps {
  linkClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  linkClassName = "flex items-center" 
}) => {
  const { loaded, error } = useImage(logoImage);

  if (error) {
    console.error('Error loading logo image:', error);
    return null;
  }

  return (
    <Link to="/" className={linkClassName}>
      {loaded && (
        <img 
          src={logoImage}
          alt="VocalEdge Solutions"
          className="w-auto h-[120px] object-contain"
          style={{ 
            objectFit: 'contain',
            objectPosition: 'center',
            marginTop: '-30px',
            marginBottom: '-30px'
          }}
        />
      )}
    </Link>
  );
};

export default Logo;