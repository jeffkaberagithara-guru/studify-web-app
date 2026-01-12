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
                    <span className="text-lg">📝</span>
                  </div>
                  <span className="text-sm font-medium">Text</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-lg">📄</span>
                  </div>
                  <span className="text-sm font-medium">PDF</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-lg">📎</span>
                  </div>
                  <span className="text-sm font-medium">DOCX</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-lg">🔗</span>
                  </div>
                  <span className="text-sm font-medium">URLs</span>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <div className="group relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
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
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-cyan-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        Upload File
                      </span>
                    </div>
                  </label>

                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
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
                      <svg
                        className="w-5 h-5 text-cyan-600 dark:text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                      </svg>
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
                  <span className="text-2xl">📄</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-2xl">🎧</span>
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