import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-blue-600 py-4 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Medical Active</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          <Link to="/product" className="text-white hover:text-blue-200">Product</Link>
          <Link to="/pricing" className="text-white hover:text-blue-200">Pricing</Link>
          <Link to="/contact" className="text-white hover:text-blue-200">Contact</Link>
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
          <Link to="/join-us" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 flex items-center">
            JOIN US
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu - Fixed Position */}
      <div 
        className={`fixed inset-0 bg-blue-600 z-40 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-16">
          <nav className="flex flex-col space-y-6 text-center">
            <Link to="/" className="text-white text-xl hover:text-blue-200">Home</Link>
            <Link to="/product" className="text-white text-xl hover:text-blue-200">Product</Link>
            <Link to="/pricing" className="text-white text-xl hover:text-blue-200">Pricing</Link>
            <Link to="/contact" className="text-white text-xl hover:text-blue-200">Contact</Link>
          </nav>
          <div className="flex flex-col items-center space-y-4 mt-8 pt-8 border-t border-blue-500">
            <Link to="/login" className="text-white text-xl hover:text-blue-200">Login</Link>
            <Link to="/join-us" className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 flex items-center">
              JOIN US
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;