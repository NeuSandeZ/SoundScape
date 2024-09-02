import { faHome, faMusic, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Sound'cape
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-700"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <FontAwesomeIcon icon={faHome} />
                <span className="ms-3">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/music"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-700"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <FontAwesomeIcon icon={faMusic} />
                <span className="ms-3">Music</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upload"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-700"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                <FontAwesomeIcon icon={faUpload} />
                <span className="ms-3">Upload</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
