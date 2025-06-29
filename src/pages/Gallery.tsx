import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'projects', name: 'Projects' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'events', name: 'Events' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'projects',
      title: 'KK Golden Heights - Aerial View',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful aerial view of our premium plotted development'
    },
    {
      id: 2,
      type: 'image',
      category: 'amenities',
      title: 'Club House',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern club house with recreational facilities'
    },
    {
      id: 3,
      type: 'image',
      category: 'infrastructure',
      title: 'Wide Roads',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Well-planned road infrastructure with proper drainage'
    },
    {
      id: 4,
      type: 'video',
      category: 'projects',
      title: 'KK Paradise Valley Walkthrough',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete project walkthrough video'
    },
    {
      id: 5,
      type: 'image',
      category: 'amenities',
      title: 'Swimming Pool',
      image: 'https://images.pexels.com/photos/1370717/pexels-photo-1370717.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Resort-style swimming pool with deck area'
    },
    {
      id: 6,
      type: 'image',
      category: 'events',
      title: 'Project Launch Event',
      image: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Grand launch event with customers and dignitaries'
    },
    {
      id: 7,
      type: 'image',
      category: 'infrastructure',
      title: 'Landscaped Gardens',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful landscaped gardens and green spaces'
    },
    {
      id: 8,
      type: 'image',
      category: 'amenities',
      title: 'Children Play Area',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Safe and modern children play area'
    },
    {
      id: 9,
      type: 'image',
      category: 'projects',
      title: 'KK Elite Enclave',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury plotted development with premium amenities'
    },
    {
      id: 10,
      type: 'video',
      category: 'events',
      title: 'Customer Testimonial',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Happy customer sharing their experience'
    },
    {
      id: 11,
      type: 'image',
      category: 'infrastructure',
      title: 'Security Gate',
      image: 'https://images.pexels.com/photos/1370717/pexels-photo-1370717.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern security gate with access control'
    },
    {
      id: 12,
      type: 'image',
      category: 'amenities',
      title: 'Gymnasium',
      image: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fully equipped gymnasium with modern equipment'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our projects, amenities, and infrastructure through our comprehensive gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-yellow-100 hover:text-yellow-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{filteredItems[selectedImage].title}</h3>
              <p className="text-gray-200">{filteredItems[selectedImage].description}</p>
              <div className="mt-2 text-sm text-gray-300">
                {selectedImage + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;