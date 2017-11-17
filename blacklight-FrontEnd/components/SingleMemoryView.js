'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import store from '../store';
import { connect } from 'react-redux';

import MemoryList from './MemoryList';


class SingleMemoryView extends Component {

  // static navigationOptions = {

  // };


  render() {
    const { navigate } = this.props.navigation;
    const { memoryTitle } = this.props.navigation.state.params;
    const { memoryText } = this.props.navigation.state.params;

    // console.log('******MEMORIES in SINGLE', this.props.memories);

    return (
      <ScrollView style={styles.container}>

        <Text style={styles.text}>{memoryTitle}</Text>
        <Text style={styles.subText}>{memoryText}</Text>

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  memories: state.memories
})

export default connect(mapStateToProps)(SingleMemoryView);

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30
  }
});
