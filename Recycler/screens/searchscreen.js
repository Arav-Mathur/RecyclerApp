import React, { Component, useState } from 'react';
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
    this.props.onSearchChange(text); // Pass the search value to the parent component
  };
render(){
  let mysearch = ""

    return (
      <View style={styles.view}>
        <SearchBar
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
    margin: 60,
  },
});
