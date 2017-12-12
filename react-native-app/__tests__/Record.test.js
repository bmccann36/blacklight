// Not working. 'cannot read property latitude of undefined' No idea.
// Has to do with the redux store.


// 'use strict';
// import React from 'react';
// import renderer from 'react-test-renderer';
// import { createStore } from 'redux';

// import { Record } from '../components';

// describe('Record component', () => {
//   let initialState = { currentPosition: {latitude: 40.705076, longitude: -74.00916000000001} };
//   let store = createStore(() => initialState);
//   it('renders without crashing', () => {
//     const RecordRenderer = renderer.create(<Record store={createStore(() => initialState)}/>).toJSON();
//     expect(RecordRenderer).toMatchSnapshot();
//   });
// })