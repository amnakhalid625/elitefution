import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin as LinkedinIcon, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#25282A] text-white py-20 px-6 sm:px-8 md:px-12 lg:px-16 font-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1 - Get in Touch */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold mb-6 uppercase font-primary leading-tight">
              Get in Touch
            </h1>
            <ul className="space-y-3">
              <li>
                <p className="text-gray-400 text-base">Contact us</p>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={22} />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider font-primary">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Game Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Web3 & Blockchain Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Game Publishing & LiveOps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">White-label Game Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Tokenomics & Consulting</a></li> 
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider font-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Our Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Media Kit</a></li>
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div style={{ position: 'relative', left: '-30px' }}>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider font-primary">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Virtuos Offices</a></li>
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div style={{ position: 'relative', left: '-55px' }}>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider font-primary">Stay Connected</h3>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none mb-3 sm:mb-0 text-sm text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-6 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-gray-400 text-sm">© 2025 Virtuos. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Career Privacy Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
