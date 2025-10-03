import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import AIAgents from './AIAgents';
import HowItWorks from './HowItWorks';
import Results from './Results';
import Pricing from './Pricing';
import ComingSoon from './ComingSoon';
import FinalCTA from './FinalCTA';
import ComplianceSection from './ComplianceSection';
import ContactForm from './ContactForm';

const Home: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <AIAgents />
        <HowItWorks />
        <Results />
        <Pricing />
        <ComingSoon />
        <FinalCTA />
      </main>
      
      <ComplianceSection />
      
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </div>
  );
};

export default Home;