import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";

const Schedule = () => {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);

  const [availability] = useState([
    { day: "Monday", slots: "9am - 5pm" },
    { day: "Tuesday", slots: "9am - 5pm" },
    { day: "Wednesday", slots: "9am - 5pm" },
    { day: "Thursday", slots: "9am - 5pm" },
    { day: "Friday", slots: "9am - 5pm" },
  ]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const q = query(
          collection(db, "bookings"),
          where("therapistId", "==", currentUser.uid)
        );

        const unsubscribeBookings = onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((d) => ({
            id: d.id,
            ...d.data(),
          }));
          setBookings(data);
        });

        return () => unsubscribeBookings();
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const handleApprove = async (bookingId) => {
    const bookingRef = doc(db, "bookings", bookingId);
    await updateDoc(bookingRef, { status: "approved" });
  };

  const handleDecline = async (bookingId) => {
    const bookingRef = doc(db, "bookings", bookingId);
    await updateDoc(bookingRef, { status: "declined" });
  };

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {availability.map(({ day, slots }) => (
              <div key={day} className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold">{day}</p>
                <p className="text-sm text-gray-500">Available: {slots}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Upcoming Sessions</h3>
          {!user || bookings.length === 0 ? (
            <p className="text-gray-600">No bookings yet.</p>
          ) : (
            <ul className="space-y-4">
              {bookings.map((b) => (
                <li
                  key={b.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#f9f9f9] p-4 rounded-lg"
                >
                  <div className="mb-3 md:mb-0">
                    <p className="font-semibold text-gray-800">
                      Client: {b.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {b.date} at {b.time}
                    </p>
                    <p className="text-sm">
                      <strong>Status:</strong> {b.status || "pending"}
                    </p>
                  </div>
                  {b.status !== "approved" && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(b.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDecline(b.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Decline
                      </button>
                    </div>
                  )}
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
