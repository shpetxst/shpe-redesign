import React from 'react';
import { MapPin, Mail, Phone, Calendar, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary-100 p-3 mr-4">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600">
                        Roy F. Mitte Building<br />
                        601 University Dr<br />
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
                      <a href="mailto:shpe.txstate@gmail.com" className="text-primary-600 hover:underline">
                        shpe.txstate@gmail.com
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
                        6:30 PM - 7:30 PM at Ingram Hall 3203
                      </p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary-100 hover:bg-primary-200 text-primary-600 p-3 rounded-full transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-primary-100 hover:bg-primary-200 text-primary-600 p-3 rounded-full transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-primary-100 hover:bg-primary-200 text-primary-600 p-3 rounded-full transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-primary-100 hover:bg-primary-200 text-primary-600 p-3 rounded-full transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="John Doe"
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
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center"
                  >
                    Send Message
                    <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;