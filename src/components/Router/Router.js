import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  LANDING_PAGE,
  DISCOVER_PAGE,
  WATCH_LIST_PAGE
} from '../../helpers/constants';
import Pages from '../Pages';

const routeOptions = {
  landingPage: process.env.PUBLIC_URL + LANDING_PAGE,
  discoverPage: process.env.PUBLIC_URL + DISCOVER_PAGE,
  watchListPage: process.env.PUBLIC_URL + WATCH_LIST_PAGE
};

const Router = ({ updateHistory }) => {
  const {
    landingPage,
    discoverPage,
    watchListPage
  } = routeOptions;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={landingPage}
          component={(props) => {
            updateHistory(props.history);
            return <Pages {...props} page={LANDING_PAGE} /> }
          } />
        <Route
          path={watchListPage}
          component={(props) => {
            updateHistory(props.history);
            return <Pages {...props} page={DISCOVER_PAGE} /> }
          } />
        <Route
          path={discoverPage}
          component={(props) => {
            updateHistory(props.history);
            return <Pages {...props} page={WATCH_LIST_PAGE} /> }
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