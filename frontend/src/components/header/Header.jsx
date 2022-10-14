import React from "react";
import tecLogo from '../../images/logoInfiniteSecurity.png';
import { Navbar } from '../navbar/Navbar';
import { userOptions } from './headerOptions';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const renderHeaderOptions = options => (
    <NavLink key="home" to="/"><img className="header__logo" src = {tecLogo} alt="Tecnológic de Monterrey Logo"/></NavLink>
  );

  return (
    <header className="header">
      {renderHeaderOptions(userOptions)}
      <Navbar {...props} />
    </header>
  );
};

export default Header;
