import React from 'react'

const Overview = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
  {/* Greeting */}
  <h1 className="text-3xl font-bold text-blue-800 mb-6">
    Welcome back, Dr. Serwaa
  </h1>

  {/* Summary Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <div className="bg-white p-4 rounded-xl shadow-md">
      <p className="text-sm text-gray-500">Assigned Users</p>
      <p className="text-2xl font-bold text-blue-700">8</p>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-md">
      <p className="text-sm text-gray-500">Upcoming Sessions</p>
      <p className="text-2xl font-bold text-blue-700">4</p>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-md">
      <p className="text-sm text-gray-500">Unread Messages</p>
      <p className="text-2xl font-bold text-blue-700">5</p>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-md">
      <p className="text-sm text-gray-500">Recent Case Notes</p>
      <p className="text-2xl font-bold text-blue-700">2</p>
    </div>
  </div>

  {/* Assigned Users */}
  <div className="bg-white rounded-xl shadow-md p-5 mb-6">
    <h2 className="text-xl font-semibold mb-4">Assigned Users</h2>
    {/* List users */}
  </div>

  {/* Case Notes */}
  <div className="bg-white rounded-xl shadow-md p-5 mb-6">
    <h2 className="text-xl font-semibold mb-4">Recent Case Notes</h2>
    {/* List notes */}
  </div>

  {/* Messages */}
  <div className="bg-white rounded-xl shadow-md p-5">
    <h2 className="text-xl font-semibold mb-4">Messages</h2>
    {/* List messages */}
  </div>
</div>


  )
}

export default Overview