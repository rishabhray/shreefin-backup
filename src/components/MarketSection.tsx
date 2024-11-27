import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function MarketSection() {
  const markets = [
    { name: 'Monthly', value: '₹4999/-', change: 'Silver', up: true },
    { name: 'Quterly', value: '₹14999/-', change: 'Gold', up: true },
    { name: 'Half yearly', value: '₹29999/-', change: 'Platinum', up: true },
    { name: 'Yearly', value: '₹59999/-', change: 'Dimond', up: true },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {markets.map((market, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-gray-500">{market.name}</h3>
                {market.up ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
              </div>
              <div className="mt-2">
                <span className="text-lg font-semibold">{market.value}</span>
                <span className={`ml-2 text-sm ${market.up ? 'text-green-500' : 'text-red-500'}`}>
                  {market.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
