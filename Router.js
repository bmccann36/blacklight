import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, Text } from 'react-native-elements'
import { Feather, MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';

import Login from './components/Login';
import Record from './components/Record';
import Main from './components/Main';
import RecordInput from './components/RecordInput';
import NearbyMem from './components/NearbyMem';
import MemoryList from './components/MemoryList';
import SingleMemoryView from './components/SingleMemoryView';
import AR from './components/AR';
// Simple component to render something in place of icon
const TabIcon = ({ focused, title, selected }) => {
  switch (title) {
    case 'MAIN':
      return (
        <Entypo name="light-bulb" size={32} color={selected ? '#e50000' : '#cec4c4'} />
      );
    case 'REC':
      return (
        <MaterialIcons name="loupe" size={32} color={selected ? '#e50000' : '#cec4c4'} />
      );
    case 'NEARBY':
      return (
        <Feather name="globe" size={32} color={selected ? '#e50000' : '#cec4c4'} />
      );
    case 'MEMORY LIST':
      return (
        <FontAwesome name="feed" size={32} color={selected ? '#e50000' : '#cec4c4'} />
      );
    case 'AR':
      return (
        <Feather name="eye" size={32} color={selected ? '#e50000' : 'white'} />
      );
    default: return null;
  }
};

const RouterComponent = props => (
  // <Router />
  <Router
    // sceneStyle={{backgroundColor: 'black'}}
    navigationBarStyle={styles.navBar}
    titleStyle={styles.navBarTitle}
    barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}
  >

    <Scene key="login" component={Login} />
    <Scene key="root">
      {/* Tab Container */}
      <Scene
        key="tabbar"
        tabs
        tabBarStyle={{ backgroundColor: '#1c1616', height: 50 }}
      >
        {/* MAIN */}
        <Scene key="mainTab" title="MAIN" icon={TabIcon} >
          <Scene
            key="main"
            component={Main}
            title="BLACKLIGHT"
            color='#000000'
          />
        </Scene>
        {/* memory list */}
        <Scene key="memoryListTab" title="MEMORY LIST" icon={TabIcon}>
          <Scene
            key="memoryList"
            component={MemoryList}
            title="MEMORY FEED"
          />
          <Scene
            key="singleMemory"
            component={SingleMemoryView}
            title="MEMORY"
          />
        </Scene>
        {/* RECORD */}
        <Scene key="recordTab" title="REC" icon={TabIcon}>
          <Scene
            key="recordHome"
            component={Record}
            title="LEAVE MEMORY"
          />
          <Scene
            key="recordInput"
            component={RecordInput}
            title="TYPE YOUR STORY"
          />
        </Scene>
        {/* NEARBY */}
        <Scene key="nearbyTab" title="NEARBY" icon={TabIcon} >
          <Scene
            key="nearbyMem"
            component={NearbyMem}
            title="MEMORY MAP"
          />
        </Scene>
        {/* AR */}
        <Scene key="arTab" title="AR" icon={TabIcon}>
          <Scene
            key="ar"
            component={AR}
            title="SEE MEMORY"
          />
        </Scene>
      </Scene>
      {/* Tab Container END */}
    </Scene>
  </Router>
);

const styles = {
  navBar: {
    backgroundColor: '#000000',
  },
  navBarTitle: {
    color: '#FFFFFF',
  },
  barButtonTextStyle: {
    color: '#FFFFFF',
  },
  barButtonIconStyle: {
    tintColor: 'rgb(255,255,255)',
  },
};

export default RouterComponent;

