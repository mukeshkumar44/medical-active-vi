import React from 'react';

const Hero = () => {
  return (
    <section className=" -mt-20 "style={{ backgroundImage: "url('/images/background sec-.png')"   }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white mb-8 md:mb-0 pt-10">
          <div className="mb-6">
            <h3 className="text-xl mb-3 mt-12">Join Us</h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet the Best<br />Doctors</h1>
            <p className="mb-8 text-lg">We are always fully focused on helping your child and you</p>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium">
              Get Quote Now
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 font-medium">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative">
            <div className=""></div>
            <div className=""></div>
            <img 
              src="/images/col-md-6.png" 
              alt="Doctor" 
              className="relative z-10 pt-40   w-full h-auto"
            />
          </div>
        </div>
      </div>
      
     
    </section>
  );
};

export default Hero;