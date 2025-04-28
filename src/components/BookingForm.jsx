import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { db } from "../firebase";
import { collection, addDoc, Timestamp, query, where, getDocs } from "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase Auth

export default function BookingForm() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const therapist = state?.therapist;
  const auth = getAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    time: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null); // To store user data

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  if (!therapist) {
    return <p className="text-center mt-10">No therapist selected.</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      setError("Please select a date.");
      return;
    }

    try {
      // Prevent double booking
      const q = query(
        collection(db, "bookings"),
        where("therapistId", "==", therapist.id),
        where("date", "==", selectedDate.toDateString()),
        where("time", "==", formData.time)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setError("This time slot is already booked. Please choose another.");
        return;
      }

      // Save the booking to Firestore
      await addDoc(collection(db, "bookings"), {
        therapistId: therapist.id,
        therapistName: therapist.name,
        ...formData,
        date: selectedDate.toDateString(),
        createdAt: Timestamp.now(),
      });

      setSuccess(true);
      setFormData({ name: "", email: "", time: "" });
      setSelectedDate(null);
      setError("");

      // Send email notification via EmailJS
      const bookingDetails = {
        name: formData.name,
        email: formData.email,
        date: selectedDate.toDateString(),
        time: formData.time,
        therapist_name: therapist.name,
      };

      emailjs.send(
        "service_vy31pjh", // Replace with your EmailJS service ID
        "template_4zhpo6e", // Replace with your template ID
        bookingDetails,
        "user_yourUserID" // Replace with your EmailJS user ID
      )
        .then((response) => {
          console.log('Email sent successfully:', response);
        })
        .catch((err) => {
          console.error('Error sending email:', err);
        });

      // Redirect to homepage after successful booking
      setTimeout(() => {
        navigate("/"); // Navigate to the homepage
      }, 2000); // Delay to allow success message to show

    } catch (err) {
      console.error("Booking error:", err);
      setError("Failed to book. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      {!user ? (
        <div className="text-center text-red-600">
          <p>Please log in to book a session.</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md max-w-md w-full"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Book a Session with {therapist.name}
          </h2>

          {success && (
            <p className="text-green-600 mb-4 text-center">
              🎉 Booking submitted successfully!
            </p>
          )}

          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

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

          <div className="flex flex-col space-y-3 mb-4">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select a date"
              className="w-full p-2 border rounded"
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
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
      )}
    </div>
  );
}
