import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Telegram from "./Tugas/Tugas12/Telegram";
import Login from "./Tugas/Tugas13/LoginScreen";
import AboutMe from "./Tugas/Tugas13/AboutScreen";
import Flexbox from "./Tugas/Tugas13/flexbox";
import Latihan from "./Tugas/tugas14/latihan";

export default function App() {
  // const [isShow, setIsShow] = useState (true);

//  useEffect(()=>{
//    setTimeout(()=>{
//      setIsShow(false)
//    },6000)
//  },[isShow]);

  return (
    <>
  <Latihan/>
    </>
  );
}
