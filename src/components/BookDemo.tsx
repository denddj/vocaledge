import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import aiAssistantImage from '../assets/images/ai-assistant.png';

const BookDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Triggering AI call with:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="demo-call" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-extrabold text-aqua-900 sm:text-5xl">
              Trigger the AI to Call You
            </h2>
            <p className="mt-4 text-xl text-aqua-700">
              Experience our AI voice agent firsthand by receiving a call right now
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 relative max-w-md mx-auto lg:mx-0"
            >
              <div className="relative w-64 h-64 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-aqua-400/50 to-aqua-600/50 rounded-full opacity-5 animate-pulse"></div>
                <img
                  src={aiAssistantImage}
                  alt="AI Assistant Visualization"
                  className="w-64 h-64 object-cover rounded-full border-4 border-aqua-500/20 shadow-xl"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 lg:left-32 transform -translate-x-1/2 bg-aqua-900/90 text-cream-50 px-6 py-3 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                "Hi! I'm ready to assist you"
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-cream-200/50">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-aqua-900">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-cream-200 shadow-sm focus:border-aqua-500 focus:ring-aqua-500 text-aqua-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-aqua-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-cream-200 shadow-sm focus:border-aqua-500 focus:ring-aqua-500 text-aqua-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-aqua-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-cream-200 shadow-sm focus:border-aqua-500 focus:ring-aqua-500 text-aqua-900"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-aqua-600 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3 hover:bg-aqua-700 transition-colors duration-300 shadow-lg"
                >
                  <FiPhone className="w-5 h-5" />
                  <span className="text-lg font-semibold">Call Me Now</span>
                </motion.button>
              </div>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-center text-aqua-600"
            >
              <p className="text-sm">Your information is secure • Call will be made immediately • No charge</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;