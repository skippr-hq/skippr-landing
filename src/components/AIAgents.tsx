
import React, { useState, useEffect } from 'react';

interface Agent {
  name: string;
  displayName: string;
  image: string;
  description: string;
}

const agents: Agent[] = [
  {
    name: 'UI',
    displayName: 'UI/UX Expert',
    image: '/Experts images/UI.png',
    description: 'Perfects visual hierarchy, spacing, and user flows. Validates layouts, interaction patterns, and ensures every feature feels intuitive and delightful to use.',
  },
  {
    name: 'Growth',
    displayName: 'Product & Growth',
    image: '/Experts images/Growth.png',
    description: 'Validates feature completeness, business logic, and optimizes conversion funnels. Ensures what you\'re building matches user needs while maximizing engagement.',
  },
  {
    name: 'Policy',
    displayName: 'Policy Manager',
    image: '/Experts images/Policy.png',
    description: 'Monitors compliance with privacy laws, terms of service, and regulations. Flags GDPR, CCPA, and data handling issues before they become problems.',
  },
  {
    name: 'A11y',
    displayName: 'A11y Specialist',
    image: '/Experts images/A11y.png',
    description: 'Champions WCAG compliance and inclusive design patterns. Catches accessibility issues from keyboard navigation to screen reader support.',
  },
  {
    name: 'Copy',
    displayName: 'Content Manager',
    image: '/Experts images/Copy.png',
    description: 'Ensures copy consistency, brand voice, and content quality across your product. Guards everything from microcopy to alt text to image appropriateness.',
  },
];

const AIAgents: React.FC = () => {
  const [currentAgent, setCurrentAgent] = useState(0);
  const [nextAgent, setNextAgent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-transition every 3 seconds with smooth cross-fade
  useEffect(() => {
    const interval = setInterval(() => {
      setNextAgent((currentAgent + 1) % agents.length);
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentAgent((prev) => (prev + 1) % agents.length);
        setIsTransitioning(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentAgent]);


  return (
    <section id="team" className="py-24 px-8 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="font-extrabold text-5xl md:text-6xl text-white mb-6 font-retro-heading">
          Every product skill, built in
        </h2>
        <p className="text-xl text-gray-400 mb-16">
          These AI experts don't just review — they enrich and upgrade your product pre-commit
        </p>
        
        {/* Gallery Card */}
        <div className="relative max-w-6xl mx-auto">
          <div className="minimal-card rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-[47vh]">
              {/* Text Section - 50% of screen */}
              <div className="relative p-10 flex flex-col text-left" style={{paddingTop: "20%"}}>
                {/* Current agent text */}
                <div className={`absolute inset-0 p-10 flex flex-col text-left transition-opacity duration-2000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} style={{paddingTop: "20%"}}>
                  <h3 className="text-4xl font-bold text-white mb-8">{agents[currentAgent].displayName}</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">{agents[currentAgent].description}</p>
                </div>
                {/* Next agent text (for cross-fade) */}
                <div className={`absolute inset-0 p-10 flex flex-col text-left transition-opacity duration-2000 ease-in-out ${isTransitioning ? 'opacity-100' : 'opacity-0'}`} style={{paddingTop: "20%"}}>
                  <h3 className="text-4xl font-bold text-white mb-8">{agents[nextAgent].displayName}</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">{agents[nextAgent].description}</p>
                </div>
              </div>
              
              {/* Image Section - 50% of screen */}
              <div className="relative p-10">
                {/* Current agent image */}
                <div className={`absolute inset-10 transition-opacity duration-2000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                  <img 
                    src={agents[currentAgent].image}
                    alt={agents[currentAgent].displayName}
                    className="w-full object-cover rounded-3xl"
                    style={{height: 'calc(100% - 1rem)'}}
                  />
                  <div className="absolute bottom-3 right-3 bg-black/80 text-gray-300 px-4 py-2 rounded-lg text-base font-semibold">
                    {agents[currentAgent].name}
                  </div>
                </div>
                {/* Next agent image (for cross-fade) */}
                <div className={`absolute inset-10 transition-opacity duration-2000 ease-in-out ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
                  <img 
                    src={agents[nextAgent].image}
                    alt={agents[nextAgent].displayName}
                    className="w-full object-cover rounded-3xl"
                    style={{height: 'calc(100% - 1rem)'}}
                  />
                  <div className="absolute bottom-3 right-3 bg-black/80 text-gray-300 px-4 py-2 rounded-lg text-base font-semibold">
                    {agents[nextAgent].name}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {agents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAgent(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  index === currentAgent ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgents;