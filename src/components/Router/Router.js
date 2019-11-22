import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  LANDING_PAGE,
  DISCOVER_PAGE
} from '../../helpers/constants';
import Pages from '../Pages';

const routeOptions = {
  landingPage: process.env.PUBLIC_URL + LANDING_PAGE,
  discoverPage: process.env.PUBLIC_URL + DISCOVER_PAGE
};

const Router = ({ updateHistory }) => {
  const {
    landingPage,
    discoverPage
  } = routeOptions;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={landingPage}
          component={(props) => {
            updateHistory(props.history, );
            return <Pages {...props} page={LANDING_PAGE} /> }
          } />
        <Route
          path={discoverPage}
          component={(props) => {
            updateHistory(props.history, );
            return <Pages {...props} page={DISCOVER_PAGE} /> }
          } />
        <Redirect
          to={landingPage}
          component={(props) => (
            <Pages {...props}
              page={LANDING_PAGE} />
          )} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;