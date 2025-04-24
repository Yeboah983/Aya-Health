// Profile.jsx
import React from "react";
import Image from '../../assets/Images/woma.jpg'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full space-y-6 mt-15">
        <div className="flex flex-col items-center space-y-3">
          <img
            src= {Image}
            alt="User Avatar"
            className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-sm"
          />
          <h2 className="text-2xl font-semibold text-blue-600">Albie Frimps</h2>
          <p className="text-gray-500 text-sm">albiefrimps@example.com</p>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-medium text-gray-700 mb-2">About You</h3>
          <p className="text-gray-600 text-sm">
            Welcome to your profile! Here you’ll be able to manage your personal info and
            future bookings.
          </p>
        </div>

        <div className="pt-4 border-t">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
