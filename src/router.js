import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Global Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Feature
import Main from './components/Main';
import NotFound from './components/NotFound';

import * as routes from './constants/routes';

const MyRoutes = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path={routes.MAIN} component={Main} />
      <Route component={NotFound} />
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
