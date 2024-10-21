import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuScreen from './Menu/MenuScreen';
import StudentsScreen from './StudentsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <MenuScreen></MenuScreen>
      <StudentsScreen></StudentsScreen>
    </View>
  );
}

const navigator=createStackNavigator({
  // Main:MainScreen,
  // Test:TestScreen,
  // Exercise:ExerciseScreen,
  // Button:ButtonScreen,
  Menu:MenuScreen
},{
initialRouteName:'Menu',
defaultNavigationOptions:{
  title:'App'}
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});