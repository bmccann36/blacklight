import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';



import Test from './components/Test'
import Test2 from './components/Test2'

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

const RouterComponent = () => {
  return (
  <Router sceneStyle={{ paddingTop: 30 }}>
    <Scene key="test" component={Test} title="LANDING PAGE"/>
    <Scene key="test2" component={Test2} title="other page" initial />
  </Router>
  )
}


export default RouterComponent;
