import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './screens/searchscreen'



export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        search: "",
      };
    }
    handleSearchChange = (value) => {
      this.setState({ search: value });
    };
    render(){
      console.log(this.state.search)
    return(
      <View style={styles.container}>
        <Search onSearchChange={this.handleSearchChange} />
        <Text style={{color: '#cfcbc0',fontSize: 30}}> {this.state.search} </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcbc0',
    alignItems: 'left',
    justifyContent: 'top',
  },
});
