import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {

  const Stack = createStackNavigator()

  return (
    <View style={{flex: 1}}>
      <View style={styles.containers}>
        <Map />
      </View>
      <View style={styles.containers}>
        <Stack.Navigator>
          <Stack.Screen name='NavigateCard' component={NavigateCard} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name='RideOptionsCard' component={RideOptionsCard} 
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  containers: {
    height: "50%",
  },
})