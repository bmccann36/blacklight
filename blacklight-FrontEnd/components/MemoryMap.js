import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import FrontPage from './FrontPage';
import MemoryList from './MemoryList';

export default class MemoryMap extends Component {
render() {
  return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
        initialRegion={{
          latitude: 40.705076,
          longitude: -74.0113487,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapView.Marker
          coordinate={{
            latitude: 40.705076,
            longitude: -74.0113487,
          }}>
          <View style={styles.radius}>
            <View style={styles.marker}/>
          </View>
        </MapView.Marker>
      </MapView>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
  radius:{
    height:50,
    width:50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
    alignItems:'center',
    justifyContent: 'center'
  },
  marker:{
    height:20,
    width:20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
  }
});



// const {width, height} = Dimensions.get('window')

// const SCREEN_HEIGHT = height
// const SCREEN_WIDTH = width
// const ASPECT_RATIO = width / height
// const LATTITUDE_DELTA = 0.0922
// const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO


// export default class MemoryMap extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       initialPosition:{
//         latitude: 0,
//         longitude: 0,
//         latitudeDelta: 0,
//         longitudeDelta: 0
//       },
//       markerPosition:{
//         latitude: 0,
//         longitude: 0
//       }
//     }
//   }

//   watchID: ?number = null

//   componentDidMount(){
//     navigator.geolocation.getCurrentPosition((position) => {
//       let lat = parseFloat(position.coords.latitude)
//       let long = parseFloat(position.coords.longtitude)

//       let initialRegion = {
//         latitude: lat,
//         longitude: long,
//         latitudeDelta: LATTITUDE_DELTA,
//         longitudeDelta: LONGTITUDE_DELTA
//       }
//       this.setState({initialPosition: initialRegion})
//       this.setState({markerPosition: initialRegion})
//     },
//     (error) => alert(JSON.stringify(error)),
//     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

//     this.watchID = navigator.geolocation.watchPosition((position) => {
//       let lat = parseFloat(position.coords.latitude)
//       let long = parseFloat(position.coords.longtitude)

//       let lastRegion = {
//         latitude: lat,
//         longitude: long,
//         latitudeDelta: LATTITUDE_DELTA,
//         longitudeDelta: LONGTITUDE_DELTA
//       }
//       this.setState({initialPosition: lastRegion})
//       this.setState({markerPosition: lastRegion})
//     })
//   }

//   componentWillUnmount(){
//     navigator.geolocation.clearWatch(this.watchID)
//   }


//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//         style={styles.map}
//           Region={this.state.initialPosition}>
//           <MapView.Marker
//             coordinate={this.state.markerPosition}>
//             <View style={styles.radius}>
//               <View style={styles.marker}/>
//             </View>
//           </MapView.Marker>
//         </MapView>
//       </View>
//     );
//   }
// }
// }
