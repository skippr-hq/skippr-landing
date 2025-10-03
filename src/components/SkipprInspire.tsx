const SkipprInspire: React.FC = () => {
  return (
    <section id="skippr-inspire" className="py-20 px-8 bg-black border-t border-gray-800">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-4xl md:text-5xl text-white font-retro-heading">
            SKIPPR SYNTH 🎨
          </h2>
          <p className="mt-2 text-[#00d9ff] text-xl font-semibold">Coming Soon</p>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            AI Agents That Fuel Your Creative Vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Instant Inspiration Briefs */}
          <div className="minimal-card">
            <h3 className="text-xl font-bold text-white mb-3">
              Instant Inspiration Briefs
            </h3>
            <p className="text-gray-400">
              What takes teams 3 days now takes 3 minutes. AI agents scan top products and synthesize perfect creative direction
            </p>
          </div>

          {/* Reference Mining on Steroids */}
          <div className="minimal-card">
            <h3 className="text-xl font-bold text-white mb-3">
              Reference Mining on Steroids
            </h3>
            <p className="text-gray-400">
              Agents pull from the best designs worldwide, bringing you curated inspiration from products that actually convert
            </p>
          </div>

          {/* Creative Brief Rewriter */}
          <div className="minimal-card">
            <h3 className="text-xl font-bold text-white mb-3">
              Creative Brief Rewriter
            </h3>
            <p className="text-gray-400">
              Transform vague ideas into crystal-clear product specs with AI that thinks like your best strategist
            </p>
          </div>

          {/* Coding Companions */}
          <div className="minimal-card">
            <h3 className="text-xl font-bold text-white mb-3">
              Coding Companions
            </h3>
            <p className="text-gray-400">
              Real-time agents that guide your implementation with context-aware suggestions from successful patterns
            </p>
          </div>

          {/* Auto-Documentation */}
          <div className="minimal-card md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-3">
              Auto-Documentation
            </h3>
            <p className="text-gray-400">
              Every inspiration becomes actionable with instant specs, user stories, and implementation guides
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkipprInspire;
