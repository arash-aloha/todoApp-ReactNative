import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> todos </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 40,
    borderBottomWidth: 2,
    borderBottomColor: "grey",
  },
  title: {
    fontFamily: "poppins-black",
    fontSize: 90,
    color: "#EEAB50",
    paddingBottom: 10,
    textShadowColor: "#FFD194",
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 1,
  },
});
