import React from 'react'

function Navbar() {
  return (
    // Navigation
    <nav className="relative container  mx-auto p-6">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          <img src="img/logo.svg" alt="manage logo" />
        </div>
        {/* menu items */}
        <div className="hidden md:flex space-x-6">
          <a href="#a" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#a" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#a" className="hover:text-darkGrayishBlue">
            About us
          </a>
          <a href="#a" className="hover:text-darkGrayishBlue">
            Carrers
          </a>
          <a href="#a" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href="#a"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar