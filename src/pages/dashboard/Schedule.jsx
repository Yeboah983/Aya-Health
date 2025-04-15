import React from "react";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-[#124fd1] mb-4">My Schedule</h2>

        {/* Calendar Section */}
        <div className="bg-[#f0f4f8] rounded-xl p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Weekly Availability</h3>
          <p className="text-sm text-gray-600 mb-4">
            Set your available days and time slots for clients to book.
          </p>
          {/* Placeholder calendar or slots */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
              (day) => (
                <div key={day} className="bg-white p-3 rounded-lg shadow">
                  <p className="font-semibold">{day}</p>
                  <p className="text-sm text-gray-500">Available: 9am - 5pm</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Upcoming Sessions</h3>
          <ul className="space-y-4">
            {[1, 2].map((session, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-[#f9f9f9] p-4 rounded-lg"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    Session with Kwame Ansah
                  </p>
                  <p className="text-sm text-gray-600">
                    Tuesday, 16th April • 3:00 PM
                  </p>
                </div>
                <button className="bg-[#124fd1] text-white px-4 py-1 rounded-lg hover:bg-[#0d3b9a]">
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
