
export interface Property {
  id: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'House' | 'Condo' | 'Townhouse' | 'Apartment';
  yearBuilt: number;
  description: string;
  images: string[];
}

export interface SearchCriteria {
    location: string;
    type: 'any' | 'house' | 'condo' | 'townhouse' | 'apartment';
    priceRange: 'any' | 'under500k' | '500k-1m' | 'over1m';
}
