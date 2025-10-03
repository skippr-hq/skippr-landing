
interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Caught a critical UX issue that would've taken weeks to fix post-launch.",
    author: "CTO, B2B SaaS"
  },
  {
    quote: "Conversion rate up 23% from daily micro-optimizations Skippr X-Ray suggests.",
    author: "Growth Lead, E-commerce Startup"
  },
  {
    quote: "Finally shipping with consistent copy and design across every screen.",
    author: "Head of Product, FinTech"
  },
  {
    quote: "Found 12 edge cases I would've missed. Saved 3 weeks of post-launch fixes.",
    author: "Engineering Lead, Developer Tools"
  },
  {
    quote: "Like having a senior PM reviewing every commit. The feedback loop is addictive.",
    author: "Solo Founder"
  }
];

const Results: React.FC = () => {
  return (
    <section id="results" className="py-20 px-8 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="font-extrabold text-4xl md:text-5xl text-white font-retro-heading">
          Honestly. Don't ship without Skippr X-Ray...
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Ship Time */}
          <div className="minimal-card text-center">
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Ship Time</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Without Skippr X-Ray</span>
                <span className="text-gray-500 font-mono text-lg">3 weeks</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">With Skippr X-Ray</span>
                <span className="text-white font-mono text-2xl font-bold">3 days</span>
              </div>
              <div className="text-center pt-2">
                <span className="text-white text-3xl font-bold">7x</span>
                <p className="text-gray-400 text-sm">faster</p>
              </div>
            </div>
          </div>

          {/* Post-launch Fixes */}
          <div className="minimal-card text-center">
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Post-launch Fixes</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Without Skippr X-Ray</span>
                <span className="text-gray-500 font-mono text-lg">47 issues</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">With Skippr X-Ray</span>
                <span className="text-white font-mono text-2xl font-bold">0 issues</span>
              </div>
              <div className="text-center pt-2">
                <span className="text-white text-3xl font-bold">100%</span>
                <p className="text-gray-400 text-sm">reduction</p>
              </div>
            </div>
          </div>

          {/* User Rating */}
          <div className="minimal-card text-center">
            <h3 className="text-lg font-semibold text-gray-400 mb-4">User Rating</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Without Skippr X-Ray</span>
                <span className="text-gray-500 font-mono text-lg">2.8 ★</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">With Skippr X-Ray</span>
                <span className="text-white font-mono text-2xl font-bold">4.7 ★</span>
              </div>
              <div className="text-center pt-2">
                <span className="text-white text-3xl font-bold">+68%</span>
                <p className="text-gray-400 text-sm">improvement</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <cite className="block mt-4 text-gray-400 font-medium text-base not-italic">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;