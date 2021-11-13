import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
  
        <Button
          color="red"
          title="Go to Profile"
          onPress={() => navigation.navigate('Profiles')}
        />
  
      </View>
    )
}

const styles = StyleSheet.create({})
