import React from "react";
import {
  View,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Data from "./dummy";

const colors = {
  primary: "#517DA2",
  secondary: "#4EA4EA",
  caption: "#A8AA",
};

const Telegram = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle='light-content' backgroundColor="#41688d" />
      <View style={style.header}>
        <TouchableOpacity style={{ marginHorizontal: 20 }}>
          <Image
            source={require("../Tugas12/asset/drawwer.png")}
            style={style.listHeader}
          />
        </TouchableOpacity>
        <Text style={style.textHeader}>Telegram</Text>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Image source={require("../Tugas12/asset/search1-.png")} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity style={style.kotakPesan}>
              <Image source={item.image} style={style.potoProfile} />
              <View style={style.pesan}>
                <Text style={style.pengirimPesan}>
                  {item.name}
                </Text>
                <Text style={style.isiPesan}>{item.message}</Text>
              </View>
              <View style={style.statusPesan}>
                <View style={style.status2}>
                  <Image
                    style={style.centang}
                    source={require("./asset/check.png")}
                  />
                  <Text style={style.statusWaktu}>{item.time}</Text>
                </View>
                <Text
                  style={style.jumlahPesan}
                >
                  {item.totalMessage}
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={style.separator}
          />
        )}
      />

      <TouchableOpacity
        style={style.pencil}
      >
        <Image
          source={require("./asset/pencil.png")}
          style={style.iconPencil}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  iconPencil:{ 
    width: 23, 
    height: 25, 
    resizeMode: "contain" 
  },

  pencil:{
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },

  separator:{
    borderBottomWidth: 1,
    opacity: 0.1,
    marginRight: 20,
    marginLeft: 90,
  },

  jumlahPesan:{
    marginTop: 5,
    color: "white",
    fontSize: 12,
    width: 18,
    height: 18,
    backgroundColor: "#4ECC5E",
    borderRadius: 10,
    alignSelf: "flex-end",
    textAlign: "center",
  },

  centang:{ 
    width: 10, 
    height: 10, 
    marginRight: 6
   },

  statusWaktu:{
    color:colors.caption
  },

  status2:{ 
    flexDirection: "row", 
    alignItems: "center" 
  },

  statusPesan:{ 
    justifyContent: "space-around" 
  },

  isiPesan:{
    color:colors.caption
  },

  pengirimPesan:{
     fontSize: 17, 
     fontWeight: "bold" 
    }
  ,
  pesan: { 
    flex: 1, 
    marginHorizontal: 15 },
  potoProfile: {
    width: 60,
    height: 55,
  },
  kotakPesan: {
    height: 86,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 2,
    marginTop: 2,
  },
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: colors.primary,
    height: 62,
    flexDirection: "row",
    alignItems: "center",
  },
  listHeader: {
    width: 27,
    height: 21,
  },
  textHeader: {
    fontSize: 27,
    color: "white",
    flex: 1,
    marginLeft: 15,
    fontWeight: "600",
  },
});

export default Telegram;
