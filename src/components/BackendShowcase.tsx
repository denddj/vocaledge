import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import dashboardImage from '../assets/images/dashboard.png';
import customizeImage from '../assets/images/customize.png';

const slides = [
  {
    image: dashboardImage,
    title: 'Comprehensive Dashboard',
    description: 'Monitor and analyze your AI voice agents with our powerful dashboard.',
    features: ['Call Analytics', 'Call Duration', 'Call Logs', 'Recordings', 'Search Calls']
  },
  {
    image: customizeImage,
    title: 'Agent Customization',
    description: 'Create and customize your AI voice agents with our intuitive interface. Adjust voice parameters, conversation flows, and business logic to match your exact needs.'
  }
];

const BackendShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 11000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : 1));
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl font-extrabold text-aqua-900 sm:text-5xl">
            A Backend for All Needs
          </h2>
          <p className="mt-1 text-xl text-aqua-700 max-w-3xl mx-auto">
            Powerful tools to create, customize, and monitor your AI voice agents
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                  <div className="flex flex-col justify-center space-y-3">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-5 border border-cream-200/50">
                      <h3 className="text-2xl font-bold text-aqua-900 mb-2">
                        {slides[currentIndex].title}
                      </h3>
                      <p className="text-lg text-aqua-700 mb-2">
                        {slides[currentIndex].description}
                      </p>
                      {slides[currentIndex].features && (
                        <ul className="space-y-1.5">
                          {slides[currentIndex].features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-aqua-500"></span>
                              <span className="text-lg text-aqua-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="relative flex items-center">
                    <img
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                      className="rounded-xl shadow-xl w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-2">
            <button
              onClick={goToPrevious}
              className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-cream-200/50 text-aqua-600 hover:text-aqua-500 transition-all duration-300 transform hover:scale-110"
              aria-label="Previous slide"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-12 h-1.5 bg-aqua-500' 
                      : 'w-1.5 h-1.5 bg-aqua-200'
                  } rounded-full hover:bg-aqua-400`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-cream-200/50 text-aqua-600 hover:text-aqua-500 transition-all duration-300 transform hover:scale-110"
              aria-label="Next slide"
            >
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendShowcase;