import React from 'react';
import { connect } from 'react-redux';
import { updateHistory } from '../utils';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  LANDING_PAGE,
  DISCOVER_PAGE,
  DISCOVER_OPTION_PAGE,
  WISHLIST_PAGE,
  OPTION,
  PRODUCT_PAGE
} from '../router';
import Pages from '../components/Pages';

const routeOptions = {
  landing: process.env.PUBLIC_URL + LANDING_PAGE,
  discover: process.env.PUBLIC_URL + DISCOVER_PAGE,
  discoverOption: process.env.PUBLIC_URL + DISCOVER_PAGE + OPTION,
  product: process.env.PUBLIC_URL + PRODUCT_PAGE,
  discoverToProduct: process.env.PUBLIC_URL + DISCOVER_PAGE + OPTION + PRODUCT_PAGE,
  watchlist: process.env.PUBLIC_URL + WISHLIST_PAGE
};

export default connect(null,
  /** Redux */
  (dispatch) => ({
    updateHistory: (payload) => dispatch(updateHistory(payload))
  })
)(({
  /** Props */
  updateHistory
}) => {
  const {
    landing,
    discover,
    discoverOption,
    watchlist,
    product,
    discoverToProduct
  } = routeOptions;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={landing}
          component={(props) => {
            updateHistory(props.history);
            return <Pages {...props} page={LANDING_PAGE} /> }
          } />
        <Route
          exact
          path={discover}
          component={(props) => {
            updateHistory(props.history);
            return <Pages {...props} page={DISCOVER_PAGE} /> }
          } />
        <Route
          exact
          path={watchlist}
          component={(props) => {
            updateHistory(props.history);
            return <Pages {...props} page={WISHLIST_PAGE} /> }
          } />
        <Route
          exact
          path={discoverOption}
          component={(props) => {
            updateHistory(props.history);
            return <Pages {...props} page={DISCOVER_OPTION_PAGE} /> }
          } />
        <Route
        exact
          path={[
            product,
            discoverToProduct,
            `${discoverToProduct}/*`,
            `${product}/*`
          ]}
          component={(props) => {
            updateHistory(props.history);
            return <Pages {...props} page={PRODUCT_PAGE} /> }
          } />
        <Redirect
          to={landing}
          component={(props) => {
            updateHistory(props.history);
            return <Pages {...props} page={LANDING_PAGE} /> }
          } />
      </Switch>
    </BrowserRouter>
  );
});