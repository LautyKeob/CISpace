
import React from 'react';
import Header from '@/components/Header';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const VirtualTour = () => {
  const { t } = useTranslation();
  
  // Navigation items
  const navItems = [
    { key: 'nav.story', label: 'Our Story', href: '/#story' },
    { key: 'nav.location', label: 'Location', href: '/#location' },
    { key: 'nav.contacts', label: 'Contacts', href: '/#contacts' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header navItems={navItems} />
      
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        <div className="mb-6">
          <Link to="/">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              {t('general.backToHome')}
            </Button>
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6 text-center">{t('CISpace Virtual Tour')}</h1>
        
        <div className="flex-1 w-full rounded-lg overflow-hidden shadow-lg mb-6">
          <iframe 
            src="https://tour.keepeyeonball.com/Tour/939e6eb1-841b-4353-bb2b-10cec2141ece/4K?sc=2&y=61&p=8&tz=100&r=-1.45;-0.02&l=0.00;0.00&mz=0.00&d=0&m=0" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '70vh' }}
            allowFullScreen
            title="CISpace Virtual Tour"
          ></iframe>
        </div>
        
        <div className="text-center text-cispace-gray-600 mb-8">
          <p>{t('') || 'Explore our space with this interactive 360º virtual tour. Navigate through different areas of CISpace to get a feel for our coworking environment, event spaces, and wine bar.'}</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
