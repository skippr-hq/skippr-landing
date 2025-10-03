import { useNavigate } from 'react-router-dom';

const Team: React.FC = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      emoji: "🎨",
      name: "UI",
      description: "Enforces design system, validates images/icons, ensures brand consistency, suggests animations & interactions",
    },
    {
      emoji: "📊",
      name: "Product Manager", 
      description: "Validates PRD alignment, tracks feature completeness, catches missing requirements",
    },
    {
      emoji: "🔬",
      name: "UX",
      description: "Tests user flows, identifies friction points, validates usability issues",
    },
    {
      emoji: "⚖️",
      name: "Policy",
      description: "Audits GDPR/CCPA compliance, flags privacy risks, ensures legal requirements",
    },
    {
      emoji: "♿",
      name: "Accessibility Expert",
      description: "Tests WCAG standards, screen reader support, fixes keyboard navigation",
    },
    {
      emoji: "✍️",
      name: "Copywriter",
      description: "Optimizes messaging clarity, brand voice, improves headlines and CTAs",
    },
    {
      emoji: "📈",
      name: "Product Growth",
      description: "Analyzes conversion blockers, funnel optimization, identifies A/B test opportunities",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      {/* Background patterns */}
      <div className="fixed inset-0 z-[-1] grid-pattern"></div>
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-[#0A0E27] via-fuchsia-900/10 to-[#0A0E27]"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
          >
            ← Back to Home
          </button>
          
          <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold leading-tight mb-6">
            Meet Your AI{' '}
            <span className="gradient-text">Product Team</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Each AI agent is specialized in their domain, trained on industry best practices, 
            and ready to collaborate with you on every aspect of product development.
          </p>
        </div>

        {/* Team Image Section */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
            <div className="relative glassmorphism rounded-2xl p-8 border border-purple-500/30">
              <img 
                src="/SkipprHPnew.png" 
                alt="Skippr AI Product Team - Creative, UX, PM, and Growth specialists"
                className="w-full max-w-5xl rounded-xl shadow-2xl object-cover"
                style={{
                  clipPath: 'inset(2px 2px 2px 2px)',
                  transform: 'scale(1.01)'
                }}
              />
              <div className="mt-4 text-center">
                <p className="text-slate-400">
                  Your dedicated AI product team working together seamlessly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="glassmorphism rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-3xl mb-4">{member.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-3">{member.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glassmorphism rounded-2xl p-8 border border-purple-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to work with your AI product team?</h2>
          <p className="text-slate-300 mb-6">Get started in minutes with our Chrome extension or IDE integration.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="cta-button font-bold py-3 px-8 rounded-lg text-lg"
            >
              Install Chrome Extension
            </a>
            <button
              onClick={() => navigate('/')}
              className="secondary-cta font-bold py-3 px-8 rounded-lg text-lg"
            >
              Get 15 Expert Free Review
            </button>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-bold text-white mb-4"># Quick setup</h3>
            <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg text-sm font-mono border border-gray-700">
              <code>
                <span className="text-[#16a34a]">npm install -g</span> <span className="text-white">@skippr/mcp</span>{'\n'}
                <span className="text-[#16a34a]">skippr connect</span> <span className="text-white">cursor</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;