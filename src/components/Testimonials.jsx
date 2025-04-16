import React, { useState, useRef } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      rating: 4,
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
      name: "Regina Miles",
      position: "Designer",
      avatar: "/images/testimonial-user-cover-167@2x.png"
    },
    {
      id: 2,
      rating: 4,
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
      name: "Regina Miles",
      position: "Designer",
      avatar: "/images/testimonial-user-cover-124.png"
    },
    {
      id: 3,
      rating: 4,
      text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
      name: "Regina Miles",
      position: "Designer",
      avatar: "images/testimonial-user-cover-167@2x.png"
    },
    {
        id: 1,
        rating: 4,
        text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        name: "Regina Miles",
        position: "Designer",
        avatar: "/images/testimonial-user-cover-167@2x.png"
      },
      {
        id: 2,
        rating: 4,
        text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        name: "Regina Miles",
        position: "Designer",
        avatar: "/images/testimonial-user-cover-124.png"
      },
      {
        id: 3,
        rating: 4,
        text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        name: "Regina Miles",
        position: "Designer",
        avatar: "images/testimonial-user-cover-167@2x.png"
      }
  ];
  
  const nextSlide = () => {
    const newSlide = currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
    
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.testimonial-card').offsetWidth;
      scrollRef.current.scrollTo({
        left: newSlide * (cardWidth + 32), // 32px for the gap
        behavior: 'smooth'
      });
    }
  };
  
  const prevSlide = () => {
    const newSlide = currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.testimonial-card').offsetWidth;
      scrollRef.current.scrollTo({
        left: newSlide * (cardWidth + 32), // 32px for the gap
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h5 className="text-orange-500 font-medium mb-2">Practice Advice</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">See Our Impressions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card flex-shrink-0 w-full md:w-[calc(33.333%-1.5rem)] snap-center"
              >
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-gray-600 mb-6">{testimonial.text}</p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-orange-500">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Add CSS to hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;