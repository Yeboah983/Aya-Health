import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="profile" element={<Profile />} />
          <Route path="community" element={<Community />} />
          <Route path="resources" element={<Resources />} />
          <Route path="match-therapist" element={<MatchTherapist />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element= {<Overview/>}/>
          <Route path="/dashboard/profile-therapist" element= {<ProfileTherapist/>}/>
          <Route path="/dashboard/resources-dash" element= {<ResourcesDash/>}/>
          <Route path="/dashboard/schedule" element= {<Schedule/>}/>

          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
