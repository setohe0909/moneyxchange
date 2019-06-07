import React, { Fragment } from 'react';

const ConvertCurrency = () => (
  <Fragment>
    <div className="content">
      <h2>¡Empecemos!</h2>
      <p>A continuación puedes proceder a realizar tu transformación de dolares a euros.</p>
    </div>
    <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
      <div className="column">
        <input className="input-fields pulled-right" type="text" placeholder="USD" />
      </div>
      <div className="column">
        <input className="input-fields pulled-left" type="text" placeholder="EU" />
      </div>
    </div>
    <button className="btn-calculate">CALCULATE</button>
  </Fragment>
);

export default ConvertCurrency;
