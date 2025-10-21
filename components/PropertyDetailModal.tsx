
import React, { useState, useEffect, useCallback } from 'react';
import type { Property } from '../types';
import { generatePropertyDescription } from '../services/geminiService';

interface PropertyDetailModalProps {
  property: Property;
  onClose: () => void;
}

const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  const [mainImage, setMainImage] = useState(property.images[0]);
  const [aiDescription, setAiDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchDescription = useCallback(async () => {
    setIsLoading(true);
    try {
      const description = await generatePropertyDescription(property);
      setAiDescription(description);
    } catch (error) {
      console.error(error);
      setAiDescription("Could not generate a description at this time. Please enjoy the details below.");
    } finally {
      setIsLoading(false);
    }
  }, [property]);

  useEffect(() => {
    fetchDescription();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [property]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const DescriptionLoader: React.FC = () => (
    <div className="space-y-3 animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
            <h2 className="text-2xl font-bold text-gray-800">{property.address}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <img src={mainImage} alt="Main view" className="w-full h-80 object-cover rounded-lg mb-4 shadow-md"/>
                    <div className="flex space-x-2">
                        {property.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-blue-600' : 'border-transparent'}`}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        <span className="text-4xl font-extrabold text-blue-600">${property.price.toLocaleString()}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-lg mb-6">
                        <p><strong className="font-semibold text-gray-700">Type:</strong> {property.type}</p>
                        <p><strong className="font-semibold text-gray-700">Built:</strong> {property.yearBuilt}</p>
                        <p><strong className="font-semibold text-gray-700">Bedrooms:</strong> {property.bedrooms}</p>
                        <p><strong className="font-semibold text-gray-700">Bathrooms:</strong> {property.bathrooms}</p>
                        <p><strong className="font-semibold text-gray-700">SqFt:</strong> {property.sqft.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-bold text-xl text-gray-800 mb-2">Description</h4>
                        {isLoading ? <DescriptionLoader /> : <p className="text-gray-600 leading-relaxed">{aiDescription}</p>}
                    </div>
                </div>
            </div>
             <div className="mt-6">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Contact Agent
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailModal;
