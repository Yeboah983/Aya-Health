import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-6">GET STARTED NOW</h1>
      <form className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">
        {/* First and Last Name */}
        <div className="flex gap-4 mb-4">
          <div className="w-full">
            <label className="block font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-xl px-3 py-2"
              required
            />
          </div>
          <div className="w-full">
            <label className="block font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
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
            name="email"
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
            name="password"
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
            name="confirmPassword"
            placeholder="********"
            className="w-full border border-gray-300 rounded-xl px-3 py-2"
            required
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Role</label>
          <select
            name="role"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#3ab9c0] text-white font-semibold py-2 rounded-xl hover:bg-[#293435] transition"
        >
          Sign Up
        </button>

        {/* Sign In Link */}
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
