import React, { Component } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

interface State {
    search: string;
}
interface Props {
    onSearchChange: (search: string) => void;
}
export default class Search extends Component <Props,State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  handleSearchChange = (text:string) => {
    this.setState({ search: text });
    this.props.onSearchChange(text);
  };
  render(){
    return (
      <View style={styles.view}>
        <SearchBar  
          platform="default"
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={{ color: "#000" }}
          placeholder="Type Here..."
          placeholderTextColor={ "#000000"}
          onChangeText={this.handleSearchChange} 
          value={this.state.search} 
          //showCancel
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
  },
  containerStyle:{
    width: 400,
    backgroundColor: "#9cb43f",
    borderWidth: 5,
    borderColor: "#9cb43f",
    borderRadius: 20, 
  },
  inputContainerStyle:{
    width: 380,
    backgroundColor: "#9cb43f",
    borderRadius: 20, 
  },
});