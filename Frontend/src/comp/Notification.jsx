import React from "react";

function Notification({ notifications, clearNotifications }) {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
      </div>
      {notifications.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="p-4 hover:bg-gray-100 cursor-pointer"
            >
              <p className="text-sm text-gray-800">{notification.message}</p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4 text-sm text-gray-500">No notifications</div>
      )}
      <div className="p-4 text-center">
        <button
          className="text-sm text-purple-600 hover:text-purple-800"
          onClick={clearNotifications}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Notification;
