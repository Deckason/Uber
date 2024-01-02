import React, { useEffect } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { navStore } from '../store/navStore';

const HomeScreen = () => {
  const {updateOrigin, updateDestination} = navStore()
  return (
    <SafeAreaView>
      <View >
        <Image
            style={styles.logo}
            source={{
                uri: "https://links.papareact.com/gzs"
            }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            }
          }}
          placeholder='Where From?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            updateOrigin({
              description: data.description, 
              location: details.geometry.location,
            });
            updateDestination(null)
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: process.env.GOOGLE_MAP_API_KEY,
            language: 'en', // language of the results
            // types: '(cities)' // default: 'geocode'
          }}
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  logo: {
      resizeMode: "contain",
      height: 100,
      width: 100,
      marginLeft: 10,
}
})