import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import { useEffect } from 'react';
// import { GOOGLE_MAP_API_KEY } from "@env";


export default function App() {
  const Stack = createStackNavigator();

  return (<>
      <StatusBar 
        style='light'
        barStyle="light-content"
        translucent={false}
      />
      <NavigationContainer style={styles.appContainer}>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} 
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MapScreen" component={MapScreen} 
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
  </>);
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#fff"
  }
});
