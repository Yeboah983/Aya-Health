import { useState, useEffect } from "react";
import { login, logout, onAuthStateChangedListener } from "../firebaseAuth"; // Import your auth functions

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthStateChangedListener((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Unsubscribe when the component is unmounted
  }, []);

  const handleLogin = () => {
    // Call your login function, passing email and password
    login("testuser@example.com", "password123").catch((err) => console.error(err));
  };

  const handleLogout = () => {
    logout().catch((err) => console.error(err));
  };

  return (
    <header>
      <nav>
        <ul>
          {/* Conditionally render buttons based on user authentication */}
          {!user ? (
            <li>
              <button onClick={handleLogin}>Login</button>
            </li>
          ) : (
            <>
              <li>
                <button onClick={() => alert('Redirect to Profile')}>Profile</button>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
