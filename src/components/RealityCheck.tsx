const RealityCheck: React.FC = () => {
  return (
    <section id="roi-calculator" className="py-20 px-8 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Build Like Enterprise. Cost Like Startup.
        </h2>
        
        {/* Team Comparison */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Legacy Team */}
          <div className="minimal-card rounded-xl border border-red-500">
            <h3 className="text-2xl font-bold text-red-400 mb-2">Legacy Team: <span className="text-3xl font-mono">$2M/year</span></h3>
            <div className="space-y-3 text-gray-300 text-left mt-6">
              <p>13 people (PM, UX, QA, Legal, 8 devs...)</p>
              <p>Ships monthly</p>
              <p>Endless meetings</p>
            </div>
          </div>
          
          {/* AI-First Team */}
          <div className="minimal-card rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-2">AI-First Team: <span className="text-3xl font-mono">$301K/year</span></h3>
            <div className="space-y-3 text-gray-300 text-left mt-6">
              <p>2 devs + Claude Code + Skippr</p>
              <p>Ships daily</p>
              <p>Zero meetings</p>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center minimal-card rounded-xl max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold text-white">
            Save <span className="font-mono">$1.7M/year</span>. Ship 10x faster.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;