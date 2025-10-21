import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Dream Dwellings</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in finding the perfect place to call home. We combine cutting-edge technology with old-fashioned service to make your real estate journey seamless and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1992&auto=format&fit=crop" alt="Modern house" className="rounded-lg shadow-xl"/>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower our clients with the data, inspiration, and knowledge they need to make informed decisions. We strive to provide an exceptional experience by being transparent, honest, and always putting our clients' interests first.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading real estate marketplace, renowned for our innovative AI-powered tools, comprehensive listings, and a team of dedicated professionals who are passionate about helping people find their dream homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;