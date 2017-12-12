'use strict';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App component', () => {

  const appRenderer = renderer.create(<App />);
  
  it('renders AppLoading component initially', () => {
    expect(appRenderer.toJSON()).toMatchSnapshot();
  });
  
  it('renders Login component after asset loading completes', () => {
    appRenderer.getInstance()._handleFinishLoading();
    expect(appRenderer.toJSON()).toMatchSnapshot();
  });

});