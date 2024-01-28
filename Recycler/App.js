import React, { Component, useState,Linking } from 'react';
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
      this.setState({ search: value }, () => {
        console.log(this.state.result);
        this.handleSearch();
      });
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
      <Text style={{color: 'black',fontSize: 30,justifyContent:"center",paddingBottom:10}}>{"Recycler App"}</Text>
      <Search onSearchChange={this.handleSearchChange} />
      </SafeAreaView>
      <Text style={styles.text}>{"You may dispose this at:"}</Text>
      <Text style={styles.text}>{this.state.result ? this.state.result.join(', '):
      "Sorry, no results were found, please navigate to your local website to get more information"}</Text>
      <Text style={styles.description}>Recycler App: This project aims to enhance community awareness and engagement in responsible waste management practices. The mobile application provides a user-friendly platform for residents to easily access information on proper disposal and recycling methods for various materials. The project's core idea revolves around fostering a cleaner and more environmentally conscious community by empowering individuals with practical knowledge on waste management.</Text>
      <View style={styles.img}>
        <Image source={require('./assets/image1.png')}style={styles.img}/>
        </View> 
      </View>
    );
  };
}
const styles = StyleSheet.create({
  img:{
    marginTop:0,
    resizeMode:"stretch",
    height:270
  },
  text:{
    color: 'black',fontSize: 30,alignContent:"center",padding:10
  },
  description:{
    fontSize:15,
    padding:20
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