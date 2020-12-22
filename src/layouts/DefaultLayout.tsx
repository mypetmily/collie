import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface DefaultLayoutProps {
  path: string;
  component: any;
}

const DefaultLayout = ({ path, component: Component, ...rest }: DefaultLayoutProps) => {
  const user = true;

  return (
    <>
      {user && (
        <div className="container">
          <Route path={path} render={({ ...routeRest }) => <Component {...rest} {...routeRest} />} />
        </div>
      )}
      {!user && <Redirect to="/login" />}
    </>
  );
};

export default DefaultLayout;
