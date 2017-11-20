import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements'
import { FormLabel, FormInput } from 'react-native-elements'
import store, { emailChanged, passwordChanged, createUserOnServer } from '../store'
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


class Login extends Component {
  handleSubmit() {
    const { email, password } = this.props
    this.props.createUserOnServer({ email, password })
  }
  onEmailChange(text) {
    this.props.emailChanged(text)
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text)
    // console.log(this.props)
  }

  render() {
    const { textStyle } = styles
    return (
      <View style={styles.container}>
        <Card >
          <FormLabel>Email</FormLabel>
          <FormInput
            onChangeText={this.onEmailChange.bind(this)}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
          />
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
  email: state.auth.email,
  password: state.auth.password,
})

const mapDispatchToProps = { emailChanged, passwordChanged, createUserOnServer }

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50
  }
};


