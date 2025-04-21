import React, { useState } from "react";
import Image2 from "../../assets/Images/doc.jpg";
import Image3 from "../../assets/Images/femaledoc.jpg";
import Image4 from "../../assets/Images/doc2.jpg";

const FindTherapist = () => {
  const [search, setSearch] = useState("");

  const therapists = [
    {
      id: 1,
      name: "Ama Serwaa",
      specialty: "Anxiety & Stress",
      language: "Twi",
      image: Image2,
    },
    {
      id: 2,
      name: "Kwame Yeboah",
      specialty: "Depression & Mood Disorders",
      language: "English",
      image: Image3,
    },
    {
      id: 3,
      name: "Esi Abena",
      specialty: "Teen Therapy",
      language: "Ewe",
      image: Image4,
    },
  ];

  const filteredTherapists = therapists.filter((therapist) => {
    const searchLower = search.toLowerCase();
    return (
      therapist.name.toLowerCase().includes(searchLower) ||
      therapist.specialty.toLowerCase().includes(searchLower) ||
      therapist.language.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-blue-50 pt-20 pb-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#124fd1]">
          Find a Therapist
        </h2>

        {/* Search Input */}
        <div className="flex items-center justify-center mb-8">
          <input
            type="text"
            placeholder="Search by name, specialty, or language..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#124fd1]"
          />
        </div>

        {/* Therapist Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredTherapists.length > 0 ? (
            filteredTherapists.map((therapist) => (
              <div
                key={therapist.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center"
              >
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-[#124fd1] mb-1">
                  {therapist.name}
                </h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Specialty:</span>{" "}
                  {therapist.specialty}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-medium">Language:</span>{" "}
                  {therapist.language}
                </p>
                <button className="bg-[#124fd1] text-white py-2 px-4 rounded-xl hover:bg-[#0e3fa8] transition">
                  View Profile
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-2">
              No therapists found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindTherapist;
