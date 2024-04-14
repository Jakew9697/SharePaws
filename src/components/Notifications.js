import React, { useState, useRef, useEffect } from "react";
import "./Notifications.css";

function Notifications() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notifications = [
    { id: 1, message: "New like on your post" },
    { id: 2, message: "New comment on your post" },
    { id: 3, message: "New follower" },
    { id: 4, message: "New like on your post" },
    { id: 5, message: "New comment on your post" },
    { id: 6, message: "New follower" },
    { id: 7, message: "New like on your post" },
    { id: 8, message: "New comment on your post" },
    { id: 9, message: "New follower" },
    { id: 10, message: "New like on your post" },
    { id: 11, message: "New comment on your post" },
    { id: 12, message: "New follower" },
    // Add more notifications as needed
  ];

  return (
    <div className="notifications-container" ref={notificationsRef}>
      <button
        className="notifications-icon"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <img
          src="/images/NotificationIcon.png"
          alt="Notifications"
          style={{ width: "80px", height: "80px" }}
        />
      </button>
      <div
        className={`notifications-dropdown ${
          showNotifications ? "notifications-dropdown-visible" : ""
        }`}
      >
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
