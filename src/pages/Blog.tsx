import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Reasons to Invest in Plotted Developments in Hyderabad',
      excerpt: 'Discover why plotted developments are becoming the preferred choice for smart investors in Hyderabad. From appreciation potential to flexibility in construction.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Kiran Kumar',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Investment Tips',
      slug: 'top-10-reasons-invest-plotted-developments-hyderabad'
    },
    {
      id: 2,
      title: 'RERA Compliance: What Every Property Buyer Should Know',
      excerpt: 'Understanding RERA regulations and how they protect your real estate investments. A comprehensive guide for first-time buyers and seasoned investors.',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Kavitha Reddy',
      date: '2024-03-10',
      readTime: '7 min read',
      category: 'Legal Guide',
      slug: 'rera-compliance-property-buyer-guide'
    },
    {
      id: 3,
      title: 'Hyderabad Real Estate Market Trends 2024',
      excerpt: 'Comprehensive analysis of Hyderabad real estate market trends, growth areas, and investment opportunities for 2024 and beyond.',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Rajesh Sharma',
      date: '2024-03-05',
      readTime: '8 min read',
      category: 'Market Analysis',
      slug: 'hyderabad-real-estate-market-trends-2024'
    },
    {
      id: 4,
      title: 'NRI Investment Guide: Buying Property in India',
      excerpt: 'Complete guide for NRIs looking to invest in Indian real estate. From legal requirements to tax implications and best practices.',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Kiran Kumar',
      date: '2024-02-28',
      readTime: '10 min read',
      category: 'NRI Guide',
      slug: 'nri-investment-guide-buying-property-india'
    },
    {
      id: 5,
      title: 'Sustainable Development: Building Green Communities',
      excerpt: 'How KK Projects is leading the way in sustainable development practices and creating eco-friendly communities for the future.',
      image: 'https://images.pexels.com/photos/1370717/pexels-photo-1370717.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Kavitha Reddy',
      date: '2024-02-20',
      readTime: '6 min read',
      category: 'Sustainability',
      slug: 'sustainable-development-building-green-communities'
    },
    {
      id: 6,
      title: 'Location Analysis: Why Outer Ring Road is the Next Big Thing',
      excerpt: 'Deep dive into the Outer Ring Road corridor and why it represents the future of Hyderabad real estate development.',
      image: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Rajesh Sharma',
      date: '2024-02-15',
      readTime: '9 min read',
      category: 'Location Guide',
      slug: 'location-analysis-outer-ring-road-hyderabad'
    }
  ];

  const categories = [
    'All Posts',
    'Investment Tips',
    'Legal Guide',
    'Market Analysis',
    'NRI Guide',
    'Sustainability',
    'Location Guide'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Real Estate Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and tips in Hyderabad real estate market.
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
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-yellow-100 hover:text-yellow-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Link to={`/blog/${filteredPosts[0].slug}`} className="block">
                    <img
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    />
                  </Link>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {filteredPosts[0].category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {filteredPosts[0].readTime}
                    </div>
                  </div>
                  <Link to={`/blog/${filteredPosts[0].slug}`}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-yellow-600 transition-colors cursor-pointer">
                      {filteredPosts[0].title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="h-4 w-4 mr-2" />
                        {filteredPosts[0].author}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(filteredPosts[0].date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${filteredPosts[0].slug}`}
                      className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-semibold"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-yellow-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 font-semibold text-sm"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and get the latest real estate insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;