import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (<>
      <StatusBar 
        style='light'
        barStyle="light-content"
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </SafeAreaView>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
