import React, { Component, useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet,ImageBackground } from 'react-native';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  handleSearchChange = (text) => {
    this.setState({ search: text });
    this.props.onSearchChange(text); // Pass the search value to the parent component
  };
render(){
  let mysearch = ""

    return (
      <View style={styles.view}>
        <SearchBar  
        platform="default"
          containerStyle={{
            width: 400,
            backgroundColor: "#9cb43f",
            borderWidth: 5,
            borderColor: "#9cb43f",
            borderRadius: 20, // Adjust the value to make it round
          }}
          inputContainerStyle={{
            width: 380,
            backgroundColor: "#9cb43f",
            borderRadius: 20, // Adjust the value to make it round
          }}
          inputStyle={{ color: "#000" }}
        placeholder="Type Here..."
        placeholderTextColor={ "#000000"}
        onChangeText={this.handleSearchChange} 
        value={this.state.search} 
        showCancel
        iconConfig={{
          color: "#000", // Set the color of the search icon
          cancelIconColor: "#000", // Set the color of the cancel icon
        }}
      
        
        />
      </View>
      
    );
    }
  };

const styles = StyleSheet.create({
  view: {
    marginLeft: 0,
    marginTop: 0,
    marginBottom:10
  },
  searchBar: {
fontSize: 50
  }
});






/*
    <SearchBar
      platform="default"
      containerStyle={{}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      lightTheme
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="Type query here..."
      placeholderTextColor="#888"
      round
      showCancel
      cancelButtonTitle="Cancel"
      cancelButtonProps={{ size: 5 }}
      onCancel={() => console.log(onCancel())}
      value={value}
    />
  */
