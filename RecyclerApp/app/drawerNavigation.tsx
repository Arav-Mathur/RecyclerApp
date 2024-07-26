import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import About from "../app/about";
import App from "../app/app";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={App} />
        <Drawer.Screen name="About Us" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
