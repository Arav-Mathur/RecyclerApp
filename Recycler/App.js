import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import myStack from './navigation/stack'
import SwitchComponent from './screens/searchscreen'
export default function App() {
  //return <myStack/>;
  return <SwitchComponent/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
