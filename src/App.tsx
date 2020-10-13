import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import { history } from './modules';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <DefaultLayout path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
