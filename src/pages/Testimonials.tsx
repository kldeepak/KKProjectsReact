import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'NRI from USA',
      project: 'KK Golden Heights',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Excellent service and transparency throughout the process. KK Projects made my investment from abroad seamless. The project quality exceeded my expectations, and the team was always available for any queries.',
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Hyderabad',
      project: 'KK Paradise Valley',
      rating: 5,
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'We are extremely happy with our plot purchase. The location is perfect, amenities are world-class, and the documentation process was smooth. KK Projects truly delivers what they promise.',
      date: 'February 2024'
    },
    {
      id: 3,
      name: 'Venkat Reddy',
      location: 'Bangalore',
      project: 'KK Elite Enclave',
      rating: 5,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Professional team, quality infrastructure, and excellent customer service. The investment has already shown good appreciation. I would definitely recommend KK Projects to anyone looking for reliable real estate investment.',
      date: 'January 2024'
    },
    {
      id: 4,
      name: 'Lakshmi Devi',
      location: 'Chennai',
      project: 'KK Green Valley',
      rating: 5,
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The eco-friendly approach and sustainable development practices impressed us. The project is well-planned with excellent connectivity. KK Projects has set a new standard in plotted developments.',
      date: 'December 2023'
    },
    {
      id: 5,
      name: 'Suresh Babu',
      location: 'NRI from UK',
      project: 'KK Royal Gardens',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Outstanding experience from start to finish. The virtual site visits and regular updates made it easy to invest from abroad. The project delivery was on time and the quality is exceptional.',
      date: 'November 2023'
    },
    {
      id: 6,
      name: 'Kavitha Rao',
      location: 'Hyderabad',
      project: 'KK Tech City',
      rating: 5,
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The smart home features and modern amenities are impressive. The location in HITEC City is perfect for our needs. KK Projects has delivered a futuristic living experience.',
      date: 'October 2023'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '15+', label: 'Years of Trust' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Customer Testimonials</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our satisfied customers who have made successful investments with KK Projects.
            </p>
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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from real customers who chose KK Projects for their real estate investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <p className="text-yellow-600 text-sm font-medium">{testimonial.project}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-yellow-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {testimonial.testimonial}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our customers share their experiences with KK Projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-500">Customer Video Testimonial {video}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Experience</h3>
                  <p className="text-gray-600 text-sm">
                    Watch how our customer shares their journey with KK Projects and their satisfaction with the investment.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the same level of satisfaction and success. Start your real estate journey with KK Projects today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="border-2 border-yellow-600 hover:bg-yellow-600 text-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;