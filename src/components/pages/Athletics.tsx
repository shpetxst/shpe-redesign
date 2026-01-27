import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, Target } from 'lucide-react';

const Athletics = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Banner Section */}
      <div className="container mx-auto px-4 pt-20 mb-16">
        <div className="bg-primary-600 rounded-xl overflow-hidden flex flex-col md:flex-row h-64 md:h-80">
          <div className="flex-1 flex flex-col justify-center p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SHPE Athletics
            </h1>
            <p className="text-xl opacity-90">
              Building teamwork, leadership, and community through competitive sports and recreational activities.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center p-8">
            <img
              src="/assets/images/Athletics_gallery/IMG_2972.jpg"
              alt="SHPE Athletics"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About SHPE Athletics</h2>
            <p className="text-lg text-gray-700 mb-6">
              SHPE Athletics brings together our community through the power of sports and physical activities. 
              We believe that athletic participation builds essential life skills including teamwork, leadership, 
              discipline, and resilience that translate directly to success in engineering and professional careers.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our athletic programs create opportunities for members to stay active, build lasting friendships, 
              and represent SHPE Texas State in various competitions and recreational leagues.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Features</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Trophy className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Competitive Teams</h4>
                  <p className="text-gray-600">Participate in intramural and recreational leagues</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Team Building</h4>
                  <p className="text-gray-600">Strengthen bonds through shared athletic experiences</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Regular Activities</h4>
                  <p className="text-gray-600">Weekly practices and recreational games</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Skill Development</h4>
                  <p className="text-gray-600">Improve athletic abilities and learn new sports</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sports Gallery Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Sports in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-3">
                <img
                  src="/assets/images/Athletics_gallery/IMG_2969.jpg"
                  alt="Athletics Spring Lonestar Action Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm">Intramural teams & pickup games</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-3">
                <img
                  src="/assets/images/Athletics_gallery/IMG_9084.jpg"
                  alt=" Athletics Fall Lonestar Action Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm">League play & tournaments</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-3">
                <img
                  src="/assets/images/Athletics_gallery/IMG_0559.jpg"
                  alt="Volleyball Action Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm">Indoor & outdoor activities</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-3">
                <img
                  src="/assets/images/Athletics_gallery/IMG_2974.jpg"
                  alt="Athletics Fall Lonestar Action Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm">Seasonal flag football</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Sports & Activities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                We participate in a variety of sports and activities throughout the year, accommodating different skill levels and interests.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Soccer</h4>
                  <p className="text-gray-600 text-sm">Competitive intramural teams and pickup games</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Basketball</h4>
                  <p className="text-gray-600 text-sm">League play and recreational tournaments</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Volleyball</h4>
                  <p className="text-gray-600 text-sm">Indoor and outdoor volleyball activities</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Flag Football</h4>
                  <p className="text-gray-600 text-sm">Seasonal flag football leagues</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
            <div className="w-3/4 h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-3 mx-auto">
                <img
                  src="/assets/images/Athletics_gallery/IMG_7292.jpg"
                  alt="Athletics Group Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm text-center">Building teamwork and camaraderie through athletic competition</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Participation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Personal Development</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Enhanced leadership and communication skills</li>
                <li>• Improved physical fitness and mental health</li>
                <li>• Stress relief and work-life balance</li>
                <li>• Confidence building through achievement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Community Building</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Stronger connections with fellow members</li>
                <li>• Networking opportunities in relaxed settings</li>
                <li>• Representation of SHPE values in competition</li>
                <li>• Inclusive environment for all skill levels</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Our Teams</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're a seasoned athlete or just looking to stay active and have fun, SHPE Athletics welcomes everyone. 
                No experience necessary – just bring your enthusiasm and team spirit!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Get Involved
                </Link>
                <Link 
                  to="/" 
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="w-3/4 h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-3 mx-auto">
                <img
                  src="/assets/images/Athletics_gallery/IMG_2531.JPG"
                  alt="Athletics Lonestar Action Photo"
                  className="max-w-full h-auto object-contain"
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

export default Athletics; 