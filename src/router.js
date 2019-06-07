import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Global Components
import Header from './components/Header';
// import Footer from './components/footer';

// Feature
import Main from './components/Main';

import * as routes from './constants/routes';

const MyRoutes = (props) => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path={routes.MAIN} component={Main} />
    </Switch>
  </Fragment>
);

const App = () => (
  <Router>
    <MyRoutes />
  </Router>
);

export default App;
