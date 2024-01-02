import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps';
import { navStore } from '../store/navStore';

const Map = () => {
    const {origin} = navStore()
    
  return (
        <View style={styles.container}>
             <MapView
                style={styles.map}
                mapType="mutedStandard"
                initialRegion={{
                    latitude: origin?.location.lat, 
                    longitude: origin?.location.lng, 
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                {origin && <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    identifier='Your Location'
                    title='Origin'
                    description={origin.description}
                />}
            </MapView>
        </View>
  )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    }
})