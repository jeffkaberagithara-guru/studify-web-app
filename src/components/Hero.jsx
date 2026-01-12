import { FaClipboard, FaCloudUploadAlt, FaLink, FaVolumeUp, FaFilePdf, FaFileWord, FaGlobe, FaFileAlt, FaHeadphones, FaBookOpen } from 'react-icons/fa';

function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <div className="mb-8">
                <div className="text-4xl font-bold bg-linear-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                  STUDIFY
                </div>
                <div className="text-xs px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 inline-block mt-2">
                  Your Learning Assistant
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-5xl leading-tight">
                Learn by listening.
              </h1>

              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                Convert any document to audio
                <br className="hidden sm:block" />
                and get AI-powered summaries.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <FaFileAlt className="text-lg text-cyan-500" />
                  </div>
                  <span className="text-sm font-medium">Text</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <FaFilePdf className="text-lg text-cyan-500" />
                  </div>
                  <span className="text-sm font-medium">PDF</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <FaFileWord className="text-lg text-cyan-500" />
                  </div>
                  <span className="text-sm font-medium">DOCX</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <FaGlobe className="text-lg text-cyan-500" />
                  </div>
                  <span className="text-sm font-medium">URLs</span>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <div className="group relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500">
                    <FaClipboard className="w-5 h-5" />
                  </div>
                  <textarea
                    placeholder="Paste your text here..."
                    className="w-full h-32 px-12 py-4 text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-900 resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex-1 cursor-pointer">
                    <input type="file" className="hidden" />
                    <div className="h-12 flex items-center justify-center space-x-2 border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 rounded-lg transition-colors group">
                      <FaCloudUploadAlt className="w-5 h-5 text-gray-400 group-hover:text-cyan-500" />
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        Upload File
                      </span>
                    </div>
                  </label>

                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaLink className="w-5 h-5" />
                    </div>
                    <input
                      type="url"
                      placeholder="Enter URL"
                      className="w-full h-12 pl-12 pr-4 text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 text-white bg-linear-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Start Learning Free
                </button>

                <button className="px-8 py-3 text-cyan-600 dark:text-cyan-400 border-2 border-cyan-200 dark:border-cyan-800 hover:border-cyan-300 dark:hover:border-cyan-600 rounded-lg font-semibold transition-colors duration-300">
                  See How It Works
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>10,000+ students learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>95% time saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative w-full max-w-lg">
              <div className="relative bg-linear-to-br from-cyan-50 to-white dark:from-cyan-900/20 dark:to-gray-900 rounded-2xl p-8 shadow-2xl">
                <div className="mb-8">
                  <div className="flex items-end space-x-1 h-20">
                    <div className="w-2 h-6 bg-cyan-400 rounded-t"></div>
                    <div className="w-2 h-12 bg-cyan-500 rounded-t"></div>
                    <div className="w-2 h-16 bg-cyan-600 rounded-t"></div>
                    <div className="w-2 h-20 bg-cyan-500 rounded-t"></div>
                    <div className="w-2 h-14 bg-cyan-400 rounded-t"></div>
                    <div className="w-2 h-10 bg-cyan-300 rounded-t"></div>
                    <div className="w-2 h-16 bg-cyan-500 rounded-t"></div>
                    <div className="w-2 h-18 bg-cyan-600 rounded-t"></div>
                  </div>
                  <div className="mt-4 flex items-center justify-center space-x-4">
                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                      <FaVolumeUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Listening to learning
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      AI Summary
                    </div>
                    <div className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded">
                      90% shorter
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-cyan-500"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Key concepts extracted automatically
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-cyan-500"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Important points highlighted
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-cyan-500"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Perfect for quick review
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                  <FaBookOpen className="text-2xl text-cyan-500" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                  <FaHeadphones className="text-2xl text-cyan-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;