import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Filter, Search, Download, Eye } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const projects = [
    {
      id: 1,
      name: 'KK Golden Heights',
      location: 'Kompally, Hyderabad',
      price: '₹45 Lakhs onwards',
      priceValue: 45,
      size: '200-500 sq yards',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'RERA Approved',
      slug: 'kk-golden-heights',
      amenities: ['24/7 Security', 'Gated Community', 'Park', 'Club House'],
      description: 'Premium plotted development with modern amenities and excellent connectivity.'
    },
    {
      id: 2,
      name: 'KK Paradise Valley',
      location: 'Shamshabad, Hyderabad',
      price: '₹35 Lakhs onwards',
      priceValue: 35,
      size: '150-400 sq yards',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Ready to Move',
      slug: 'kk-paradise-valley',
      amenities: ['Swimming Pool', 'Gym', 'Children Play Area', 'Landscaped Gardens'],
      description: 'Serene plotted community near the airport with world-class amenities.'
    },
    {
      id: 3,
      name: 'KK Elite Enclave',
      location: 'Outer Ring Road, Hyderabad',
      price: '₹65 Lakhs onwards',
      priceValue: 65,
      size: '300-800 sq yards',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Pre-Launch',
      slug: 'kk-elite-enclave',
      amenities: ['Golf Course', 'Spa', 'Business Center', 'Helipad'],
      description: 'Ultra-luxury plotted development for discerning investors.'
    },
    {
      id: 4,
      name: 'KK Green Valley',
      location: 'Medchal, Hyderabad',
      price: '₹28 Lakhs onwards',
      priceValue: 28,
      size: '120-300 sq yards',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'RERA Approved',
      slug: 'kk-green-valley',
      amenities: ['Organic Farm', 'Jogging Track', 'Yoga Center', 'Solar Lighting'],
      description: 'Eco-friendly plotted community with sustainable living features.'
    },
    {
      id: 5,
      name: 'KK Royal Gardens',
      location: 'Bachupally, Hyderabad',
      price: '₹52 Lakhs onwards',
      priceValue: 52,
      size: '250-600 sq yards',
      image: 'https://images.pexels.com/photos/1370717/pexels-photo-1370717.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Under Construction',
      slug: 'kk-royal-gardens',
      amenities: ['Tennis Court', 'Banquet Hall', 'Library', 'Senior Citizen Area'],
      description: 'Premium gated community with royal amenities and modern infrastructure.'
    },
    {
      id: 6,
      name: 'KK Tech City',
      location: 'HITEC City, Hyderabad',
      price: '₹85 Lakhs onwards',
      priceValue: 85,
      size: '400-1000 sq yards',
      image: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Sold Out',
      slug: 'kk-tech-city',
      amenities: ['Smart Homes', 'EV Charging', 'Co-working Space', 'Rooftop Garden'],
      description: 'Technology-enabled plotted development in the heart of IT corridor.'
    }
  ];

  const locations = ['All Locations', 'Kompally', 'Shamshabad', 'Outer Ring Road', 'Medchal', 'Bachupally', 'HITEC City'];
  const priceRanges = ['All Prices', 'Under ₹30 Lakhs', '₹30-50 Lakhs', '₹50-70 Lakhs', 'Above ₹70 Lakhs'];
  const statuses = ['All Status', 'RERA Approved', 'Ready to Move', 'Pre-Launch', 'Under Construction', 'Sold Out'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' ||
                           project.location.includes(selectedLocation);
    
    const matchesPrice = selectedPriceRange === '' || selectedPriceRange === 'All Prices' ||
                        (selectedPriceRange === 'Under ₹30 Lakhs' && project.priceValue < 30) ||
                        (selectedPriceRange === '₹30-50 Lakhs' && project.priceValue >= 30 && project.priceValue <= 50) ||
                        (selectedPriceRange === '₹50-70 Lakhs' && project.priceValue > 50 && project.priceValue <= 70) ||
                        (selectedPriceRange === 'Above ₹70 Lakhs' && project.priceValue > 70);
    
    const matchesStatus = selectedStatus === '' || selectedStatus === 'All Status' ||
                         project.status === selectedStatus;

    return matchesSearch && matchesLocation && matchesPrice && matchesStatus;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover premium plotted developments across Hyderabad, designed for modern living and smart investments.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLocation('');
                setSelectedPriceRange('');
                setSelectedStatus('');
              }}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Clear All</span>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'RERA Approved' ? 'bg-green-500 text-white' :
                      project.status === 'Ready to Move' ? 'bg-blue-500 text-white' :
                      project.status === 'Pre-Launch' ? 'bg-purple-500 text-white' :
                      project.status === 'Under Construction' ? 'bg-orange-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold text-yellow-600">{project.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plot Size:</span>
                      <span className="font-semibold">{project.size}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Key Amenities:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.amenities.slice(0, 2).map((amenity, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {amenity}
                        </span>
                      ))}
                      {project.amenities.length > 2 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{project.amenities.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors flex items-center justify-center space-x-1"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View Details</span>
                    </Link>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>Brochure</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLocation('');
                  setSelectedPriceRange('');
                  setSelectedStatus('');
                }}
                className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;