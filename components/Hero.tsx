
import React, { useState } from 'react';
import type { SearchCriteria } from '../types';

interface HeroProps {
    onSearch: (criteria: SearchCriteria) => void;
}

const LocationIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 21l-4.95-6.05a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [type, setType] = useState<'any' | 'house' | 'condo' | 'townhouse' | 'apartment'>('any');
    const [priceRange, setPriceRange] = useState<'any' | 'under500k' | '500k-1m' | 'over1m'>('any');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch({ location, type, priceRange });
    };

    return (
        <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
                <p className="text-lg md:text-xl mb-8">We have the most complete and up-to-date listings.</p>
                <form onSubmit={handleSearch} className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                        <div className="relative md:col-span-2">
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <LocationIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter city or state..."
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full p-3 pl-10 rounded-md bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <select value={type} onChange={(e) => setType(e.target.value as any)} className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="any">Any Type</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="apartment">Apartment</option>
                        </select>
                        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value as any)} className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="any">Any Price</option>
                            <option value="under500k">Under $500k</option>
                            <option value="500k-1m">$500k - $1M</option>
                            <option value="over1m">Over $1M</option>
                        </select>
                         <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 md:col-span-1 text-lg">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hero;