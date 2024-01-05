import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import myStack from './navigation/stack'
import Search from './screens/searchscreen'



export default function App() {
  //return <myStack/>
  var search1 = new(Search);
  search1.SwitchComponent()
  render(); {
    return(
      <View>
        <Text> {search1.state.search} </Text>
      </View>
    );
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
