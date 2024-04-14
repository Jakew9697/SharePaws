import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"; // Assuming Navbar.js is in the components folder
import Home from "./components/Home"; // Assuming Home.js is in the components folder
import UserPage from "./components/UserPage"; // Assuming UserPage.js is in the components folder
import AddFriends from "./components/AddFriends"; // Assuming AddFriends.js is in the components folder
// import FriendsList from "./components/FriendsList"; // Assuming FriendsList.js is in the components folder
// import Notifications from "./components/Notifications"; // Assuming Notifications.js is in the components folder
import CreatePost from "./components/CreatePost"; // Assuming CreatePost.js is in the components folder
// import SignUpLogin from "./components/SignUpLogin"; // Assuming SignUpLogin.js is in the components folder
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<SignUpLogin />} /> */}
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/add-friends" element={<AddFriends />} />
        {/* <Route path="/friends-list" element={<FriendsList />} /> */}
        {/* <Route path="/notifications" element={<Notifications />} /> */}
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
