import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from '../../assets/Images/woma.jpg'; // Default image

const Profile = () => {
  const [user, setUser] = useState(null); // Store user info
  const [userDetails, setUserDetails] = useState({ firstName: "", lastName: "", email: "" }); // Store the user's first name, last name, and email from Firebase

  const auth = getAuth();

  // Get the current user details from Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user); // Store user object
        const userRef = doc(db, "users", user.uid); // Assuming you store user info in the "users" collection by their uid
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data()); // Log the fetched data to check
          setUserDetails(docSnap.data()); // Set the user details (firstName, lastName, email) from Firestore
        } else {
          console.log("No such document!"); // Log if the document doesn't exist
        }
      } else {
        setUser(null); // Reset user if not logged in
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full space-y-6 mt-15">
          <p className="text-center text-red-600">Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full space-y-6 mt-15">
        <div className="flex flex-col items-center space-y-3">
          <img
            src={Image}
            alt="User Avatar"
            className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-sm"
          />
          <h2 className="text-2xl font-semibold text-blue-600">
            {userDetails.firstName} {userDetails.lastName || ""}
          </h2>
          <p className="text-gray-500 text-sm">
            {userDetails.email || "Your Email"}
          </p>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-medium text-gray-700 mb-2">About You</h3>
          <p className="text-gray-600 text-sm">
            Welcome to your profile! Here you’ll be able to manage your personal info and future bookings.
          </p>
        </div>

        <div className="pt-4 border-t">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
