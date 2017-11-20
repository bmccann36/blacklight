'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import store, { fetchMemories } from '../store';
import { connect } from 'react-redux';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';

import SingleMemoryView from './SingleMemoryView';


class MemoryList extends Component {

  componentWillMount() {
    // console.log('props *********', this.props)
    store.dispatch(fetchMemories());
  }

  static navigationOptions = {
    title: 'Memories',
  };

  render() {
    const { navigate } = this.props.navigation;
    const { memories } = this.props;
    // console.log('********',memories)

    return (
      <View style={styles.container}>
        <Text style={styles.text}>LIST OF MEMORIES</Text>
        <ScrollView>
          <List>
            {
              memories.map((memory, i) => (
                <ListItem
                  key={i}
                  title={memory.title}
                  onPress={() =>
                    navigate('SingleMemoryView', {
                      memoryTitle: memory.title,
                      memoryText: memory.text
                    })
                  }
                />
              ))
            }
          </List>
        </ScrollView>

        {
          // <FlatList style={styles.flatlist}
          //   data={memories}
          //   renderItem={({item}) => <Text style={styles.row}>{item.title}</Text>}
          //   keyExtractor={extractKey}
          //   onPress={() =>
          //     navigate('SingleMemoryView', {
          //       memoryTitle: item.title,
          //       memoryText: item.text
          //     })



          //   }
          // />
        }

      </View>
    );
  }
}

const mapDispatchToProps = { fetchMemories };

const mapStateToProps = (state) => ({
  memories: state.memories
});

export default connect(mapStateToProps, mapDispatchToProps)(MemoryList);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',
    justifyContent: 'center',
    justifyContent: 'center'
  },
  // flatlist: {
  //   marginTop: 20,
  //   flex: 1
  // },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10
  },
  // row: {
  //   padding: 15,
  //   margin: 5,
  //   backgroundColor: 'skyblue'
  // }
});
