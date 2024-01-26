import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image,SafeAreaView } from 'react-native';
import Search from './screens/searchscreen'
 


export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        search: "",
        result: []
      };
    }
    handleSearchChange = (value) => {
      console.log(this.state.result)
      this.handleSearch()
    };
    handleSearch = async () => {
      try {
        console.log('Sending request to Flask server...');
          const response = await fetch('http://192.168.68.59:5000/find', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ search_val: this.state.search }),
          });
          console.log('Received response from Flask server:', response);
          const data = await response.json();
          console.log('Parsed JSON data:', data);
          this.setState({ result: data.result });
      } catch (error) {
          console.error('Error:', error);
      }
  };
    render(){
      
    return(
     <View>
      <SafeAreaView style={styles.searchbar} >
      <Search onSearchChange={this.handleSearchChange} />
      </SafeAreaView>
      <Text style={{color: 'black',fontSize: 30}}>{ JSON.stringify(this.state.result) }</Text>
      <View style={styles.img}>
        <Image source={require('./assets/image1.png')}style={styles.img}/>
        </View> 
      </View>
    );
  };
}
const styles = StyleSheet.create({
  img:{
    marginTop:140,
    resizeMode:"stretch",
    height:400
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(207, 203, 192, 0.5)',
  },
  searchbar:{
    height:190,
    backgroundColor: 'rgb(207,203,192)',
    alignItems: 'center',
    justifyContent:"center"
  },
});



//<ImageBackground
//source={require('./assets/image1.png')} style={styles.background}>