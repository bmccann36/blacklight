'use strict';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Card, Button } from 'react-native-elements'
import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { emailChanged, passwordChanged, createUserOnServer, getUser } from '../store';


class Login extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text)
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }
  handleSubmit() {
    const { email, password } = this.props
    this.props.createUserOnServer({ email, password })
    Actions.root();
  }
  handleLogin() {
    // const { email, password } = this.props;
    const email = 'cody@email.com'
    const password = '123'
    this.props.getUser({ email, password });
    Actions.root();
  }

  render() {
    const { textStyle } = styles
    return (
      <View style={styles.container}>
        <Card title='prototype login'>
          <FormLabel>Email</FormLabel>
          <FormInput
            onChangeText={this.onEmailChange.bind(this)}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
          />
          <Card>
            <Button
              small
              onPress={this.handleLogin.bind(this)}
              title='log in' />
          </Card>
          <Card>
            <Button
              small
              onPress={this.handleSubmit.bind(this)}
              title='sign up' />
          </Card>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
})

const mapDispatchToProps = { emailChanged, passwordChanged, createUserOnServer, getUser }

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 50
  }
};


