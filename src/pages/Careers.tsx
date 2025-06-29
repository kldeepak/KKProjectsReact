import React, { useState } from 'react';
import { MapPin, Clock, Users, Send, Briefcase, GraduationCap, Heart } from 'lucide-react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Sales Manager',
      department: 'Sales',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Lead our sales team to achieve targets and build strong customer relationships. Experience in real estate sales preferred.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '3-5 years of sales experience, preferably in real estate',
        'Strong communication and leadership skills',
        'Proven track record of meeting sales targets',
        'Knowledge of local real estate market'
      ],
      responsibilities: [
        'Manage and mentor sales team',
        'Develop sales strategies and processes',
        'Build relationships with potential customers',
        'Conduct site visits and presentations',
        'Achieve monthly and quarterly sales targets'
      ]
    },
    {
      id: 2,
      title: 'Project Manager',
      department: 'Operations',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Oversee project development from planning to completion. Ensure timely delivery and quality standards.',
      requirements: [
        'Bachelor\'s degree in Civil Engineering or Construction Management',
        '5-8 years of project management experience',
        'PMP certification preferred',
        'Strong organizational and problem-solving skills',
        'Experience with construction and development projects'
      ],
      responsibilities: [
        'Plan and execute project timelines',
        'Coordinate with contractors and vendors',
        'Monitor project progress and quality',
        'Manage project budgets and resources',
        'Ensure compliance with regulations'
      ]
    },
    {
      id: 3,
      title: 'Marketing Executive',
      department: 'Marketing',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Drive marketing initiatives and brand awareness. Experience in digital marketing and real estate marketing preferred.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        '2-4 years of marketing experience',
        'Strong digital marketing skills',
        'Creative thinking and analytical skills',
        'Experience with social media and content marketing'
      ],
      responsibilities: [
        'Develop and execute marketing campaigns',
        'Manage social media presence',
        'Create marketing content and materials',
        'Analyze marketing performance metrics',
        'Coordinate with external agencies'
      ]
    },
    {
      id: 4,
      title: 'Customer Relationship Manager',
      department: 'Customer Service',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Manage customer relationships and ensure exceptional service delivery throughout the customer journey.',
      requirements: [
        'Bachelor\'s degree in any field',
        '2-3 years of customer service experience',
        'Excellent communication skills',
        'Problem-solving abilities',
        'CRM software experience preferred'
      ],
      responsibilities: [
        'Manage customer inquiries and concerns',
        'Coordinate site visits and documentation',
        'Maintain customer database',
        'Follow up on customer satisfaction',
        'Handle customer feedback and complaints'
      ]
    },
    {
      id: 5,
      title: 'Legal Executive',
      department: 'Legal',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Handle legal documentation and compliance for real estate projects. Law degree required.',
      requirements: [
        'Law degree (LLB) from recognized university',
        '3-5 years of legal experience in real estate',
        'Knowledge of property laws and RERA regulations',
        'Strong attention to detail',
        'Excellent written and verbal communication'
      ],
      responsibilities: [
        'Review and draft legal documents',
        'Ensure RERA compliance',
        'Handle property documentation',
        'Coordinate with government authorities',
        'Provide legal advice on projects'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for you and your family.'
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, training programs, and skill development initiatives.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, paid time off, and a supportive work environment.'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Career Growth',
      description: 'Clear career progression paths and opportunities for advancement within the organization.'
    }
  ];

  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    alert('Thank you for your application! We will review it and get back to you soon.');
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build your career with KK Projects and be part of Hyderabad's leading real estate development company.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a dynamic team that values innovation, integrity, and excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-yellow-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and find the perfect role for your skills and aspirations.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                      >
                        {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                      </button>
                    </div>
                  </div>

                  {selectedJob === job.id && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">
              Ready to join our team? Submit your application and we'll get back to you soon.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={applicationForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applied For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={applicationForm.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select Position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={applicationForm.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select Experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-8">5-8 years</option>
                  <option value="8+">8+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={6}
                  value={applicationForm.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Submit Application</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;