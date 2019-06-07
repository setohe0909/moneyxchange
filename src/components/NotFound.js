import React, { Fragment } from 'react';
import NotFoundImg from '../assets/img/404.svg';

const NotFound = () => (
  <Fragment>
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <img src={NotFoundImg} alt="background" width="300px" />
          <h2 className="title">404</h2>
        </div>
      </div>
    </section>
    <section className="section">
      <h2 className="subtitle">No encontramos este sitio.... 😞</h2>
    </section>
  </Fragment>
);

export default NotFound;
