
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WineMenu = () => {
  const redWines = [
    {
      name: "Teran Kras",
      description: "Ruby red with high acidity and notes of red berries",
      price: "6.50",
      glassSize: "0.1L"
    },
    {
      name: "Modra Frankinja",
      description: "Medium-bodied with notes of blackberry and pepper",
      price: "7.20",
      glassSize: "0.1L"
    },
    {
      name: "Refošk Premium",
      description: "Full-bodied with dark fruit notes and firm tannins",
      price: "7.90",
      glassSize: "0.1L"
    },
    {
      name: "Merlot Brda",
      description: "Smooth with notes of cherry and plum, aged in oak",
      price: "7.50",
      glassSize: "0.1L"
    },
    {
      name: "Pinot Noir",
      description: "Elegant with red berry notes and subtle earthiness",
      price: "8.20",
      glassSize: "0.1L"
    }
  ];
  
  const whiteWines = [
    {
      name: "Rebula Medot",
      description: "Crisp with notes of green apple and citrus",
      price: "5.90",
      glassSize: "0.1L"
    },
    {
      name: "Malvazija",
      description: "Aromatic with floral and fruit notes",
      price: "6.20",
      glassSize: "0.1L"
    },
    {
      name: "Sauvignon Blanc",
      description: "Elegant with tropical fruit aromas and vibrant acidity",
      price: "6.50",
      glassSize: "0.1L"
    },
    {
      name: "Chardonnay",
      description: "Rich with notes of butter and oak",
      price: "7.20",
      glassSize: "0.1L"
    },
    {
      name: "Zelen",
      description: "Indigenous variety with herbal notes and fresh acidity",
      price: "7.50",
      glassSize: "0.1L"
    }
  ];
  
  const sparklingWines = [
    {
      name: "Slovenian Brut",
      description: "Traditional method with fine bubbles and toasty notes",
      price: "8.50",
      glassSize: "0.1L"
    },
    {
      name: "Rosé Sparkling",
      description: "Delicate bubbles with strawberry and rose petal notes",
      price: "9.20",
      glassSize: "0.1L"
    }
  ];
  
  const dessertWines = [
    {
      name: "Rumeni Muškat",
      description: "Sweet with intense floral aromas",
      price: "7.80",
      glassSize: "0.05L"
    },
    {
      name: "Late Harvest Laški Rizling",
      description: "Rich sweetness with honey and dried apricot notes",
      price: "8.50",
      glassSize: "0.05L"
    }
  ];

  const renderWineList = (wines: any[]) => (
    <div className="space-y-4">
      {wines.map((wine, index) => (
        <div key={index} className="flex justify-between border-b pb-3">
          <div>
            <h4 className="font-semibold">{wine.name}</h4>
            <p className="text-sm text-cispace-gray-600">{wine.description}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">€{wine.price}</p>
            <p className="text-sm text-cispace-gray-600">{wine.glassSize}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-8 text-center">Wine Menu</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img 
            src="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=1372&auto=format&fit=crop" 
            alt="Wine glasses"
            className="w-full h-full object-cover rounded-lg" 
          />
        </div>
        <div className="md:col-span-2">
          <Tabs defaultValue="red" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="red">Red</TabsTrigger>
              <TabsTrigger value="white">White</TabsTrigger>
              <TabsTrigger value="sparkling">Sparkling</TabsTrigger>
              <TabsTrigger value="dessert">Dessert</TabsTrigger>
            </TabsList>
            <TabsContent value="red" className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Red Wines</h3>
              {renderWineList(redWines)}
            </TabsContent>
            <TabsContent value="white" className="mt-6">
              <h3 className="text-lg font-semibold mb-4">White Wines</h3>
              {renderWineList(whiteWines)}
            </TabsContent>
            <TabsContent value="sparkling" className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Sparkling Wines</h3>
              {renderWineList(sparklingWines)}
            </TabsContent>
            <TabsContent value="dessert" className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Dessert Wines</h3>
              {renderWineList(dessertWines)}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-8 text-center text-cispace-gray-600">
        <p>All our wines are available by the glass or bottle.</p>
        <p>Please ask our staff about bottle prices and today's special selections.</p>
      </div>
    </div>
  );
};

export default WineMenu;
