import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => pressHandler(item.key)}
    >
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}> {item.text} </Text>
      </View>
      <View style={styles.circular}></View>
    </TouchableOpacity>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "gray",
    padding: 5,
  },
  square: {
    backgroundColor: "#333",
    width: 24,
    height: 24,
    opacity: 0.4,
    borderRadius: 10,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#09DCAC",
    borderWidth: 2,
    borderRadius: 10,
  },
});
