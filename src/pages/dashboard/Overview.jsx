import React from "react";
import Image from "../../assets/Images/checklist.jpeg";

const Overview = () => {
  // Sample stats
  const stats = {
    assignedUsers: 8,
    upcomingSessions: 4,
    unreadMessages: 5,
    recentCaseNotes: 2,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Background Image */}
      <div
        className="h-64 bg-cover bg-center rounded-b-3xl shadow-md flex items-center justify-center mt-8"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <h1 className="text-4xl font-bold text-white bg-transparent bg-opacity-50 p-4 rounded-xl mt-10">
          Welcome back, Dr. Damaris
        </h1>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-sm text-gray-500">Assigned Users</p>
            <p className="text-2xl font-bold text-blue-700">{stats.assignedUsers}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-sm text-gray-500">Upcoming Sessions</p>
            <p className="text-2xl font-bold text-blue-700">{stats.upcomingSessions}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-sm text-gray-500">Unread Messages</p>
            <p className="text-2xl font-bold text-blue-700">{stats.unreadMessages}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-sm text-gray-500">Recent Case Notes</p>
            <p className="text-2xl font-bold text-blue-700">{stats.recentCaseNotes}</p>
          </div>
        </div>

        {/* Assigned Users */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4">Assigned Users</h2>
          {/* Replace with mapped list of users */}
          <p className="text-gray-600">You currently have {stats.assignedUsers} users assigned to you.</p>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
          {/* Replace with mapped list of sessions */}
          <p className="text-gray-600">{stats.upcomingSessions} upcoming sessions scheduled.</p>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          {/* Replace with actual messages */}
          <p className="text-gray-600">{stats.unreadMessages} unread messages.</p>
        </div>

        {/* Case Notes */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4">Recent Case Notes</h2>
          {/* Replace with actual case notes */}
          <p className="text-gray-600">{stats.recentCaseNotes} recent notes added.</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
