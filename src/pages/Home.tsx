import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Award, Users, Calendar, Phone, Download, Eye, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "The SVG City",
      subtitle: "Premium Plotted Development in Sadasivapet",
      description: "Experience luxury living with world-class amenities and excellent connectivity. RERA approved plots starting from ₹25 Lakhs.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
      price: "₹25 Lakhs onwards",
      location: "Sadasivapet, Hyderabad",
      cta1: { text: "View Project", link: "/projects/the-svg-city" },
      cta2: { text: "Call Now", phone: "+919876543210" }
    },
    {
      id: 2,
      title: "Smart Investment",
      subtitle: "Future-Ready Infrastructure",
      description: "Invest in tomorrow's growth corridor. The SVG City offers strategic location advantages with upcoming metro connectivity and IT hub proximity.",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1600",
      price: "High ROI Potential",
      location: "Prime Location",
      cta1: { text: "Schedule Site Visit", link: "/contact" },
      cta2: { text: "Download Brochure", download: true }
    },
    {
      id: 3,
      title: "RERA Approved",
      subtitle: "Transparent & Secure Investment",
      description: "100% RERA compliant project with clear titles and transparent documentation. Your investment is safe and secure with KK Projects.",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1600",
      price: "RERA Certified",
      location: "Legal Compliance",
      cta1: { text: "Know More", link: "/about" },
      cta2: { text: "Contact Us", link: "/contact" }
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      name: 'The SVG City',
      location: 'Sadasivapet, Hyderabad',
      price: '₹25 Lakhs onwards',
      size: '150-500 sq yards',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'RERA Approved',
      slug: 'the-svg-city',
      featured: true
    },
    {
      id: 2,
      name: 'KK Paradise Valley',
      location: 'Shamshabad, Hyderabad',
      price: '₹35 Lakhs onwards',
      size: '150-400 sq yards',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Ready to Move',
      slug: 'kk-paradise-valley'
    },
    {
      id: 3,
      name: 'KK Elite Enclave',
      location: 'Outer Ring Road, Hyderabad',
      price: '₹65 Lakhs onwards',
      size: '300-800 sq yards',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Pre-Launch',
      slug: 'kk-elite-enclave'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '5000+', label: 'Happy Families' },
    { number: '100%', label: 'RERA Compliance' }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl">
                  <div className="mb-4">
                    <span className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {slide.price}
                    </span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight text-white">
                    {slide.title}
                  </h1>
                  
                  <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-yellow-400">
                    {slide.subtitle}
                  </h2>
                  
                  <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl">
                    {slide.description}
                  </p>
                  
                  <div className="flex items-center text-white mb-8">
                    <MapPin className="h-6 w-6 mr-3 text-yellow-400" />
                    <span className="text-lg">{slide.location}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    {slide.cta1.phone ? (
                      <a
                        href={`tel:${slide.cta1.phone}`}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <Phone className="h-5 w-5" />
                        <span>{slide.cta1.text}</span>
                      </a>
                    ) : (
                      <Link
                        to={slide.cta1.link}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <Eye className="h-5 w-5" />
                        <span>{slide.cta1.text}</span>
                      </Link>
                    )}
                    
                    {slide.cta2.phone ? (
                      <a
                        href={`tel:${slide.cta2.phone}`}
                        className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Phone className="h-5 w-5" />
                        <span>{slide.cta2.text}</span>
                      </a>
                    ) : slide.cta2.download ? (
                      <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                        <Download className="h-5 w-5" />
                        <span>{slide.cta2.text}</span>
                      </button>
                    ) : (
                      <Link
                        to={slide.cta2.link}
                        className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <ArrowRight className="h-5 w-5" />
                        <span>{slide.cta2.text}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 z-30 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
          {currentSlide + 1} / {heroSlides.length}
        </div>
      </section>

      {/* The SVG City Highlight Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  FEATURED PROJECT
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                The SVG City
              </h2>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-6 w-6 mr-3 text-yellow-600" />
                <span className="text-xl">Sadasivapet, Hyderabad</span>
              </div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Discover premium plotted development in the heart of Sadasivapet. The SVG City offers 
                modern amenities, excellent connectivity, and RERA-approved plots perfect for your 
                dream home or smart investment.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">₹25L+</div>
                  <div className="text-gray-600">Starting Price</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">150-500</div>
                  <div className="text-gray-600">Sq Yards</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects/the-svg-city"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Eye className="h-5 w-5" />
                  <span>Explore Project</span>
                </Link>
                <a
                  href="tel:+919876543210"
                  className="border-2 border-yellow-600 hover:bg-yellow-600 text-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="The SVG City"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">RERA</div>
                <div className="text-sm">Approved</div>
              </div>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-yellow-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                <Play className="h-8 w-8 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our portfolio of premium plotted developments designed for modern living and smart investments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${project.featured ? 'ring-2 ring-yellow-400' : ''}`}>
                {project.featured && (
                  <div className="bg-yellow-600 text-white text-center py-2 font-semibold text-sm">
                    FEATURED PROJECT
                  </div>
                )}
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  <div className="flex space-x-2">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                    >
                      View Details
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

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose KK Projects?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for premium real estate investments in Hyderabad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">RERA Approved</h3>
              <p className="text-gray-600">
                All our projects are RERA compliant, ensuring transparency and legal security for your investments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prime Locations</h3>
              <p className="text-gray-600">
                Strategically located projects with excellent connectivity and future growth potential.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted by 5000+ Families</h3>
              <p className="text-gray-600">
                Over 15 years of experience in delivering quality projects and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Invest in The SVG City?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied investors who chose KK Projects for their real estate journey. 
            Schedule a site visit to The SVG City today and see the difference quality makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <Link
              to="/contact"
              className="border-2 border-yellow-600 hover:bg-yellow-600 text-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Site Visit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;