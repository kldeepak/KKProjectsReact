import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Tag } from 'lucide-react';

const BlogDetails = () => {
  const { slug } = useParams();

  // Mock blog data - in a real app, this would come from an API based on the slug
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Reasons to Invest in Plotted Developments in Hyderabad',
      excerpt: 'Discover why plotted developments are becoming the preferred choice for smart investors in Hyderabad. From appreciation potential to flexibility in construction.',
      content: `
        <p>Hyderabad's real estate market has been witnessing unprecedented growth, and plotted developments have emerged as the most preferred investment option for discerning investors. Here are the top 10 reasons why you should consider investing in plotted developments in Hyderabad.</p>

        <h2>1. Flexibility in Construction</h2>
        <p>Unlike ready-to-move apartments, plotted developments offer complete flexibility in designing and constructing your dream home. You can choose the architecture, layout, and amenities according to your preferences and requirements.</p>

        <h2>2. Better Appreciation Potential</h2>
        <p>Plots typically appreciate faster than built-up properties. With Hyderabad's expanding IT sector and infrastructure development, plotted developments in strategic locations have shown remarkable appreciation rates of 15-20% annually.</p>

        <h2>3. Lower Maintenance Costs</h2>
        <p>Unlike apartments with monthly maintenance charges, plots have minimal ongoing costs. You only pay for utilities and services you actually use, making it a cost-effective long-term investment.</p>

        <h2>4. RERA Compliance and Transparency</h2>
        <p>All modern plotted developments in Hyderabad are RERA compliant, ensuring transparency in transactions, clear titles, and timely delivery of infrastructure.</p>

        <h2>5. Strategic Location Advantages</h2>
        <p>Hyderabad's plotted developments are strategically located near IT hubs, educational institutions, and upcoming infrastructure projects like metro connectivity and outer ring road expansions.</p>

        <h2>6. Tax Benefits</h2>
        <p>Investing in plots offers various tax benefits under sections 80C and 24 of the Income Tax Act. Additionally, long-term capital gains tax is more favorable for land investments.</p>

        <h2>7. Loan Availability</h2>
        <p>Leading banks and financial institutions offer attractive loan schemes for plot purchases with competitive interest rates and flexible repayment options.</p>

        <h2>8. Future Development Potential</h2>
        <p>Hyderabad's master plan includes significant infrastructure development in suburban areas, making plotted developments in these regions highly lucrative for future growth.</p>

        <h2>9. Rental Income Opportunities</h2>
        <p>Once you construct on your plot, rental yields in Hyderabad are attractive, especially near IT corridors and educational hubs.</p>

        <h2>10. Portfolio Diversification</h2>
        <p>Real estate, particularly land, serves as an excellent hedge against inflation and provides portfolio diversification for investors.</p>

        <h2>Conclusion</h2>
        <p>Plotted developments in Hyderabad offer a perfect combination of flexibility, appreciation potential, and strategic location advantages. With proper due diligence and choosing RERA-approved projects, investors can build substantial wealth through land investments.</p>
      `,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      author: 'Kiran Kumar',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Investment Tips',
      slug: 'top-10-reasons-invest-plotted-developments-hyderabad',
      tags: ['Investment', 'Hyderabad', 'Real Estate', 'Plots', 'RERA']
    },
    {
      id: 2,
      title: 'RERA Compliance: What Every Property Buyer Should Know',
      excerpt: 'Understanding RERA regulations and how they protect your real estate investments. A comprehensive guide for first-time buyers and seasoned investors.',
      content: `
        <p>The Real Estate (Regulation and Development) Act, 2016, commonly known as RERA, has revolutionized the Indian real estate sector. Understanding RERA compliance is crucial for every property buyer to make informed investment decisions.</p>

        <h2>What is RERA?</h2>
        <p>RERA is a landmark legislation that aims to protect the interests of property buyers and promote transparency in the real estate sector. It establishes regulatory authorities in each state to oversee real estate transactions.</p>

        <h2>Key Benefits of RERA for Buyers</h2>
        <p>RERA provides several protections for property buyers, including standardized agreements, timely project completion, and financial transparency from developers.</p>

        <h2>RERA Registration Process</h2>
        <p>All real estate projects exceeding 500 square meters or having more than 8 apartments must be registered under RERA. This ensures that only legitimate projects reach the market.</p>

        <h2>Buyer Rights Under RERA</h2>
        <p>RERA empowers buyers with rights to information, timely delivery, quality construction, and compensation for delays. Buyers can file complaints with RERA authorities for grievance redressal.</p>

        <h2>How to Verify RERA Compliance</h2>
        <p>Always verify a project's RERA registration number on the official state RERA website before making any investment. Check for project details, approvals, and developer credentials.</p>

        <h2>Penalties for Non-Compliance</h2>
        <p>RERA imposes strict penalties on developers for non-compliance, including project deregistration and financial penalties, ensuring accountability in the sector.</p>
      `,
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1200',
      author: 'Kavitha Reddy',
      date: '2024-03-10',
      readTime: '7 min read',
      category: 'Legal Guide',
      slug: 'rera-compliance-property-buyer-guide',
      tags: ['RERA', 'Legal', 'Property Rights', 'Compliance', 'Real Estate Law']
    },
    {
      id: 3,
      title: 'Hyderabad Real Estate Market Trends 2024',
      excerpt: 'Comprehensive analysis of Hyderabad real estate market trends, growth areas, and investment opportunities for 2024 and beyond.',
      content: `
        <p>Hyderabad continues to be one of India's most dynamic real estate markets. As we progress through 2024, several trends are shaping the city's property landscape.</p>

        <h2>Market Overview</h2>
        <p>The Hyderabad real estate market has shown resilience and growth, with property prices appreciating steadily across various segments. The city's IT boom and infrastructure development continue to drive demand.</p>

        <h2>Emerging Growth Corridors</h2>
        <p>Areas like Outer Ring Road, Shamshabad, and Kompally are emerging as new growth corridors, offering excellent investment opportunities with superior connectivity and planned infrastructure.</p>

        <h2>IT Sector Impact</h2>
        <p>The expansion of IT companies and the establishment of new tech parks continue to boost residential demand, particularly in plotted developments and premium housing segments.</p>

        <h2>Infrastructure Development</h2>
        <p>Major infrastructure projects including metro expansion, airport connectivity, and road widening are positively impacting property values across the city.</p>

        <h2>Investment Hotspots</h2>
        <p>Key areas showing strong investment potential include Gachibowli, Kondapur, Manikonda, and emerging suburbs with planned development.</p>

        <h2>Price Trends</h2>
        <p>Property prices have shown steady appreciation of 8-12% annually, with plotted developments outperforming other segments in terms of returns.</p>
      `,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
      author: 'Rajesh Sharma',
      date: '2024-03-05',
      readTime: '8 min read',
      category: 'Market Analysis',
      slug: 'hyderabad-real-estate-market-trends-2024',
      tags: ['Market Trends', 'Hyderabad', 'Investment', 'Growth Areas', '2024']
    }
  ];

  // Find the blog post by slug
  const blogPost = blogPosts.find(post => post.slug === slug);

  // If blog post not found, show 404
  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(post => 
    post.id !== blogPost.id && post.category === blogPost.category
  ).slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-yellow-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/blog" className="text-gray-500 hover:text-yellow-600">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{blogPost.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors mb-6"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Blog</span>
            </Link>

            <div className="mb-6">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(blogPost.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-gray-600 font-medium">Share:</span>
              <div className="flex space-x-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Tag className="h-5 w-5" />
                <span className="font-medium">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-yellow-100 hover:text-yellow-700 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 font-semibold text-sm"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Invest?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert guidance on your real estate investment journey with KK Projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="border-2 border-yellow-600 hover:bg-yellow-600 text-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;