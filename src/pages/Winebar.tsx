import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import WineShop from '@/components/WineShop';
import WineMenu from '@/components/WineMenu';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ShoppingCart } from 'lucide-react';

const Winebar = () => {
  const { t } = useTranslation();
  const [showShop, setShowShop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null);
  
  // Navigation items with capitalized first letters
  const navItems = [
    { key: 'menu', label: t('nav.menu'), href: '#menu' },
    { key: 'tasting', label: t('nav.tasting'), href: '#tasting' },
    { key: 'blog', label: t('nav.blog'), href: '#blog' },
    { key: 'gallery', label: t('nav.gallery'), href: '#gallery' },
  ];

  // Gallery images
  const galleryImages = [
    "https://www.coravin.com.es/cdn/shop/articles/AdobeStock_451146882_c67abea8-b0f0-4357-aba2-35f409370f5a.jpg?v=1732041951",
    "https://i.imgur.com/jnLMpdX_d.webp?maxwidth=760&fidelity=grand",
    "https://images.unsplash.com/photo-1560148218-1a83060f7b32?q=80&w=1470&auto=format&fit=crop",
    "https://images.ctfassets.net/rxqefefl3t5b/2Wql3kKuliWgtXzePIDuYA/2e26e4e4145aaedccd3eb02ec513f8cc/Perez_Cruz_05.jpg?fl=progressive&q=80",
    "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546944517-4f38480ff03c?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1597043851759-3b383a6d1c14?q=80&w=1374&auto=format&fit=crop",
    "https://www.splashwines.com/cdn/shop/files/P-FABFRENCHRED.png?v=1740176749",
    "https://www.virginwines.co.uk/hub/wp-content/uploads/2023/03/Different-wine-glass-shapes-and-sizes-on-a-white-surface-2560x1440.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header navItems={navItems} />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <img 
          src="blob:https://imgur.com/9180d2fb-9812-4ce6-9752-dc3d495869eb" 
          alt="Wine Bar" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-4 text-shadow">
            {t('winebar.heroTitle')}
          </h1>
          <p className="text-white text-xl md:text-2xl text-center mb-8 text-shadow">
            {t('winebar.heroSubtitle')}
          </p>
          <Button 
            className="bg-cispace-orange hover:bg-cispace-orange/90 text-white text-lg px-6 py-3 button-hover-effect"
            onClick={() => setShowShop(true)}
          >
            {t('winebar.orderButton')}
          </Button>
        </div>
      </section>

      {/* Floating Cart Button */}
      <div className="fixed top-24 right-6 z-40">
        <Button 
          className="bg-cispace-orange hover:bg-cispace-orange/90 rounded-full p-3 shadow-lg"
          onClick={() => setShowShop(true)}
        >
          <ShoppingCart size={24} className="text-white" />
        </Button>
      </div>
      
      {/* Wine Menu Section */}
      <section id="menu" className="py-16 px-4 bg-cispace-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=1372&auto=format&fit=crop" 
                alt="Wine glasses" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">{t('winebar.menuTitle')}</h2>
              <div className="flex justify-center md:justify-start">
                <Button 
                  className="bg-cispace-orange hover:bg-cispace-orange/90 text-white px-6 py-3 button-hover-effect"
                  onClick={() => setShowMenu(true)}
                >
                  {t('winebar.seeMenuButton')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Wine Tasting Section */}
      <section id="tasting" className="py-16 px-4 bg-cispace-gray-800 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://i.imgur.com/yDPDpoA_d.webp?maxwidth=760&fidelity=grand" 
                alt="Wine tasting" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-center mb-8">{t('winebar.tastingTitle')}</h2>
              <p className="text-lg max-w-3xl mx-auto">
                {t('winebar.tastingDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Wine Blog Section */}
      <section id="blog" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('winebar.blogTitle')}</h2>
          <p className="text-lg max-w-3xl mx-auto text-center text-cispace-gray-600">
            {t('winebar.blogDescription')}
          </p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-cispace-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('winebar.galleryTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {galleryImages.slice(0, 3).map((image, index) => (
              <div 
                key={`row1-${index}`} 
                className="aspect-w-16 aspect-h-9 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedGalleryImage(index)}
              >
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover rounded-md" />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {galleryImages.slice(3, 7).map((image, index) => (
              <div 
                key={`row2-${index}`} 
                className="aspect-w-16 aspect-h-9 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedGalleryImage(index + 3)}
              >
                <img src={image} alt={`Gallery ${index + 4}`} className="w-full h-full object-cover rounded-md" />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.slice(7, 10).map((image, index) => (
              <div 
                key={`row3-${index}`} 
                className="aspect-w-16 aspect-h-9 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedGalleryImage(index + 7)}
              >
                <img src={image} alt={`Gallery ${index + 8}`} className="w-full h-full object-cover rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Home Link */}
      <div className="text-center py-10">
        <Link to="/">
          <Button className="bg-cispace-orange hover:bg-cispace-orange/90 text-white button-hover-effect">
            {t('common.backToHome')}
          </Button>
        </Link>
      </div>

      {/* Wine Shop Modal */}
      <Dialog open={showShop} onOpenChange={setShowShop}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">Wine Shop</DialogTitle>
          <WineShop />
        </DialogContent>
      </Dialog>

      {/* Wine Menu Modal */}
      <Dialog open={showMenu} onOpenChange={setShowMenu}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">Wine Menu</DialogTitle>
          <WineMenu />
        </DialogContent>
      </Dialog>

      {/* Gallery Modal */}
      <Dialog open={selectedGalleryImage !== null} onOpenChange={() => setSelectedGalleryImage(null)}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 overflow-hidden">
          <DialogTitle className="sr-only">Gallery Image</DialogTitle>
          <div className="relative bg-black">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={`carousel-${index}`}>
                    <AspectRatio ratio={16/9} className="bg-black">
                      <img 
                        src={image} 
                        alt={`Gallery ${index + 1}`} 
                        className="w-full h-full object-contain"
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Winebar;