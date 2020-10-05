import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  areFiltersOpen,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component isAuthenticated={isAuthenticated} areFiltersOpen={areFiltersOpen} {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};
