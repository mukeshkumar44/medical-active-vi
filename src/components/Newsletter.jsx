import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    // Reset form
    setEmail('');
  };

  return (
    <section className="py-4  bg-white border-t border-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h5 className="text-orange-500 font-medium mb-2">Newsletter</h5>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">JOIN US</h2>
          <p className="text-gray-600 mb-8">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow px-4 py-3 mb-2 sm:mb-0 sm:mr-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;