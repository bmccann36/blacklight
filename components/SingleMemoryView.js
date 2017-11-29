
import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default function SingleMemoryView(props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.title}>{props.text}</Text>
    </ScrollView>
  );
}
