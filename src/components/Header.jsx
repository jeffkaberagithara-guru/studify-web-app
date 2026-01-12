import { FaSun, FaMoon, FaChevronDown, FaUser, FaBars, FaTimes, FaMusic, FaFileAlt, FaGlobe, FaHeadphones } from 'react-icons/fa';

function Header() {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-between p-4 mx-auto text-gray-600 dark:text-gray-300">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-linear-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
            STUDIFY
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400">
            Beta
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium"
          >
            Home
          </a>

          <div className="relative group">
            <a
              href="#"
              className="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <span>Convert</span>
              <FaChevronDown className="w-4 h-4" />
            </a>

            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 py-2 w-48 z-50 border dark:border-gray-700">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 items-center space-x-2"
              >
                <FaMusic className="text-cyan-500" />
                <span>Text-to-Audio</span>
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 items-center space-x-2"
              >
                <FaFileAlt className="text-cyan-500" />
                <span>Summarize</span>
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 items-center space-x-2"
              >
                <FaGlobe className="text-cyan-500" />
                <span>File Upload</span>
              </a>
            </div>
          </div>

          <a
            href="#"
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium"
          >
            Library
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            id="themeToggle"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300"
          >
            <FaSun id="sunIcon" className="w-5 h-5 hidden" />
            <FaMoon id="moonIcon" className="w-5 h-5" />
          </button>

          {/* User Icon */}
          <a
            href="#"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300"
          >
            <FaUser className="w-5 h-5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            id="mobileMenuButton"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="md:hidden hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 px-4 py-3"
      >
        <div className="space-y-2">
          <a
            href="#"
            className="block py-2 text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 items-center space-x-3"
          >
            <span>Home</span>
          </a>
          <a
            href="#"
            className="block py-2 text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 items-center space-x-3"
          >
            <span>Convert</span>
          </a>
          <a
            href="#"
            className="block py-2 text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 items-center space-x-3"
          >
            <span>Library</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;