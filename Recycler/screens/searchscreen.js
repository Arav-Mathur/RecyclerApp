import React, { Component } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  handleSearchChange = (text) => {
    this.setState({ search: text });
    this.props.onSearchChange(text);
  };
  render(){
    return (
      <View style={styles.view}>
        <SearchBar  
          platform="default"
          containerStyle={{
            width: 400,
            backgroundColor: "#9cb43f",
            borderWidth: 5,
            borderColor: "#9cb43f",
            borderRadius: 20, 
          }}
          inputContainerStyle={{
            width: 380,
            backgroundColor: "#9cb43f",
            borderRadius: 20, 
          }}
          inputStyle={{ color: "#000" }}
          placeholder="Type Here..."
          placeholderTextColor={ "#000000"}
          onChangeText={this.handleSearchChange} 
          value={this.state.search} 
          showCancel
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