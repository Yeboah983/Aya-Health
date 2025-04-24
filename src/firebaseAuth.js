import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Signup function
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    return userCredential; // Return the full userCredential
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error;
  }
};

// Login function
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    return userCredential; // Return the full userCredential
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
};

// Logout function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};

// Monitor auth state changes (to determine if user is logged in or logged out)
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
