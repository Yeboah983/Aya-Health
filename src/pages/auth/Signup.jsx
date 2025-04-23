import React, { useState } from "react";
import { Link, useNavigate } from "react-router"; // Update 'react-router' to 'react-router-dom'
import { signUp } from "../../firebaseAuth"; // Assume this is your custom sign-up function for Firebase
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Use signUp function to create the user
      const userCredential = await signUp(email, password); // Assuming signUp is a Firebase wrapper function

      if (!userCredential || !userCredential.user) {
        throw new Error("User not returned from Firebase.");
      }

      const user = userCredential.user; // Extract the user info from the Firebase response

      // Add user details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        role,
      });

      console.log("User signed up:", user);

      // Role-based redirection
      if (role === "vendor") {
        navigate("/dashboard"); // Redirect to therapist's dashboard
      } else {
        navigate("/"); // Redirect to user's homepage
      }

    } catch (err) {
      console.error("Error during signup:", err);
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already in use.");
      } else {
        setError("Signup failed. Please check your input.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-6">GET STARTED NOW</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">
        {/* First and Last Name */}
        <div className="flex gap-4 mb-4">
          <div className="w-full">
            <label className="block font-medium mb-1">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-xl px-3 py-2"
              required
            />
          </div>
          <div className="w-full">
            <label className="block font-medium mb-1">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-xl px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl px-3 py-2"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="w-full border border-gray-300 rounded-xl px-3 py-2"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
            className="w-full border border-gray-300 rounded-xl px-3 py-2"
            required
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-3 py-2"
            required
          >
            <option value="vendor">Therapist</option>
            <option value="user">User</option>
          </select>
        </div>

        {/* Terms */}
        <div className="mb-6 flex items-center">
          <input type="checkbox" required className="mr-2" />
          <label className="text-sm">
            I agree to the <span className="underline">terms and policy</span>
          </label>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-[#3ab9c0] text-white font-semibold py-2 rounded-xl hover:bg-[#293435] transition"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#3ab9c0] font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
