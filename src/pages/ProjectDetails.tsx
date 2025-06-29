import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Download, Calendar, Share2, ArrowLeft, Check, Car, Wifi, Shield, Trees } from 'lucide-react';

const ProjectDetails = () => {
  const { slug } = useParams();

  // Mock project data - in a real app, this would come from an API
  const project = {
    id: 1,
    name: 'KK Golden Heights',
    location: 'Kompally, Hyderabad',
    price: '₹45 Lakhs onwards',
    size: '200-500 sq yards',
    status: 'RERA Approved',
    reraNumber: 'RERA/TG/2024/001234',
    description: 'KK Golden Heights is a premium plotted development located in the rapidly growing area of Kompally, Hyderabad. This RERA-approved project offers modern amenities and excellent connectivity, making it an ideal choice for both end-users and investors.',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    amenities: [
      { icon: <Shield className="h-5 w-5" />, name: '24/7 Security' },
      { icon: <Car className="h-5 w-5" />, name: 'Gated Community' },
      { icon: <Trees className="h-5 w-5" />, name: 'Landscaped Gardens' },
      { icon: <Wifi className="h-5 w-5" />, name: 'Club House' },
      { icon: <Car className="h-5 w-5" />, name: 'Ample Parking' },
      { icon: <Trees className="h-5 w-5" />, name: 'Children Play Area' }
    ],
    highlights: [
      'RERA Approved Project',
      'Prime Location in Kompally',
      'Excellent Connectivity to IT Hubs',
      'Modern Infrastructure',
      'Gated Community with Security',
      'Ready for Construction'
    ],
    specifications: {
      'Total Area': '25 Acres',
      'Total Plots': '450 Plots',
      'Plot Sizes': '200, 300, 400, 500 sq yards',
      'Road Width': '30 feet & 40 feet',
      'Open Space': '40% Green Area',
      'Approval': 'HMDA & RERA Approved'
    },
    locationAdvantages: [
      '15 minutes to Kompally Railway Station',
      '20 minutes to Secunderabad',
      '25 minutes to HITEC City',
      '10 minutes to Kompally Bus Stand',
      'Close to Schools and Hospitals',
      'Easy access to ORR'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  };

  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-yellow-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/projects" className="text-gray-500 hover:text-yellow-600">Projects</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{project.name}</span>
          </div>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/projects"
              className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Projects</span>
            </Link>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{project.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{project.location}</span>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.status}
                </span>
                <span className="text-gray-600">RERA: {project.reraNumber}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600">Starting Price</span>
                  <div className="text-2xl font-bold text-yellow-600">{project.price}</div>
                </div>
                <div>
                  <span className="text-gray-600">Plot Sizes</span>
                  <div className="text-lg font-semibold">{project.size}</div>
                </div>
                <div className="space-y-2">
                  <a
                    href="tel:+919876543210"
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </a>
                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Schedule Site Visit</span>
                  </button>
                  <button className="w-full border-2 border-gray-300 hover:border-yellow-600 text-gray-700 hover:text-yellow-600 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3">
              <img
                src={project.images[selectedImage]}
                alt={project.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.name} ${index + 1}`}
                  className={`w-full h-24 object-cover rounded-lg cursor-pointer transition-opacity ${
                    selectedImage === index ? 'opacity-100 ring-2 ring-yellow-600' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-yellow-600">{amenity.icon}</div>
                      <span className="text-gray-700">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Walkthrough</h2>
                <div className="aspect-video">
                  <iframe
                    src={project.videoUrl}
                    title="Project Walkthrough"
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Location Map */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Google Maps Integration</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Specifications */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Advantages */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Location Advantages</h3>
                <div className="space-y-3">
                  {project.locationAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-gray-700 text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get More Information</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;