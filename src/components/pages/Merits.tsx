import React, { useEffect } from 'react';

const Merits = () => {
  const meritCategories = [
    { title: 'What is the merit board?', description: 'The SHPE Merit Leaderboard is our way of recognizing and rewarding active members who contribute to our chapter\'s success. The leaderboard will go off of a point system.' },
    { title: 'What can I win after?', description: 'You could win exciting rewards like SHPE merchandise, gift cards, or special recognition at our events. It\'s our way of saying thank you for your dedication and hard work.' },
    { title: 'How can I earn points?', description: 'You can earn points by attending meetings, volunteering, participating in events, and taking on leadership roles. The more involved you are, the higher your score will be on the leaderboard.' },
    { title: 'How can I enter?', description: 'Every dues paying SHPE member is automatically enrolled! Just participate in chapter activities, and your points will be tracked. You can check your progress at every general meeting to see how you\'re doing.' },
  ];

  useEffect(() => {
    const handleResize = (e: MessageEvent) => {
      if (e.data && e.data.frameHeight) {
        if (e.data.board_token === 'lb_mdnnos2t') {
          const iframe = document.getElementById("iframe-lb_mdnnos2t") as HTMLIFrameElement | null;
          if (iframe) {
            iframe.style.height = `${e.data.frameHeight + 20}px`;
          }
        } else if (e.data.board_token === 'lb_mdnnxzh8') {
          const iframe = document.getElementById("iframe-lb_mdnnxzh8") as HTMLIFrameElement | null;
          if (iframe) {
            iframe.style.height = `${e.data.frameHeight + 20}px`;
          }
        }
      }
    };
    window.addEventListener("message", handleResize);
    return () => {
      window.removeEventListener("message", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Custom CSS for hiding scrollbars unless actively scrolling */}
      <style>{`
        .merit-iframe {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }
        .merit-iframe::-webkit-scrollbar {
          width: 0px;
          background: transparent; /* Chrome/Safari/Webkit */
        }
        .merit-iframe:hover {
          scrollbar-width: thin; /* Firefox */
          -ms-overflow-style: auto; /* Internet Explorer 10+ */
        }
        .merit-iframe:hover::-webkit-scrollbar {
          width: 8px;
        }
        .merit-iframe:hover::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .merit-iframe:hover::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        .merit-iframe:hover::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
      
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
                <div className="w-96 h-60 bg-primary-500/30 rounded-lg overflow-hidden flex items-center justify-center p-0">
                  <img
                    src="/assets/images/Merits_page/IMG_5359.JPG"
                    alt="Seniors Group Photo"
                    className="w-full h-full object-contain bg-primary-500/30"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Merit Boards Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Merit Leaderboards</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* First TrackScore Embed */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative" style={{ overflow: 'hidden' }}>
                <iframe
                  id="iframe-lb_mdnnos2t"
                  src="https://trackscore.online/l/lb_mt8wwt5a"
                  className="merit-iframe"
                  style={{ width: '100%', minHeight: '400px', border: 'none' }}
                  scrolling="yes"
                ></iframe>
              </div>
            </div>

            {/* Second TrackScore Embed */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative" style={{ overflow: 'hidden' }}>
                <iframe
                  id="iframe-lb_mdnnxzh8"
                  src="https://trackscore.online/l/lb_mti5c74g"
                  className="merit-iframe"
                  style={{ width: '100%', minHeight: '400px', border: 'none' }}
                  scrolling="yes"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Merit Information Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-600">We want to reward our members, here's how.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {meritCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">{category.title}</h3>
                <p className="text-gray-700">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Merit Achievement Gallery */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievement Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <img
                  src="/assets/images/Merits_page/IMG_5364.JPG"
                  alt="Spring 2025 Merit Winners Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm">Recognizing outstanding GPA and academic achievements</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <img
                  src="/assets/images/Merits_page/IMG_1482.jpeg"
                  alt="Fall 2024 Merit Winners Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm">Celebrating exceptional leadership contributions</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <img
                  src="/assets/images/Merits_page/IMG_2966.jpg"
                  alt="Volunteering Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm">Honoring community service and volunteer work</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <img
                  src="/assets/images/Merits_page/IMG_2968.jpeg"
                  alt="Intel Visit Group Photo"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-gray-700 text-sm">Advancing careers and professional development</p>
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
              {/* <div className="flex flex-col sm:flex-row gap-4">
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
              </div> */}
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <img
                  src="/assets/images/Merits_page/IMG_5262.JPG"
                  alt="Dell Visit Group Photo"
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

export default Merits; 