import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';



 class User extends Component {


  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <Text style={styles.text}>User page</Text>


      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  memories: state.memories
});

export default connect(mapStateToProps)(User);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});
