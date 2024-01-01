import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: 1,
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: 2,
        title: "Order Food",
        image: "https://links.papareact.com/28W",
        screen: "EatScreen"
    },
]
// AIzaSyD4sTOeedKhaFdWI78Zmvti8D-3UtG5F8Q

const NavOptions = () => {
    const navigation = useNavigation()
  return (
    <FlatList 
        data={data}
        keyExtractor={(item)=>item.id}
        horizontal
        renderItem={({item})=>(
            <TouchableOpacity style={styles.navContainer}
                onPress={()=>navigation.navigate(item.screen)}
            >
                <View style={styles.navView}>
                    <Image
                        style={styles.navImage}
                        source={{
                            uri: item.image
                        }}
                    />
                    <Text style={styles.navText}>{item.title}</Text>

                    <Ionicons 
                    style={styles.arrowIcon}
                       name="arrow-forward" 
                       color="#4F8EF7" 
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: "lightgray",
        padding: 10,
        marginHorizontal: 15,
    },
    navView: {
        gap: 5,
        
    },
    navImage: {
        width: 120,
        height: 120,
        resizeMode: "contain"
    },
    navText: {
        marginLeft: 5,
        fontWeight: "700",
    },
    arrowIcon: {
        marginLeft: 5,
        fontSize: 30,
        padding: 5,
        borderRadius: 50,
        color: "#fff",
        backgroundColor: "#000",
        alignSelf: "flex-start"
    },
})