import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Login12 from './login';
import Home12 from './home';

const Stack = createNativeStackNavigator()

export default function Index1() {
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Home12" >
          <Stack.Screen name='Login' component={Login12} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home12} options={{ headerTitle: 'Daftar Barang' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}