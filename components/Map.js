import { StyleSheet, Text, View } from 'react-native'
import React, {useRef, useEffect}from 'react'
import MapView, {Marker} from 'react-native-maps';
import { navStore } from '../store/navStore';
import MapViewDirections from "react-native-maps-directions"

const Map = () => {
    const {origin, destination, travelTimeInformation, updateTravelTimeInformation} = navStore()
    const mapRef = useRef(null)

    useEffect(()=>{
        if(!origin || !destination) return

        // Zoom and fit to screen
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: {top: 50, right: 50, bottom: 50, left: 50}
        })
    }, [origin, destination])

    useEffect(()=>{
        if(!origin || !destination) return

        const getTravelTime = async()=>{
            try {
                const res = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
                                        units=imperial&origins=${origin.description}&destinations=${
                                        destination.description}&key=${process.env.GOOGLE_MAP_API_KEY}`)
                const data = await res.json()
                updateTravelTimeInformation(data.rows[0].elements[0])
            } catch (error) {
                console.log("Erro", error.message)
            }
        }

        getTravelTime()
    }, [origin, destination, process.env.GOOGLE_MAP_API_KEY])

  return (
        <View style={styles.container}>
             <MapView
                ref={mapRef}
                style={styles.map}
                mapType="mutedStandard"
                initialRegion={{
                    latitude: origin?.location.lat, 
                    longitude: origin?.location.lng, 
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                {origin && destination && <MapViewDirections 
                    origin={origin.description}
                    destination={destination.description}
                    apikey={process.env.GOOGLE_MAP_API_KEY}
                    strokeWidth={3}
                    strokeColor='black'
                    
                />}
                {origin && <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    identifier='origin'
                    title='Origin'
                    description={origin.description}
                />}
                {destination && <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    identifier='destination'
                    title='Destination'
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