import React from "react";
import { Officer } from "../officers"; // Adjust path if needed

const OfficerCard = ({ officer }: { officer: Officer }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
    <img
      src={officer.image}
      alt={officer.name}
      className="w-32 h-32 rounded-lg object-cover mb-4"
    />
    <h3 className="text-xl font-bold">{officer.name}</h3>
    <p className="text-primary-600 font-semibold">{officer.position}</p>
    <p className="text-gray-600">{officer.major} • {officer.gradYear}</p>
  </div>
);

export default OfficerCard;
