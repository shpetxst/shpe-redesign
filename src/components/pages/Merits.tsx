import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Users, TrendingUp } from 'lucide-react';

const Merits = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">SHPE Merits</h1>
              <p className="text-xl text-primary-100 max-w-3xl">
                Recognizing excellence and fostering growth through our comprehensive merit and achievement system.
              </p>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-64 h-40 bg-primary-500/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Award className="h-12 w-12 mx-auto mb-2 text-white/80" />
                    <p className="text-white/80 text-sm">Excellence Recognition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About SHPE Merits</h2>
            <p className="text-lg text-gray-700 mb-6">
              The SHPE Merits program is designed to recognize and reward outstanding contributions, achievements, 
              and dedication within our organization. This comprehensive system motivates members to excel in 
              academics, leadership, community service, and professional development.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Through our merit system, we celebrate individual accomplishments while fostering a culture of 
              continuous improvement and collective success.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Merit Categories</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Academic Excellence</h4>
                  <p className="text-gray-600">Recognition for outstanding academic performance</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Leadership</h4>
                  <p className="text-gray-600">Contributions to chapter leadership and initiatives</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Community Service</h4>
                  <p className="text-gray-600">Volunteer work and community engagement</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Development</h4>
                  <p className="text-gray-600">Career advancement and skill building activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Merit Achievement Gallery */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievement Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <div className="w-full h-32 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                  <p className="text-amber-600 text-sm">Academic Awards</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Recognizing outstanding GPA and academic achievements</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-full h-32 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-blue-600 text-sm">Leadership Excellence</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Celebrating exceptional leadership contributions</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="w-full h-32 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <p className="text-green-600 text-sm">Service Impact</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Honoring community service and volunteer work</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="w-full h-32 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-purple-600 text-sm">Professional Growth</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Advancing careers and professional development</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Earn Merits</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Academic Achievement</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Maintain high GPA (3.0+)</li>
                  <li>• Complete academic mentoring sessions</li>
                  <li>• Present research or projects</li>
                  <li>• Attend academic workshops</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Leadership & Service</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hold officer positions</li>
                  <li>• Lead committee initiatives</li>
                  <li>• Organize chapter events</li>
                  <li>• Mentor new members</li>
                </ul>
              </div>
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="w-full h-48 bg-primary-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-2 text-primary-600" />
                  <p className="text-primary-600 text-sm">Merit Tracking System</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm text-center">Track your progress and achievements through our comprehensive merit system</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Merit Recognition Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <div className="bg-amber-500 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Bronze Level</h4>
              <p className="text-gray-600 mb-4">25-49 Merit Points</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Certificate of Recognition</li>
                <li>• Chapter Newsletter Feature</li>
                <li>• Priority Event Registration</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-gray-500 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Silver Level</h4>
              <p className="text-gray-600 mb-4">50-99 Merit Points</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Bronze benefits plus</li>
                <li>• Leadership opportunity preferences</li>
                <li>• Scholarship application priority</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="bg-yellow-500 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Gold Level</h4>
              <p className="text-gray-600 mb-4">100+ Merit Points</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• All previous benefits plus</li>
                <li>• Annual recognition ceremony</li>
                <li>• Exclusive networking events</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Earning Merits Today</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Ready to be recognized for your achievements and contributions? Join our merit system and start earning 
                points for your academic excellence, leadership, and community involvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Learn More
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
              <div className="w-full h-40 bg-primary-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-10 w-10 mx-auto mb-2 text-primary-600" />
                  <p className="text-primary-600 text-sm">Achievement Awaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merits; 