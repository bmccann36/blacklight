'use strict';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App component', () => {

  const AppComponent = renderer.create(<App />);
  
  it('renders AppLoading component initially', () => {
    expect(AppComponent.toJSON()).toMatchSnapshot();
  });
  
  it('renders Login component after asset loading completes', () => {
    AppComponent.getInstance()._handleFinishLoading();
    expect(AppComponent.toJSON()).toMatchSnapshot();
  });

})