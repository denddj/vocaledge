import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import FadeInSection from './animations/FadeInSection';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const scrollToBookCall = () => {
    navigate('/', { state: { scrollTo: 'book-call' } });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aqua-800/70 to-aqua-600/70 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-cream-50 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-cream-200 max-w-2xl mx-auto">
              We're here to help transform your customer service experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-cream-100">
            <div className="space-y-12">
              {/* Calendly Section */}
              <FadeInSection>
                <div className="text-center">
                  <div className="inline-block p-3 bg-aqua-100 rounded-full mb-4">
                    <FiCalendar className="w-8 h-8 text-aqua-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-aqua-900 mb-3">
                    Schedule a Discovery Call
                  </h2>
                  <p className="text-lg text-aqua-700 mb-6">
                    Book a 15-minute call with our team to explore how VocalEdge can transform your customer service
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToBookCall}
                    className="btn-primary"
                  >
                    Schedule Now
                  </motion.button>
                </div>
              </FadeInSection>

              {/* Email Section */}
              <FadeInSection delay={0.2}>
                <div className="text-center pt-8 border-t border-cream-200">
                  <div className="inline-block p-3 bg-aqua-100 rounded-full mb-4">
                    <FiMail className="w-8 h-8 text-aqua-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-aqua-900 mb-3">
                    Email Us
                  </h2>
                  <p className="text-lg text-aqua-700 mb-3">
                    For any inquiries, you can reach us at:
                  </p>
                  <a
                    href="mailto:support@vocaledge.co"
                    className="text-xl font-medium text-aqua-500 hover:text-aqua-600 transition-colors duration-300"
                  >
                    support@vocaledge.co
                  </a>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;