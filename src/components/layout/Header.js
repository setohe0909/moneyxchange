import React, { Fragment } from 'react';
import Logo from '../../assets/img/logo.png';

const Header = () => (
  <Fragment>
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img width="180" src={Logo} alt="logo" />
          </a>
        </div>
      </nav>
    </header>
  </Fragment>
);

export default Header;
