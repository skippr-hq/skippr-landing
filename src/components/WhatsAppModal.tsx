import { X } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2 font-retro-heading">
            JOIN OUR COMMUNITY
          </h3>
          <p className="text-gray-400 mb-6">
            Scan the QR code to join our WhatsApp group
          </p>

          {/* QR Code Placeholder - Replace with actual WhatsApp group QR code */}
          <div className="bg-white p-6 rounded-xl inline-block mb-6">
            <div className="w-64 h-64 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-500 text-sm text-center px-4">
                Add your WhatsApp<br />Group QR Code here
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Connect with other builders, share insights, and get early access to new features
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppModal;
