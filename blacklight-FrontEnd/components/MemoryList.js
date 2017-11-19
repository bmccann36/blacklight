import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import store, { fetchMemories } from '../store';
import { connect } from 'react-redux';
import axios from 'axios';



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
    // console.log('********',this.props)

    return (
      <View style={styles.container}>
        <Text style={styles.text}>LIST OF MEMORIES</Text>

        <FlatList style={styles.flatlist}
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
  memories: state.memory  // changed from memories, non plural is convention rest of component stays the same -brian
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
    textAlign: 'center',
    marginTop: 40
  },
  row: {
    padding: 15,
    margin: 5,
    backgroundColor: 'skyblue'
  }
});
