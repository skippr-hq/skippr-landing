import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const eyesRef = useRef<HTMLDivElement>(null);
  const rotatingTexts = ['Localhost', 'Staging', 'CLI', 'Production'];

  useEffect(() => {
    const currentWord = rotatingTexts[currentWordIndex];
    
    const typeSpeed = isDeleting ? 50 : 80;
    const pauseTime = isDeleting ? 200 : 3000;
    
    if (isDeleting) {
      if (currentText.length > 0) {
        setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, typeSpeed);
      } else {
        setIsDeleting(false);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, pauseTime);
      }
    } else {
      if (currentText.length < currentWord.length) {
        setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }
  }, [currentText, isDeleting, currentWordIndex, rotatingTexts]);

  // Instant mouse tracking - no throttling
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate eye pupil positions based on mouse and scroll
  const calculateEyePosition = (eyeRect: DOMRect) => {
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    
    // Distance from eye to mouse
    const distanceX = mousePosition.x - eyeCenterX;
    const distanceY = mousePosition.y - eyeCenterY;
    const totalDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // Maximum movement range for pupils
    const maxMovement = eyeRect.width * 0.2;
    
    // Simple angle calculation
    const angle = Math.atan2(distanceY, distanceX);
    
    // Distance-based movement with smooth falloff
    let movement = maxMovement;
    if (totalDistance > 300) {
      movement = maxMovement * Math.max(0.3, Math.min(1, 600 / totalDistance));
    }
    
    return {
      x: Math.cos(angle) * movement,
      y: Math.sin(angle) * movement
    };
  };

  // Animated Eyes Component - Instant Response
  const AnimatedEyes: React.FC = () => {
    const leftEyeRef = useRef<HTMLDivElement>(null);
    const rightEyeRef = useRef<HTMLDivElement>(null);
    const [, forceUpdate] = useState({});
    
    // Force re-render when mouse moves
    useEffect(() => {
      forceUpdate({});
    }, [mousePosition]);
    
    // Calculate positions in real-time
    const getEyePosition = (eyeRef: React.RefObject<HTMLDivElement>) => {
      if (!eyeRef.current) return { x: 0, y: 0 };
      const rect = eyeRef.current.getBoundingClientRect();
      return calculateEyePosition(rect);
    };
    
    const leftPos = getEyePosition(leftEyeRef);
    const rightPos = getEyePosition(rightEyeRef);
    
    return (
      <span className="inline-flex items-center gap-1 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {/* Left Eye */}
        <div 
          ref={leftEyeRef}
          className="relative w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-white rounded-full border-2 border-gray-300"
        >
          <div 
            className="absolute w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-black rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate3d(${leftPos.x}px, ${leftPos.y}px, 0)`
            }}
          />
        </div>
        {/* Right Eye */}
        <div 
          ref={rightEyeRef}
          className="relative w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-white rounded-full border-2 border-gray-300"
        >
          <div 
            className="absolute w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-black rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate3d(${rightPos.x}px, ${rightPos.y}px, 0)`
            }}
          />
        </div>
      </span>
    );
  };

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      <section className="bg-black text-white min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/30 to-indigo-950/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 pt-32">
        {/* Text Content - Centered and Full Width */}
        <div className="text-center max-w-4xl mx-auto space-y-12 mb-16">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.0] tracking-tight font-retro-heading">
                <span className="block">COULD YOU STOP SHIPPING JUNK FEATURES?</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="text-lg lg:text-xl xl:text-2xl text-gray-200 space-y-2 leading-[1.4] max-w-4xl mx-auto">
              <p className="text-white font-medium">
                Skippr <span className="text-[#00d9ff] font-tech-mono tracking-wider">X-RAY</span>: UX and Product AI Experts.<br />Instant, On-Screen Product Review. Ship Like the Best.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex justify-center">
              <button className="group relative bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] text-black px-6 py-3 rounded-full text-base font-semibold hover:from-[#00d9ff] hover:to-[#00d9ff] hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 border border-cyan-400/20 hover:border-cyan-300/40">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free
                  <span className="text-gray-600">•</span>
                  Install Extension
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

        {/* Video Section - Centralized and Bigger */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl px-6">
            {/* Main Image/Video */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden aspect-[16/9] relative shadow-2xl shadow-black/50 border border-gray-700/30">
              {isVideoPlaying ? (
                <video 
                  src="/skipprvideo.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <img 
                  src="/skhp2.png" 
                  alt="AI Product Team In Action"
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
            </div>
            
            {/* Play/Pause button and text directly below video */}
            <div className="flex items-center justify-center gap-3 mt-6 w-full">
              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="bg-black/60 border border-gray-600 rounded-full p-3 hover:border-[#00d9ff] hover:text-[#00d9ff] hover:bg-black/80 transition-all duration-300 backdrop-blur-sm shadow-lg"
              >
                {isVideoPlaying ? (
                  <svg 
                    className="w-4 h-4 text-current" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg 
                    className="w-4 h-4 text-current ml-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              <p className="text-sm lg:text-base text-gray-400 hover:text-white transition-colors cursor-pointer">
                Watch: Autonomous product guidance in action →
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Hero;