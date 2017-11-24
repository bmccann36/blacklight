import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Text } from 'react-native';

import Login from './components/Login';
import MemoryList from './components/MemoryList';
import MemoryMap from './components/MemoryMap';
import NewMemory from './components/NewMemory';
import AddMemMap from './components/AddMemMap';
import AddMemInput from './components/AddMemInput';
import SingleMemoryView from './components/SingleMemoryView';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

const RouterComponent = props => (
  <Router>
    <Scene key="login" component={Login} title="LANDING PAGE" />
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
        <Scene key="page3" title="record" icon={TabIcon} >
          <Scene
            key="AddMemory"
            component={NewMemory}
            title="TAB 3"
          />
          <Scene
            key="addMemMap"
            component={AddMemMap}
            title="add a memory on the map"
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

