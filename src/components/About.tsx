import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiDatabase, FiPhoneCall, FiMessageSquare, FiMic, FiGlobe } from 'react-icons/fi';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-cream-50 mb-6">
              Transforming Customer Service with AI Voice Agents
            </h1>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              Empowering businesses with intelligent, natural-sounding AI voice agents that handle customer interactions 24/7
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Core Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-cream-100"
            >
              <FiPhoneCall className="w-10 h-10 text-aqua-600 mb-4" />
              <h3 className="text-xl font-bold text-aqua-900 mb-2">Inbound Call Management</h3>
              <p className="text-aqua-700">Intelligent routing and handling of customer calls with natural conversation flow</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-cream-100"
            >
              <FiClock className="w-10 h-10 text-aqua-600 mb-4" />
              <h3 className="text-xl font-bold text-aqua-900 mb-2">24/7 Availability</h3>
              <p className="text-aqua-700">Round-the-clock service handling appointments and inquiries even after hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-cream-100"
            >
              <FiMessageSquare className="w-10 h-10 text-aqua-600 mb-4" />
              <h3 className="text-xl font-bold text-aqua-900 mb-2">FAQ Handling</h3>
              <p className="text-aqua-700">Comprehensive response system for common customer questions and concerns</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-cream-100"
            >
              <FiDatabase className="w-10 h-10 text-aqua-600 mb-4" />
              <h3 className="text-xl font-bold text-aqua-900 mb-2">CRM Integration</h3>
              <p className="text-aqua-700">Seamless integration with existing business systems and data management</p>
            </motion.div>
          </div>

          {/* Voice Customization Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-cream-100 mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <FiMic className="w-8 h-8 text-aqua-600" />
                  <h2 className="text-3xl font-bold text-aqua-900">Personalized Voice Experience</h2>
                </div>
                <p className="text-lg text-aqua-700 mb-8">
                  Create the perfect voice personality for your brand with our customizable AI voice agents. Choose from a variety of voice styles, accents, and personalities that align with your company's identity and values.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-aqua-100 text-aqua-600">✓</span>
                    <span className="text-aqua-700">Multiple voice personalities and styles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-aqua-100 text-aqua-600">✓</span>
                    <span className="text-aqua-700">Customizable tone and speaking pace</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-aqua-100 text-aqua-600">✓</span>
                    <span className="text-aqua-700">Brand-aligned conversation style</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <FiGlobe className="w-8 h-8 text-aqua-600" />
                  <h2 className="text-3xl font-bold text-aqua-900">Multilingual Support</h2>
                </div>
                <p className="text-lg text-aqua-700 mb-8">
                  Break language barriers and expand your reach with our multilingual AI voice agents. Serve customers in their preferred language while maintaining the same high level of service quality.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-aqua-100 text-aqua-600">✓</span>
                    <span className="text-aqua-700">Support for major world languages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-aqua-100 text-aqua-600">✓</span>
                    <span className="text-aqua-700">Natural accent and pronunciation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-aqua-100 text-aqua-600">✓</span>
                    <span className="text-aqua-700">Real-time language switching</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Industry-Agnostic Solution */}
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-cream-100"
            >
              <h2 className="text-3xl font-bold text-aqua-900 mb-6">Industry-Agnostic Solution</h2>
              <p className="text-lg text-aqua-700">
                Our AI voice agents adapt to any industry, from healthcare to retail, providing consistent, 
                high-quality customer service that matches your brand's voice and values. Whether you're a small 
                business or a large enterprise, our solution scales with your needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-cream-100"
            >
              <h2 className="text-3xl font-bold text-aqua-900 mb-6">Seamless Integration</h2>
              <p className="text-lg text-aqua-700 mb-6">
                Our AI voice agents integrate smoothly with your existing CRM and business systems, ensuring 
                all customer interactions are properly logged and accessible. This creates a unified customer 
                service experience where no information is lost between channels.
              </p>
              <ul className="space-y-4 text-aqua-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-aqua-100 text-aqua-600 mr-3">✓</span>
                  Real-time data synchronization with your CRM
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-aqua-100 text-aqua-600 mr-3">✓</span>
                  Automated appointment scheduling and calendar management
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-aqua-100 text-aqua-600 mr-3">✓</span>
                  Custom workflow automation and business logic
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;