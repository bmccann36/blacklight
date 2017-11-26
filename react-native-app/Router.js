import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';



import Test from './components/Test';
import Test2 from './components/Test2';
import Login from './components/Login';
import Record from './components/Record';
import Main from './components/Main';
import RecordInput from './components/RecordInput';
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
        {/* MAIN */}
        <Scene key="mainTab" title="Main" icon={TabIcon}>
          <Scene
            key="main"
            component={Main}
            title="main"
          />
        </Scene>
        {/* RECORD */}
        <Scene key="recordTab" title="record" icon={TabIcon}>
          <Scene
            key="recordHome"
            component={Record}
            title=""
          />
          <Scene
            key="recordInput"
            component={RecordInput}
            title=""
          />
        </Scene>
      </Scene>
      {/* Tab Container END */}
    </Scene>
  </Router>
);


export default RouterComponent;
