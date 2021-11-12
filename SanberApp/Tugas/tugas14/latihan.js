import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Button,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";

const baseURL = " https://sanbers-news-api.herokuapp.com/api";
const client = axios.create({
  baseURL: baseURL,
});

const Latihan = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [buttonMode, setButtonMode] = useState("simpan");

  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState({});

  const handleError = (err) => {
    console.error("Error status: ", err.message);
    console.error("Error Message: ", err.response.data);
  };

  const addNews = (title, value) =>
    client
      .post(`/news`, { title, value })
      .then((res) => {
        console.log("res: ", res);
        setTitle("");
        setValue("");
      })
      .catch((err) => {
        handleError(err);
      });

  const editNews = (id, title, value) =>
    client
      .put(`/news/${id}`, { title, value })
      .then((res) => {
        console.log("res: ", res);
        setTitle("");
        setValue("");
        GetData();
        setButtonMode("simpan");
      })
      .catch((err) => {
        handleError(err);
      });

  const deleteNews = (id) =>
    client
      .delete(`/news/${id}`)
      .then((res) => {
        console.log("res: ", res);
        GetData();
      })
      .catch((err) => {
        handleError(err)
      });

  const submit = async () => {
    try {
      if (buttonMode == "simpan") {
        await addNews(title, value);
      } else {
        console.log(selectedNews);
        await editNews(selectedNews._id, title, value);
      }
      GetData();
    } catch (error) {
      handleError(error);
    }
  };
const onSelectItem=(item)=>{
  console.log(item);
  setSelectedNews(item);
  setTitle(item.title);
  setValue(item.value);
  setButtonMode('update')
};


  const GetData = () => {
    client
      .get(`/news`)
      .then((res) => {
        const data1 = res.data.data;
        console.log("res: ", data1);
        setNews(data1)
      })
      .catch((err) => handleError(err));
  };

  const onDelete = (item) => deleteNews(item._id);

  useEffect(() => {
    GetData();
  }, []);

  return (
    <SafeAreaView style={Style.coontainer}>
      <StatusBar />
      <View style={Style.header}>
        <Text style={Style.title}>Tampilan Api (CRUD)</Text>
      </View>
      <FlatList
        data={news}
        keyExtractor={(item, index) => `${item._id}-${index}`}
        renderItem={({ item }) => {
          return (
            <View style={Style.newsItem}>
              <TouchableOpacity
                onPress={() => onSelectItem(item)}
                style={Style.newsContent}
              >
                <Text style={Style.newsTitle}>{item.title}</Text>
                <Text style={Style.newsTitle}>{item.value}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onDelete(item)}>
                <Text style={Style.deleteIcon}>X</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={Style.form}>
        <Text>Post Data</Text>
        <TextInput
          placeholder="masukan isi berita"
          style={Style.input}
          value={value}
          onChangeText={(value) => setValue(value)}
        />
        <Button onPress={submit} title="{buttonMode}" />
      </View>
    </SafeAreaView>
  );
};

export default Latihan;

const Style = StyleSheet.create({newsTitle:{
  borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    marginBottom: 10
},
  newsContent: {
    backgroundColor: "grey",
    paddingVertical: 10,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    marginBottom: 10,
  },
  form: {
    paddingVertical: 20,
  },
  deleteIcon: {
    borderWidth: 1,
    fontSize: 20,
    padding: 5,
    borderRadius: 12,
    color: "red",
  },
  newContent: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    borderColor: "grey",
    borderWidth: 1,
  },
  newsItem: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    alignItems: "center",
  },
  coontainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
});
