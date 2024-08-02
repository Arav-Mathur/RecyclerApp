import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import Search from "./searchscreen";
import { Collapsible } from "@/components/Collapsible";
import Recent from "./recentlySearched";
interface State {
  search: string;
  result: any[];
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      search: "",
      result: [],
    };
  }
  handleSearchChange = (value: any) => {
    this.setState({ search: value }, () => {
      console.log(this.state.result);
      this.handleSearch();
    });
  };
  handleSearch = async () => {
    console.log("Sending request to Flask server...");
    try {
      const response = await fetch("http://192.168.68.87:5000/find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search_val: this.state.search }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Received response from Flask server:", response);
      const data = await response.json();
      console.log("Parsed JSON data:", data);
      this.setState({ result: data.result });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  render() {
    return (
      <>
        <View>
          <SafeAreaView style={styles.searchbar}>
            <Text style={styles.title}>{"Recycler App"}</Text>
            <Search onSearchChange={this.handleSearchChange} />
          </SafeAreaView>
          <Text style={styles.text}>{"You may dispose this at:"}</Text>
          <Text style={styles.text}>
            {this.state.search &&
              (this.state.result.length > 0 ? (
                <View style={{ overflow: "scroll", height: "78%" }}>
                  <FlatList
                    data={this.state.result}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                      const backgroundColor = 
                        item.toLowerCase().includes("recycling") ? "blue"
                        : item.toLowerCase().includes("garbage") ? "gray"
                        : item.toLowerCase().includes("yard") ? "green"
                        : item.toLowerCase().includes("food") ? "lightgreen"
                        : undefined;
                      return (
                        <Text style={[styles.listText,{backgroundColor: backgroundColor}]}>
                          {item}
                        </Text>
                      );
                    }}
                  />
                </View>
              ) : ( "Sorry, no results were found, please navigate to your local website to get more information"
              ))}
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: "10%", width: "100%" }}>
          <Collapsible
            title={<Text style={styles.collapsibleTitle}>Recently Searched</Text>}
            children={<Recent/>}
          ></Collapsible>
        </View>
      </>
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
    fontSize: 30,
    alignContent: "center",
    padding: 10,
    fontFamily: "Georgia",
    margin: 10,
  },
  recentlySearched: {
    color: "black",
    fontSize: 30,
    alignContent: "center",
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
  listText:{
    color: "black",
    fontSize: 25,
    alignContent: "center",
    padding: 10,
    marginBottom: 5,
    fontFamily: "Georgia",
    width: "100%",
  },
  collapsibleTitle:{
    color: "black",
    fontSize: 20,
    alignContent: "center",
    fontFamily: "Georgia",
  },
});
