import { useEffect, useState } from 'react';

const HowItWorks: React.FC = () => {
  const [, setHighlightSection] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#onscreen' || hash === '#oncode') {
        setHighlightSection(hash.substring(1));
        // Remove highlight after 3 seconds
        setTimeout(() => setHighlightSection(null), 3000);
      }
    };

    // Check initial hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="how-it-works" className="py-20 px-8 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="font-extrabold text-4xl md:text-5xl text-white font-retro-heading">
          How it works
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          Skippr X-Ray operates where you work. Nothing bad ever makes it to production.
        </p>
        
        <div className="mt-12 max-w-4xl mx-auto text-left">
          {/* Skippr onScreen */}
          <div 
            id="onscreen"
            className="minimal-card p-8 rounded-xl transition-all duration-200"
          >
            <h3 className="text-2xl font-bold text-white font-retro-heading">
              How Skippr X-Ray Works
            </h3>
            <p className="text-gray-400 mt-1">Visual analysis and expert feedback across your development workflow</p>
            
            <ol className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="font-bold text-white">1.</span>
                <div>
                  <h4 className="font-bold text-white">Install & Connect</h4>
                  <p className="text-gray-400">Add the browser extension or connect via CLI/IDE extension to your coding agents</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-white">2.</span>
                <div>
                  <h4 className="font-bold text-white">Visual Analysis</h4>
                  <p className="text-gray-400">Skippr X-Ray analyzes your UI in real-time, catching UX flaws, accessibility issues, and design breaks</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-white">3.</span>
                <div>
                  <h4 className="font-bold text-white">Expert Feedback</h4>
                  <p className="text-gray-400">5 AI experts (UI/UX, Growth, Policy, Accessibility, Content) provide instant feedback</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-white">4.</span>
                <div>
                  <h4 className="font-bold text-white">Integration</h4>
                  <p className="text-gray-400">Get feedback directly in your IDE, via MCP to coding agents, or through browser extension</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-white">5.</span>
                <div>
                  <h4 className="font-bold text-white">Ship Better</h4>
                  <p className="text-gray-400">Fix issues before they reach production. Ship like top teams with automated expert review.</p>
                </div>
              </li>
            </ol>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Browser Extension</h4>
                <p className="text-gray-400">Visual analysis directly on localhost, staging, and production</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">CLI/IDE Integration</h4>
                <p className="text-gray-400">Real-time feedback in your development environment</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">MCP Protocol</h4>
                <p className="text-gray-400">Connect to any AI coding agent via Model Context Protocol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;