import { useNavigate } from 'react-router-dom';

const ComplianceSection: React.FC = () => {
  const navigate = useNavigate();
  
  const certifications = [
    {
      name: "ISO 27001",
      icon: (
        <div className="w-10 h-10 bg-gray-800 rounded border border-gray-600 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs font-bold text-white">ISO</div>
            <div className="text-xs text-gray-300">27001</div>
          </div>
        </div>
      )
    },
    {
      name: "SOC 2",
      icon: (
        <div className="w-10 h-10 bg-gray-800 rounded border border-gray-600 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs font-bold text-white">SOC</div>
            <div className="text-xs text-gray-300">2</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <footer className="bg-gray-900/70 border-t border-gray-800/50 py-4 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Compliance */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Enterprise-Grade Security:</span>
            <div className="flex items-center gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  {cert.icon}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Links */}
          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => navigate('/about')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </button>
            <a
              href="mailto:contact@skippr.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </a>
            <button
              onClick={() => navigate('/privacy')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-gray-500">&copy; 2025 Skippr LTD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ComplianceSection;