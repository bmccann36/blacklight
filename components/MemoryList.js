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
        <ScrollView>
          <List containerStyle={styles.containerStyle}>
            {
              this.props.memories.map((memory) => {
                return (<ListItem
                  containerStyle={styles.listItem}
                  titleStyle={styles.text}
                  key={memory.id}
                  title={memory.title}
                  chevronColor="#595a5b"
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
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: '#000000',
    marginBottom: 25,
  },
  containerStyle:{
    borderTopColor: "#1c1c1c",
    borderBottomColor: "#1c1c1c",
    backgroundColor: '#000000',
    paddingTop: 30
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  listItem: {
    backgroundColor: '#000000',
    borderBottomWidth: 0,
    borderTopWidth: 0,
  }
};
