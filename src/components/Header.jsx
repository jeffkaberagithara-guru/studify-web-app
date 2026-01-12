function Header() {
  return (
   <nav class="bg-white shadow dark:bg-gray-800">
    <div class="container flex items-center justify-between p-4 mx-auto text-gray-600 dark:text-gray-300">
      
        <a href="#" class="flex items-center space-x-2">
            <div class="text-2xl font-bold bg-linear-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                STUDIFY
            </div>
            <span class="text-xs px-2 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400">
                Beta
            </span>
        </a>
      
        <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium">
                Home
            </a>
            
            <div class="relative group">
                <a href="#" class="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-1">
                    <span>Convert</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </a>
              
                <div class="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 py-2 w-48 z-50 border dark:border-gray-700">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20">
                        Text-to-Audio
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20">
                        Summarize
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20">
                        File Upload
                    </a>
                </div>
            </div>
            
            <a href="#" class="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium">
                Library
            </a>
        </div>

      
        <div class="flex items-center space-x-4">
          
            <button id="themeToggle" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300">
              
                <svg id="sunIcon" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              
                <svg id="moonIcon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
            </button>

          
            <a href="#" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
            </a>

          
            <button id="mobileMenuButton" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
    </div>

  
    <div id="mobileMenu" class="md:hidden hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 px-4 py-3">
        <div class="space-y-2">
            <a href="#" class="block py-2 text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400">
                Home
            </a>
            <a href="#" class="block py-2 text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400">
                Convert
            </a>
            <a href="#" class="block py-2 text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400">
                Library
            </a>
        </div>
    </div>
</nav>
  );
}

export default Header;