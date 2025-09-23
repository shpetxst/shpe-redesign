import React, { useState } from "react";
import { officers, Officer } from "../officers";

const OfficerCard = ({ 
  officer, 
  isFlipped, 
  onFlip 
}: { 
  officer: Officer;
  isFlipped: boolean;
  onFlip: () => void;
}) => {
  return (
    <div
      className="relative w-full h-72 cursor-pointer perspective"
      onClick={onFlip}
      tabIndex={0}
      onKeyPress={e => { if (e.key === "Enter") onFlip(); }}
    >
      <div className={`transition-transform duration-500 w-full h-full absolute top-0 left-0 ${isFlipped ? "rotate-y-180" : ""}`} style={{ transformStyle: "preserve-3d" }}>
        {/* Front */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center w-full h-full backface-hidden">
          <img
            src={officer.image}
            alt={officer.name}
            className="w-32 h-32 rounded-lg object-cover mb-4"
          />
          <h3 className="text-xl font-bold">{officer.name}</h3>
          <p className="text-primary-600 font-semibold">{officer.position}</p>
          <p className="text-gray-600">{officer.major} • {officer.gradYear}</p>
        </div>
        {/* Back */}
        <div className="bg-primary-100 rounded-xl shadow-lg p-6 flex flex-col items-center text-center w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden">
          <h3 className="text-xl font-bold mb-2">{officer.name}</h3>
          <p className="text-gray-700 mb-4">{officer.bio || "What does SHPE mean to you?"}</p>
          {officer.linkedin && (
            <a
              href={officer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-semibold"
            >
              LinkedIn Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Officers = () => {
  const [flippedOfficer, setFlippedOfficer] = useState<string | null>(null);
  
  const executiveBoard = officers.filter(o => o.group === "Executive Board");
  const boardOfDirectors = officers.filter(o => o.group === "Board of Directors");

  const handleCardFlip = (officerName: string) => {
    // If the same card is clicked, unflip it. Otherwise, flip the new card and unflip the previous one
    setFlippedOfficer(flippedOfficer === officerName ? null : officerName);
  };

  return (
    <section className="py-20 bg-gray-50">
      {/* Banner Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-primary-600 rounded-xl overflow-hidden flex flex-col md:flex-row h-64 md:h-80">
          <div className="flex-1 flex flex-col justify-center p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the 2025-2026 Officers
            </h1>
            <p className="text-xl opacity-90">
              Committed to leading with purpose and uplifting our SHPE familia.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center p-8">
            <img
              src="/assets/images/headshots/officers.jpg"
              alt="SHPE Officers"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Executive Board Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Executive Board
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {executiveBoard.map((officer) => (
            <OfficerCard 
              key={officer.name} 
              officer={officer} 
              isFlipped={flippedOfficer === officer.name}
              onFlip={() => handleCardFlip(officer.name)}
            />
          ))}
        </div>
      </div>

      {/* Board of Directors Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Board of Directors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {boardOfDirectors.map((officer) => (
            <OfficerCard 
              key={officer.name} 
              officer={officer} 
              isFlipped={flippedOfficer === officer.name}
              onFlip={() => handleCardFlip(officer.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Officers;

