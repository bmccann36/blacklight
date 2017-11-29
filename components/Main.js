
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
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
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
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
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
