import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'ROI Calculator', href: '#roi-calculator' },
  { label: 'AI Experts', href: '#team' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'KPI', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
];

const PrimaryHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      isScrolled ? 'bg-slate-900/70 backdrop-blur-sm border-b border-slate-800/60' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <rect x="2" y="2" width="24" height="24" rx="6" stroke="#ec4899" strokeWidth="3" />
              <path d="M9 14L13 18L19 10" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity bg-fuchsia-500/30" />
          </div>
          <span className="text-2xl font-bold font-space-grotesk text-white">Skippr</span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#how-it-works" className="secondary-cta font-semibold py-2 px-4 rounded-lg text-sm">
            Schedule Demo
          </a>
          <a href="#how-it-works" className="cta-button font-bold py-2.5 px-5 rounded-lg text-sm shadow-lg shadow-fuchsia-500/20">
            Get 15 Expert Free Review
          </a>
          <button className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white text-sm px-2 py-2 rounded-md hover:bg-white/5">
            More <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setIsMobileMenuOpen((v) => !v)} className="text-white">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="glassmorphism rounded-2xl p-3 border border-fuchsia-500/20">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 grid grid-cols-1 gap-2">
              <a href="#how-it-works" className="secondary-cta text-center font-semibold py-2.5 px-4 rounded-lg text-sm">
                Schedule Demo
              </a>
              <a href="#how-it-works" className="cta-button text-center font-bold py-2.5 px-4 rounded-lg text-sm shadow-lg shadow-fuchsia-500/20">
                Get 15 Expert Free Review
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default PrimaryHeader;



