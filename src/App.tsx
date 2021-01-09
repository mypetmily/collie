import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import { history } from './modules';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import Login from './pages/Login';

import 'antd/dist/antd.css';
import './App.scss';
import SignupPage from './pages/Signup';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PublicLayout path="/login" component={Login} />
        <PublicLayout path="/signup" component={SignupPage} />
        <DefaultLayout path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
