
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: { src: string; alt: string }[];
  interval?: number;
}

const ImageSlider = ({ images, interval = 5000 }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNext, interval);
    return () => clearInterval(slideInterval);
  }, [interval]);

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden rounded-lg h-full">
        <div 
          className="transition-transform duration-500 ease-in-out h-full flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <Button 
        variant="ghost" 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5 text-cispace-gray-700" />
      </Button>
      
      <Button 
        variant="ghost" 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5 text-cispace-gray-700" />
      </Button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-cispace-orange' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
