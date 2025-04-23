import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Image from "../../assets/Images/login.jpg";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const userRole = userData.role;

        // Role-based navigation
        if (userRole === "vendor") {
          navigate("/dashboard"); // Therapist Dashboard
        } else {
          navigate("/"); // Regular user homepage
        }
      } else {
        setError("User not found in the database.");
      }

    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-[100vw] h-[100vh] justify-between items-center bg-[#F8F8F8]">
      <div className="w-[50vw] flex flex-col justify-center items-center h-full gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">WELCOME BACK</h1>
          <p className="text-[#636364]">Please enter your details</p>
        </div>

        <form className="w-[80%] max-w-md" onSubmit={handleLogin}>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 pl-2 py-2 rounded-xl"
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 pl-2 py-2 rounded-xl"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <div className="flex justify-between items-center pb-4 text-sm">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="font-medium">Remember me</span>
            </div>
            <Link to="/" className="font-medium hover:text-[#EA454C]">
              Forgot Password
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="bg-[#EA454C] text-white py-2 rounded-xl w-full"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
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

      <div className="w-[50vw] h-full">
        <img src={Image} alt="Login Visual" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
