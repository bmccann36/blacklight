import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';



import Test from './components/Test'
import Test2 from './components/Test2'
import Login from './components/Login'

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

const RouterComponent = props => (
  <Router sceneStyle={{ paddingTop: 30 }}>
    <Scene key="login" component={Login} title="LANDING PAGE" />
    <Scene key="root">
      {/* Tab Container */}
      <Scene
        key="tabbar"
        tabs
        tabBarStyle={{ backgroundColor: '#FFFFFF', height: 70 }}
      >
        {/* MAP WITH MEMORIES */}
        <Scene key="key1" title="title" icon={TabIcon}>
          <Scene
            key="test1"
            component={Test}
            title="TAB 1"
          />
        </Scene>
        <Scene key="key2" title="title" icon={TabIcon}>
          <Scene
            key="test2"
            component={Test2}
            title="TAB 1"
          />
        </Scene>
      </Scene>

    </Scene>
  </Router>
);


export default RouterComponent;
