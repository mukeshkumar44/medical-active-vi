import React, { useState } from 'react';

const OurActivity = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="h-1 w-24 bg-orange-500 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Activity</h2>
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
          
          {/* Right side - Video/Image with play button */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
              {isPlaying ? (
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/DHzi7Y4ca0A?si=15I4V1ErqpfEBkX-&autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              ) : (
                <>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center transition-all transform hover:scale-110"
                      onClick={handlePlayVideo}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurActivity;