import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  // Platform,
} from "react-native";

export default function AddTodo({ text, setText, handleAddTask }) {
  return (
    <KeyboardAvoidingView
      // behavior={ Platform.OS === "ios" ? "padding" : "height" }
      style={styles.writeTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder={"Write a task"}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addButton}> + </Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 2,
    width: "80%",
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#EEAB50",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#EEAB50",
    borderWidth: 2,
  },
  addButton: {
    color: "#fff",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
