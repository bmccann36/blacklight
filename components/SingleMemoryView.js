import React from 'react';
import { StyleSheet, Text, ScrollView, View, ImageBackground } from 'react-native';

export default function SingleMemoryView(props) {
  return (
    <ImageBackground
    source={ require('../images/light.jpg') }
    style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    color: '#b20000',
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
    alignSelf:'center',
    textShadowColor:'#000000',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 30,
    padding: 10,
    alignSelf:'center',
    textShadowColor:'#000000',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:8,
  },
});



