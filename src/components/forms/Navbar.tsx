import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <h1>WHM-ANP</h1>
        </div>
        <div className="burger-menu" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Client</a></li>
          <li><a href="#">Product</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
