import React, { useState } from "react";
import { Link } from "react-router";
import Image from "../../assets/Images/sunset.jpg";
import Image2 from "../../assets/Images/doc.jpg";
import Image3 from "../../assets/Images/femaledoc.jpg";
import Image4 from "../../assets/Images/doc2.jpg";

const FindTherapist = () => {
  const [search, setSearch] = useState("");

  const therapists = [
    {
      id: 1,
      name: "Kofi Asamoah",
      specialty: "Anxiety & Stress",
      language: "Twi",
      image: Image2,
    },
    {
      id: 2,
      name: "Damaris Danso",
      specialty: "Depression & Mood Disorders",
      language: "English",
      image: Image3,
    },
    {
      id: 3,
      name: "Clement Suarez",
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
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src={Image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-30 z-0" />

      {/* Main Content */}
      <div className="relative z-10 pt-28 pb-10 px-4 md:px-20 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Find a Therapist
          </h2>

          {/* Search Input */}
          <div className="flex items-center justify-center mb-8">
            <input
              type="text"
              placeholder="Search by name, specialty, or language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-xl shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#124fd1]"
            />
          </div>

          {/* Therapist Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredTherapists.length > 0 ? (
              filteredTherapists.map((therapist) => (
                <div
                  key={therapist.id}
                  className="bg-white/20  p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center"
                >
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-bold text-black mb-1">
                    {therapist.name}
                  </h3>
                  <p className="text-black mb-1">
                    <span className="font-bold">Specialty:</span>{" "}
                    {therapist.specialty}
                  </p>
                  <p className="text-black mb-4">
                    <span className="font-bold">Language:</span>{" "}
                    {therapist.language}
                  </p>
                  <Link to={`/therapist/${therapist.id}`} state={{ therapist }}>
                    <button className="bg-[#124fd1] text-white py-2 px-4 rounded-xl hover:bg-[#0e3fa8] transition">
                      View Profile
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-white col-span-2">
                No therapists found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTherapist;
