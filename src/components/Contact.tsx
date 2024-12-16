import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const scrollToBookCall = () => {
    navigate('/', { state: { scrollTo: 'book-call' } });
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Reduced padding in hero section */}
      <section className="bg-gradient-to-r from-aqua-800/70 to-aqua-600/70 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-cream-50 mb-3">
              Get in Touch
            </h1>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              We're here to help transform your customer service experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reduced padding in main section */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-cream-100">
            <div className="space-y-8">
              {/* Calendly Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="inline-block p-2 bg-aqua-100 rounded-full mb-3">
                  <FiCalendar className="w-6 h-6 text-aqua-600" />
                </div>
                <h2 className="text-xl font-bold text-aqua-900 mb-2">
                  Schedule a Discovery Call
                </h2>
                <p className="text-sm text-aqua-700 mb-4">
                  Book a 15-minute call with our team to explore how VocalEdge can transform your customer service
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToBookCall}
                  className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-aqua-600 hover:bg-aqua-700 transition-colors duration-300 shadow-lg"
                >
                  Schedule Now
                </motion.button>
              </motion.div>

              {/* Email Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center pt-6 border-t border-cream-200"
              >
                <div className="inline-block p-2 bg-aqua-100 rounded-full mb-3">
                  <FiMail className="w-6 h-6 text-aqua-600" />
                </div>
                <h2 className="text-xl font-bold text-aqua-900 mb-2">
                  Email Us
                </h2>
                <p className="text-sm text-aqua-700 mb-2">
                  For any inquiries, you can reach us at:
                </p>
                <a
                  href="mailto:support@vocaledge.co"
                  className="text-base font-medium text-aqua-500 hover:text-aqua-600 transition-colors duration-300"
                >
                  support@vocaledge.co
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;