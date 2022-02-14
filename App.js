import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Keyboard
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Task from "./src/components/Task";
import Header from "./src/components/Header";
import AddTodo from "./src/components/addTask";

export const getFonts = () => {
  return Font.loadAsync({
    "poppins-regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "poppins-black": require("./src/assets/fonts/Poppins-Black.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [text, setText] = useState("");
  const [taskItems, setTaskItems] = useState([
    { text: "finish the app", key: "1" },
    { text: "write the paper", key: "2" },
    { text: "hand it in", key: "3" },
  ]);
  console.log('this is thext: ',text)
  const handleAddTask = () => {
    Keyboard.dismiss();
    console.log("handleAdd: ");
  };

  const completeTask = (key) => {
    const copyItems = [...taskItems];
    const remainingItems = copyItems.filter((item) => item.key != key);
    setTaskItems(remainingItems);
  };

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}> Today's Tasks </Text>
          <View style={styles.items}>
            <FlatList
              data={taskItems}
              renderItem={({ item }) => (
                <Task
                  text={text}
                  setText={setText}
                  item={item}
                  pressHandler={completeTask}
                />
              )}
            />
          </View>
        </View>

        <AddTodo 
          text={text} 
          setText={setText} 
          handleAddTask={handleAddTask} 
        />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={'An error did occur when loading: ', console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D3E54",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  tasksWrapper: {
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#69768B",
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "grey",
  },
  sectionTitle: {
    fontSize: 25,
    paddingVertical: 20,
    fontFamily: "poppins-regular",
    color: "#EEAB50",
  },
});
