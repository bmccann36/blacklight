import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import store, { fetchMemories } from './store';
import { connect } from 'react-redux';
import axios from 'axios';


// example list
// const list = [
//   { id: 0,name: 'John is dead' },
//   { id: 1, name: 'Bruce is also dead' },
//   { id: 2, name: 'Brian is still alive' },
//   { id: 3, name: 'Matt is .....' },
//   { id: 4, name: 'David ... who knows' },
//   { id: 5, name: 'Jane is gone' },
//   { id: 6, name: 'Molly left' },
// ];

const extractKey = ({id}) => id;

class MemoryList extends Component {

  componentWillMount() {
    // console.log('props *********', this.props)
    store.dispatch(fetchMemories());
  }

  static navigationOptions = {
    title: 'Memories',
  };

  render() {

    const { memories } = this.props;
    console.log('********',this.props)

    return (
      <View style={styles.container}>
        <Text style={styles.text}>LIST OF MEMORIES</Text>

        <FlatList style={styles.flatlist}
          // data={list}
          data={memories}
          renderItem={({item}) => <Text style={styles.row}>{item.title}</Text>}
          keyExtractor={extractKey}

        />

      </View>
    );
  }
}

const mapDispatchToProps = {fetchMemories};

const mapStateToProps = (state) => ({
  memories: state.memories
});

export default connect(mapStateToProps, mapDispatchToProps)(MemoryList);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',
    justifyContent: 'center'
  },
  flatlist: {
    marginTop: 20,
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center'
  },
  row: {
    padding: 15,
    margin: 5,
    backgroundColor: 'skyblue'
  }
});
