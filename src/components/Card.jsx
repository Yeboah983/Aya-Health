import React from "react";
import { useLocation, useNavigate } from "react-router";
import Image from "../assets/Images/help.jpg";

export default function Card() {
  const location = useLocation();
  const navigate = useNavigate();

  const therapist = location.state?.therapist;

  if (!therapist) {
    return (
      <div className="text-center mt-10 text-gray-600">
        No therapist data available.
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={Image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-xl w-full mx-4 bg-white/30 p-10 rounded-2xl shadow-xl text-center backdrop-blur-md mt-20">
        <img
          src={therapist.image}
          alt={therapist.name}
          className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
        />
        <h2 className="text-2xl font-semibold text-blue-700">{therapist.name}</h2>
        <p className="text-sm mt-2">
          <span className="font-semibold">Specialty:</span> {therapist.specialty}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Language:</span> {therapist.language}
        </p>

        <div className="mt-4">
          <p className="text-gray-700">
            {therapist.bio ||
              "This therapist is highly qualified and dedicated to helping you thrive mentally and emotionally."}
          </p>
        </div>

        <div className="mt-6 text-left">
          <h3 className="font-semibold mb-2">Client Reviews:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {therapist.reviews?.length > 0 ? (
              therapist.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))
            ) : (
              <li>No reviews available.</li>
            )}
          </ul>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${therapist.email || "therapist@example.com"}`}
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 w-full"
          >
            Send Message
          </a>
          <button
            onClick={() => navigate("/schedule", { state: { therapist } })}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
          >
            Book Session
          </button>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
