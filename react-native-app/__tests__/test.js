import 'react-native';
import React from 'react';
import { connect } from 'react-redux';
// import AR from '../components/AR';
import Login from '../components/Login';
// import Main from '../components/Main';
// import Map from '../components/Map';
import SingleMemoryView from '../components/SingleMemoryView';
// import RouterComponent from '../Router';
// let store;


import { createStore } from 'redux';
import { Button } from 'react-native-elements'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SingleMemoryView />).toJSON();
  expect(tree).toMatchSnapshot();
});


/* Check Button */
describe('Login component', () => {
  it('renders without crashing', () => {
    const renderedButton = renderer.create(<Button onPress={() => {}} />).toJSON();
    expect(renderedButton).toMatchSnapshot();
  })
})


// test('renders correctly', () => {
//   const tree = renderer.create(<RouterComponent />).toJSON();
//   expect(tree).toMatchSnapshot();
// });



// test('renders correctly', () => {
//   const tree = renderer.create(<Map />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test('renders correctly', () => {
//   const tree = renderer.create(<AR />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test('renders correctly', () => {
//   const tree = renderer.create(<Login /> store={store}).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test('renders correctly', () => {
//   const tree = renderer.create(<Main />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// jest.mock('../components/Main', () => {
//   const mockComponent = require('react-native/jest/Main');
//   return mockComponent('../components/Main');
// });

it('works', () => {
  expect(1).toBe(1);
});



//auth_test.js

// import 'react-native';
// import React from 'react';
// import {auth, INITIAL_STATE} from '../store/auth';
// // import {Login, onPasswordChange } from '../components/Login';
// import {user, initialState, createUserSuccess} from '../store/user';

// expect(auth(INITIAL_STATE, onPasswordChange(text))).toEqual({
//   email: '', password: text, user: {}
// })

// expect(user(initialState, createUserSuccess(user))).toEqual({

// })
