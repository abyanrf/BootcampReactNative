import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import LoginScreen from '../pages/login'
import About from '../pages/login'
import Home from '../pages/home';
import Project from '../pages/project';
import SkillProject from '../pages/skillProject';
import Setting from '../pages/setting';
import AddScreen from '../pages/AddScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawwer = createDrawerNavigator();

const Router = () => {
    return (
        <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Router

const styles = StyleSheet.create({})
