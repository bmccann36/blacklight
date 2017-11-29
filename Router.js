import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, Text } from 'react-native-elements'
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

import Login from './components/Login';
import Record from './components/Record';
import Main from './components/Main';
import RecordInput from './components/RecordInput';
import NearbyMem from './components/NearbyMem';
import MemoryList from './components/MemoryList';

// Simple component to render something in place of icon
const TabIcon = ({ focused, title }) => {
  switch (title) {
    case 'MAIN':
      return (
        // <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Feather name="globe" size={32} color="#cec4c4" />
      )
    case 'REC':
      return (
        <MaterialIcons name="loupe" size={32} color="#cec4c4" />
      )
    case 'NEARBY':
      return (
        <Feather name="unlock" size={32} color="#cec4c4" />
      );
  }
};


// const TabIcon = ({ selected, title }) => {
//   return (
//     <Text style={{ color: selected ? 'red' : 'white' }}>{title}</Text>
//   );
// }

// <Scene key="login" component={Login} title="LANDING PAGE" />

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
        <Scene key="mainTab" title="MAIN" icon={TabIcon}>
          <Scene
            key="main"
            component={Main}
            title="BLACKLIGHT"
            color='#000000'
          />
        </Scene>
        {/* RECORD */}
        <Scene key="recordTab" title="REC" icon={TabIcon}>
          <Scene
            key="recordHome"
            component={Record}
            title="DROP PIN"
          />
          <Scene
            key="recordInput"
            component={RecordInput}
            title="TYPE YOUR STORY"
          />
        </Scene>
        {/* NEARBY */}
        <Scene key="nearbyTab" title="NEARBY" icon={TabIcon}>
          <Scene
            key="nearbyMem"
            component={NearbyMem}
            title="MEMORY MAP"
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
    color: '#FFFFFF'
  },
  barButtonTextStyle: {
    color: '#FFFFFF'
  },
  barButtonIconStyle: {
    tintColor: 'rgb(255,255,255)'
  },
}

export default RouterComponent;





// <Icon color="Red" name="home" size={34} type="home" />
