import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

const AboutMe = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#012E41" }}>
      <StatusBar />
      <Text
        style={{
          color: "white",
          fontSize: 30,
          alignSelf: "center",
          marginTop: 25,
        }}
      >
        About Me
      </Text>
      <TouchableOpacity style={{ position: "absolute", top: 30, left: 13 }}>
        <Image source={require("./asset/back.png")} />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 100,
          flex: 1,
          backgroundColor: "#E1E4E8",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: "relative",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 145,
            height: 145,
            backgroundColor: "white",
            borderRadius: 145 / 2,
            justifyContent: "center",
            position: "absolute",
            top: -66,
          }}
        >
          <Image
            source={require("./asset/poto.jpg")}
            style={{
              width: 135,
              height: 135,
              borderRadius: 135 / 2,
              alignSelf: "center",
            }}
          />
        </View>
        <Text style={{ fontSize: 35, fontWeight: "bold", marginTop: 80 }}>
          Abyan Rafi
        </Text>
        <Text style={{ marginTop: 9, fontSize: 18, opacity: 0.4 }}>
          React Native Developer
        </Text>
        <View
          style={{
            borderBottomWidth: 2,
            width: 330,
            opacity: 0.2,
            marginVertical: 18,
          }}
        />
        <View
          style={{
            width: 352,
            height: 135,
            backgroundColor: "white",
            borderRadius: 21,
            padding: 10,
            marginBottom: 20,
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 28 }}>Portofolio</Text>
          <View
            style={{
              borderBottomWidth: 1.5,
              width: 150,
              opacity: 0.2,
              marginTop: 2,
            }}
          />
          <Text style={{ color: "#6A6262", marginBottom: 5, marginTop: 3 }}>
            see my work here
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("./asset/Group.png")}
              style={{ marginHorizontal: 10, marginTop: 2 }}
            />
            <Text style={{ fontSize: 17 }}>@abyanrf</Text>
          </View>
        </View>

        <View
          style={{
            width: 352,
            height: 225,
            backgroundColor: "white",
            borderRadius: 21,
            padding: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 28 }}>Contact</Text>
          <View
            style={{
              borderBottomWidth: 1.5,
              width: 150,
              opacity: 0.2,
              marginTop: 3,
              marginBottom: 10,
            }}
          />

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <Image
                source={require("./asset/fb.png")}
                style={{ marginHorizontal: 10, marginVertical: 5 }}
              />
              <Text style={{ fontSize: 17, marginLeft: 5 }}>abyanrf</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <Image
                source={require("./asset/ig.png")}
                style={{ marginHorizontal: 10, marginVertical: 5 }}
              />
              <Text style={{ fontSize: 17, marginLeft: 5 }}>abyan.rf</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <Image
                source={require("./asset/email.png")}
                style={{ marginHorizontal: 10, marginVertical: 5 }}
              />
              <Text style={{ fontSize: 17, marginLeft: 5 }}>
                rabyan78@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutMe;
