import React from 'react';

const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Partners/Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20">
          <img src="/images/fa-brands-1.png" alt="Hooli" className="h-12 opacity-50" />
          <img src="/images/fa-brands-2.png" alt="Lyft" className="h-12 opacity-50" />
          <img src="/images/fa-brands-3.png" alt="Leaf" className="h-12 opacity-50" />
          <img src="/images/fa-brands-4.png" alt="Stripe" className="h-12 opacity-50" />
          <img src="/images/fa-brands-5.png" alt="AWS" className="h-12 opacity-50" />
          <img src="/images/fa-brands-6.png" alt="Reddit" className="h-12 opacity-50" />
        </div>

        {/* Department Section */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column */}
          <div className="md:w-1/3">
            <div className="h-1 w-36 bg-orange-500 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Department</h2>
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

          {/* Right Column - Service Cards */}
          <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-center font-bold text-lg mb-2">Cancer Care</h3>
              <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600 text-center">
                The gradual accumulation of information about atomic and small-scale behavior...
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white  p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <h3 className="text-center font-bold text-lg mb-2">Book now</h3>
              <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600 text-center">
                The gradual accumulation of information about atomic and small-scale behavior...
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-center font-bold text-lg mb-2">Online Appointment</h3>
              <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600 text-center">
                The gradual accumulation of information about atomic and small-scale behavior...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;