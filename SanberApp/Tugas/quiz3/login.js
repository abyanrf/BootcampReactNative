import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button } from "react-native";
import Login from "../Tugas13/LoginScreen";
import { Data } from "./data";
import Home12 from "./home";

export default function Login12({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

  const submit = () => {
      
    const Data = {
          username,
          password
      }
      console.log(Data);

      const loginPress =() =>{
        if( username == 'hilmy' && password == 12345678){
            return (()=> navigation.navigate('Home12'))
        }else {
            return isError
        }
       return loginPress
      }
      

    //tuliskan coding disini
    //? #Soal No. 1 (15poin) -- LoginScreen.js -- Function LoginScreen
    //? Buatlah sebuah fungsi untuk berpindah halaman hanya jika password yang di input bernilai '12345678'
    //? dan selain itu, maka akan mengubah state isError menjadi true dan tidak dapat berpindah halaman.
    //? #SoalTambahan (+ 5 poin): kirimkan params dengan key => userName dan value => this.state.userName ke halaman Home,
    //? dan tampilkan userName tersebut di halaman Home setelah teks "Hai," -->
    //end coding
  };
 
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>== Quiz 3 ==</Text>
      <Image
        style={{ height: 150, width: 150 }}
        source={require("./assets/logo.jpg")}
      />
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 5,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Masukan Username"
          value={username}
          onChangeText={(value)=>setUsername(value)}
        />
        <TextInput
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 5,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Masukan Password"
          value={password}
          onChangeText={(value)=>setPassword(value)}
        />
        <Button onPress={submit}  title="Login" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
