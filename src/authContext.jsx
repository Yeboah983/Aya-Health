import React, { createContext, useState, useContext, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap the app and provide auth state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Store user data (optional)
  
  // Check login state from localStorage or authentication logic
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (token && storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser); // Retrieve user data from localStorage if available
    }
  }, []);

  // Function to update the auth state (including storing user data)
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("token", "your_token_here"); // Store token in localStorage
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token"); // Remove token on logout
    localStorage.removeItem("user"); // Remove user data on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
