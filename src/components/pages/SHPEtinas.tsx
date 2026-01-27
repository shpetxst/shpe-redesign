import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Award, Heart } from 'lucide-react';

const SHPEtinas = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Banner Section */}
      <div className="container mx-auto px-4 pt-20 mb-16">
        <div className="bg-primary-600 rounded-xl overflow-hidden flex flex-col md:flex-row h-64 md:h-80">
          <div className="flex-1 flex flex-col justify-center p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SHPEtinas
            </h1>
            <p className="text-xl opacity-90">
              Empowering the next generation of Hispanic women engineers through mentorship, leadership development, and sisterhood.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center p-8">
            <img
              src="/assets/images/SHPEtinas_events/IMG_2962.jpeg"
              alt="SHPEtinas Group Photo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About SHPEtinas</h2>
            <p className="text-lg text-gray-700 mb-6">
              SHPEtinas is a specialized program within SHPE that focuses on supporting and empowering Hispanic women in engineering. 
              We create a supportive environment where women can develop their technical skills, leadership abilities, and professional networks.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our program addresses the unique challenges faced by Hispanic women in STEM fields and provides resources, mentorship, 
              and opportunities to help our members succeed in their academic and professional careers.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Mentorship Network</h4>
                  <p className="text-gray-600">Connect with professional mentors and peer support systems</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Leadership Workshops</h4>
                  <p className="text-gray-600">Develop essential leadership and professional skills</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Recognition Program</h4>
                  <p className="text-gray-600">Celebrate achievements and academic excellence</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Sisterhood</h4>
                  <p className="text-gray-600">Build lasting friendships and professional relationships</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">SHPEtinas in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <img
                  src="/assets/images/SHPEtinas_events/IMG_7301.JPG"
                  alt="SHPEtinas Conference Group Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-primary-600 text-sm">Mentorship Sessions</p>
              <p className="text-gray-700 text-sm">Monthly mentorship meetings connecting students with industry professionals</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="w-full h-48 bg-primary-100 overflow-hidden rounded-lg flex items-center justify-center mb-4">
                <img
                  src="/assets/images/SHPEtinas_events/IMG_8469.jpg"
                  alt="Member Spotlight"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm">Celebrating academic excellence and leadership achievements</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-full h-48 bg-primary-100 overflow-hidden rounded-lg flex items-center justify-center mb-4">
                <img
                  src="/assets/images/SHPEtinas_events/IMG_2971.jpg"
                  alt="SHPEtinas Conference Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm">Building strong bonds through social and professional events</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                SHPEtinas is dedicated to creating a supportive community for Hispanic women in engineering, providing them with the tools, 
                resources, and network necessary to excel in their academic pursuits and professional careers.
              </p>
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="w-full h-48 bg-primary-100 overflow-hidden rounded-lg flex items-center justify-center mb-4">
                <img
                  src="/assets/images/SHPEtinas_events/IMG_7303.JPG"
                  alt="SHPEtinas Group Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-gray-600">Foster a strong network of support and collaboration</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600">Promote academic and professional achievement</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Empowerment</h4>
              <p className="text-gray-600">Inspire confidence and leadership in all members</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Involved</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Join our community of inspiring Hispanic women engineers. Whether you're a current student, recent graduate, or seasoned professional, 
                there's a place for you in SHPEtinas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/" 
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Learn More About SHPE
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <img
                  src="/assets/images/SHPEtinas_events/IMG_7298.JPG"
                  alt="SHPEtinas Conference Sitting Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SHPEtinas; 