import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import menuIcon from '../assets/images/menuImg.webp';
import bgImg from '../assets/images/menuBg.webp';
// hover background images
import aboutBg from '../assets/images/about-bg.webp';
import servicesBg from '../assets/images/services-bg.webp';
import worksBg from '../assets/images/works-bg.webp';
import careersBg from '../assets/images/menuBg.webp';
import newsBg from '../assets/images/news-bg.webp';
import portfolioBg from '../assets/images/portfolio-bg.webp';
import eventsBg from '../assets/images/events-bg.webp';
import contactBg from '../assets/images/menuBg.webp';

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(bgImg);

  // Menu items and background images
  const menuItems = [
    { title: 'About Us', bg: aboutBg, href: '/about-us' },
    { 
      title: 'Our Services', 
      bg: servicesBg,
      href: '/our-services',
      submenu: [
        { title: 'Game Development', href: '/game-development' },
        { title: 'Engineering', href: '/engineering' },
        { title: 'Art Production', href: '/art-production' },
      ]
    },
    { title: 'Our Works', bg: worksBg, href: '/our-work' },
    { title: 'Portfolio', bg: portfolioBg, href: '/portfolio' },
    { title: 'Careers', bg: careersBg, href: '/careers' },
    { title: 'News', bg: newsBg, href: '/news' },
    { title: 'Game James', bg: eventsBg, href: '/game-james' },
    // { title: 'Events', bg: eventsBg, href: '/events' },
    { title: 'Contact Us', bg: contactBg, href: '/contact-us' },

  ];

  return (
    <>
      <header className="w-full px-6 py-4 md:py-6 flex justify-between items-center flex-wrap bg-transparent font-secondary absolute top-0 left-0 z-50 text-white">
        {/* Menu Button */}
        <div className="flex items-center gap-2">
          <button onClick={() => setMenuOpen(true)} className="w-8 h-8 md:w-10 md:h-10">
            <img src={menuIcon} alt="Menu" className="w-full h-full object-contain" />
          </button>
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-white">
            Menu
          </span>
        </div>

        {/* Logo - Changed to Link */}
        <div className="flex-grow flex justify-center">
          <Link to="/">
            <img src={logoImg} alt="Virtuos Logo" className="h-8 md:h-28 object-contain" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 text-sm md:text-base font-medium">
          {/* Languages */}
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 hover:text-[#FFC695] transition">
              <span className="uppercase">English</span>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 320 512">
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 
                0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 
                33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 
                24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 
                9.4 24.6 0 33.9l-136 136c-9.2 
                9.4-24.4 9.4-33.8 0z" />
              </svg>
            </button>
            {langOpen && (
              <ul className="absolute right-0 mt-2 bg-white border rounded shadow text-sm z-50 text-black">
                {[
                  ['Chinese', '/zh'],
                  ['Japanese', '/ja'],
                  ['Vietnamese', '/vi'],
                  ['Korean', '/ko'],
                  ['French', '/fr'],
                ].map(([name, path]) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                      onClick={() => setLangOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Contact Button - Changed to Link */}
          <Link
            to="/contact-us"
            className="hidden md:inline-block text-[#FFC695] uppercase text-sm md:text-base font-semibold px-5 py-2 hover:opacity-75 transition tracking-wide"
            style={{ textShadow: '0 0 12px #ffc695' }}
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* Full-Screen Menu Panel */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[999] text-white overflow-hidden"
          style={{
            backgroundImage: `url(${currentBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 0.5s ease-in-out'
          }}
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6 z-50">
            <button
              onClick={() => {
                setMenuOpen(false);
                setCurrentBg(bgImg); 
              }}
              className="text-4xl font-bold hover:text-[#FFC695] transition duration-300"
            >
              &times;
            </button>
          </div>

          {/* Main Content Area */}
          <div className="container mx-auto h-full flex flex-col px-6 md:px-12">
            {/* Logo at top center - Changed to Link */}
            <div className="flex justify-center pt-5">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img
                  src={logoImg}
                  alt="Virtuos Logo"
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Menu Links */}
            <div className="flex-grow flex items-start justify-between">
              <nav className="w-1/2 max-w-7xl mx-auto font-primary">
                <ul className="space-y-6 md:space-y-8">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setCurrentBg(item.bg)}
                      onMouseLeave={() => setCurrentBg(bgImg)}
                    >
                      <Link
                        to={item.href}
                        className="block text-2xl md:text-4xl lg:text-4xl font-bold uppercase tracking-wider hover:text-[#FFC695] transition duration-300"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <ul className="absolute left-full top-0 ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 max-w-[600px] bg-transparent whitespace-nowrap">
                          {item.submenu.map((subitem, subindex) => (
                            <li
                              key={subindex}
                              onMouseEnter={() => setCurrentBg(servicesBg)}
                              onMouseLeave={() => setCurrentBg(item.bg)}
                            >
                              <Link
                                to={subitem.href}
                                className="block px-6 py-3 text-3xl font-semibold uppercase tracking-wider hover:text-[#FFC695] transition duration-300"
                                onClick={() => setMenuOpen(false)}
                              >
                                {subitem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="w-1/2 max-w-7xl mx-auto">
                <img
                  src={currentBg}
                  alt="Menu Background"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            {/* Footer with social links */}
            <div className="pb-10 px-6">
              <div className="flex flex-col md:flex-row justify-end items-center gap-6">
                <div className="flex gap-4">
                  {/* Social links would also use Link if they're internal */}
                  <a href="#" className="text-white hover:text-[#FFC695] transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                    </svg>
                  </a>
                  {/* Other social icons... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;