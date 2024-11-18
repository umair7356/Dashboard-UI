import React, { useState } from "react";
import { BellIcon } from "@heroicons/react/outline";
import NotificationLayout from "./Notification.jsx";

function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, message: "New order placed", time: "2 mins ago" },
    { id: 2, message: "Product added to your cart", time: "10 mins ago" },
    { id: 3, message: "Profile updated successfully", time: "1 hr ago" },
    { id: 4, message: "New message received", time: "2 hrs ago" },
  ]);

  const clearNotifications = () => {
    setNotifications([]);
    setIsNotificationOpen(false);
  };

  return (
    <div>
      <header className="flex justify-between p-4 bg-white shadow">
        <h1 className="text-2xl font-bold">Welcome Back, MR Umair Islam</h1>
        <div className="flex flex-row mr-12 space-x-8 items-center">
          <div className="relative">
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative focus:outline-none"
            >
              <BellIcon className="w-10 h-10 text-gray-600 hover:text-purple-600" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  {notifications.length}
                </span>
              )}
            </button>

            {isNotificationOpen && (
              <NotificationLayout
                notifications={notifications}
                clearNotifications={clearNotifications}
              />
            )}
          </div>

          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
