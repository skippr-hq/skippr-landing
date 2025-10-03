import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Background patterns */}
      <div className="fixed inset-0 z-[-1] grid-pattern"></div>
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-[#0A0E27] via-fuchsia-900/10 to-[#0A0E27]"></div>
      
      <Header />
      
      <div className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
            >
              ← Back to Home
            </button>
            
            <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold leading-tight mb-6">
              About Us
            </h1>
          </div>

          <div className="glassmorphism rounded-2xl p-8 md:p-12 border border-purple-500/30">
            <div className="prose prose-gray prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">About Skippr</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Since 2023, we've been on a mission to revolutionize how products are built and experienced by enabling AI-first product development that delivers both velocity and quality.
              </p>
              
              <h3 className="text-2xl font-semibold text-white mb-4">Our Journey</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                We started with UI generation as one of the pioneering companies in the domain of AI enhanced product design. After two years of deep expertise, we're launching our next evolution: <strong className="text-white">Skippr OnScreen and OnCode</strong> – where our accumulated product intelligence is now embedded in AI agents that work alongside your coding tools.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We recognized a fundamental shift: code generation is rapidly becoming commoditized with powerful agents like Claude Code mastering the technical execution. But there's a critical gap – <strong className="text-white">product quality</strong>. While AI can write code at superhuman speed, it can't judge if that code creates a great product experience.
              </p>
              
              <h3 className="text-2xl font-semibold text-white mb-4">Our Solution</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Skippr provides the missing half of the AI development stack. Our AI product experts – trained on two years of real-world product development – review every line for design, UX, accessibility, compliance, and growth optimization. We ensure you ship gold, not just code.
              </p>
              
              <h3 className="text-2xl font-semibold text-white mb-4">Our Backing</h3>
              <p className="text-gray-300 mb-4 text-lg">We're funded by world-class investors including:</p>
              <ul className="text-gray-300 mb-8 list-disc pl-8 space-y-2 text-lg">
                <li><strong className="text-white">Bessemer Venture Partners</strong> (investors in Canva and Anthropic)</li>
                <li><strong className="text-white">Moonfire Ventures</strong></li>
                <li>Angels and executives from <strong className="text-white">Google, Lyft, Eventbrite, Fiverr, and Twilio</strong></li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                We believe small teams augmented with AI will build the future.
                <br />
                Not replacing humans. Amplifying them 100x.
                <br />
                One developer + AI team can now match enterprise output.
                <br />
                This revolution will make the industrial revolution look small.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We're always eager to connect with teams and individuals who share our vision of transforming how products come to life. If you're pushing the boundaries of AI-powered development, we'd love to learn from and collaborate with you.
              </p>
              
              <div className="text-center glassmorphism rounded-xl p-6 border border-fuchsia-500/30 mb-8">
                <p className="text-white font-semibold text-lg mb-2">
                  <strong>Contact us</strong>
                </p>
                <a href="mailto:team@skippr.com" className="text-fuchsia-400 hover:text-fuchsia-300 text-xl font-semibold">
                  team@skippr.com
                </a>
              </div>
              
              <hr className="border-gray-700 my-8" />
              
              <p className="text-gray-400 text-center italic text-lg">
                Building the future of product development, one AI agent at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;