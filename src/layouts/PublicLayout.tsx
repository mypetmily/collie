import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PublicNav } from '../components/Nav';
import Style from './PublicLayout.scss';

interface PublicLayoutProps {
  path: string;
  component: any;
}

const PublicLayout = ({ path, component: Component, ...rest }: PublicLayoutProps) => {
  const user = false;

  return (
    <>
      {!user && (
        <div className={Style.container}>
          <PublicNav />
          <Route path={path} render={({ ...routeRest }) => <Component {...rest} {...routeRest} />} />
        </div>
      )}
      {user && <Redirect to="/" />}
    </>
  );
};

export default PublicLayout;
