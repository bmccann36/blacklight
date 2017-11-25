

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import store, { fetchMemories } from '../store';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';

const extractKey = ({ id }) => id;

class MemoryList extends Component {

  componentWillMount() {
    store.dispatch(fetchMemories());
  }
  handlePress(memory) {
    Actions.singleMemory(memory);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>LIST OF MEMORIES</Text>
        <ScrollView>
          <List>
            {
              this.props.memories.map((memory) => {
                return (<ListItem key={memory.id} title={memory.title}
                  onPress={() => this.handlePress(memory)}
                />);
              })
            }
          </List>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = { fetchMemories };

const mapStateToProps = state => ({
  memories: state.memory,
});

export default connect(mapStateToProps, mapDispatchToProps)(MemoryList);


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
};
