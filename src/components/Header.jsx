import { Link, NavLink } from "react-router-dom";
import {
  FaSun,
  FaMoon,
  FaChevronDown,
  FaUser,
  FaBars,
  FaMusic,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";

function Header() {
  const navLinkClass = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive
        ? "text-cyan-600 dark:text-cyan-400"
        : "text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400"
    }`;

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-linear-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
            STUDIFY
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400">
            Beta
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          {/* Convert Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer flex items-center space-x-1 font-medium text-gray-800 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
              <span>Convert</span>
              <FaChevronDown className="w-4 h-4" />
            </span>

            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 py-2 w-48 z-50 border dark:border-gray-700">
              <Link
                to="/convert/text-to-audio"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
              >
                <FaMusic className="text-cyan-500" />
                Text-to-Audio
              </Link>

              <Link
                to="/convert/summarize"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
              >
                <FaFileAlt className="text-cyan-500" />
                Summarize
              </Link>

              <Link
                to="/convert/upload"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
              >
                <FaGlobe className="text-cyan-500" />
                File Upload
              </Link>
            </div>
          </div>

          <NavLink to="/library" className={navLinkClass}>
            Library
          </NavLink>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <FaMoon className="w-5 h-5" />
          </button>

          {/* User */}
          <Link
            to="/login"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FaUser className="w-5 h-5" />
          </Link>

          {/* Mobile Button (logic later) */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
