import React from 'react';
import { Scene, Router } from 'react-native-router-flux';


import Login from './components/Login';
import User from './components/User';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 40 }}>
    <Scene key="auth">
      <Scene key="login" component={Login} title="Please Login" />
    </Scene>
    <Scene key="main">
      <Scene key="user" component={User} title="Here is User" />
    </Scene>
  </Router>
);


export default RouterComponent;
