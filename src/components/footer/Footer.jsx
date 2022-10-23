import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="nav">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find your dream house
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Request proposal
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Download home planner
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Submit your property
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Come work with us
          </a>
        </li>
      </ul>
      <p className="copyright">&copy; Copyright 2022 by Arminas Strolys.</p>
    </div>
  );
};

export default Footer;
