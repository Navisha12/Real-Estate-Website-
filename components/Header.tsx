import React, { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about' | 'contact' | 'signin') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about' | 'contact' | 'signin') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="text-2xl font-bold text-gray-800 focus:outline-none">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1h5a1 1 0 110 2h-1v9a1 1 0 01-1 1H6a1 1 0 01-1-1V6H4a1 1 0 110-2h5V3a1 1 0 011-1zm3 8a1 1 0 10-2 0v4a1 1 0 102 0v-4z" clipRule="evenodd" />
              <path d="M6 5h8v10H6V5z" opacity="0.3"/>
            </svg>
            Dream Dwellings
          </div>
        </button>
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleNavClick('home')} className="text-gray-600 hover:text-blue-600 transition duration-300">For Sale</button>
          <button onClick={() => handleNavClick('about')} className="text-gray-600 hover:text-blue-600 transition duration-300">About Us</button>
          <button onClick={() => handleNavClick('contact')} className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</button>
          <button onClick={() => handleNavClick('signin')} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Sign In
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={!isMenuOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">For Sale</button>
          <button onClick={() => handleNavClick('about')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">About Us</button>
          <button onClick={() => handleNavClick('contact')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Contact</button>
          <button onClick={() => handleNavClick('signin')} className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;