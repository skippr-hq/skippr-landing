import React, { useState, useEffect } from 'react';
import WhatsAppModal from './WhatsAppModal';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isXrayScanningPaused, setIsXrayScanningPaused] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style>{`
        @keyframes xray-scan {
          0% { left: -150%; }
          50% { left: 150%; }
          100% { left: -150%; }
        }

        .xray-scanning::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 150%;
          height: 100%;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(0, 217, 255, 0.3) 45%,
            rgba(0, 217, 255, 0.6) 50%,
            rgba(0, 217, 255, 0.3) 55%,
            transparent 100%
          );
          animation: xray-scan 4s ease-in-out infinite;
          pointer-events: none;
        }

        .xray-scanning.paused::after {
          animation-play-state: paused;
        }
      `}</style>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800'
          : 'bg-black border-b border-gray-800'
      }`}>
        <div className="container mx-auto px-8" style={{paddingTop: "0.6cm", paddingBottom: "0.6cm"}}>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-end space-x-3 cursor-pointer">
              <div
                className={`relative overflow-hidden rounded-lg ${isXrayScanningPaused ? 'xray-scanning paused' : 'xray-scanning'}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsXrayScanningPaused(!isXrayScanningPaused);
                }}
              >
                <img
                  src="/Branding/image.png"
                  alt="Skippr Logo"
                  className="h-10 w-auto"
                  style={{ filter: 'grayscale(100%) brightness(0.8)' }}
                />
              </div>
              <div className="flex items-end space-x-1">
                <span className="text-white text-2xl font-bold font-retro-heading">Skippr</span>
                <span className="text-[#00d9ff] text-2xl font-tech-mono tracking-wider">X-RAY</span>
              </div>
            </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-end space-x-8 justify-center flex-1">
            <a href="#team" className="text-gray-400 hover:text-white text-sm transition-colors">
              AI Experts
            </a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">
              How it works
            </a>
            <a href="#results" className="text-gray-400 hover:text-white text-sm transition-colors">
              ROI
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">
              Pricing
            </a>
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Community
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#coming-soon" className="text-[#00d9ff] hover:text-[#7dd3fc] text-sm font-semibold transition-colors">
              Coming Soon
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Log In
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="toggle menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="px-2 pt-2 pb-4 space-y-1 bg-gray-900 rounded-lg border border-gray-800">
              <a
                href="#team"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Experts
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#results"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ROI
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>

    {/* WhatsApp Modal */}
    <WhatsAppModal
      isOpen={isWhatsAppModalOpen}
      onClose={() => setIsWhatsAppModalOpen(false)}
    />
    </>
  );
};

export default Header;