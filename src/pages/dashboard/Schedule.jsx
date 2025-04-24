import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import useBookings from "../../services/useBookings";
import Image from "../../assets/Images/thirdman.jpg";

const Schedule = () => {
  const { bookings, loading } = useBookings();
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filter bookings for the selected date
  const filteredBookings = bookings.filter(
    (booking) =>
      new Date(booking.date).toDateString() === selectedDate.toDateString()
  );

  // Highlight dates with bookings
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const hasBooking = bookings.some(
        (booking) =>
          new Date(booking.date).toDateString() === date.toDateString()
      );
      return hasBooking ? "bg-green-200 rounded-full" : null;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col items-center justify-start min-h-screen text-white">
        <h2 className="text-3xl font-bold mb-4 text-center mt-2">Therapist Schedule</h2>

        <div className="bg-transparent p-4 rounded-lg shadow-lg text-black w-full max-w-lg">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={tileClassName}
          />
        </div>

        <div className="mt-8 w-full max-w-xl">
          {loading ? (
            <p className="text-lg font-medium">Loading bookings...</p>
          ) : filteredBookings.length === 0 ? (
            <p className="text-lg font-medium">No bookings for this day.</p>
          ) : (
            <ul className="mt-1 space-y-4">
              {filteredBookings.map((booking) => (
                <li
                  key={booking.id}
                  className="bg-white text-black p-4 rounded-lg shadow-md"
                >
                  <p><strong>Name:</strong> {booking.name}</p>
                  <p><strong>Time:</strong> {booking.time}</p>
                  <p><strong>Email:</strong> {booking.email}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
