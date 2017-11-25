import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';

import Login from './components/Login';
import MemoryList from './components/MemoryList';
import MemoryMap from './components/MemoryMap';
import AddMemMap from './components/AddMemMap';
import AddMemInput from './components/AddMemInput';
import SingleMemoryView from './components/SingleMemoryView';
import Map from './components/Map'
import MapTest from './components/MapTest'
import Test from './components/Test'

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

const RouterComponent = props => (
  <Router sceneStyle={{ paddingTop: 30 }}>
    {/* <Scene key="login" component={Login} title="LANDING PAGE" /> */}
    <Scene key="root">
      {/* Tab Container */}
      <Scene
        key="tabbar"
        tabs
        tabBarStyle={{ backgroundColor: '#FFFFFF', height: 70 }}
      >
        {/* MAP WITH MEMORIES */}
        <Scene key="memMapCont" title="bird's eye" icon={TabIcon}>
          <Scene
            key="memMap"
            component={MemoryMap}
            title="TAB 1"
          />
        </Scene>
        {/* Tab and it's scenes */}
        <Scene key="memoryListMain" title="feed" icon={TabIcon} >
          <Scene
            key="memoryList"
            component={MemoryList}
            title="TAB 2"
          />
          <Scene
            key="singleMemory"
            component={SingleMemoryView}
            title="TAB"
          />
        </Scene>
        {/* NEW MEMORY INPUT */}
        <Scene key="page3" title="record" icon={TabIcon} initial >
          <Scene
            initial
            key="Test"
            component={Test}
          />
          <Scene
            key="addMemInput"
            component={AddMemInput}
            title="input your memory"
          />

        </Scene>
      </Scene>

    </Scene>
  </Router>
);


export default RouterComponent;

