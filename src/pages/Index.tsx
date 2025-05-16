import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { Eye, ExternalLink } from 'lucide-react';

const Index = () => {
  const { t } = useTranslation();
  
  // Home navigation items
  const navItems = [
    { key: 'nav.story', label: 'Our Story', href: '#story' },
    { key: 'nav.location', label: 'Location', href: '#location' },
    { key: 'nav.contacts', label: 'Contacts', href: '#contacts' },
  ];

  // Images for locations slider
  const locationImages = [
    { 
      src: "https://i.imgur.com/aT5dato.jpeg", 
      alt: "CISpace Coworking Area" 
    },
    { 
      src: "https://i.imgur.com/Kga6Stt.jpeg", 
      alt: "CISpace Wine Bar" 
    },
    { 
      src: "https://i.imgur.com/dAXbZUd.jpeg", 
      alt: "CISpace Event Space" 
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header navItems={navItems} />
      
      {/* Hero Section with Navigation Buttons */}
      <section className="pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Coworking Button */}
          <Link to="/coworking" className="relative h-[50vh] md:h-screen/2 group overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors"></div>
            <img 
              src="https://i.imgur.com/ERyxrNu.jpeg" 
              alt="Coworking Space" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6">
              <h2 className="text-white text-xl md:text-3xl font-bold text-center mb-4 text-shadow">
                {t('home.coworkingButton')}
              </h2>
              <Button 
                className="bg-cispace-orange hover:bg-cispace-orange/90 text-white button-hover-effect"
              >
                {t('nav.coworking')}
              </Button>
            </div>
          </Link>
          
          {/* Winebar Button */}
          <Link to="/winebar" className="relative h-[50vh] md:h-screen/2 group overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors"></div>
            <img 
              src="https://i.imgur.com/BNGvQV1.jpeg" 
              alt="Wine Bar" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6">
              <h2 className="text-white text-xl md:text-3xl font-bold text-center mb-4 text-shadow">
                {t('home.winebarButton')}
              </h2>
              <Button 
                className="bg-cispace-orange hover:bg-cispace-orange/90 text-white button-hover-effect"
              >
                {t('home.winebarButton')}
              </Button>
            </div>
          </Link>
        </div>
      </section>
      
      {/* The CISpace Story Section */}
      <section id="story" className="py-20 px-4 bg-cispace-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.storyTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story Block 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-cispace-gray-800">{t('home.storySubtitle1')}</h3>
              <p className="text-cispace-gray-600">{t('home.storyText1')}</p>
            </div>
            
            {/* Story Block 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-cispace-gray-800">{t('home.storySubtitle2')}</h3>
              <p className="text-cispace-gray-600">{t('home.storyText2')}</p>
            </div>
            
            {/* Story Block 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-cispace-gray-800">{t('home.storySubtitle3')}</h3>
              <p className="text-cispace-gray-600">{t('home.storyText3')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How To find us Section */}
      <section id="location" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.locationTitle')}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Slider */}
            <div className="h-[400px]">
              <ImageSlider images={locationImages} />
            </div>
            
            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.4746069606477!2d13.341834876926707!3d52.531790272087136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd6f8898227f533b0!2sBugenhagenstra%C3%9Fe%209%2C%2010551%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1715581694028!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          {/* 360 View Button */}
          <div className="flex justify-center mt-8">
            <Link to="/virtual-tour">
              <Button 
                className="bg-cispace-orange hover:bg-cispace-orange/90 text-white button-hover-effect flex items-center gap-2 btn-symmetric"
              >
                <Eye size={20} />
                360º View
                <ExternalLink size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Get in touch Section */}
      <section id="contacts" className="py-20 px-4 bg-cispace-gray-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{t('home.contactTitle')}</h2>
            
            {/* Hours */}
            <div className="mb-8">
              <p className="mb-2">{t('home.openingHours')}</p>
              <p>{t('home.openingHoursMembers')}</p>
            </div>
            
            {/* Contact Info */}
            <div className="mb-8">
              <p className="mb-2">
                <span className="font-semibold">{t('home.email')}: </span>
                <a href="mailto:cispace2019@gmail.com" className="text-cispace-orange hover:underline">cispace2019@gmail.com</a>
              </p>
              <p>
                <span className="font-semibold">{t('home.phone')}: </span>
                <a href="tel:+4915222157014" className="text-cispace-orange hover:underline">+49 1522 2157014</a>
              </p>
            </div>
            
            {/* Impressum */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('home.impressum')}</h3>
              <p>CISpace GmbH</p>
              <p>Bugenhagenstrasse 9, 10551, Berlin</p>
              <p>
                <span className="font-semibold">{t('home.phone')}: </span>
                <a href="tel:+4915222157014" className="text-cispace-orange hover:underline">+49 152 22157014</a>
              </p>
              <p>
                <span className="font-semibold">{t('home.email')}: </span>
                <a href="mailto:cispace2019@gmail.com" className="text-cispace-orange hover:underline">cispace2019@gmail.com</a>
              </p>
              <p>Steuernummer: 30/252/51230</p>
              <p>VAT ID: DE324679586</p>
              <p>
                Kontaktdaten des Datenschutzbeauftragten: Iztok Petek, 
                <a href="mailto:cispace2019@gmail.com" className="text-cispace-orange hover:underline ml-1">cispace2019@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;