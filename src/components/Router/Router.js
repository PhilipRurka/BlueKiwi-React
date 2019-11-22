import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  LANDING_PAGE
} from '../../helpers/constants';
import Pages from '../Pages';

const routeOptions = {
  landingPage: process.env.PUBLIC_URL + LANDING_PAGE
};

const Router = ({ updateHistory }) => {
  const {
    landingPage
  } = routeOptions;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={landingPage}
          component={(props) => {
            updateHistory(props.history, );
            return <Pages {...props} page={landingPage} /> }
          } />
        <Redirect
          to={landingPage}
          component={(props) => (
            <Pages {...props}
              page={landingPage} />
          )} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;