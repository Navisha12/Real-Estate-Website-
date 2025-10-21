
import React from 'react';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onSelectProperty: (property: Property) => void;
}

const BedIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M19 9.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 9.5V4.5A1.5 1.5 0 012.5 3h15A1.5 1.5 0 0119 4.5v5z" />
        <path fillRule="evenodd" d="M2 13.5A1.5 1.5 0 003.5 15h13a1.5 1.5 0 001.5-1.5v-1h-16v1z" clipRule="evenodd" />
    </svg>
);

const BathIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 5a3 3 0 013-3h4a3 3 0 013 3v2.586a1 1 0 01-.293.707l-1.414 1.414a1 1 0 00-.293.707V15a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4.586a1 1 0 00-.293-.707L5.293 8.293A1 1 0 015 7.586V5zm10 4.293L13.293 7.586A1 1 0 0013 6.586V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v1.586a1 1 0 00.293.707L9 9.293V15h2v-5.707z" clipRule="evenodd" />
    </svg>
);

const SizeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
    </svg>
);


const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelectProperty }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col"
      onClick={() => onSelectProperty(property)}
    >
      <div className="relative">
        <img className="w-full h-56 object-cover" src={property.images[0]} alt={`View of ${property.address}`} />
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-md text-sm font-semibold">{property.type}</div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">${property.price.toLocaleString()}</h3>
        <p className="text-gray-600 text-lg">{property.address}</p>
        <p className="text-gray-500 text-sm mb-4">{`${property.city}, ${property.state} ${property.zip}`}</p>
        <div className="mt-auto border-t border-gray-200 pt-4 flex justify-between text-gray-600">
            <div className="flex items-center">
                <BedIcon className="h-5 w-5 mr-2 text-blue-500" />
                <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
                <BathIcon className="h-5 w-5 mr-2 text-blue-500" />
                <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
                <SizeIcon className="h-5 w-5 mr-2 text-blue-500" />
                <span>{property.sqft} sqft</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
