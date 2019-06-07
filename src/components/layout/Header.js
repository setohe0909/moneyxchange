import React, { Fragment } from 'react';
import Logo from '../../assets/img/logo.png';
import bg from '../../assets/img/transfer_money.svg';

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
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <img src={bg} alt="background" width="300px" />
          <h2 className="subtitle">Basic Layout Skeleton using Bulma CSS Framework</h2>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Header;
