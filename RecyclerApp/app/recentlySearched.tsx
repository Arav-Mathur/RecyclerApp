import React, { Component } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Search from "./searchscreen";
import { Collapsible } from "@/components/Collapsible";
interface State {
  search: string;
  recent: any[];
}

export default class Recent extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      search: "",
      recent: ["1", "2", "3"],
    };
  }
  render(): React.ReactNode {
    return (
      <View>
        {this.state.recent.map((item, index) => (
          <Text style = {styles.text}key={index}> {item}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 30,
    justifyContent: "center",
    paddingBottom: 10,
    fontFamily: "Georgia",
  },

  text: {
    color: "black",
    fontSize: 25,
    alignContent: "center",
    padding: 5,
    fontFamily: "Georgia",
  },

  container: {
    flex: 1,
    backgroundColor: "rgba(207, 203, 192, 0.5)",
  },
  searchbar: {
    height: 190,
    backgroundColor: "rgb(207,203,192)",
    alignItems: "center",
    justifyContent: "center",
  },
});
