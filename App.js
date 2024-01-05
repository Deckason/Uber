import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';


export default function App() {
  const Stack = createStackNavigator();

  return (<>
      <StatusBar 
        style='light'
        barStyle="light-content"
        translucent={false}
      />
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === "ios" ? 'padding' : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100: 0}
            >
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
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
  </>);
}

const styles = StyleSheet.create({});
