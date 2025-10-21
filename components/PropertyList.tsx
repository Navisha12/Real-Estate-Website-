
import React from 'react';
import PropertyCard from './PropertyCard';
import type { Property } from '../types';

interface PropertyListProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, onSelectProperty }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Featured Properties</h2>
      {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelectProperty={onSelectProperty}
              />
            ))}
          </div>
      ) : (
        <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No Properties Found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
