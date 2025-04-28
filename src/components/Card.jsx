import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Image from "../assets/Images/help.jpg";
import BookingForm from "./BookingForm";

export default function Card() {
  const location = useLocation();
  const therapist = location.state?.therapist;
  const [showModal, setShowModal] = useState(false);

  if (!therapist) {
    return <div className="text-center mt-10 text-gray-600">No therapist data available.</div>;
  }

  return (
    <div className="relative w-full min-h-screen flex overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      <div className="relative z-20 flex flex-col lg:flex-row w-full justify-between max-w-6xl mx-auto mt-20 mb-5 px-4 lg:px-8 rounded-2xl bg-white/30 backdrop-blur-lg shadow-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 p-5 flex flex-col items-center text-center space-y-4">
          <img
            src={therapist.image}
            alt={therapist.name}
            className="w-48 h-48 rounded-full object-cover mb-4 mt-3"
          />
          <h2 className="text-3xl font-bold text-blue-700">Therapist</h2>
          <h3 className="text-2xl font-semibold text-gray-800">{therapist.name}</h3>
          <p className="text-xl text-gray-700 mt-2">
            {therapist.duration || "45 min"} • GHS {therapist.price || "200"}
          </p>
          <div className="mt-4">
            <h4 className="font-bold text-gray-900 mb-2 text-2xl">Bio</h4>
            <p className="text-xl text-gray-800">
              {therapist.bio || "This therapist is highly qualified and dedicated to helping you thrive mentally and emotionally."}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-2/3 p-5 space-y-6 text-left">
          <div>
            <h4 className="font-bold text-gray-900 mb-2 text-2xl">About Your Session</h4>
            <p className="text-xl text-gray-800">
              {therapist.sessionDescription || "This practice can help you relax your body and mind, and reduce stress. Mindfulness is a technique that involves focusing your mind on a particular object or being intensely aware of your senses and emotions in the present moment."}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2 text-2xl">Areas</h4>
            <div className="flex flex-wrap gap-2">
              {(therapist.areas || ["Stress Reduction", "Better Sleep", "Emotion Regulation"]).map((area, index) => (
                <span key={index} className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2 text-2xl">Client Reviews</h4>
            <ul className="list-disc list-inside text-xl text-gray-800 space-y-1">
              {therapist.reviews?.length > 0 ? (
                therapist.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))
              ) : (
                <li>"The therapist helped me manage my anxiety in just a few sessions. Highly recommend her mindfulness techniques!"</li>
              )}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
            >
              Book Session
            </button>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 px-6 rounded-lg w-full sm:w-auto"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-30">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
            <h3 className="text-lg font-bold text-blue-700 mb-4">Book Session with {therapist.name}</h3>
            <BookingForm />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
