import React, { useState } from "react";
import EditProfile from "../../components/EditProfile";
import BackgroundImage from "../../assets/Images/thera.jpg"; // adjust path

const ProfileTherapist = () => {
  const [isEditing, setIsEditing] = useState(false);

  const user = {
    name: "Ama Serwaa",
    email: "ama.serwaa@example.com",
    phone: "0241234567",
    language: "Twi",
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-transparent bg-opacity-90 shadow-md rounded-2xl w-full max-w-2xl p-8">
        <h2 className="text-4xl font-bold text-black mb-6">
          {isEditing ? "Edit Profile" : "My Profile"}
        </h2>

        {isEditing ? (
          <EditProfile user={user} onCancel={() => setIsEditing(false)} />
        ) : (
          <div
            className="text-2xl space-y-4 text-shadow-blue-950"
          >
            <div>
              <p className="font-semibold ">Full Name</p>
              <p className="text-lg text-white">{user.name}</p>
            </div>
            <div>
              <p className="font-semibold ">Email Address</p>
              <p className="text-lg text-white">{user.email}</p>
            </div>
            <div>
              <p className="font-semibold ">Phone Number</p>
              <p className="text-lg text-white">{user.phone}</p>
            </div>
            <div>
              <p className="font-semibold ">Language Preference</p>
              <p className="text-lg text-white">{user.language}</p>
            </div>
            <div className="mt-6">
              <button
                className="bg-[#060a13] text-white px-6 py-2 rounded-xl hover:bg-[#d63e45] transition"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTherapist;
