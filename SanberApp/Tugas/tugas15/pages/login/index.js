import React from 'react'
import { StyleSheet, Text, View ,StatusBar} from 'react-native'

const LoginScreen = () => {
    return (
        <View>
            <StatusBar/>
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
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
