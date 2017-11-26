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

const styles = {
  container: {
    flex: 1,
  },
  map: {
    flex: 5,
  },
  buttonArea: {
    flex: 1,
  },
};

class Record extends Component {
  constructor() {
    super();
    this.state = { droppedPin: false };
    this.attachAPin = this.attachAPin.bind(this);
  }
  componentDidMount() {
    AlertIOS.alert(
      'Choose Location',
      'use your current location or drop a pin to set location',
      [
        {
          text: 'use my location', onPress: () => Actions.recordInput(),
        },
        { text: 'drop pin' },
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
          <Button
            small
            backgroundColor="#00BFFF"
            title="record at pin"
            onPress={() => Actions.recordInput(this.state.droppedPin)} // NAVIGATE TO NEXT SCREEN
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

export default connect(mapStateToProps)(Record);

