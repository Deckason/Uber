import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();

export default function App() {
  return (<>
      <StatusBar 
        style='light'
        barStyle="light-content"
        translucent={false}
      />
      <NavigationContainer >
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
  
});
