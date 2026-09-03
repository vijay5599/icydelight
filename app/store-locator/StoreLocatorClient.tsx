'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  MapPin, 
  Search, 
  Phone, 
  Clock, 
  Navigation, 
  Store as StoreIcon, 
  Building2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { stores } from '@/data/stores';
import { Store } from '@/types';

export function StoreLocatorClient() {
  const searchParams = useSearchParams();
  const cityParam = searchParams.get('city');

  const [selectedCity, setSelectedCity] = useState<string>(cityParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeStore, setActiveStore] = useState<Store>(stores[0]);

  useEffect(() => {
    if (cityParam) {
      setSelectedCity(cityParam.toLowerCase());
    }
  }, [cityParam]);

  const cities = ['all', 'Mumbai', 'Bengaluru', 'Delhi NCR', 'Hyderabad', 'Pune', 'Kolkata', 'Chennai', 'Ahmedabad'];

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesCity = selectedCity === 'all' || store.city.toLowerCase() === selectedCity.toLowerCase();
      const matchesType = selectedType === 'all' || store.type === selectedType;
      const q = searchQuery.toLowerCase();
      const matchesQuery =
        searchQuery.trim() === '' ||
        store.name.toLowerCase().includes(q) ||
        store.address.toLowerCase().includes(q) ||
        store.pincode.includes(q) ||
        store.city.toLowerCase().includes(q);

      return matchesCity && matchesType && matchesQuery;
    });
  }, [selectedCity, selectedType, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-[28px] border border-orange-100 shadow-sm mb-10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by locality, area or pincode (e.g. Bandra, 400050)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] placeholder:text-gray-400 text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
            />
          </div>

          <div className="md:col-span-5 flex items-center gap-2">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-bold focus:outline-none focus:border-[#FF8A00]"
            >
              <option value="all">All Outlet Formats</option>
              <option value="Exclusive Parlour">Exclusive Parlours</option>
              <option value="Express Kiosk">Express Kiosks</option>
              <option value="Retail Partner">Retail Supermarket Partners</option>
            </select>
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-t border-orange-50 pt-3">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city.toLowerCase())}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCity === city.toLowerCase()
                  ? 'bg-[#FF8A00] text-white shadow-md'
                  : 'bg-orange-50/60 text-[#14213D] hover:bg-orange-100'
              }`}
            >
              {city === 'all' ? 'All Cities' : city}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Layout: Store List + Interactive Map Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Store Cards List */}
        <div className="lg:col-span-6 space-y-4 max-h-[750px] overflow-y-auto pr-2">
          <p className="text-xs font-bold text-gray-500 mb-2">
            Showing <span className="text-[#FF8A00] font-black">{filteredStores.length}</span> verified IcyDelight locations
          </p>

          {filteredStores.length === 0 ? (
            <div className="p-8 bg-white rounded-3xl border border-orange-100 text-center">
              <StoreIcon className="w-12 h-12 text-orange-300 mx-auto mb-3" />
              <h4 className="text-base font-bold text-[#14213D]">No parlours found matching this search</h4>
              <p className="text-xs text-gray-500 mt-1">Try searching for a different city or clearing your filters.</p>
            </div>
          ) : (
            filteredStores.map((store) => {
              const isSelected = activeStore?.id === store.id;
              return (
                <div
                  key={store.id}
                  onClick={() => setActiveStore(store)}
                  className={`cursor-pointer p-5 sm:p-6 rounded-[24px] border transition-all duration-200 bg-white ${
                    isSelected
                      ? 'border-[#FF8A00] shadow-lg ring-2 ring-orange-200'
                      : 'border-orange-100 hover:border-orange-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                          store.isFlagship ? 'bg-[#FF8A00] text-white' : 'bg-orange-100 text-[#FF8A00]'
                        }`}>
                          {store.type}
                        </span>
                        {store.isFlagship && (
                          <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                            ★ Flagship
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-black text-[#14213D]">{store.name}</h3>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-gray-600 my-3">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                      <span>{store.address}, {store.city} - {store.pincode}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{store.hours}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                      <a href={`tel:${store.phone}`} className="hover:text-[#FF8A00] font-bold">
                        {store.phone}
                      </a>
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-600">
                      ✓ Open Now • Fresh Stock Available
                    </span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-orange-btn px-4 py-2 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Side: Visual Location Details Card & Map View */}
        <div className="lg:col-span-6 sticky top-28 bg-white rounded-[32px] p-6 sm:p-8 border border-orange-100 shadow-xl overflow-hidden">
          {activeStore ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> Selected Store
                </div>
                <span className="text-xs font-bold text-gray-400">PIN: {activeStore.pincode}</span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#14213D]">{activeStore.name}</h3>
                <p className="text-xs font-bold text-[#FF8A00] mt-1">{activeStore.type}</p>
                <p className="text-sm text-gray-600 mt-2">{activeStore.address}, {activeStore.city}, {activeStore.state}</p>
              </div>

              {/* Map Illustration Box */}
              <div className="relative h-64 rounded-2xl bg-gradient-to-br from-[#14213D] to-[#243354] p-4 flex flex-col justify-between overflow-hidden shadow-inner text-white">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="gridStore" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FF8A00" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridStore)" />
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold backdrop-blur-md">
                    Live GPS Tracker
                  </span>
                  <span className="text-xs text-orange-200 font-bold">State: {activeStore.state}</span>
                </div>

                <div className="relative z-10 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-[#FF8A00] text-white shadow-2xl animate-bounce">
                    <StoreIcon className="w-8 h-8" />
                  </div>
                </div>

                <div className="relative z-10 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 flex items-center justify-between text-xs">
                  <span>Store Hotline: {activeStore.phone}</span>
                  <span className="text-emerald-400 font-bold">Delivery Active</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeStore.name + ' ' + activeStore.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full gradient-orange-btn py-3.5 rounded-2xl text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Launch Google Maps GPS</span>
                </a>
                <a
                  href={`tel:${activeStore.phone}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#FFF9F2] hover:bg-orange-100 border border-orange-200 text-[#14213D] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF8A00]" />
                  <span>Call Store</span>
                </a>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">Select a store to view map details.</p>
          )}
        </div>
      </div>
    </div>
  );
}
