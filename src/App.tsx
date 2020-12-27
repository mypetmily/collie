import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import { history } from './modules';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PublicLayout path="/login" component={Login} />
        <DefaultLayout path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
