import {
  FaHeadphones,
  FaBookOpen,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-linear-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                STUDIFY
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400">
                Beta
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Learn smarter by listening. Convert notes, summarize content, and
              study on the go.
            </p>

            <div className="flex items-center gap-4 mt-4 text-cyan-500">
              <FaHeadphones />
              <FaBookOpen />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="hover:text-cyan-500 cursor-pointer">
                Text to Audio
              </li>
              <li className="hover:text-cyan-500 cursor-pointer">
                AI Summaries
              </li>
              <li className="hover:text-cyan-500 cursor-pointer">
                File Upload
              </li>
              <li className="hover:text-cyan-500 cursor-pointer">Library</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
              Resources
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="hover:text-cyan-500 cursor-pointer">
                How it works
              </li>
              <li className="hover:text-cyan-500 cursor-pointer">FAQs</li>
              <li className="hover:text-cyan-500 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-cyan-500 cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
              Connect
            </h4>
            <div className="flex gap-4 mt-4 text-xl text-gray-600 dark:text-gray-400">
              <FaGithub className="hover:text-cyan-500 cursor-pointer" />
              <FaTwitter className="hover:text-cyan-500 cursor-pointer" />
              <FaLinkedin className="hover:text-cyan-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Studify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
