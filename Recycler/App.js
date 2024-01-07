import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './screens/searchscreen'



export default function App() {
  //return <myStack/>
  render(); {
    return(
      <View>
        <Search />
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
