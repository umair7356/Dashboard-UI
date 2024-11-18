import {
  HomeIcon,
  UserIcon,
  UsersIcon,
  CogIcon,
  MailIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      className={`max-h-full bg-gray-800 text-white transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      <button
        className="p-4 text-gray-300 hover:text-white focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "<<" : ">>"}
      </button>

      <ul className="space-y-4 mt-4">
        {[
          { Icon: HomeIcon, label: "Overview", path: "/" },
          { Icon: UsersIcon, label: "Users", path: "/users" },
          { Icon: MailIcon, label: "Messages", path: "/messages" },
          { Icon: UserIcon, label: "Employes", path: "/employs" },
          { Icon: ShoppingCartIcon, label: "ordertrack", path: "/ordertrack" },
          { Icon: CogIcon, label: "Settings", path: "/settings" },
        ].map(({ Icon, label, path }, index) => (
          <li key={index}>
            <Link
              to={path}
              className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded"
            >
              <Icon className="w-8 h-8" />
              <span
                className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
