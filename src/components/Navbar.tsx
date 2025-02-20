import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import Logo from './common/Logo';
import { scrollToPricing } from '../utils/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToPricing(navigate);
    setIsOpen(false);
  };

  return (
    <nav className={`transition-all duration-300 ${isSticky ? 'navbar-sticky' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-aqua-700 hover:text-aqua-500 font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/services" className="text-aqua-700 hover:text-aqua-500 font-medium transition-colors duration-300">
              Services
            </Link>
            <a
              href="#pricing"
              onClick={handlePricingClick}
              className="text-aqua-700 hover:text-aqua-500 font-medium transition-colors duration-300"
            >
              Pricing
            </a>
            <Link to="/contact" className="text-aqua-700 hover:text-aqua-500 font-medium transition-colors duration-300">
              Contact
            </Link>
            <a
              href="#book-call"
              className="btn-primary py-2 px-4 transform hover:scale-105 transition-all duration-300"
            >
              Book a Call
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-aqua-700 hover:text-aqua-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-aqua-700 hover:text-aqua-500 hover:bg-gray-50 transition-colors duration-300">
              Home
            </Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-aqua-700 hover:text-aqua-500 hover:bg-gray-50 transition-colors duration-300">
              Services
            </Link>
            <a
              href="#pricing"
              onClick={handlePricingClick}
              className="block px-3 py-2 rounded-md text-aqua-700 hover:text-aqua-500 hover:bg-gray-50 transition-colors duration-300"
            >
              Pricing
            </a>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-aqua-700 hover:text-aqua-500 hover:bg-gray-50 transition-colors duration-300">
              Contact
            </Link>
            <a
              href="#book-call"
              className="block px-3 py-2 rounded-md bg-aqua-600 text-white hover:bg-aqua-700 transition-colors duration-300"
            >
              Book a Call
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;