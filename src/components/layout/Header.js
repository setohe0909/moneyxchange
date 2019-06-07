import React, { Fragment } from 'react';
import ParcelLogo from '../../assets/img/parcel-logo.svg';

const Header = () => (
  <Fragment>
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img width="120" src={ParcelLogo} alt="" />
          </a>
        </div>
      </nav>
    </header>
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hero Section</h1>
          <h2 className="subtitle">Basic Layout Skeleton using Bulma CSS Framework</h2>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Header;
