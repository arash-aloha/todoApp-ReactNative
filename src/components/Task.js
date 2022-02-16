import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const Task = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => pressHandler(item.id)}
    >
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}> {item.text} </Text>
      </View>
      <MaterialIcons 
        name="check-box-outline-blank" size={24} color="black" 
      />

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
    padding: 5,
  },
  square: {
    backgroundColor: "#EEAB50",
    width: 12,
    height: 12,
    borderRadius: 10,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
    maxWidth: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
