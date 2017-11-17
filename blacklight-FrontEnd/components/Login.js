import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';





const Login = () => {
  const { textStyle } = styles
  return (
    <View style={styles.container}>

      <Text style={textStyle}>Login Page</Text>

    </View>
  )
}

// we may not need access to memories here but just doing it for now - -
const mapStateToProps = (state) => ({
  memories: state.memories
});

export default connect(mapStateToProps)(Login);

const styles = {
  textStyle: {
    fontSize: 50
  }
};
