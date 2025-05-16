import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-cispace-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-cispace-orange transition-colors">
                  {t('footer.termsConditions')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-cispace-orange transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/legal-notice" className="hover:text-cispace-orange transition-colors">
                  {t('footer.legalNotice')}
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-cispace-orange transition-colors">
                  {t('footer.cookiePolicy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('home.contactTitle')}</h3>
            <p className="mb-2">{t('home.openingHours')}</p>
            <p>{t('home.openingHoursMembers')}</p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CISpace GmbH</h3>
            <p>Bugenhagenstrasse 9</p>
            <p>10551, Berlin</p>
            <p>Germany</p>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.contacts')}</h3>
            <p className="mb-2">
              <span className="font-semibold">{t('home.email')}: </span>
              <a href="mailto:cispace2019@gmail.com" className="text-cispace-orange hover:underline">
                cispace2019@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">{t('home.phone')}: </span>
              <a href="tel:+4915222157014" className="text-cispace-orange hover:underline">
                +49 1522 2157014
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cispace-gray-600 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CISpace GmbH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;