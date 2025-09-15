import { X, Phone } from 'lucide-react';

interface QuoteFormProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">GET DETAILED QUOTE</h2>
            <p className="text-sm text-gray-600 mt-1">
              Category: Construction Equipment | STIHL Partnership
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Company Information Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">COMPANY INFORMATION</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name <span className="text-red-500">*Required</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*Required</span>
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="+63-XXX-XXX-XXXX"
                />
              </div>
            </div>
          </div>

          {/* Project Details Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">PROJECT DETAILS</h3>
            
            {/* Project Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Project Type:
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Construction Project</span>
                </label>
                
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Manufacturing Setup</span>
                </label>
                
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Facility Maintenance</span>
                </label>
                
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">STIHL Equipment Only</span>
                </label>
              </div>
              
              <div className="mt-3 flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm mr-2 text-gray-700">Other:</span>
                </label>
                <input
                  type="text"
                  className="flex-1 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Please specify"
                />
              </div>
            </div>

            {/* Equipment Needed */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Equipment Needed <span className="text-red-500">*Required</span>
              </label>
              <textarea
                rows={6}
                className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Please describe what you need:
- Specific tools/equipment
- Quantities needed  
- Specifications or brands preferred
- Project timeline

Example: 'Need 10 STIHL chainsaws MS 250, 5 cordless drills, safety equipment for 20 workers'"
              />
            </div>

            {/* Budget Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range:
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option value="">Select Range</option>
                <option value="under-100k">Under ₱100,000</option>
                <option value="100k-500k">₱100K-₱500K</option>
                <option value="500k-1m">₱500K-₱1M</option>
                <option value="1m-5m">₱1M-₱5M</option>
                <option value="over-5m">Over ₱5M</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            {/* Delivery Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Location:
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="City, Province"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              CANCEL
              <div className="text-sm text-gray-500 mt-1">Back to Categories</div>
            </button>
            
            <button className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
              SUBMIT REQUEST
              <div className="text-sm text-orange-100 mt-1">Response within 24 hours</div>
            </button>
          </div>
        </div>

        {/* Contact Alternative */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Phone size={16} className="mr-2" />
            <span>Need immediate assistance? Call </span>
            <a href="tel:+63-XXX-XXXX" className="text-orange-600 font-medium ml-1 hover:text-orange-700">
              +63-XXX-XXXX
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}