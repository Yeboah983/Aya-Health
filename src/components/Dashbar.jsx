import React from 'react'

const Dashbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
    <div className="text-xl font-bold text-green-600">Aya Health – Therapist</div>
    <div className="space-x-4 hidden md:flex">
      <a href="/dashboard" className="hover:text-green-500">Home</a>
      <a href="/dashboard/schedule" className="hover:text-green-500">Schedule</a>
      <a href="/dashboard/resources-dash" className="hover:text-green-500">Resources</a>
      <a href="/dashboard/profile-therapist" className="hover:text-green-500">Profile</a>
    </div>
  </nav>
  )
}

export default Dashbar