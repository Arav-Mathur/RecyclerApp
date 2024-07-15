import React, { Component} from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView } from 'react-native';
import Search from './screens/searchscreen'
 export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        search: "",
        result: []
      };}
  handleSearchChange = (value) => {
    this.setState({ search: value }, () => {
      console.log(this.state.result);
      this.handleSearch();
    });};
  handleSearch = async () => {
    console.log('Sending request to Flask server...');
    const response = await fetch('http://10.210.1.129:5000/find', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ search_val: this.state.search }),
    });
    console.log('Received response from Flask server:', response);
    const data = await response.json();
    console.log('Parsed JSON data:', data);
    this.setState({ result: data.result });
  };
  render(){
    return(
      <View>
        <SafeAreaView style={styles.searchbar} >
          <Text style={styles.title}>{"Recycler App"}</Text>
          <Search onSearchChange={this.handleSearchChange}/>
        </SafeAreaView>
        <Text style={styles.text}>{"You may dispose this at:"}</Text>
        <Text style={styles.text}>{this.state.search && (this.state.result.length>0? this.state.result.join(', '):"Sorry, no results were found, please navigate to your local website to get more information")}</Text>
        <Text style={styles.description}>Recycler App: This project is all about making recycling easy for everyone in our community. The Recycler App is like a friendly guide, helping you find the best ways to recycle different things. It's simple to use and gives you practical tips on how to be kind to the environment. Let's all work together for a cleaner and more eco-friendly future, one recyclable at a time!</Text>
        <View style={styles.img}>
          <Image source={require('./assets/image1.png')}style={styles.img}/>
        </View> 
      </View>
    );};
  }

const styles = StyleSheet.create({
  title:{
    color: 'black',
    fontSize: 30,
    justifyContent:"center",
    paddingBottom:10,
    fontFamily:"Georgia"
  },
  img:{
    marginTop:0,
    resizeMode:"stretch",
    height:270
  },
  text:{
    color: 'black',
    fontSize: 30,
    alignContent:"center",
    padding:10,
    fontFamily:'Georgia',
  },
  description:{
    fontSize:15,
    padding:20,
    fontFamily:'Georgia',
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