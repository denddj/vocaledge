import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToBookCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('demo-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[60vh] bg-white flex items-center pb-8"> {/* Reduced min-height and added smaller bottom padding */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative"> {/* Reduced padding */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-aqua-900 leading-tight mb-6">
            Enhancing Customer Engagement with{' '}
            <span className="bg-gradient-to-r from-aqua-600 to-aqua-400 bg-clip-text text-transparent">
              AI Voice Support
            </span>
          </h1>
          <p className="mt-4 text-xl text-aqua-700 max-w-2xl mx-auto mb-6"> {/* Reduced margin */}
            Transform your customer service with intelligent AI voice agents that handle calls 24/7
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#book-call"
              onClick={scrollToBookCall}
              className="btn-primary w-full sm:w-auto"
            >
              Get Started Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#demo-call"
              onClick={scrollToDemo}
              className="btn-secondary w-full sm:w-auto"
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