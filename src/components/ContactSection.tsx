import React from 'react';
import { MapPin, Mail, Calendar, Instagram, Twitter, Linkedin, Briefcase, Users, GraduationCap, Award } from 'lucide-react';

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

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more? Reach out to us directly or connect through social media.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Contact Information Card */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex-1 flex flex-col">
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary-100 p-3 mr-4">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600">
                        Bruce & Gloria Ingram Hall<br />
                        310 W. Woods St.<br />
                        San Marcos, TX 78666
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary-100 p-3 mr-4">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:shpetxst@gmail.com" className="text-primary-600 hover:underline">
                        shpetxst@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary-100 p-3 mr-4">
                      <Calendar className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 mb-1">Meeting Times</h4>
                      <p className="text-gray-600">
                        General Meetings: Every other Tuesday<br />
                        6:30 PM - 7:30 PM (check the calendar for more info!)
                      </p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/shpe.txst/"  target='_blank' rel="noreferrer noopener" className="bg-primary-100 hover:bg-primary-200 text-primary-600 p-3 rounded-full transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://x.com/ShpeTxst" target='_blank' rel="noreferrer noopener" className="bg-primary-100 hover:bg-primary-200 text-primary-600 p-3 rounded-full transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/txst-shpe/posts/?feedView=all" target='_blank' rel="noreferrer noopener" className="bg-primary-100 hover:bg-primary-200 text-primary-600 p-3 rounded-full transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Membership Benefits Boxes Only */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;