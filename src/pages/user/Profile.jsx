import React, { useState } from "react";
import EditProfile from "../../components/EditProfile";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const user = {
    name: "Ama Serwaa",
    email: "ama.serwaa@example.com",
    phone: "0241234567",
    language: "Twi",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-2xl w-full max-w-2xl p-8">
        <h2 className="text-3xl font-bold text-[#124fd1] mb-6">
          {isEditing ? "Edit Profile" : "My Profile"}
        </h2>

        {isEditing ? (
          <EditProfile user={user} onCancel={() => setIsEditing(false)} />
        ) : (
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold">Full Name</p>
              <p>{user.name}</p>
            </div>

            <div>
              <p className="font-semibold">Email Address</p>
              <p>{user.email}</p>
            </div>

            <div>
              <p className="font-semibold">Phone Number</p>
              <p>{user.phone}</p>
            </div>

            <div>
              <p className="font-semibold">Language Preference</p>
              <p>{user.language}</p>
            </div>

            <div className="mt-6">
              <button
                className="bg-[#124fd1] text-white px-6 py-2 rounded-xl hover:bg-[#d63e45] transition"
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

export default Profile;
