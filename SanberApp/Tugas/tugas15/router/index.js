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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MainApp" component={MainApp} />
          <Stack.Screen name="MyDrawwer" component={MyDrawwer} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const MainApp = ()=>(
    <Tab.Navigator screenOptions={{ headerShown: false }}>
       <Tab.Screen name="About" component={About} />
       <Tab.Screen name="SkillProject" component={SkillProject} />
    </Tab.Navigator>
)

const MyDrawwer= () =>(
    <Drawwer.Navigator >
        <Drawwer.Screen name="App" component={MainApp}/>
        <Drawwer.Screen name="Home" component={Home}/>
        <Drawwer.Screen name="Setting" component={Setting}/>
        
    </Drawwer.Navigator>
)
export default Router

const styles = StyleSheet.create({})
