import React, { useState } from "react";
import "./AddFriends.css"; // Add your CSS file for styling

function AddFriends() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle the search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle the search form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform the search logic here, e.g., querying a database or API
    // For now, let's just simulate some search results
    setSearchResults([
      { id: 1, username: "user1" },
      { id: 2, username: "user2" },
      // Add more simulated users as needed
    ]);
  };

  // Function to handle sending a friend request
  const handleSendRequest = (userId) => {
    // Send the friend request logic here, e.g., updating a database or sending an API request
    console.log(`Friend request sent to user ID: ${userId}`);
  };

  return (
    <div className="add-friends-container">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search by username..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {searchResults.map((user) => (
          <div key={user.id} className="search-result-item">
            <span>{user.username}</span>
            <button onClick={() => handleSendRequest(user.id)}>
              Send Friend Request
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddFriends;
