import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import translations from '@/translations';

type Language = 'en' | 'es' | 'de';

interface TranslationContextType {
  t: (key: string, params?: Record<string, string | number>) => string;
  changeLanguage: (lang: string) => void;
  currentLanguage: Language;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Check localStorage first
    const savedLang = localStorage.getItem('language');
    if (savedLang && ['en', 'es', 'de'].includes(savedLang)) {
      return savedLang as Language;
    }
    
    // Then check browser language
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'es', 'de'].includes(browserLang)) {
      return browserLang as Language;
    }
    
    return 'en'; // Default fallback
  });

  const changeLanguage = (lang: string) => {
    if (['en', 'es', 'de'].includes(lang)) {
      setCurrentLanguage(lang as Language);
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    // Navigate through nested keys
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English or key itself
        const fallbackValue = getFallbackTranslation(keys, translations.en) || key;
        return interpolateParams(typeof fallbackValue === 'string' ? fallbackValue : key, params);
      }
    }
    
    if (typeof value === 'string') {
      // Special case for navigation items - capitalize first letter
      if (keys[0] === 'nav') {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      return interpolateParams(value, params);
    }
    
    return interpolateParams(key, params);
  };

  // Helper function to get fallback translation
  const getFallbackTranslation = (keys: string[], obj: any): string | undefined => {
    let current = obj;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return undefined;
      }
    }
    return typeof current === 'string' ? current : undefined;
  };

  // Helper function to interpolate parameters
  const interpolateParams = (text: string, params?: Record<string, string | number>): string => {
    if (!params) return text;
    return text.replace(/\{\{(\w+)\}\}/g, (_, key) => String(params[key] || ''));
  };

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <TranslationContext.Provider value={{ t, changeLanguage, currentLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};