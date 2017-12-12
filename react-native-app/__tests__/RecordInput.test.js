'use strict';
import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';

import { RecordInput } from '../components';

describe('RecordInput component', () => {
  let store = createStore( () => ({}) );
  it('renders without crashing', () => {
    const RecordInputRenderer = renderer.create(<RecordInput store={store}/>).toJSON();
    expect(RecordInputRenderer).toMatchSnapshot();
  });
})