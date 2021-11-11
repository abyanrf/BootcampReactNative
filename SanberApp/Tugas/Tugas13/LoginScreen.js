import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  const [press, setPress] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E1E4E8" }}>
      <StatusBar backgroundColor="#ACA3A3" />
      <Text style={{ fontSize: 38, alignSelf: "center", top: 175 }}>LOGIN</Text>

      <View style={{ top: 220 }}>
        <TextInput
          placeholder="Username"
          style={{
            paddingHorizontal: 15,
            fontSize: 18,
            height: 51,
            backgroundColor: "white",
            marginHorizontal: 25,
            borderRadius: 15,
            marginBottom: 25,
          }}
        />
        <View style={{ position: "relative" }}>
          <TextInput
            placeholder="Username"
            secureTextEntry={press}
            style={{
              paddingLeft: 15,
              paddingRight: 60,
              fontSize: 18,
              height: 51,
              backgroundColor: "white",
              marginHorizontal: 25,
              borderRadius: 15,
            }}
          />
          <TouchableOpacity
            onPress={() => setPress(!press)}
            style={{
              position: "absolute",
              position: "absolute",
              top: 14,
              right: 40,
            }}
          >
            <Image
              source={
                press
                  ? require("./asset/matatutup.png")
                  : require("./asset/matabuka.png")
              }
              style={{
                tintColor: "#6C6969",
                width: 29,
                height: 26,
              }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            height: 51,
            backgroundColor: "#012E41",
            justifyContent: "center",
            marginHorizontal: 25,
            borderRadius: 15,
            marginTop: 70,
          }}
        >
          <Text style={{ fontSize: 29, color: "white", textAlign: "center" }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
