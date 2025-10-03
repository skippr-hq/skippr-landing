
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900/70 border-t border-gray-800/50 pt-16 pb-8 px-4">
      <div className="container mx-auto text-center text-gray-500 text-sm">
        <div className="mb-4 space-x-6">
          <button
            onClick={() => navigate('/about')}
            className="text-gray-400 hover:text-white transition-colors underline"
          >
            About Us
          </button>
          <a
            href="mailto:contact@skippr.com"
            className="text-gray-400 hover:text-white transition-colors underline"
          >
            Contact Us
          </a>
          <button
            onClick={() => navigate('/privacy')}
            className="text-gray-400 hover:text-white transition-colors underline"
          >
            Privacy Policy
          </button>
        </div>
        <p>&copy; {currentYear} Skippr LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;