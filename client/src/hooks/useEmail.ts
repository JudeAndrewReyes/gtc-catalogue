import { useState } from 'react';
import emailjs from '@emailjs/browser';

export interface EmailTemplateParams {
  contactName: string;
  company?: string;
  email: string;
  phone?: string;
  projectTypes: string[];
  otherProjectType?: string;
  equipmentNeeded: string;
  budgetRange?: string;
  deliveryLocation?: string;
}

export interface UseEmailReturn {
  sendEmail: (templateParams: EmailTemplateParams) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export const useEmail = (): UseEmailReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (templateParams: EmailTemplateParams): Promise<void> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Debug: Log the actual values (remove this after testing)
      console.log('Raw Environment Variables:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        mode: import.meta.env.MODE,
        allViteVars: Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')),
        allEnvKeys: Object.keys(import.meta.env)
      });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Format project types for email
      const formattedProjectTypes = templateParams.projectTypes.join(', ');
      
      // Create email template parameters
      const emailParams = {
        ...templateParams,
        projectTypes: formattedProjectTypes,
        // Add any additional formatting here
        submissionDate: new Date().toLocaleString('en-PH', {
          timeZone: 'Asia/Manila',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      console.log('Sending email with params:', emailParams);
      
      await emailjs.send(serviceId, templateId, emailParams, publicKey);

      setSuccess(true);
    } catch (err) {
      console.error('EmailJS Error Details:', err);
      
      let errorMessage = 'Failed to send email. Please try again.';
      
      if (err instanceof Error) {
        errorMessage = err.message;
        console.error('Error message:', err.message);
      }
      
      // Log configuration for debugging
      console.log('EmailJS Configuration Check:', {
        serviceId: serviceId ? 'Set' : 'Missing',
        templateId: templateId ? 'Set' : 'Missing',
        publicKey: publicKey ? 'Set' : 'Missing'
      });
      
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendEmail,
    isLoading,
    error,
    success
  };
};