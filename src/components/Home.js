import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [expandedCaptionId, setExpandedCaptionId] = useState(null);
  const [overflowingText, setOverflowingText] = useState({});

  const posts = [
    // manual hardcoded post data for testing
    {
      id: 1,
      username: "user1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGdJcjT5haUn-NpRjRgcIHB3OhnoL8Yf6tQ&s",
      caption:
        "First post! First post!First post!First post!First post!First post!First post!First post!",
    },
    {
      id: 2,
      username: "user2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UNT6D9RL2bXUFsNE2v4o2DTOB2OvBSElDA&s",
      caption: "Another post!",
    },
    {
      id: 3,
      username: "user2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UNT6D9RL2bXUFsNE2v4o2DTOB2OvBSElDA&s",
      caption: "Another post!",
    },
    {
      id: 4,
      username: "user2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UNT6D9RL2bXUFsNE2v4o2DTOB2OvBSElDA&s",
      caption: "Another post!",
    },
    {
      id: 5,
      username: "user2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UNT6D9RL2bXUFsNE2v4o2DTOB2OvBSElDA&s",
      caption: "Another post!",
    },
    {
      id: 6,
      username: "user2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UNT6D9RL2bXUFsNE2v4o2DTOB2OvBSElDA&s",
      caption:
        "Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!",
    },
    {
      id: 7,
      username: "user2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UNT6D9RL2bXUFsNE2v4o2DTOB2OvBSElDA&s",
      caption:
        "Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!",
    },
    {
      id: 8,
      username: "user2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UNT6D9RL2bXUFsNE2v4o2DTOB2OvBSElDA&s",
      caption:
        "Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!Another post!",
    },
  ];

  useEffect(() => {
    const checkOverflow = () => {
      const newOverflowingText = {};
      posts.forEach((post) => {
        const element = document.getElementById(`caption-${post.id}`);
        if (element) {
          newOverflowingText[post.id] =
            element.scrollWidth > element.clientWidth;
        }
      });
      setOverflowingText(newOverflowingText);
    };

    // Check overflow on initial render and window resize
    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [posts]);

  return (
    <div className="home">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <strong>{post.username}</strong>
          </div>
          <img src={post.image} alt={post.caption} className="post-image" />
          <div className="post-caption">
            <span
              id={`caption-${post.id}`}
              className="caption-text"
              style={{
                whiteSpace: expandedCaptionId === post.id ? "normal" : "nowrap",
              }}
            >
              {post.caption}
            </span>
            {overflowingText[post.id] && expandedCaptionId !== post.id && (
              <span
                className="more"
                onClick={() => setExpandedCaptionId(post.id)}
              >
                more
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
