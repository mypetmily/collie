import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PublicLayoutProps {
  path: string;
  component: any;
}

const PublicLayout = ({ path, component: Component, ...rest }: PublicLayoutProps) => {
  const user = true;

  return (
    <>
      {!user && (
        <div className="container">
          <Route path={path} render={({ ...routeRest }) => <Component {...rest} {...routeRest} />} />
        </div>
      )}
      {user && <Redirect to="/" />}
    </>
  );
};

export default PublicLayout;
