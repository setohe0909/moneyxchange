import React, { Fragment } from 'react';
import bg from '../assets/img/transfer_money.svg';

import ConvertCurrency from './convert/Convert';

const Main = () => (
  <Fragment>
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <img src={bg} alt="background" width="300px" />
          <h1 className="subtitle">Cambio de divisas 🤑🤑🤑</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <ConvertCurrency />
      </div>
    </section>
  </Fragment>
);

export default Main;
