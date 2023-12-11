import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Search from "../screens/searchscreen"


const Stack = createNativeStackNavigator();
function myStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}