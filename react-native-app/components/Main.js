
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { watchLocation, stopWatching } from '../store';

// import { Actions } from 'react-native-router-flux';
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

class Main extends Component {
  // START WATCHING LOCATION
  componentDidMount() {
    this.props.watchLocation();
  }
  // STOP WATCHING LOCATION
  componentWillUnmount() {
    this.props.stopWatching();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>MAIN COMPONENT</Text>
      </View>
    );
  }
}

const mapDispatchToProps = { watchLocation, stopWatching };

const mapStateToProps = state => ({
  currentPosition: state.position,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
