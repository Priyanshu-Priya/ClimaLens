import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './../pages/Home'; // Assuming you have these components
import Resource from './../pages/Resource';
import AboutUs from './../pages/AboutUs';
import Blog from './../pages/Blog';
import ContactUs from './../pages/ContactUs';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu on small screens
  };

  return (
    <Router>
      <nav className="navbar z-20 fixed w-full"> {/* Make the navbar fixed */}
        <div className="flex items-center justify-between bg-green-800 shadow-lg ">
          {/* Logo */}
          <div className="flex items-center justify-center text-xl font-bold text-white h-[80px]">
            <a 
              href="#" 
              className="h-full w-full px-3 py-2 my-0 hover:bg-green-500 transition duration-300 flex items-center justify-center"
            >
              CLIMALENS
            </a>
          </div>

          {/* Hamburger Menu Icon / Cross */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white lg:hidden block focus:outline-none mx-2"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>

          {/* Navbar Links */}
          <div className={`${isMenuOpen ? 'flex flex-col' : 'hidden mx-4 '} lg:flex lg:space-x-6 space-y-4 lg:space-y-0 px-2 z-20 flex-col lg:flex-row absolute lg:relative top-20 right-0 lg:top-auto bg-green-800 lg:bg-transparent w-full lg:w-auto text-center lg:text-left shadow-lg lg:shadow-none lg:p-0 p-4`}>
            <Link to="/" onClick={handleLinkClick} className="text-white px-3 py-2 rounded-md hover:bg-green-500 transition duration-300">Home</Link>
            <Link to="/resource" onClick={handleLinkClick} className="text-white px-3 py-2 rounded-md hover:bg-green-500 transition duration-300">Resource</Link>
            <Link to="/about-us" onClick={handleLinkClick} className="text-white px-3 py-2 rounded-md hover:bg-green-500 transition duration-300">About Us</Link>
            <Link to="/blog" onClick={handleLinkClick} className="text-white px-3 py-2 rounded-md hover:bg-green-500 transition duration-300">Blog</Link>
            <Link to="/contact-us" onClick={handleLinkClick} className="text-white px-3 py-2 rounded-md bg-black hover:bg-green-500 transition duration-300">Contact Us</Link>
          </div>
        </div>

        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </nav>
    </Router>
  );
};

export default Navbar;
