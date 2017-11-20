import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements'

import store, { titleChanged } from '../store'



class Record extends Component {
  handleSubmit() {
    const title = 'Twas brillig, and the slithy toves'
    this.props.titleChanged(title)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.text}>Record Memory</Text>
          <Button
            small
            onPress={this.handleSubmit.bind(this)}
            title='submit' />
        </Card>
      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  title: state.memEntry.title
});

const mapDispatchToProps = { titleChanged }

export default connect(mapStateToProps, mapDispatchToProps)(Record);



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
