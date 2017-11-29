import React, { Component } from 'react';
import { Text, View, AlertIOS, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

import Map from './Map';

const { height, width } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0100;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



class Record extends Component {
  constructor() {
    super();
    this.state = { droppedPin: false };
    this.attachAPin = this.attachAPin.bind(this);
  }
  componentDidMount() {
    AlertIOS.alert(
      'Choose Location',
      'Use your current location OR drop a pin to set location',
      [
        {
          text: 'USE MY LOCATION', onPress: () => Actions.recordInput(),
        },
        { text: 'DROP PIN' },
      ],
    );
  }
  attachAPin(event) {
    this.setState({ droppedPin: event.nativeEvent.coordinate });
  }

  render() {
    let loc; // LOCATION IS COMING FROM REDUX STORE
    if (this.props.currentPosition.latitude) {
      loc = { // WE REFORMAT IT A LITTLE TO WORK WITH MAP
        latitude: this.props.currentPosition.latitude,
        longitude: this.props.currentPosition.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
    }
    return (
      <View style={styles.container}>
        <View style={styles.map}>
          {this.props.currentPosition && // MAP LOADS IF IT HAS A POSITION
            <Map
              currentLocation={loc}
              markerPosition={loc}
              attachAPin={this.attachAPin}
              droppedPin={this.state.droppedPin}
            /> // MAP IS NOW A STANDALON COMPONENT FOR USE ELSEWHERE
          }
        </View>
        <View style={styles.buttonArea}>
          <Button style={styles.buttonStyle}
            small
            title="RECORD AT PIN"
            color='#000000'
            onPress={() => Actions.recordInput(this.state)} // NAVIGATE TO NEXT SCREEN
            disabled={!this.state.droppedPin} // DISABLED TILL PIN IS DROPPED
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentPosition: state.position,
});

const styles = {
  container: {
    flex: 1,
    backgroundColor:'#000000',
  },
  map: {
    flex: 5,
  },
  buttonArea: {
    flex: 1,
  },
  buttonStyle: {
    backgroundColor:'#000000',
    padding: 10
  }
};

export default connect(mapStateToProps)(Record);
