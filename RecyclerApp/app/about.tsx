import React, { Component } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default class About extends Component {
  render() {
    return (
      <View>
        <Text style={styles.description}>
          Recycler App: This project is all about making recycling easy for
          everyone in our community. The Recycler App is like a friendly guide,
          helping you find the best ways to recycle different things. It's
          simple to use and gives you practical tips on how to be kind to the
          environment. Let's all work together for a cleaner and more
          eco-friendly future, one recyclable at a time!
        </Text>
        <View style={styles.img}>
          <Image
            source={require("../assets/images/earth.png")}
            style={styles.img}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    marginTop: 0,
    resizeMode: "stretch",
    height: 270,
  },
  description: {
    fontSize: 15,
    padding: 20,
    fontFamily: "Georgia",
  },
});
