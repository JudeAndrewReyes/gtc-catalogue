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

    try {
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

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send email. Please try again.';
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