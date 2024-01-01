import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View >
        <Image
            style={styles.logo}
            source={{
                uri: "https://links.papareact.com/gzs"
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