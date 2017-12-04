'use strict';
import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import MapWMarker from './MapWMarker';
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.150;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class NearbyMem extends Component {

  render() {
    const allMems = this.props.memories;
    const currLat = this.props.currentPosition.latitude;
    const currLng = this.props.currentPosition.longitude;
    // FILTER ONLY NEARBY MEMORIES
    const nearMems = allMems.filter((mem) => {
      return (Math.abs(currLat - mem.lat) < LATITUDE_DELTA && Math.abs(currLng - mem.lng) < LATITUDE_DELTA);
    });
    const region = {
      latitude: currLat, longitude: currLng, latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA,
    };
    return (
      <View style={styles.container} >
        <MapWMarker
          initialRegion={region}
          markerPosition={region}
          memories={allMems}
        />
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
};

const mapStateToProps = state => ({
  currentPosition: state.position,
  memories: state.memory,
});

export default connect(mapStateToProps)(NearbyMem);
