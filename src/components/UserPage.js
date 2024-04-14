// UserPage.js
import React from "react";
import { useParams } from "react-router-dom";
import "./UserPage.css"; // Make sure the file name matches the actual CSS file name

function UserPage() {
  const { username } = useParams();

  // Mock data for the user's profile
  const user = {
    username: username,
    profilePicture: "/images/ProfilePic.png", // Path to the user's profile picture
    bio: "Hello! I'm Jake, an enthusiastic fullstack developer with a passion for creating dynamic and user-friendly web applications.",
    posts: [
      // Add more posts as needed
      { id: 1, imageUrl: "/images/SharePawsLogo.png", type: "image" },
      { id: 2, imageUrl: "/images/NotificationIcon.png", type: "image" },
      { id: 3, imageUrl: "/images/SharePawsLogo.png", type: "image" },
      { id: 4, imageUrl: "/images/SharePawsLogo.png", type: "image" },
      { id: 5, imageUrl: "/images/SharePawsLogo.png", type: "image" },
      { id: 6, imageUrl: "/images/SharePawsLogo.png", type: "image" },
      { id: 7, imageUrl: "/images/SharePawsLogo.png", type: "image" },
      { id: 8, imageUrl: "/images/SharePawsLogo.png", type: "image" },
      { id: 9, imageUrl: "/images/SharePawsLogo.png", type: "image" },
      { id: 10, imageUrl: "/videos/video1.mp4", type: "video" },
    ],
    friends: 42, // Example number of friends
  };

  const limitedBio = user.bio.slice(0, 150);

  return (
    <div className="container">
      <div className="profile-info">
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-number">{user.posts.length}</span>
            <span>posts</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{user.friends}</span>
            <span>friends</span>
          </div>
        </div>
        <img
          src={user.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <div className="bio">{limitedBio}</div>
      </div>
      <div className="posts">
        {user.posts.map((post) => (
          <div key={post.id} className="post">
            {post.type === "image" ? (
              <img src={post.imageUrl} alt="Post" />
            ) : (
              <video controls>
                <source src={post.imageUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
