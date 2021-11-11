import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Login = () => {
  const [press, setPress] = useState(true);
  return (
    <SafeAreaView style={Style.box}>
      <StatusBar backgroundColor="#ACA3A3" />
      <Text style={Style.login}>LOGIN</Text>

      <View style={Style.boxusername}>
        <TextInput placeholder="Username" style={Style.username} />
        <View style={{ position: "relative" }}>
          <TextInput
            placeholder="Password"
            secureTextEntry={press}
            style={Style.password}
          />
          <TouchableOpacity
            onPress={() => setPress(!press)}
            style={Style.boxmata}
          >
            <Image
              source={
                press
                  ? require("./asset/matatutup.png")
                  : require("./asset/matabuka.png")
              }
              style={Style.iconmata}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Style.boxlogin}>
          <Text style={Style.logintext}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const Style = StyleSheet.create({
  logintext: { fontSize: 29, color: "white", textAlign: "center" },
  boxlogin: {
    height: 51,
    backgroundColor: "#012E41",
    justifyContent: "center",
    marginHorizontal: 25,
    borderRadius: 15,
    marginTop: 70,
  },
  iconmata: {
    tintColor: "#6C6969",
    width: 29,
    height: 26,
  },
  boxmata: {
    position: "absolute",
    position: "absolute",
    top: 14,
    right: 40,
  },
  password: {
    paddingLeft: 15,
    paddingRight: 60,
    fontSize: 18,
    height: 51,
    backgroundColor: "white",
    marginHorizontal: 25,
    borderRadius: 15,
  },

  boxusername: { top: 220 },

  username: {
    paddingHorizontal: 15,
    fontSize: 18,
    height: 51,
    backgroundColor: "white",
    marginHorizontal: 25,
    borderRadius: 15,
    marginBottom: 25,
  },
  login: { fontSize: 38, alignSelf: "center", top: 175 },

  box: { flex: 1, backgroundColor: "#E1E4E8" },
});
