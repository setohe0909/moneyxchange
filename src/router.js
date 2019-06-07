import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Global Components
import Header from './components/layout/Header';
import Footer from './components/layout/footer';

// Feature
import Main from './components/Main';

import * as routes from './constants/routes';

const MyRoutes = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path={routes.MAIN} component={Main} />
    </Switch>
    <Footer />
  </Fragment>
);

const App = () => (
  <Router>
    <MyRoutes />
  </Router>
);

export default App;
