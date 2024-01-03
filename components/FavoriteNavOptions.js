import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const data = [
    {
        id: 1,
        icon: "home",
        location: "Home",
        destination: "Code Street, London, Uk"
    },
    {
        id: 2,
        icon: "briefcase",
        location: "work",
        destination: "London Eye, London, Uk"
    },
]

const FavoriteNavOptions = () => {
  return (
    <FlatList
        style={{marginTop: 5}}
        data={data}
        keyExtractor={(item)=>item.id}
        ItemSeparatorComponent={()=><View style={{backgroundColor: "lightgray", height: 0.5}} />}
        renderItem={({item: {icon, location, destination}})=>(
           <TouchableOpacity style={styles.container}>
            <Icon
                style={styles.icon}
                name={icon}
                type="ionicon"
                color={"white"}
                size={18}
            />
            <View>
                <Text style={{fontWeight: "bold"}}>{location}</Text>
                <Text>{destination}</Text>
            </View>
           </TouchableOpacity>
        )}
    />
  )
}

export default FavoriteNavOptions

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 10,
    },
    icon: {
        backgroundColor: "lightgray",
        padding: 10,
        borderRadius: 20
    }
})