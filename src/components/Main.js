import React, { Fragment } from 'react';

const Main = () => (
  <Fragment>
    <section className="section">
      <div className="container">
        <h1 className="title">Section Example</h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section className="level is-mobile">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Tweets</p>
          <p className="title">3,456</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Following</p>
          <p className="title">123</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Followers</p>
          <p className="title">456K</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Likes</p>
          <p className="title">789</p>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Main;
