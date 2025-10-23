import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import PropertyDetailModal from './components/PropertyDetailModal';
import { PROPERTIES } from './constants';
import type { Property, SearchCriteria } from './types';

type Page = 'home' | 'about' | 'contact' | 'signin';

const App: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    location: '',
    type: 'any',
    priceRange: 'any',
  });
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(property => {
      const locationMatch = searchCriteria.location === '' || property.city.toLowerCase().includes(searchCriteria.location.toLowerCase()) || property.state.toLowerCase().includes(searchCriteria.location.toLowerCase());
      const typeMatch = searchCriteria.type === 'any' || property.type.toLowerCase() === searchCriteria.type;
      const priceMatch = searchCriteria.priceRange === 'any' || (
          searchCriteria.priceRange === 'under500k' && property.price < 500000
      ) || (
          searchCriteria.priceRange === '500k-1m' && property.price >= 500000 && property.price < 1000000
      ) || (
          searchCriteria.priceRange === 'over1m' && property.price >= 1000000
      );
      
      return locationMatch && typeMatch && priceMatch;
    });
  }, [searchCriteria]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Header onNavigate={navigateTo} />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onSearch={setSearchCriteria} />
            <PropertyList properties={filteredProperties} onSelectProperty={handleSelectProperty} />
          </>
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'signin' && <SignIn onNavigate={navigateTo} />}
      </main>
      <Footer onNavigate={navigateTo} />
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;