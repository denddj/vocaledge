import React from 'react';
import { FiClock, FiPhone, FiCalendar, FiMessageSquare, FiDatabase, FiTrendingUp } from 'react-icons/fi';

export interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: <FiPhone className="w-10 h-10" />,
    title: 'Instant Response',
    description: 'Answer and route calls immediately, eliminating customer wait times completely.'
  },
  {
    icon: <FiClock className="w-10 h-10" />,
    title: '24/7 Availability',
    description: 'Provide round-the-clock service, handling inquiries even during off-hours.'
  },
  {
    icon: <FiCalendar className="w-10 h-10" />,
    title: 'Smart Scheduling',
    description: 'Seamlessly manage appointments and bookings with intelligent calendar integration.'
  },
  {
    icon: <FiMessageSquare className="w-10 h-10" />,
    title: 'FAQ Handling',
    description: 'Efficiently answer common questions and provide instant information to customers.'
  },
  {
    icon: <FiDatabase className="w-10 h-10" />,
    title: 'Data Collection',
    description: 'Gather and organize customer information systematically for better service.'
  },
  {
    icon: <FiTrendingUp className="w-10 h-10" />,
    title: 'Scalable Solution',
    description: 'Handle increasing call volumes without compromising service quality.'
  }
];