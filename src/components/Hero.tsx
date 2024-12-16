import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToBookCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('demo-call');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-aqua-800/70 to-aqua-600/70 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-cream-50 leading-tight">
            Enhancing Customer Engagement with{' '}
            <span className="bg-gradient-to-r from-cream-200 to-cream-50 bg-clip-text text-transparent">
              AI Voice Support
            </span>
          </h1>
          <p className="mt-4 text-lg text-cream-200 max-w-2xl mx-auto">
            Transform your customer service with intelligent AI voice agents that handle calls 24/7
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#book-call"
              onClick={scrollToBookCall}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-aqua-900 bg-cream-50 hover:bg-cream-100 transition-colors duration-300 shadow-lg"
            >
              Get Started
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#demo-call"
              onClick={scrollToDemo}
              className="inline-flex items-center px-6 py-3 border border-cream-200 text-base font-medium rounded-lg text-cream-50 hover:bg-aqua-800/50 transition-colors duration-300 shadow-lg"
            >
              Try Demo Call
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;