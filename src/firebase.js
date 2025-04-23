import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAaVI7lO0QZXNCNh_VJNFbUarl-LO34M0g",
  authDomain: "aya-health.firebaseapp.com",
  projectId: "aya-health",
  storageBucket: "aya-health.appspot.com",
  messagingSenderId: "421787736898",
  appId: "1:421787736898:web:9318da4b053a2d2d5c46db",
  measurementId: "G-LP5W49Y0NR"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics }; // Exporting db and auth for use
