import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation()
  const Stack = createStackNavigator()

  return (
    <View style={{flex: 1}}>
      <View style={styles.containers}>
        <TouchableOpacity
          style={styles.menue}
          onPress={()=>navigation.navigate("HomeScreen")}
        >
          <Icon
            name='menu'
          />
        </TouchableOpacity>
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
  menue: {
    position: "absolute",
    padding: 5,
    backgroundColor: "white",
    zIndex: 2,
    opacity: 0.7,
    borderRadius: 10,
    top: 15,
    left: 15,

  }
})