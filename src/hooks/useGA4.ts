import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useGA4 = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      
      window.gtag = gtag;
      
      gtag('js', new Date());
      
      // Use environment variables for tracking IDs
      const ga4Id = import.meta.env.VITE_GA4_ID || 'G-KORTECH2025';
      const adsId = import.meta.env.VITE_GOOGLE_ADS_ID || 'AW-KORTECH2025';
      
      gtag('config', ga4Id, {
        page_path: location.pathname,
        page_title: document.title
      });
      
      if (adsId) {
        gtag('config', adsId);
      }
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (typeof window !== 'undefined' && window.gtag) {
      const ga4Id = import.meta.env.VITE_GA4_ID || 'G-KORTECH2025';
      
      window.gtag('config', ga4Id, {
        page_path: location.pathname,
        page_title: document.title
      });
    }
  }, [location]);

  return {
    trackEvent: (eventName: string, parameters: Record<string, any> = {}) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
      }
    },
    trackServiceRequest: (service: string, value: number = 150) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          currency: 'USD',
          value,
          service_type: service,
          event_category: 'Service Request',
          event_label: service
        });
      }
    }
  };
};