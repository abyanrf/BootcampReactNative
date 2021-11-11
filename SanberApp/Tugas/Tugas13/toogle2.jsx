
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Toggle({ label, options, value, onChange }) {
  const onPress = (option) => {
    onChange(option);
  };

  const renderOption = (option, i) => {
    return (
      <TouchableOpacity
        style={[styles.option, option === value && styles.activeOption]}
        onPress={() => onPress(option)}
        key={i}
      >
        <Text style={styles.text}>{option}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.label]}>{label}</Text>
      <View style={styles.optionsContainer}>{options.map(renderOption)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  label: {
    padding: 4,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  option: {
    padding: 4,
    backgroundColor: "whitesmoke",
  },
  activeOption: {
    backgroundColor: "skyblue",
  },
});