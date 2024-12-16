import React from 'react';
import { Testimonial } from '../../types/testimonial';

interface TestimonialQuoteProps {
  testimonial: Testimonial;
}

export const TestimonialQuote: React.FC<TestimonialQuoteProps> = ({ testimonial }) => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4">
        <svg className="w-8 h-8 mx-auto text-aqua-400 opacity-25" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-lg md:text-xl font-medium text-cream-50 mb-4">
        {testimonial.quote}
      </p>
      <div className="text-cream-200">
        <p className="font-semibold">{testimonial.author}</p>
        <p className="text-sm">{testimonial.role}</p>
        <p className="text-aqua-400 font-medium mt-1">{testimonial.company}</p>
      </div>
    </div>
  );
};

export default TestimonialQuote;