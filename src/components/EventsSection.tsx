import React, { useState } from 'react';
import { Calendar, Users, Award } from 'lucide-react';

const EVENTS = [
  {
    id: 1,
    title: 'National Convention Meeting',
    date: 'October 15, 2025',
    location: 'Ingram 210',
    time: '6:30 PM',
    category: 'meeting',
    image: 'https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Dia de los Muertos Ofrenda',
    date: 'October 28 - November 4, 2025',
    location: 'Ingram 3rd Floor Lobby',
    time: 'All Day',
    category: 'cultural',
    image: 'https://images.pexels.com/photos/6279732/pexels-photo-6279732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Industry Mixer with IBM',
    date: 'November 10, 2025',
    location: 'LBJ Student Center',
    time: '5:00 PM',
    category: 'professional',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Mentoring Program Kickoff',
    date: 'September 22, 2025',
    location: 'Ingram 105',
    time: '4:30 PM',
    category: 'academic',
    image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Events', icon: Calendar },
  { id: 'meeting', label: 'Meetings', icon: Users },
  { id: 'professional', label: 'Professional', icon: Award },
  { id: 'academic', label: 'Academic', icon: Calendar },
  { id: 'cultural', label: 'Cultural', icon: Calendar },
];

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleEvents, setVisibleEvents] = useState(EVENTS);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setVisibleEvents(EVENTS);
    } else {
      setVisibleEvents(EVENTS.filter(event => event.category === filter));
    }
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for professional development, cultural celebrations, and networking opportunities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => handleFilterChange(category.id)}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleEvents.map((event) => (
            <div 
              key={event.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-start mb-1">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{event.date}</p>
                </div>
                <div className="flex items-start mb-4">
                  <Users className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{event.location} • {event.time}</p>
                </div>
                <button className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 group-hover:underline">
                  Learn more
                  <svg className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center justify-center bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-medium rounded-full px-6 py-3 transition-colors">
            View All Events
            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;