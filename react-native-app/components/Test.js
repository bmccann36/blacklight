

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { locationChanged } from '../store';
import { connect } from 'react-redux';

// import { Actions } from 'react-native-router-flux';


class Test extends Component {

  componentDidMount() {
    this.props.locationChanged({ latitude: 40, longitude: 40 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>TEST COMPONENT</Text>

      </View>
    );
  }
}

const mapDispatchToProps = { locationChanged };

const mapStateToProps = state => ({
  memories: state.memory,
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);


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
