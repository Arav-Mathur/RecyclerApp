import React, { Component, useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

export default class Search extends Component {
  constructor() {

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };
    return (
      <View style={styles.view}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />
      </View>
    );

  };

}
const styles = StyleSheet.create({
  view: {
    margin: 60,
  },
});
