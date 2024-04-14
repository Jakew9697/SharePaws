// CreatePost.js
import React, { useState } from "react";
import "./CreatePost.css"; // Import the CSS file for styling

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [media, setMedia] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the submission of the post
    // For now, we'll just log the values to the console
    console.log({ caption, media });
  };

  const handleMediaChange = (event) => {
    setMedia(event.target.files[0]);
  };

  return (
    <div className="create-post">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="caption">Caption</label>
          <textarea
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter a caption..."
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="media">Image/Video</label>
          <input
            type="file"
            id="media"
            accept="image/*,video/*"
            onChange={handleMediaChange}
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
