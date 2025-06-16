import React from 'react';

// Define the structure for each officer
interface Officer {
  name: string;
  position: string;
  major: string;
  image: string;
}

// Sample data - we'll replace this with real data later
const officers: Officer[] = [
  {
    name: "John Doe",
    position: "President",
    major: "Computer Science",
    image: "/images/officers/president.jpg"
  },
  {
    name: "Jane Smith",
    position: "Vice President",
    major: "Electrical Engineering",
    image: "/images/officers/vice-president.jpg"
  }
];

const OfficersSection = () => {
  return (
    <section id="officers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team of officers leading SHPE Texas State University chapter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officers.map((officer) => (
            <div 
              key={officer.name}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{officer.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{officer.position}</p>
                <p className="text-gray-600">{officer.major}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficersSection;
