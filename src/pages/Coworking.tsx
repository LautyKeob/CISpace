
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

const Coworking = () => {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Cerrar menús desplegables al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = () => {
      // Esta función se podría expandir para cerrar menús desplegables
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Coworking page navigation items
  const navItems = [
    { key: 'nav.coworking', label: 'Coworking Offers', href: '#offers' },
    { key: 'nav.events', label: 'Event Hosting', href: '#events' },
    { key: 'nav.business', label: 'Business Hosting', href: '#business' },
  ];

  const openForm = () => {
    setIsFormOpen(true);
  };

  // Opcional: URL del logo para usar en el header
  const logoUrl = ""; // Aquí puedes colocar la URL de tu logo, por ejemplo: "https://tudominio.com/logo.png"

  return (
    <div className="min-h-screen bg-white">
      <Header 
        navItems={navItems} 
        logoUrl={logoUrl}
        logoWidth={150}
        logoHeight={40}
      />
      <BookingForm open={isFormOpen} onClose={() => setIsFormOpen(false)} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <img 
          src="https://i.imgur.com/MXTJyI9.jpeg" 
          alt="Coworking Space" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-4 text-shadow">
            {t('coworking.heroTitle')}
          </h1>
          <p className="text-white text-xl md:text-2xl text-center mb-8 text-shadow">
            {t('coworking.heroSubtitle')}
          </p>
          <Button 
            onClick={openForm}
            className="bg-cispace-orange hover:bg-cispace-orange/90 text-white text-lg btn-symmetric button-hover-effect"
          >
            {t('coworking.bookNow')}
          </Button>
        </div>
      </section>
      
      {/* Coworking Offers Section - Fondo oscurecido con clase consistente */}
      <section id="offers" className="py-20 px-4 module-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">{t('coworking.offersTitle')}</h2>
          <p className="text-xl text-center text-gray-300 mb-12">{t('coworking.offersSubtitle')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flex Desk */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://i.imgur.com/z1iSVoH.jpeg" 
                  alt="Flex Desk" 
                  className="w-full h-full object-cover transform transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t('coworking.flexDesk')}</h3>
                <p className="text-cispace-gray-600 mb-6">{t('coworking.flexDeskText')}</p>
                <div className="flex justify-center">
                  <Button 
                    onClick={openForm}
                    className="w-full bg-cispace-orange hover:bg-cispace-orange/90 text-white"
                  >
                    {t('coworking.callDetails')}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Monthly Subscriptions */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://i.imgur.com/1HHaKiT.jpeg" 
                  className="w-full h-full object-cover transform transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t('coworking.monthly')}</h3>
                <p className="text-cispace-gray-600 mb-6">{t('coworking.monthlyText')}</p>
                <div className="flex justify-center">
                  <Button 
                    onClick={openForm}
                    className="w-full bg-cispace-orange hover:bg-cispace-orange/90 text-white"
                  >
                    {t('coworking.callDetails')}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Student Flex Desk */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://i.imgur.com/6K0SbT4.jpeg" 
                  alt="Student Flex Desk" 
                  className="w-full h-full object-cover transform transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t('coworking.student')}</h3>
                <p className="text-cispace-gray-600 mb-6">{t('coworking.studentText')}</p>
                <div className="flex justify-center">
                  <Button 
                    onClick={openForm}
                    className="w-full bg-cispace-orange hover:bg-cispace-orange/90 text-white"
                  >
                    {t('coworking.callDetails')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Hosting Section - Fondo original */}
      <section id="events" className="py-20 px-4 bg-cispace-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t('coworking.eventsTitle')}</h2>
          <p className="text-xl text-center text-cispace-gray-600 mb-12">{t('coworking.eventsIntro')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Creative events */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://i.imgur.com/K7Zlv22.jpeg" 
                  alt="Creative events" 
                  className="w-full h-full object-cover transform transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t('coworking.creativeEvents')}</h3>
                <p className="text-cispace-gray-600 mb-6">{t('coworking.creativeText')}</p>
                <div className="flex justify-center">
                  <div className="inline-block px-4 py-2 bg-cispace-gray-200 text-cispace-gray-600 rounded-md">
                    Coming soon!
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business events */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Business events" 
                  className="w-full h-full object-cover transform transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t('coworking.businessEvents')}</h3>
                <p className="text-cispace-gray-600 mb-6">{t('coworking.businessText')}</p>
                <div className="flex justify-center">
                  <div className="inline-block px-4 py-2 bg-cispace-gray-200 text-cispace-gray-600 rounded-md">
                    Coming soon!
                  </div>
                </div>
              </div>
            </div>
            
            {/* Workshops */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://i.imgur.com/L0ME09E.jpeg" 
                  alt="Workshops" 
                  className="w-full h-full object-cover transform transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t('coworking.workshops')}</h3>
                <p className="text-cispace-gray-600 mb-6">{t('coworking.workshopsText')}</p>
                <div className="flex justify-center">
                  <Button 
                    onClick={openForm}
                    className="bg-cispace-orange hover:bg-cispace-orange/90 text-white"
                  >
                    {t('coworking.learnMore')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Hosting Section - Fondo oscurecido con clase consistente */}
      <section id="business" className="py-20 px-4 module-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('coworking.businessTitle')}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Business Text */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">{t('coworking.businessSubtitle')}</h3>
              <p className="text-gray-300 mb-6">{t('coworking.businessIntro')}</p>
              
              <ul className="list-disc ml-6 space-y-2 text-gray-300">
                <li>{t('coworking.service1')}</li>
                <li>{t('coworking.service2')}</li>
                <li>{t('coworking.service3')}</li>
                <li>{t('coworking.service4')}</li>
              </ul>
              
              <div className="mt-8 flex justify-center lg:justify-start">
                <Button 
                  onClick={openForm}
                  className="bg-cispace-orange hover:bg-cispace-orange/90 text-white btn-symmetric button-hover-effect"
                >
                  {t('coworking.bookNow')}
                </Button>
              </div>
            </div>
            
            {/* Business Image */}
            <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://i.imgur.com/ftDDlTN.jpeg" 
                alt="Business Hosting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coworking;
