import { NavigateFunction } from 'react-router-dom';

export const scrollToPricing = (navigate: NavigateFunction) => {
  // Check if we're already on the home page
  if (window.location.pathname === '/') {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Navigate to home page and then scroll to pricing
    navigate('/', { state: { scrollTo: 'pricing' } });
  }
};