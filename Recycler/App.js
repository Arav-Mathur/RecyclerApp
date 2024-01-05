import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import myStack from './navigation/stack'
import search from './screens/searchscreen'

export default function App() {
  //return <myStack/>;
  var search1 = new search
  return(
  search1.SwitchComponent())

  render() {
    <View>\
      <Text> {search1} </Text>
    </View>
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
