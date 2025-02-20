import React from 'react';
import { motion } from 'framer-motion';
import AudioPlayer from './audio/AudioPlayer';
import demoAudio from '@assets/audio/demo-call.mp3';

const AudioDemo: React.FC = () => {
  return (
    <section className="pt-4 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-aqua-900 sm:text-3xl mb-4">
            Experience Our AI Voice Agent
          </h2>
          <p className="text-base text-aqua-700 max-w-xl mx-auto mb-6">
            Listen to a real conversation between our AI voice agent and a customer
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <AudioPlayer audioUrl={demoAudio} />
            
            <p className="mt-3 text-aqua-700 text-sm font-medium">
              Click to play demo
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-aqua-500 rounded-full"></span>
              <span className="text-sm text-aqua-700">Natural conversation flow</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-aqua-500 rounded-full"></span>
              <span className="text-sm text-aqua-700">Complex inquiry handling</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-aqua-500 rounded-full"></span>
              <span className="text-sm text-aqua-700">Seamless scheduling</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AudioDemo;