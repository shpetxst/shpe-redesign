import React from 'react';
import { ChevronRight, Users, Briefcase, Award, GraduationCap } from 'lucide-react';

const MEMBERSHIP_BENEFITS = [
  {
    icon: Briefcase,
    title: 'Professional Development',
    description: 'Access to career fairs, resume workshops, and industry panels exclusive to SHPE members'
  },
  {
    icon: Users,
    title: 'Mentorship Opportunities',
    description: 'Connect with industry professionals and experienced students to guide your educational and career journey'
  },
  {
    icon: GraduationCap,
    title: 'Scholarship Access',
    description: 'Exclusive access to SHPE national and regional scholarships to support your education'
  },
  {
    icon: Award,
    title: 'Leadership Experience',
    description: 'Opportunities to lead projects, committees, and initiatives that build valuable skills'
  }
];

const MembershipSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Become part of a supportive network dedicated to helping Hispanic engineers achieve their full potential.
          </p>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Membership Benefits</h3>
            <div className="space-y-6">
              {MEMBERSHIP_BENEFITS.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="rounded-full bg-primary-100 p-3 mr-4">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Column: Membership Form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to join SHPE?</h3>
              <form>
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
                      Major
                    </label>
                    <select
                      id="major"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select your major</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Computer Engineering">Computer Engineering</option>
                      <option value="Electrical Engineering">Electrical Engineering</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                      Year
                    </label>
                    <select
                      id="year"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select year</option>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  Submit Application
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  By submitting, you agree to our membership terms and conditions.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-20 bg-primary-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <svg
                  className="h-12 w-12 text-primary-300 mb-6"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 4 2 7.456 2 11.352v16.256c0 0.8 0.8 1.6 1.6 1.6h8c0.8 0 1.6-0.8 1.6-1.6v-8c0-0.8-0.8-1.6-1.6-1.6h-3.2v-0.8c0-1.6 1.6-3.2 3.2-3.2h1.6c0.8 0 1.6-0.8 1.6-1.6v-6.4c0-0.8-0.8-1.6-1.6-1.6h-1.6z M23.2 4c-4.8 0-7.2 3.456-7.2 7.352v16.256c0 0.8 0.8 1.6 1.6 1.6h8c0.8 0 1.6-0.8 1.6-1.6v-8c0-0.8-0.8-1.6-1.6-1.6h-3.2v-0.8c0-1.6 1.6-3.2 3.2-3.2h1.6c0.8 0 1.6-0.8 1.6-1.6v-6.4c0-0.8-0.8-1.6-1.6-1.6h-1.6z" />
                </svg>
                <p className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                  Joining SHPE at Texas State was the best decision I made in my academic career. The mentorship, professional connections, and leadership opportunities have been invaluable to my growth as an engineer and as a person.
                </p>
                <div>
                  <p className="text-white font-semibold">Maria Rodriguez</p>
                  <p className="text-primary-200">Computer Engineering, Class of 2023</p>
                  <p className="text-primary-200 mt-1">Now Software Engineer at IBM</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="SHPE Success Story"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;