'use strict';
import React from 'react';
import renderer from 'react-test-renderer';

import { SingleMemoryView } from '../components';

describe('SingleMemoryView component', () => {

  const SingleMemoryViewRenderer = renderer.create(<SingleMemoryView />);
  
  it('renders SingleMemoryView', () => {
    expect(SingleMemoryViewRenderer.toJSON()).toMatchSnapshot();
  });

});