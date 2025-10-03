const ComingSoon: React.FC = () => {
  return (
    <section id="coming-soon" className="py-20 px-8 bg-black border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-3xl md:text-4xl text-white font-retro-heading mb-2">
            COMING SOON
          </h2>
          <p className="text-gray-400">Next generation AI agents to supercharge your product workflow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SKIPPR SYNTH */}
          <div className="minimal-card">
            <h3 className="font-extrabold text-2xl md:text-3xl text-white font-retro-heading mb-2">
              SKIPPR SYNTH 🎨
            </h3>
            <p className="text-[#00d9ff] font-semibold mb-4">AI Agents That Fuel Your Creative Vision</p>

            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Instant inspiration briefs from top products</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Reference mining from best designs worldwide</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Transform vague ideas into crystal-clear specs</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Real-time coding companions with context-aware suggestions</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Auto-documentation with instant specs and user stories</span>
              </li>
            </ul>

            <button className="mt-6 w-full secondary-cta">
              Join the Waiting List
            </button>
          </div>

          {/* SKIPPR MORPH */}
          <div className="minimal-card">
            <h3 className="font-extrabold text-2xl md:text-3xl text-white font-retro-heading mb-2">
              SKIPPR MORPH 🔮
            </h3>
            <p className="text-[#00d9ff] font-semibold mb-4">AI That Evolves Your Product While You Sleep</p>

            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Auto-generate A/B test variants from competitor insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Predict next features from user behavior and trends</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Suggest micro-improvements backed by real data</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>One-click implementation with actual code</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Identify friction points and auto-propose fixes</span>
              </li>
            </ul>

            <button className="mt-6 w-full secondary-cta">
              Join the Waiting List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
