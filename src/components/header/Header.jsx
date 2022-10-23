import React from 'react';
import logo from '../../images/logo.png';
import logo1 from '../../images/logo-bbc.png';
import logo2 from '../../images/logo-forbes.png';
import logo3 from '../../images/logo-techcrunch.png';
import logo4 from '../../images/logo-bi.png';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo of the company" className="header__logo" />
      <h3 className="heading-3">Your own home</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn">View our offers</button>
      <div className="header__companies">Backed by:</div>
      <div className="header__companies-logos">
        <img src={logo1} alt="BBC logo" />
        <img src={logo2} alt="Forbes logo" />
        <img src={logo3} alt="Techcrunch logo" />
        <img src={logo4} alt="Business insider logo" />
      </div>
    </div>
  );
};

export default Header;
