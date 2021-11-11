import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Toggle from "./toogle2";

export default function Flexbox() {
  const [flexDirection, setflexDirection] = useState("row");
  const [justifyContent, setjustifyContent] = useState("center");
  const [alignItems, setalignItems] = useState("center");

  const layoutStyle = { flexDirection, justifyContent, alignItems };

  const primaryAxis = flexDirection === "row" ? "Horizontal" : "Vertical";
  const secondaryAxis = flexDirection === "row" ? "Vertical" : "Horizontal";

  return (
    <View style={styles.container}>
      <Toggle
        label={"Primary axis (flexDirection)"}
        value={flexDirection}
        options={["row", "column"]}
        onChange={(option) => setflexDirection(option)}
      />
      <Toggle
        label={primaryAxis + " distribution (justifyContent)"}
        value={justifyContent}
        options={[
          "flex-start",
          "center",
          "flex-end",
          "space-around",
          "space-between",
          "space-evenly",
        ]}
        onChange={(option) => setjustifyContent(option)}
      />
      <Toggle
        label={secondaryAxis + " alignment (alignItems)"}
        value={alignItems}
        options={["flex-start", "center", "flex-end", "stretch", "baseline"]}
        onChange={(option) => setalignItems(option)}
      />
      <View style={[styles.layout, layoutStyle]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  box: {
    padding: 25,
    backgroundColor: "steelblue",
    margin: 5,
  },
});
 


