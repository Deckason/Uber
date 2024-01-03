import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { navStore } from '../store/navStore';
import { useNavigation } from '@react-navigation/native';
import FavoriteNavOptions from './FavoriteNavOptions';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const {updateDestination} = navStore()
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.navCardContainer}>
        <Text style={styles.welcomeText}>Welcome, Deckason</Text>
        <View style={styles.cardsgoogleView}>
            <GooglePlacesAutocomplete
                styles={GooglePlacesStyles}
                onPress={(data, details=null)=>{
                    updateDestination({
                        description: data.description, 
                        location: details.geometry.location,
                    })
                    navigation.navigate("RideOptionsCard")
                }}
                placeholder='Where to?'
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
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
            <FavoriteNavOptions />
        </View>
        <View style={styles.ridesAndEatries}>
            <TouchableOpacity style={[styles.bottomIcons, styles.rides]}
                onPress={()=>navigation.navigate("RideOptionsCard")}
            >
                <Icon
                    name='car'
                    type="font-awesome"
                    color={"white"}
                    size={16}
                />
                <Text style={styles.ridesCaption}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bottomIcons, styles.eats]}>
                <Icon
                    name='fast-food-outline'
                    type="ionicon"
                    color={"black"}
                    size={16}
                />
                <Text style={styles.eatsCaption}>Eats</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const GooglePlacesStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        fontSize: 18,
        borderRadius: 0,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})

const styles = StyleSheet.create({
    navCardContainer: {
        height: "100%",
        backgroundColor: "#fff",
    },
    welcomeText: {
        textAlign: "center",
        fontSize: 20,
        paddingVertical: 5,
    },
    cardsgoogleView: {
        borderTopColor: "lightgray",

    },
    ridesAndEatries: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "white",
        borderTopColor: "lightgray",
        marginTop: "auto",
        paddingBottom: 5,
    },
    bottomIcons: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 90,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 50,
    },
    rides: {
        backgroundColor: "black",
    },
    ridesCaption: {
        color: "white",
    },
    eats: {
        backgroundColor: "white",
    },
    eatsCaption: {
        color: "black"
    },
})