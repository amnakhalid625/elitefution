import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { FaGamepad, FaUpload, FaBlog } from 'react-icons/fa';
import { GiJoystick } from 'react-icons/gi';
import logo from '../assets/images/logo2.png';
import FeaturedJams from '../components/FeatureJames';
import { Link } from 'react-router-dom';

const GGJNextHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Navbar */}
      <nav className="bg-black text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo and nav items */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-16 w-auto transition-all duration-300 hover:scale-105"
                  src={logo}
                  alt="Game Logo"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:ml-8 md:flex md:space-x-6">
                <Link
                  to="/browse"
                  className="group flex items-center px-3 py-2 text-base font-medium rounded-md text-gray-300 hover:text-white transition-colors"
                >
                  <FaGamepad className="mr-2 text-orange-500" />
                  <span>Browse Games</span>
                </Link>
                <Link
                  to="/jams"
                  className="group flex items-center px-3 py-2 text-base font-medium rounded-md text-gray-300 hover:text-white transition-colors"
                >
                  <GiJoystick className="mr-2 text-orange-500" />
                  <span>Game Jams</span>
                </Link>
                <Link
                  to="/upload"
                  className="group flex items-center px-3 py-2 text-base font-medium rounded-md text-gray-300 hover:text-white transition-colors"
                >
                  <FaUpload className="mr-2 text-orange-500" />
                  <span>Upload Games</span>
                </Link>
                <Link
                  to="/devlogs"
                  className="group flex items-center px-3 py-2 text-base font-medium rounded-md text-gray-300 hover:text-white transition-colors"
                >
                  <FaBlog className="mr-2 text-orange-500" />
                  <span>Dev Logs</span>
                </Link>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-center">
              <div className="max-w-lg w-full lg:max-w-xs">
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className={`block w-full pl-10 pr-3 py-2 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                        isSearchFocused ? 'ring-2 ring-orange-500' : ''
                      }`}
                      placeholder="Search games..."
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FiX className="block h-6 w-6" />
                ) : (
                  <FiMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-gray-900 border-t border-gray-800`}
        >
          <div className="pt-2 pb-3 space-y-1 px-2">
            <form onSubmit={handleSearch} className="mb-3 px-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Search games..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
            <Link
              to="/browse"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center">
                <FaGamepad className="mr-3 text-orange-500" />
                Browse Games
              </div>
            </Link>
            <Link
              to="/jams"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center">
                <GiJoystick className="mr-3 text-orange-500" />
                Game Jams
              </div>
            </Link>
            <Link
              to="/upload"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center">
                <FaUpload className="mr-3 text-orange-500" />
                Upload Games
              </div>
            </Link>
            <Link
              to="/devlogs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center">
                <FaBlog className="mr-3 text-orange-500" />
                Dev Logs
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <FeaturedJams />
      </main>
    </div>
  );
};

export default GGJNextHomepage;