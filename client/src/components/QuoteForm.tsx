import { useState, useCallback } from 'react';
import { X, Phone, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { useEmail, type EmailTemplateParams } from '../hooks/useEmail';

interface QuoteFormProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

interface FormData {
  contactName: string;
  company: string;
  email: string;
  phone: string;
  projectTypes: string[];
  otherProjectType: string;
  equipmentNeeded: string;
  budgetRange: string;
  deliveryLocation: string;
}

const initialFormData: FormData = {
  contactName: '',
  company: '',
  email: '',
  phone: '',
  projectTypes: [],
  otherProjectType: '',
  equipmentNeeded: '',
  budgetRange: '',
  deliveryLocation: ''
};

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const { sendEmail, isLoading, error, success } = useEmail();

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isLoading) {
      onClose();
    }
  };

  const handleInputChange = useCallback((
    field: keyof FormData,
    value: string
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
    }
  }, [validationErrors]);

  const handleProjectTypeChange = useCallback((
    projectType: string,
    checked: boolean
  ) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: checked
        ? [...prev.projectTypes, projectType]
        : prev.projectTypes.filter(type => type !== projectType)
    }));
  }, []);

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.contactName.trim()) {
      errors.contactName = 'Contact name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.equipmentNeeded.trim()) {
      errors.equipmentNeeded = 'Equipment details are required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!', formData);

    if (!validateForm()) {
      console.log('Validation failed');
      return;
    }

    console.log('Validation passed, sending email...');
    try {
      const emailParams: EmailTemplateParams = {
        contactName: formData.contactName,
        company: formData.company || 'Not specified',
        email: formData.email,
        phone: formData.phone || 'Not provided',
        projectTypes: formData.projectTypes.length > 0 
          ? [...formData.projectTypes, ...(formData.otherProjectType ? [formData.otherProjectType] : [])]
          : ['Not specified'],
        equipmentNeeded: formData.equipmentNeeded,
        budgetRange: formData.budgetRange || 'Not specified',
        deliveryLocation: formData.deliveryLocation || 'Not specified'
      };

      await sendEmail(emailParams);
      
      // Reset form after successful submission
      setFormData(initialFormData);
      setValidationErrors({});
      
      // Auto-close after 2 seconds of showing success
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      // Error is handled by the useEmail hook
      console.error('Error submitting form:', err);
    }
  };

  const handleCancel = () => {
    if (!isLoading) {
      setFormData(initialFormData);
      setValidationErrors({});
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
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
            disabled={isLoading}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer disabled:opacity-50">
            <X size={24} />
          </button>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="mx-6 mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <div className="flex items-center">
              <CheckCircle2 className="text-green-600 mr-2" size={20} />
              <span className="text-green-800 font-medium">Quote request sent successfully!</span>
            </div>
            <p className="text-green-700 text-sm mt-1">We'll respond within 24 hours.</p>
          </div>
        )}

        {error && (
          <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex items-center">
              <AlertCircle className="text-red-600 mr-2" size={20} />
              <span className="text-red-800 font-medium">Error sending request</span>
            </div>
            <p className="text-red-700 text-sm mt-1">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
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
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                    validationErrors.contactName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                  disabled={isLoading}
                />
                {validationErrors.contactName && (
                  <p className="text-red-600 text-sm mt-1">{validationErrors.contactName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your company name"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*Required</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                    validationErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="your.email@company.com"
                  disabled={isLoading}
                />
                {validationErrors.email && (
                  <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="+63-XXX-XXX-XXXX"
                  disabled={isLoading}
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
                {[
                  'Construction Project',
                  'Manufacturing Setup',
                  'Facility Maintenance',
                  'STIHL Equipment Only'
                ].map((projectType) => (
                  <label key={projectType} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.projectTypes.includes(projectType)}
                      onChange={(e) => handleProjectTypeChange(projectType, e.target.checked)}
                      className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      disabled={isLoading}
                    />
                    <span className="text-sm text-gray-700">{projectType}</span>
                  </label>
                ))}
              </div>
              
              <div className="mt-3 flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.otherProjectType !== ''}
                    onChange={(e) => {
                      if (!e.target.checked) {
                        handleInputChange('otherProjectType', '');
                      }
                    }}
                    className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    disabled={isLoading}
                  />
                  <span className="text-sm mr-2 text-gray-700">Other:</span>
                </label>
                <input
                  type="text"
                  value={formData.otherProjectType}
                  onChange={(e) => handleInputChange('otherProjectType', e.target.value)}
                  className="flex-1 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Please specify"
                  disabled={isLoading}
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
                value={formData.equipmentNeeded}
                onChange={(e) => handleInputChange('equipmentNeeded', e.target.value)}
                className={`w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                  validationErrors.equipmentNeeded ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Please describe what you need:
- Specific tools/equipment
- Quantities needed  
- Specifications or brands preferred
- Project timeline

Example: 'Need 10 STIHL chainsaws MS 250, 5 cordless drills, safety equipment for 20 workers'"
                disabled={isLoading}
              />
              {validationErrors.equipmentNeeded && (
                <p className="text-red-600 text-sm mt-1">{validationErrors.equipmentNeeded}</p>
              )}
            </div>

            {/* Budget Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range:
              </label>
              <select 
                value={formData.budgetRange}
                onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                disabled={isLoading}
              >
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
                value={formData.deliveryLocation}
                onChange={(e) => handleInputChange('deliveryLocation', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="City, Province"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button 
              type="button"
              onClick={handleCancel}
              disabled={isLoading}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              CANCEL
              <div className="text-sm text-gray-500 mt-1">Back to Categories</div>
            </button>
            
            <button 
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={16} />
                  SENDING...
                </>
              ) : (
                <>
                  SUBMIT REQUEST
                  <div className="text-sm text-orange-100 mt-1">Response within 24 hours</div>
                </>
              )}
            </button>
          </div>
        </form>

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