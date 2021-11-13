import React from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";

const LoginScreen = ({navigation}) => {
  return (
    <View  style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar />
      <Text style={{marginBottom:15,fontSize:20}}>Login</Text>
      <Button
        title ='menuju Home'
          onPress={() => navigation.navigate("MyDrawwer",{
              screen : 'App',params:{
                  screen: 'About'
              }
          })}
        />
        
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});


