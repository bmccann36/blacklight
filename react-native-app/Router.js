import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Text } from 'react-native';

import Login from './components/Login';
import User from './components/User';
import MemoryMap from './components/MemoryMap';
import NewMemory from './components/NewMemory';
import AddMemMap from './components/AddMemMap';
import AddMemInput from './components/AddMemInput';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

const RouterComponent = () => (
  <Router>
    <Scene key="login" component={Login} title="LANDING PAGE" initial />
    <Scene key="root">
      {/* Tab Container */}
      <Scene
        key="tabbar"
        tabs
        tabBarStyle={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Tab and it's scenes */}
        <Scene key="page1" title="MemMap" icon={TabIcon}>
          <Scene
            key="scarlet"
            component={MemoryMap}
            title="TAB 1"
          />
        </Scene>
        {/* Tab and it's scenes */}
        <Scene key="page2" title="User" icon={TabIcon}>
          <Scene
            key="maize"
            component={User}
            title="TAB 2"
          />
        </Scene>
        {/* Tab and it's scenes */}
        <Scene key="page3" title="ENTER MEMORY" icon={TabIcon}>
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

