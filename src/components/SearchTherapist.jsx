import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "../assets/Images/guide3.jpeg";
import Image2 from "../assets/Images/doc.jpg";
import Image3 from "../assets/Images/femaledoc.jpg";
import Image4 from "../assets/Images/doc2.jpg";

const SearchTherapist = () => {
  const [search, setSearch] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const therapists = [
    {
      id: 1,
      name: "Kofi Asamoah",
      specialty: "Anxiety & Stress",
      language: "Twi",
      image: Image2,
      bio: "Kofi is a licensed therapist with 5+ years of experience helping clients manage anxiety and regain control of their lives.",
    },
    {
      id: 2,
      name: "Damaris Danso",
      specialty: "Depression & Mood Disorders",
      language: "English",
      image: Image3,
      bio: "Damaris is passionate about providing a safe space for individuals struggling with mood disorders and emotional challenges.",
    },
    {
      id: 3,
      name: "Clement Suarez",
      specialty: "Teen Therapy",
      language: "Ewe",
      image: Image4,
      bio: "Clement specializes in supporting teenagers through personal development, identity, and peer relationship issues.",
    },
    {
      id: 4,
      name: "Ama Boadu",
      specialty: "Relationship Issues",
      language: "Ga",
      image: Image3,
      bio: "Ama helps couples and individuals navigate complex relationship dynamics with empathy and effective communication tools.",
    },
    {
      id: 5,
      name: "Yaw Mensah",
      specialty: "Trauma Recovery",
      language: "English",
      image: Image2,
      bio: "Yaw supports trauma survivors with evidence-based approaches for healing, resilience, and emotional wellbeing.",
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

  const visibleCards = 3;
  const maxIndex = filteredTherapists.length - visibleCards;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change interval as needed

    return () => clearInterval(interval); // Cleanup
  }, [startIndex, maxIndex]);

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Image}
          alt="Background"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 pt-24 pb-10 px-4 md:px-20 text-white">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-sm px-4 py-2 rounded-xl bg-white/20 text-white hover:bg-white/30"
          >
            ← Go Back
          </button>

          <h2 className="text-3xl font-bold text-center mb-6">
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

          {/* Carousel Controls */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2 bg-white/20 rounded-full hover:bg-white/30 ${
                startIndex === 0 && "opacity-50 cursor-not-allowed"
              }`}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= maxIndex}
              className={`p-2 bg-white/20 rounded-full hover:bg-white/30 ${
                startIndex >= maxIndex && "opacity-50 cursor-not-allowed"
              }`}
            >
              <ChevronRight />
            </button>
          </div>

          {/* Therapist Cards */}
          {filteredTherapists.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredTherapists
                .slice(startIndex, startIndex + visibleCards)
                .map((therapist) => (
                  <div
                    key={therapist.id}
                    className="bg-white/20 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center h-full flex flex-col justify-between"
                  >
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
                    />
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-black mb-1">
                        {therapist.name}
                      </h3>
                      <p className="text-black mb-1">
                        <span className="font-bold">Specialty:</span>{" "}
                        {therapist.specialty}
                      </p>
                      <p className="text-black mb-1">
                        <span className="font-bold">Language:</span>{" "}
                        {therapist.language}
                      </p>
                      <p className="text-black text-left text-sm mb-4 break-words">
                        {therapist.bio}
                      </p>
                    </div>
                    <Link
                      to={`/therapist/${therapist.id}`}
                      state={{ therapist }}
                    >
                      <button className="bg-[#124fd1] text-white py-2 px-4 rounded-xl hover:bg-[#0e3fa8] transition mt-2">
                        View Profile
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-center text-white mt-6">No therapists found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchTherapist;
