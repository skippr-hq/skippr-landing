import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
  ctaText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Skippr X-Ray Starter',
    price: '$0',
    description: 'Try before you buy.',
    features: ['15 actions/month'],
    ctaText: 'Start Free'
  },
  {
    name: 'Pro',
    price: '$19.99',
    description: 'Costs less than one hour of a junior designer.',
    features: ['Unlimited enrichments', 'All 7 agents'],
    isRecommended: true,
    ctaText: 'Go Pro'
  },
  {
    name: 'Team',
    price: '$29.99',
    description: 'Per member. For collaborating teams.',
    features: ['Everything in Pro', 'Shared knowledge base', 'Team dashboard'],
    ctaText: 'Contact Sales'
  },
  {
    name: 'Enterprise and vibe Platforms',
    price: 'Custom',
    description: 'Embed Skippr X-Ray in your platform.',
    features: ['Your compliance rules', 'Custom training', 'SSO/SAML'],
    ctaText: 'Contact Sales'
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-8 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="font-extrabold text-4xl md:text-5xl text-white">
          Investment in Product Excellence
        </h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`minimal-card flex flex-col relative ${
                tier.isRecommended ? 'border-white' : ''
              }`}
            >
              {tier.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 cta-button text-xs px-4 py-2 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-3xl font-bold text-white">{tier.name}</h3>
              <p className="text-5xl font-bold my-4 text-white">
                {tier.price}
                {tier.price !== 'Custom' && tier.price !== '$0' && (
                  <span className="text-lg font-normal text-gray-400">/mo</span>
                )}
              </p>
              <p className="text-gray-300">{tier.description}</p>
              
              <ul className="mt-6 space-y-3 text-left flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-white flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {tier.name === 'Enterprise and vibe Platforms' ? (
                <div className="mt-8">
                  <div className="relative group mb-4">
                    <button className="w-full text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 px-4 rounded border border-gray-600 hover:border-gray-500">
                      vibe.api
                    </button>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-yellow-400 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      Coming Soon
                    </div>
                  </div>
                  <a
                    href="#"
                    className="block w-full font-bold py-3 px-6 rounded-lg text-lg secondary-cta"
                  >
                    {tier.ctaText}
                  </a>
                </div>
              ) : (
                <a
                  href="#"
                  className="mt-8 block w-full font-bold py-3 px-6 rounded-lg text-lg secondary-cta"
                >
                  {tier.ctaText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;