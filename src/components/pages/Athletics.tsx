import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Athletics = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // Already on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">SHPE Athletics</h1>
              <p className="text-xl text-primary-100 max-w-3xl">
                Building teamwork, leadership, and community through competitive sports and recreational activities.
              </p>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <img 
                  src="/assets/images/athletics_images/lonestar_recap_4.JPG" 
                  alt="SHPE Athletics Team" 
                  className="w-64 h-40 object-contain rounded-lg bg-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="gap-12 mb-16">
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

        </div>

        {/* Sports Gallery Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Sports in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <img 
                src="/assets/images/athletics_images/volleyball.JPG" 
                alt="Soccer Team" 
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <p className="text-gray-700 text-sm">Intramural teams & pickup games</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <img 
                src="/assets/images/athletics_images/kick.JPG" 
                alt="Basketball Team" 
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <p className="text-gray-700 text-sm">League play & tournaments</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <img 
                src="/assets/images/athletics_images/bowling.JPG" 
                alt="Volleyball Team" 
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <p className="text-gray-700 text-sm">Indoor & outdoor activities</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <img 
                src="/assets/images/headshots/bobcat.png" 
                alt="football" 
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
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
                  <h4 className="font-semibold text-gray-900 mb-2">Run Club</h4>
                  <p className="text-gray-600 text-sm">Casual fitness and team conditioning</p>
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
              <img 
                src="/assets/images/athletics_images/jerseys.JPG" 
                alt="Team Sports Action" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 text-sm text-center">Building teamwork and camaraderie through athletic competition</p>
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
                <button 
                  onClick={() => handleSectionNavigation('events')}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Get Involved
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img 
                src="/assets/images/athletics_images/running.JPG" 
                alt="Join the Team" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Athletics; 