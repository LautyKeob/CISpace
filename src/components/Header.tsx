import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface HeaderProps {
  navItems: { key: string; label: string; href: string }[];
  logoUrl: string;
  logoWidth: number;
  logoHeight: number;
}

const Header = ({ navItems, logoUrl, logoWidth = 150, logoHeight = 40 }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, changeLanguage, currentLanguage } = useTranslation();
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);
  const closeLangMenu = () => setIsLangMenuOpen(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' }
  ];

  // Function for smooth scrolling
  const scrollToSection = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
      closeLangMenu();
    }
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-lang-menu]') && !target.closest('[data-mobile-menu]')) {
        setIsLangMenuOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed w-full bg-white/95 shadow-md z-50 py-3 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo area */}
        <Link to="/" className="flex items-center">
          {logoUrl ? (
            <img 
              src={logoUrl} 
              alt="CISpace Logo" 
              width={logoWidth} 
              height={logoHeight}
              className="object-contain"
            />
          ) : (
            <div className="text-cispace-orange font-bold text-2xl">CISpace</div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 justify-end">
          {/* 360° View Button - Only show on home page */}
          {isHomePage && (
            <Link to="/virtual-tour">
              <Button 
                className="bg-cispace-orange hover:bg-cispace-orange/90 text-white px-6 py-2 flex items-center gap-2 text-base font-semibold"
              >
                <Eye className="h-5 w-5" />
                360° View
              </Button>
            </Link>
          )}

          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.key}>
                <a 
                  href={item.href} 
                  className="text-cispace-gray-700 hover:text-cispace-orange transition-colors capitalize"
                  onClick={(e) => scrollToSection(item.href, e)}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative" data-lang-menu>
            <Button 
              variant="ghost" 
              className="flex items-center space-x-1 text-cispace-gray-700"
              onClick={toggleLangMenu}
            >
              <Globe className="h-4 w-4" />
              <span>{languages.find(lang => lang.code === currentLanguage)?.label}</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      closeLangMenu();
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      currentLanguage === lang.code ? 'text-cispace-orange' : 'text-cispace-gray-700'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4 justify-end">
          {/* 360° View Button for mobile - Only show on home page */}
          {isHomePage && (
            <Link to="/virtual-tour">
              <Button 
                className="bg-cispace-orange hover:bg-cispace-orange/90 text-white px-4 py-2 flex items-center gap-1"
                size="sm"
              >
                <Eye className="h-4 w-4" />
                360°
              </Button>
            </Link>
          )}

          <div className="relative" data-lang-menu>
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center space-x-1 text-cispace-gray-700"
              onClick={toggleLangMenu}
            >
              <Globe className="h-4 w-4" />
              <span>{languages.find(lang => lang.code === currentLanguage)?.label}</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      closeLangMenu();
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      currentLanguage === lang.code ? 'text-cispace-orange' : 'text-cispace-gray-700'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={toggleMenu}
            className="text-cispace-gray-700 focus:outline-none"
            data-mobile-menu
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 py-4 px-6 animate-fade-in">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a 
                    href={item.href} 
                    className="block text-cispace-gray-700 hover:text-cispace-orange transition-colors capitalize"
                    onClick={(e) => scrollToSection(item.href, e)}
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;