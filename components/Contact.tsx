import React, { useState } from 'react';

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 006.196 6.196l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 10.884l7.997-5H2.003zM18 7.116l-8 4.8-8-4.8V14h16V7.116z" />
    <path fillRule="evenodd" d="M0 4a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 0h16v12H2V4z" clipRule="evenodd" />
  </svg>
);

const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" />
  </svg>
);

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., API call)
    alert(`Thank you for your message, ${formState.firstName}! We will get back to you shortly.`);
    setFormState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a question or want to schedule a viewing? Fill out the form below or use our contact details to get in touch. Our team is ready to assist you.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-xl">
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" name="firstName" placeholder="Your first name" value={formState.firstName} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50"/>
                </div>
                 <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Your last name" value={formState.lastName} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50"/>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email address" value={formState.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50"/>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Your phone number" value={formState.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" placeholder="How can we help you?" value={formState.message} onChange={handleInputChange} rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Office Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <LocationIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Main Office</h4>
                      <p className="text-gray-600">123 Real Estate Ave, Suite 100</p>
                      <p className="text-gray-600">Anytown, USA 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                      <p className="text-gray-500 text-sm">Monday to Friday, 9am to 6pm</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <EmailIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Email</h4>
                      <p className="text-gray-600">contact@dreamdwellings.com</p>
                      <p className="text-gray-500 text-sm">We'll respond as soon as possible</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Working Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg mt-8">
              <h4 className="text-xl font-bold mb-2">Schedule a Visit</h4>
              <p className="mb-4">Want to meet in person? Schedule an appointment with one of our agents.</p>
              <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
