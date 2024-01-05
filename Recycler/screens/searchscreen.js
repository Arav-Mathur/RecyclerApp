import React, { Component } from 'react';
import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

export default class  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {},
    };
  }

 SwitchComponent = () => {
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

this.setState({search: {search}});

}
const styles = StyleSheet.create({
  view: {
    margin: 60,
  },
});
