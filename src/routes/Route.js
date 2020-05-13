import React from 'react';
import { Route as ReactRoute, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import store from '../store';

import DefaultLayout from '../layouts/Default';
import AuthLayout from '../layouts/Auth';

export default function Route({ auth, component: Component, ...routeProps }) {
  const { signIn } = store.getState().auth;

  if (!signIn && auth) {
    return <Redirect to="/" />;
  }

  if (signIn && !auth) {
    return <Redirect to="/order" />;
  }

  const Layout = signIn ? AuthLayout : DefaultLayout;

  return (
    <ReactRoute
      {...routeProps}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

Route.defaultProps = {
  auth: false,
};

Route.propTypes = {
  auth: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};
