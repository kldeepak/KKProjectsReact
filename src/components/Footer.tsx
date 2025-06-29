import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/5ee074b2-6ad2-4608-b842-f83a8facd3c2.jpg" 
                alt="KK Projects" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">KK Projects</h3>
                <p className="text-sm text-gray-400">Building Tomorrow's Foundations</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium land development and plotted ventures in Hyderabad. 
              Trusted by NRIs and HNIs for future-ready real estate investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-yellow-400 transition-colors">Projects</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-yellow-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Land Development</li>
              <li>Plotted Ventures</li>
              <li>RERA Compliance</li>
              <li>Investment Consultation</li>
              <li>Site Visits</li>
              <li>Documentation Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>123 Business District,</p>
                  <p>Hyderabad, Telangana 500001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a href="mailto:info@kkprojects.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  info@kkprojects.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 KK Projects. All rights reserved. | RERA Registration: RERA/TG/2024/001234
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">RERA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;