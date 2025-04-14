import React from 'react';

const TherapistProfileCard = ({ name, specialty, language, photo }) => {
  return (
    <div className="min-w-[260px] bg-white rounded-2xl shadow-md overflow-hidden mr-5 hover:scale-95">
      <img src={photo} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-3xl font-bold text-black">{name}</h3>
        <p className="text-lg font-semibold text-gray-800">{specialty}</p>
        <p className="text-lg text-gray-700 italic">{language}</p>
      </div>
    </div>
  );
};

export default TherapistProfileCard;
