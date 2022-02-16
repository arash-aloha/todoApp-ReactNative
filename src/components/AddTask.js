import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

export default function AddTask({ handleAddTask }) {
  const [text, setText] = useState("");

  const changeTextHandler = (value) => {
    setText(value);
  };
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboard}>
    
      <View style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          onChangeText={changeTextHandler}
          // value={text}
        />

        <TouchableOpacity onPress={() => handleAddTask(text)}>
          <View style={styles.addWrapper}>
            <Text style={styles.addButton}> + </Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    alignItems: 'flex-end',
  },
  writeTaskWrapper: {
    bottom: 0,
    paddingTop: 20,
    paddingBottom: 5,
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: '#2D3E54'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderColor: "#EEAB50",
    borderWidth: 4,
    flex: 2,
  },
  addWrapper: {
    width: 70,
    height: 70,
    flex: 1,
    borderBottomRightRadius: 10,
    borderColor: "#EEAB50",
    borderWidth: 2,
    backgroundColor: "#EEAB50",
    justifyContent: "center",
    alignItems: "center",
    
  },
  addButton: {
    color: "#fff",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
