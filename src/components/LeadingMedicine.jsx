import React from 'react';

const LeadingMedicine = () => {
  return (
    <section className="py- bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Doctor image with blue circle */}
          <div className="">
            <div className="">
              {/* Main blue circle */}
              <div className=" rounded-full w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                <img 
                  src="/images/7.png" 
                  alt="Doctor" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover"
                />
              </div>
              
              {/* Small blue circle top left */}
              <div className=""></div>
              
              {/* Small blue circle bottom right */}
              <div className=""></div>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="md:w-1/2 md:pl-10">
            <div className="h-1 w-24 bg-orange-500 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Leading Medicine</h2>
            <p className="text-gray-600 mb-6">
              Problems trying to resolve the conflict between the two major realms of Classical physics: 
              Newtonian mechanics
            </p>
            <button className="text-orange-500 font-medium flex items-center group">
              Learn More 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingMedicine;