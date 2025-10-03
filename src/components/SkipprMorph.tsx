const SkipprMorph: React.FC = () => {
  return (
    <section id="skippr-morph" className="py-20 px-8 bg-black border-t border-gray-800">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-4xl md:text-5xl text-white font-retro-heading">
            SKIPPR MORPH 🔮
          </h2>
          <p className="mt-2 text-[#00d9ff] text-xl font-semibold">Coming Soon</p>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            AI That Evolves Your Product While You Sleep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Variation Engine */}
          <div className="minimal-card">
            <h3 className="text-xl font-bold text-white mb-3">
              Variation Engine
            </h3>
            <p className="text-gray-400">
              Automatically generates A/B test variants based on what's working for top competitors and your user data
            </p>
          </div>

          {/* Next Feature Predictor */}
          <div className="minimal-card">
            <h3 className="text-xl font-bold text-white mb-3">
              Next Feature Predictor
            </h3>
            <p className="text-gray-400">
              AI analyzes user behavior and market trends to surface exactly what to build next
            </p>
          </div>

          {/* Conversion Optimizer */}
          <div className="minimal-card">
            <h3 className="text-xl font-bold text-white mb-3">
              Conversion Optimizer
            </h3>
            <p className="text-gray-400">
              Suggests micro-improvements that compound into major wins, backed by real performance data
            </p>
          </div>

          {/* One-Click Implementation */}
          <div className="minimal-card">
            <h3 className="text-xl font-bold text-white mb-3">
              One-Click Implementation
            </h3>
            <p className="text-gray-400">
              Not just ideas but actual code - Morph builds the features it recommends
            </p>
          </div>

          {/* User Delight Radar */}
          <div className="minimal-card md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-3">
              User Delight Radar
            </h3>
            <p className="text-gray-400">
              Identifies friction points and automatically proposes fixes that make users love your product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkipprMorph;
