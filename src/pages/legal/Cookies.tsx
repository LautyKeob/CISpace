import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  const { t } = useTranslation();
  
  const navItems = [
    { key: 'nav.story', label: 'Our Story', href: '/#story' },
    { key: 'nav.location', label: 'Location', href: '/#location' },
    { key: 'nav.contacts', label: 'Contacts', href: '/#contacts' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">{t('legal.cookiesTitle')}</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">{t('legal.cookiesContent')}</p>
          {/* Add more detailed cookie policy content here */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;