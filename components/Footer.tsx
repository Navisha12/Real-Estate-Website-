import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Dream Dwellings</h3>
            <p className="text-gray-400">Finding your next home has never been easier. We are committed to providing the best service.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition">For Sale</button></li>
              <li className="mb-2"><button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition">About Us</button></li>
              <li className="mb-2"><button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Real Estate Ave, Suite 100</p>
            <p className="text-gray-400">Anytown, USA 12345</p>
            <p className="text-gray-400 mt-2">contact@dreamdwellings.com</p>
            <p className="text-gray-400">(123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            {/* Placeholder for social icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">FB</a>
              <a href="#" className="text-gray-400 hover:text-white">TW</a>
              <a href="#" className="text-gray-400 hover:text-white">IG</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dream Dwellings. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;