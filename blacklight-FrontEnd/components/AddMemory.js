'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { emailChanged, passwordChanged, createUserOnServer } from '../store';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MapView from 'react-native-maps';

export default class AddMemory extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentLocation: {
        latitude: 40.705076,
        longitude: -74.0113487,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markerPosition: {
        latitude: 40.705076,
        longitude: -74.0113487
      },
      droppedPin: false
    };
  }

  watchID = ''

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        currentLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }
      });
      this.setState({
        markerPosition: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
    }, (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    this.watchID = navigator.geolocation.watchPosition(position => {
      this.setState({
        currentLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }
      });

      this.setState({
        markerPosition: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  handleSubmit() {
    this.props.createUserOnServer({ email, password })
  }

  onTitleChange(text) {
    this.props.emailChanged(text)
  }

  onTextChange(text) {
    this.props.passwordChanged(text)
  }

  attachAPin(event) {
    this.setState({ droppedPin: event.nativeEvent.coordinate })
  }


  render() {
    console.log('FROM RENDER', this.state)

    return (
      <View style={styles.container} >
        <View style={styles.container}>
          <MapView
            onLongPress={e => this.attachAPin(e)}
            style={styles.map}
            region={this.state.currentLocation}
          >

            <MapView.Marker
              coordinate={this.state.markerPosition}>
              <View style={styles.radius}>
                <View style={styles.marker} />
              </View>
            </MapView.Marker>

            { this.state.droppedPin &&
            <MapView.Marker
              coordinate={this.state.droppedPin}>
            </MapView.Marker>
            }
          </MapView>
        </View>

        <View style={styles.container}>
          <Card title='Enter your story'>
            <FormLabel>Title</FormLabel>
            <FormInput onChangeText={this.onTitleChange.bind(this)} />
            <FormLabel>Text</FormLabel>
            <FormInput onChangeText={this.onTextChange.bind(this)} />
            <Button
              small
              backgroundColor='#00BFFF'
              onPress={this.handleSubmit.bind(this)}
              title='submit'
            />
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
  }
});

