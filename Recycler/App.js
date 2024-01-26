import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
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
     <View>
      <View style={styles.container}>
      <Search onSearchChange={this.handleSearchChange} />
        <Text style={{color: 'black',fontSize: 30}}> {this.state.search} </Text>
      </View>
      <View>
         <Image source={require('./assets/image1.png')} style={styles.background}  />
      </View>
      </View>
    );
  };
}
const styles = StyleSheet.create({
  background: {
  marginTop: 438.6,
    width: 732, 
    height: 434,
   resizeMode:"stretch",
   alignItems: "center",
   justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(207, 203, 192, 0.5)', // Adjust the background color or use 'transparent'
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20, // Adjust the padding as needed
  //  marginTop: 100
  },
});



//<ImageBackground
//source={require('./assets/image1.png')} style={styles.background}>