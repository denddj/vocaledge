import React from 'react';
import { motion } from 'framer-motion';
import AudioPlayer from './audio/AudioPlayer';
import demoAudio from '@assets/audio/demo-call.mp3';

const AudioDemo: React.FC = () => {
  return (
    <section className="py-12 bg-aqua-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-cream-50 rounded-xl shadow-lg p-6 sm:p-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-aqua-900 sm:text-3xl">
              Experience Our AI Voice Agent
            </h2>
            <p className="mt-2 text-base text-aqua-700 max-w-xl mx-auto">
              Listen to a real conversation between our AI voice agent and a customer
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex flex-col items-center"
          >
            <AudioPlayer audioUrl={demoAudio} />
            
            <p className="mt-3 text-aqua-700 text-sm font-medium">
              Click to play demo
            </p>
          </motion.div>

          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 max-w-xl mx-auto border border-cream-200">
            <h3 className="text-base font-semibold text-aqua-900 mb-2">
              In this demo, you'll hear:
            </h3>
            <ul className="space-y-1.5 text-sm text-aqua-700">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-aqua-500 rounded-full mr-2"></span>
                Natural conversation flow and voice quality
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-aqua-500 rounded-full mr-2"></span>
                Complex inquiry handling and problem resolution
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-aqua-500 rounded-full mr-2"></span>
                Seamless appointment scheduling process
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AudioDemo;