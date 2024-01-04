import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { navStore } from '../store/navStore'

const data = [
  {
    id: "uber-X-1",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "uber-X-2",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "uber-X-3",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  },
]

  const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
  const [selected, setSelected] = useState(null)
  const navigation = useNavigation()
  const {travelTimeInformation, destination} = navStore()
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <TouchableOpacity style={styles.backArrow}
        onPress={()=>navigation.navigate("NavigateCard")}
      >
        <Icon 
          name='chevron-left'
          type='font-awesome'
          size={20}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item: {id, title, multiplier, image}, item})=>(
          <TouchableOpacity style={[styles.rideDetails, 
            id == selected?.id && {backgroundColor: "lightgray"}
          ]}
            onPress={()=>setSelected(item)}
          >
            <Image
              style={styles.rideImages}
              source={{
                uri: image
              }}
            />
            <View>
              <Text style={{fontWeight: "700"}}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={{fontWeight: "bold"}}>
              {(destination && travelTimeInformation) && new Intl.NumberFormat('en-NG', {
                style: 'currency',
                currency: 'NGN'
              }).format((travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier)*1.5)}

            </Text>
          </TouchableOpacity>
        )}  
      />
      <TouchableOpacity
        disabled={!selected}
        style={[styles.chooseRide, 
          selected?{backgroundColor: "#000",}:{backgroundColor: "lightgray",}]}
        >
        <Text style={{color: "#fff", textAlign: "center"}}>Choose: {selected?.title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    paddingBottom: 5,
    flex: 1,
  },
  backArrow: {
    position: "absolute",
    top: 10,
    left: 15,
    padding: 10,
    zIndex: 1
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 10,
  },
  rideDetails: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rideImages: {
    width: 70,
    height: 70,
    resizeMode: "contain"
  },
  chooseRide: { 
    padding: 15, 
    marginHorizontal: 5,
}
})