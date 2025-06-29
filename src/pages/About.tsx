import React from 'react';
import { Award, Users, MapPin, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2009', event: 'KK Projects Founded' },
    { year: '2012', event: 'First RERA Approved Project' },
    { year: '2015', event: '1000+ Happy Families' },
    { year: '2018', event: 'Expansion to Outer Ring Road' },
    { year: '2021', event: '25+ Successful Projects' },
    { year: '2024', event: '5000+ Satisfied Customers' }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards and customer satisfaction.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Integrity',
      description: 'Transparency and honesty form the foundation of our business relationships with customers and partners.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Their dreams and aspirations drive our commitment.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality',
      description: 'We never compromise on quality, delivering projects that stand the test of time and exceed expectations.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About KK Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building Tomorrow's Foundations with 15+ years of excellence in premium land development and plotted ventures across Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, KK Projects began with a simple vision: to create premium plotted developments 
                  that offer exceptional value and quality to our customers. What started as a small venture has 
                  grown into one of Hyderabad's most trusted real estate developers.
                </p>
                <p>
                  Over the years, we have successfully delivered 50+ projects, creating homes for more than 5,000 
                  families. Our commitment to quality, transparency, and customer satisfaction has earned us the 
                  trust of NRIs, HNIs, and local investors alike.
                </p>
                <p>
                  Today, KK Projects stands as a symbol of reliability in the real estate sector, with all our 
                  projects being RERA approved and designed to meet the evolving needs of modern families.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="KK Projects Development"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-600 text-white p-6 rounded-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To create exceptional plotted developments that provide our customers with secure, 
                profitable, and future-ready real estate investments. We are committed to delivering 
                projects that exceed expectations while maintaining the highest standards of quality, 
                transparency, and customer service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred real estate developer in Hyderabad, known for 
                our innovative approach, sustainable development practices, and unwavering commitment 
                to customer satisfaction. We envision creating communities that enhance the quality 
                of life for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at KK Projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-yellow-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our 15-year journey of excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{milestone.year}</div>
                      <div className="text-gray-900 font-semibold">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-yellow-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries behind KK Projects' success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="CEO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kiran Kumar</h3>
                <p className="text-yellow-600 font-semibold mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years in real estate, Kiran leads KK Projects with vision and integrity, 
                  ensuring every project meets the highest standards.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="COO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kavitha Reddy</h3>
                <p className="text-yellow-600 font-semibold mb-3">Chief Operating Officer</p>
                <p className="text-gray-600 text-sm">
                  Kavitha oversees operations and ensures seamless project delivery, bringing 15 years 
                  of operational excellence to the team.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="CTO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rajesh Sharma</h3>
                <p className="text-yellow-600 font-semibold mb-3">Head of Development</p>
                <p className="text-gray-600 text-sm">
                  Rajesh leads our development team with expertise in sustainable construction and 
                  innovative design solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;