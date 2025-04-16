import React from 'react';

const DoctorSpecialties = () => {
  const specialties = [
    {
      id: 1,
      tag: "Best dental surgeons",
      title: "Cancer Care",
      image: "/images/product-cover-126 sec-.png",
      rating: 4.9,
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      sales: 15,
      price: 6.48,
      originalPrice: 16.48,
      duration: "22hr 30min",
      lessons: 64
    },
    {
      id: 2,
      tag: "Painless procedures",
      title: "Health Queries",
      image: "/images/product-cover-124 sec-.png",
      rating: 4.9,
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      sales: 15,
      price: 6.48,
      originalPrice: 16.48,
      duration: "22hr 30min",
      lessons: 64
    },
    {
      id: 3,
      tag: "Book now",
      title: "Quick examination",
      image: "/images/product-cover-125 sec-.png",
      rating: 4.9,
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      sales: 15,
      price: 6.48,
      originalPrice: 16.48,
      duration: "22hr 30min",
      lessons: 64
    }
  ];

  return (
    <section className="py-6 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h5 className="text-orange-500 font-medium mb-2">Practice Advice</h5>
          <h2 className="text-4xl font-bold mb-4">Our Doctors Specialize in you</h2>
          <p className="text-gray-300 max-w-2xl">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => (
            <div key={specialty.id} className="bg-white rounded-lg overflow-hidden text-gray-800">
              {/* Card Image */}
              <div className="relative">
                <img 
                  src={specialty.image} 
                  alt={specialty.title} 
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-sm rounded">Sale</span>
                
                {/* Action buttons */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <button className="bg-white p-2 rounded-full hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-500">{specialty.tag}</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{specialty.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{specialty.title}</h3>
                <p className="text-gray-600 mb-4">{specialty.description}</p>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{specialty.sales} Sales</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-gray-400 line-through mr-2">${specialty.originalPrice}</span>
                  <span className="text-blue-500 font-bold">${specialty.price}</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{specialty.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>{specialty.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Progress</span>
                  </div>
                </div>
                
                <button className="text-blue-500 font-medium flex items-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSpecialties;