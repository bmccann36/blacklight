'use strict';
import React from 'react';
import renderer from 'react-test-renderer';
import { Button, Text } from 'react-native-elements';

import App from '../App';
import { Login } from '../components';

// NOTE: I'm still figuring out what the difference is between using
//   appRenderer vs appRenderer.getInstance() vs appInstance...

describe('App component', () => {

  const appRenderer = renderer.create(<App />);
  const appInstance = appRenderer.root;
  
  it('renders AppLoading component initially', () => {
    expect(appRenderer.toJSON()).toMatchSnapshot();
  });
  
  it('renders Login component after asset loading completes', () => {
    // this calls _handleFinishLoading() on the root instance of App component.
    appRenderer.getInstance()._handleFinishLoading();

    // appRenderer should now have rendered the Login component
    expect(appRenderer.toJSON()).toMatchSnapshot();

    // appInstance is the Login component now. The Login component should have 3 buttons inside it.
    expect(appInstance.findAllByType(Button).length).toEqual(3);

  });

});