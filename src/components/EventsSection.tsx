import React from 'react';

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for professional development, cultural celebrations, and networking opportunities.
          </p>
        </div>

        {/* Google Calendar Embed */}
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&showNav=0&showTitle=0&showTabs=0&showCalendars=0&showTz=0&showDate=0&src=c2hwZXR4c3RAZ21haWwuY29t&color=%23501214"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            title="SHPE Events Calendar"
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;