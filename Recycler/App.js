import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
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
      <ImageBackground
        source={require('./assets/image1.png')} style={styles.background}>
      <View style={styles.container}>
        <Search onSearchChange={this.handleSearchChange} />
        <Text style={{color: 'black',fontSize: 30}}> {this.state.search} </Text>
      </View>
            </ImageBackground>

    );
  };
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' based on your preference
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(207, 203, 192, 0.5)', // Adjust the background color or use 'transparent'
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20, // Adjust the padding as needed
  },
});