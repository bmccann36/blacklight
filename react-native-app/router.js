import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';


// import MemoryList from './components/MemoryList';
// import MemoryMap from './components/MemoryMap';
// import AddMemMap from './components/AddMemMap';
// import AddMemInput from './components/AddMemInput';
// import SingleMemoryView from './components/SingleMemoryView';
// import Map from './components/Map'
// import MapTest from './components/MapTest'
import Test from './components/Test'

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

const RouterComponent = () => {
  return (
  <Router sceneStyle={{ paddingTop: 30 }}>
    <Scene key="login" component={Test} title="LANDING PAGE"/>
  </Router>
  )
}


export default RouterComponent;
