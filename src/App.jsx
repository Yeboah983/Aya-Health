import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import { AuthProvider } from "./authContext"; // Import the AuthProvider
import RootLayout from "./layouts/RootLayout";
import Landing from "./pages/user/Landing";
import Profile from "./pages/user/Profile";
import Community from "./pages/user/Community";
import Resources from "./pages/user/Resources";
import MatchTherapist from "./pages/user/MatchTherapist";
import Chat from "./pages/user/Chat";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import ProfileTherapist from "./pages/dashboard/ProfileTherapist";
import ResourcesDash from "./pages/dashboard/ResourcesDash";
import Schedule from "./pages/dashboard/Schedule";
import Card from "./components/Card";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public site routes */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Landing />} />
            <Route path="profile" element={<Profile />} />
            <Route path="community" element={<Community />} />
            <Route path="resources" element={<Resources />} />
            <Route path="match-therapist" element={<MatchTherapist />} />
            <Route path="therapist/:id" element={<Card />} />
            <Route path="schedule" element={<BookingForm />} />
            <Route path="chat" element={<Chat />} />
          </Route>

          {/* Authentication routes */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          {/* Therapist dashboard routes */}
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="profile-therapist" element={<ProfileTherapist />} />
            <Route path="resources-dash" element={<ResourcesDash />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
