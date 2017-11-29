
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';

import { watchLocation, stopWatching, fetchMemories } from '../store';

// import { Actions } from 'react-native-router-flux';

class Main extends Component {
  // START WATCHING LOCATION
  componentDidMount() { // was componentWillMount but created a bug that caused location to be lost
    this.props.watchLocation();
    this.props.fetchMemories();
  }
  // STOP WATCHING LOCATION
  componentWillUnmount() {
    this.props.stopWatching();
  }
  render() {
    return (
      <ImageBackground
      source={ require('../images/city.jpg') }
      style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textTitle}>Welcome to Blacklight</Text>
          <Text style={styles.text}>a place to reveal somebody's secret...</Text>
        </View>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = { watchLocation, stopWatching, fetchMemories };

const mapStateToProps = state => ({
  currentPosition: state.position,
});

const styles = {
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
    textShadowColor:'#000000',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:8,
  },
  text:{
    fontSize: 17,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
    textShadowColor:'#000000',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:8,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
