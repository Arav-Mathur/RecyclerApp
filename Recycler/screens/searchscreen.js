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
          containerStyle={{
            width: 390,
            backgroundColor: "#9cb43f",
            borderWidth: 5,
            borderColor: "#9cb43f",
          }}
          inputContainerStyle={{
            widthy: 300,
            backgroundColor: "#9cb43f",
          }}
          inputStyle={{ backgroundColor: "#9cb43f" }}
        placeholder="Type Here..."
        onChangeText={this.handleSearchChange} 
        value={this.state.search} 
        />
      </View>
      
    );
    }
  };

const styles = StyleSheet.create({
  view: {
    marginLeft: 1,
    marginTop: 60,
    marginBottom:60
  },
  searchBar: {
fontSize: 50

  }
});




