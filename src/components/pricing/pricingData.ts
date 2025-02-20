export interface PricingFeature {
  text: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  setupFee?: string;
  usageFee?: string;
  popular?: boolean;
}

export const plans: PricingPlan[] = [
  {
    name: 'Professional',
    price: '$449',
    period: '/month',
    description: 'Ideal For Growing Companies',
    setupFee: '$1,149',
    usageFee: '$0.40',
    features: [
      '24/7 Priority Support',
      'Custom Voice Personality',
      'Any Language',
      'Smooth CRM Integration',
      'Rigorous Testing',
      'Latest AI Models'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For Large Organizations',
    features: [
      'Unlimited Calls',
      '24/7 Priority Support',
      'Weekly Development Calls',
      'Custom Voice Personality',
      'Any Language',
      'Smooth CRM Integration',
      'Rigorous Testing',
      'Latest AI Models'
    ]
  }
];