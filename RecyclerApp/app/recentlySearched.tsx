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
          <Text key={index}> {item}</Text>
        ))}
      </View>
    );
  }
}
