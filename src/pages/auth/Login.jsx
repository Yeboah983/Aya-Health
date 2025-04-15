import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Image from "../../assets/Images/login.jpg"; // Make sure this path matches your file structure

const Login = () => {
  return (
    <div className="flex w-[100vw] h-[100vh] justify-between items-center bg-[#F8F8F8]">
      {/* Left Side - Form */}
      <div className="w-[50vw] flex flex-col justify-center items-center h-full gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">WELCOME BACK</h1>
          <p className="text-[#636364]">Please enter your details</p>
        </div>

        <form className="w-[80%] max-w-md">
          {/* Email */}
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 pl-2 py-2 rounded-xl"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="********"
              className="border border-gray-300 pl-2 py-2 rounded-xl"
              required
            />
          </div>

          {/* Remember Me + Forget Password */}
          <div className="flex justify-between items-center pb-4 text-sm">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="font-medium">Remember me</span>
            </div>
            <Link to="/" className="font-medium hover:text-[#EA454C]">
              Forgot Password
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="bg-[#EA454C] text-white py-2 rounded-xl w-full"
            >
              Sign In
            </button>

            <Link
              to="/"
              className="flex items-center justify-center gap-3 py-2 border border-gray-400 rounded-xl"
            >
              <FcGoogle size={24} />
              <span>Sign In with Google</span>
            </Link>

            <p className="text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#EA454C] font-medium">
                Sign up for free!
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="w-[50vw] h-full">
        <img
          src={Image}
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
