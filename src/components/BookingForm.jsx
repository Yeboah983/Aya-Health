// src/components/BookingForm.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function BookingForm() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const therapist = state?.therapist;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [success, setSuccess] = useState(false);

  if (!therapist) {
    return <p className="text-center mt-10">No therapist selected.</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), {
        therapistId: therapist.id,
        therapistName: therapist.name,
        ...formData,
        createdAt: Timestamp.now(),
      });
      setSuccess(true);
      setFormData({ name: "", email: "", date: "", time: "" });
      // Optionally navigate back or to a confirmation page:
      // navigate(-1);
    } catch (err) {
      console.error("Booking error:", err);
      alert("Failed to book. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Book a Session with {therapist.name}
        </h2>

        {success && (
          <p className="text-green-600 mb-4 text-center">
            🎉 Booking submitted!
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <div className="flex space-x-2 mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-1/2 p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full mt-3 text-gray-700 py-2 rounded hover:bg-gray-200"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
