import React, { ElementType } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PublicNav } from '../components/Nav';
import './PublicLayout.scss';

interface PublicLayoutProps {
  path: string;
  component: ElementType;
}

const PublicLayout = ({ path, component: Component, ...rest }: PublicLayoutProps): JSX.Element => {
  const user = false;

  return (
    <>
      {!user && (
        <>
          <PublicNav />
          <Route path={path} render={({ ...routeRest }) => <Component {...rest} {...routeRest} />} />
        </>
      )}
      {user && <Redirect to="/" />}
    </>
  );
};

export default PublicLayout;
