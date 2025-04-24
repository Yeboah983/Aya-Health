import React, { useState } from "react";
import EditProfile from "../../components/EditProfile";
import BackgroundImage from "../../assets/Images/therapist2.jpg";
import Image3 from "../../assets/Images/femaledoc.jpg";
import { Link } from "react-router";

const ProfileTherapist = () => {
  const [isEditing, setIsEditing] = useState(false);

  const user = {
    name: "Damaris Danso",
    email: "livingasdamaris@gmail.com",
    phone: "0241234567",
    language: "Twi",
  };

  const therapist = {
    name: "Damaris Danso",
    image: Image3,
    about:
      "Damaris is a compassionate and experienced therapist specializing in youth mental wellness, anxiety management, and trauma recovery. She is fluent in Twi and English, and she creates safe spaces for healing.",
    areas: [
      "Anxiety",
      "Depression",
      "Youth Therapy",
      "Trauma Recovery",
      "Mindfulness",
    ],
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative px-6 py-10 flex items-center justify-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0  z-0"></div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col bg-black/70 md:flex-row rounded-2xl overflow-hidden mt-15">
        {/* LEFT SIDE - Therapist Info */}
        <div className="w-full md:w-1/3 bg-transparent p-6 flex flex-col items-center text-center">
          <img
            src={therapist.image}
            alt={therapist.name}
            className="w-40 h-40 rounded-full object-cover mb-4 mt-2 border-4 border-blue-500"
          />
          <h2 className="text-2xl font-bold text-blue-400">Therapist</h2>
          <h3 className="text-xl font-semibold text-white">{therapist.name}</h3>

          <div className="mt-4 text-left">
            <h4 className="font-bold text-white mb-1 text-lg">About</h4>
            <p className="text-base text-gray-300">{therapist.about}</p>

            <h4 className="font-bold text-white mt-4 mb-2 text-lg">
              Areas of Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {therapist.areas.map((area, index) => (
                <button
                  key={index}
                  className="px-4 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition"
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex items-center justify-center p-6 md:p-10 text-white relative">
          {/* Go Back */}
          <Link
            to="/dashboard"
            className="absolute top-4 right-6 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
          >
            Go Back
          </Link>

          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              {isEditing ? "Edit Profile" : "My Profile"}
            </h2>

            {isEditing ? (
              <EditProfile user={user} onCancel={() => setIsEditing(false)} />
            ) : (
              <div className="text-lg space-y-6 w-full max-w-md text-center">
                <div>
                  <p className="font-semibold text-gray-200">Full Name</p>
                  <p>{user.name}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-200">Email Address</p>
                  <p>{user.email}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-200">Phone Number</p>
                  <p>{user.phone}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-200">
                    Language Preference
                  </p>
                  <p>{user.language}</p>
                </div>
                <div className="mt-6">
                  <button
                    className=" bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-800 transition"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTherapist;
