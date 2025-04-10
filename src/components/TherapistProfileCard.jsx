import React from 'react'

const TherapistProfileCard = ({ name, specialty, image }) => {
  return (
    <div className="p-4 shadow bg-white rounded-lg flex items-center space-x-4">
      <img src={image} alt={name} className="w-16 h-16 rounded-full" />
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-gray-600">Specialty: {specialty}</p>
      </div>
    </div>
  );
};
export default TherapistProfileCard;
