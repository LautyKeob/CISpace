import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Minus, Plus, X } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface Wine {
  id: number;
  name: string;
  price: number;
  image: string;
  descriptionKey: string; // Key for translation
  region: string;
  year: number;
}

interface CartItem {
  wine: Wine;
  quantity: number;
}

const WineShop = () => {
  const { t } = useTranslation();
  const [wines, setWines] = useState<Wine[]>([]);
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  
  // Initialize with sample data
  useEffect(() => {
    // Sample wine data
    const sampleWines: Wine[] = [
      {
        id: 1,
        name: "Rebula Medot",
        price: 15.99,
        image: "https://i.imgur.com/ZHwIV0w.png",
        descriptionKey: "rebula",
        region: "Goriška Brda",
        year: 2020
      },
      {
        id: 2,
        name: "Teran Kras",
        price: 18.50,
        image: "https://i.imgur.com/cRMfUwF.png",
        descriptionKey: "teran",
        region: "Kras",
        year: 2019
      },
      {
        id: 3,
        name: "Malvazija Vipava",
        price: 12.75,
        image: "https://i.imgur.com/GgY9htC.png",
        descriptionKey: "malvazija",
        region: "Vipava Valley",
        year: 2021
      },
      {
        id: 4,
        name: "Refošk Premium",
        price: 22.99,
        image: "https://i.imgur.com/yIWKptj.png",
        descriptionKey: "refosk",
        region: "Slovenian Istria",
        year: 2018
      },
      {
        id: 5,
        name: "Sauvignon Blanc",
        price: 14.50,
        image: "https://i.imgur.com/ewUvPrM.png",
        descriptionKey: "sauvignon",
        region: "Štajerska",
        year: 2020
      },
      // Row 2
      {
        id: 6,
        name: "Merlot Brda",
        price: 19.99,
        image: "https://i.imgur.com/CVPXctD.png",
        descriptionKey: "merlot",
        region: "Goriška Brda",
        year: 2018
      },
      {
        id: 7,
        name: "Rumeni Muškat",
        price: 16.25,
        image: "https://i.imgur.com/Zbuo8vQ.png",
        descriptionKey: "muskat",
        region: "Jeruzalem",
        year: 2021
      },
      {
        id: 8,
        name: "Pinot Noir",
        price: 24.50,
        image: "https://i.imgur.com/s7EgShd.png",
        descriptionKey: "pinot",
        region: "Vipava Valley",
        year: 2019
      },
      {
        id: 9,
        name: "Chardonnay Reserves",
        price: 21.75,
        image: "https://i.imgur.com/DtkQcct.png",
        descriptionKey: "chardonnay",
        region: "Štajerska",
        year: 2018
      },
      // Row 3
      {
        id: 10,
        name: "Zelen Heritage",
        price: 17.99,
        image: "https://i.imgur.com/6BMNlbS.png",
        descriptionKey: "zelen",
        region: "Vipava Valley",
        year: 2020
      },
      {
        id: 11,
        name: "Cabernet Sauvignon",
        price: 25.50,
        image: "https://i.imgur.com/AvVzpHS.png",
        descriptionKey: "cabernet",
        region: "Slovenian Istria",
        year: 2017
      },
      {
        id: 12,
        name: "Cuvée White",
        price: 13.25,
        image: "https://i.imgur.com/uaONZRO.png",
        descriptionKey: "cuvee",
        region: "Goriška Brda",
        year: 2021
      },
      {
        id: 13,
        name: "Modra Frankinja",
        price: 20.99,
        image: "https://i.imgur.com/uahX6pQ.png",
        descriptionKey: "modra",
        region: "Dolenjska",
        year: 2019
      },
      // Row 4
      {
        id: 14,
        name: "Orange Wine",
        price: 28.50,
        image: "https://i.imgur.com/F2uZdaP.png",
        descriptionKey: "orange",
        region: "Goriška Brda",
        year: 2018
      },
      {
        id: 15,
        name: "Rosé Refresh",
        price: 11.99,
        image: "https://i.imgur.com/VInIT8C.png",
        descriptionKey: "rose",
        region: "Vipava Valley",
        year: 2021
      },
      {
        id: 16,
        name: "Pinela Organic",
        price: 19.25,
        image: "https://images.squarespace-cdn.com/content/v1/5e6427e605f12c0e70f377d6/1670868907509-O7LB2SAA9OMCCZKA83S7/Pinela.png",
        descriptionKey: "pinela",
        region: "Vipava Valley",
        year: 2020
      },
      {
        id: 17,
        name: "Sivi Pinot",
        price: 15.50,
        image: "https://i.imgur.com/5BRJdUs.png",
        descriptionKey: "sivi",
        region: "Štajerska",
        year: 2020
      },
      // Row 5
      {
        id: 18,
        name: "Sparkling Brut",
        price: 27.99,
        image: "https://i.imgur.com/dUifLMZ.png",
        descriptionKey: "sparkling",
        region: "Bizeljsko",
        year: 2018
      },
      {
        id: 19,
        name: "Barbera Reserve",
        price: 29.50,
        image: "https://i.imgur.com/Wq2eWEv.png",
        descriptionKey: "barbera",
        region: "Slovenian Istria",
        year: 2016
      },
      {
        id: 20,
        name: "Šipon Classic",
        price: 14.75,
        image: "https://i.imgur.com/EUhkKbT.png",
        descriptionKey: "sipon",
        region: "Jeruzalem",
        year: 2021
      }
    ];

    // Sort by price
    const sortedWines = [...sampleWines].sort((a, b) => a.price - b.price);
    setWines(sortedWines);
  }, []);

  const openWineDetails = (wine: Wine) => {
    setSelectedWine(wine);
  };

  const addToCart = (wine: Wine) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.wine.id === wine.id);
      
      if (existingItem) {
        return prev.map(item => 
          item.wine.id === wine.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prev, { wine, quantity: 1 }];
      }
    });
    
    // Close wine details if open
    if (selectedWine) {
      setSelectedWine(null);
    }
  };

  const updateCartItemQuantity = (wineId: number, change: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.wine.id === wineId) {
          const newQuantity = Math.max(0, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.wine.price * item.quantity), 0);
  };

  const shippingCost = cart.length > 0 ? 4.99 : 0;
  const subtotal = calculateTotal();
  const total = subtotal + shippingCost;

  // Get translated description for a wine
  const getWineDescription = (descriptionKey: string) => {
    return t(`winebar.wineDescriptions.${descriptionKey}`);
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('winebar.shopTitle')}</h2>
      
      {/* Wine Grid */}
      {!showCart && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wines.map((wine) => (
            <div 
              key={wine.id} 
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => openWineDetails(wine)}
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={wine.image} 
                  alt={wine.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold truncate">{wine.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-cispace-orange">€{wine.price.toFixed(2)}</span>
                  <Button 
                    size="sm" 
                    className="bg-cispace-orange hover:bg-cispace-orange/90 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(wine);
                    }}
                  >
                    {t('winebar.addButton')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart View */}
      {showCart && (
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6">{t('winebar.yourCart')}</h3>
          
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-cispace-gray-600 mb-4">{t('winebar.emptyCart')}</p>
              <Button 
                className="bg-cispace-orange hover:bg-cispace-orange/90 text-white"
                onClick={() => setShowCart(false)}
              >
                {t('winebar.continueShopping')}
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cart.map((item) => (
                  <div key={item.wine.id} className="flex items-center border-b pb-4">
                    <img 
                      src={item.wine.image} 
                      alt={item.wine.name} 
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold">{item.wine.name}</h4>
                      <p className="text-sm text-cispace-gray-600">{item.wine.region}, {item.wine.year}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button 
                        size="icon" 
                        variant="outline"
                        onClick={() => updateCartItemQuantity(item.wine.id, -1)}
                      >
                        <Minus size={16} />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        size="icon" 
                        variant="outline"
                        onClick={() => updateCartItemQuantity(item.wine.id, 1)}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                    <div className="ml-4 text-right w-24">
                      <p className="font-bold">€{(item.wine.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>{t('winebar.subtotal')}</span>
                  <span className="font-semibold">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>{t('winebar.shipping')}</span>
                  <span>€{shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold mt-4">
                  <span>{t('winebar.total')}</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline"
                    onClick={() => setShowCart(false)}
                  >
                    {t('winebar.continueShopping')}
                  </Button>
                  <Button 
                    className="bg-cispace-orange hover:bg-cispace-orange/90 text-white"
                  >
                    {t('winebar.proceedToCheckout')}
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Wine Details Dialog */}
      <Dialog open={selectedWine !== null} onOpenChange={(open) => !open && setSelectedWine(null)}>
        <DialogContent className="max-w-3xl">
          {selectedWine && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-full">
                <img 
                  src={selectedWine.image} 
                  alt={selectedWine.name}
                  className="w-full h-[300px] object-cover rounded-md" 
                />
              </div>
              <div>
                <DialogHeader>
                  <DialogTitle>{selectedWine.name}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-4">
                  <p className="text-lg font-semibold text-cispace-orange">€{selectedWine.price.toFixed(2)}</p>
                  <div>
                    <p className="text-sm font-semibold text-cispace-gray-600">{t('winebar.region')}: {selectedWine.region}</p>
                    <p className="text-sm font-semibold text-cispace-gray-600">{t('winebar.year')}: {selectedWine.year}</p>
                  </div>
                  <p className="text-cispace-gray-700">
                    {getWineDescription(selectedWine.descriptionKey)}
                  </p>
                  <Button 
                    className="bg-cispace-orange hover:bg-cispace-orange/90 text-white w-full mt-6"
                    onClick={() => addToCart(selectedWine)}
                  >
                    {t('winebar.addToCart')}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Shop/Cart Toggle Button */}
      <div className="flex justify-center mt-10">
        <Button 
          className="bg-cispace-orange hover:bg-cispace-orange/90 text-white"
          onClick={() => setShowCart(!showCart)}
        >
          {showCart ? t('winebar.returnToShop') : t('winebar.viewCart')}
        </Button>
      </div>
    </div>
  );
};

export default WineShop;