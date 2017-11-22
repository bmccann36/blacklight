import React from 'react';
import { Scene, Router } from 'react-native-router-flux';


import Login from './components/Login';
import User from './components/User';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 40 }}>
    <Scene key="single" component={Login} title="Please Login" initial />
    <Scene key="user" component={User} title="Here is User" />
  </Router>
);


export default RouterComponent;
