handlePress2() {
  AlertIOS.alert(
    'Push Notification Received',
    'Alert message: ',
    [{
      text: 'moving on', // NOTE button needs to be in an array to work
      onPress: () => Actions.addMemMap(),
    }],
  );
}
