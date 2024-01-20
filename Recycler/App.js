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
      <View >
        <Search onSearchChange={this.handleSearchChange} />
        <Text style={{color: '#fff',}}> {this.state.search} </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'top',
  },
});
