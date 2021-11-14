import React, { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Data } from "./data";
export default function Home12({ route, navigation }) {
  // const { username } = route.params;
  const [totalPrice, setTotalPrice] = useState(0);

  const currencyFormat = (num) => {
    return "Rp " + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  const updateHarga = (price) => {
    console.log("UpdatPrice : " + price);
    const temp = Number(price) + totalPrice;
    console.log(temp);
    setTotalPrice(temp);

    // ? #Bonus (10 poin) -- HomeScreen.js --
    // ? agar harga dapat update misal di tambah lebih dari 1 item atau lebih -->
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <View>
          <Text>Selamat Datang,</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>haiii</Text>
        </View>
        <View>
          <Text>Total Harga:</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {" "}
            {currencyFormat(totalPrice)}
          </Text>
        </View>
      </View>
      <View
        style={{ alignItems: "center", marginBottom: 20, paddingBottom: 60 }}
      >
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={styles.box}>
                <Text>{item.title}</Text>
                <Image source={item.image} style={styles.product} />
                <Text>{item.harga}</Text>
                <Text>{item.type}</Text>
                <TouchableOpacity style={styles.beli}>
                  <Text style={styles.textbeli}>BELI</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <Text>{item.title}</Text>
                <Image source={item.image} style={styles.product} />
                <Text>{item.harga}</Text>
                <Text>{item.type}</Text>
                <TouchableOpacity style={styles.beli} onPress={updateHarga}>
                  <Text style={styles.textbeli}>BELI</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        {/* //? #Soal No 2 (15 poin) -- Home.js -- Function Home
            //? Buatlah 1 komponen FlatList dengan input berasal dari data.js   
            //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal) -->

            //? #Soal No 3 (15 poin) -- HomeScreen.js --
             //? Buatlah styling komponen Flatlist, agar dapat tampil dengan baik di device untuk layouting bebas  --> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  textbeli: {
    alignSelf: "center",
  },
  beli: { borderRadius: 10, padding: 6, backgroundColor: "#40c4ff" },
  product: {
    width: 170,
    height: 170,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    width: 150,
    height: 220,
    margin: 5,
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 5,
    borderColor: "grey",
  },
});
