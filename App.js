// import 'react-native-gesture-handler';
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Task from "./src/components/Task";
import Header from "./src/components/Header";
import AddTask from "./src/components/AddTask";


export const getFonts = () => {
  return Font.loadAsync({
    "poppins-regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "poppins-black": require("./src/assets/fonts/Poppins-Black.ttf"),
  });
};

export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [taskItems, setTaskItems] = useState([
    { text: "finish the app", id: "1" },
    { text: "write the paper", id: "2" },
    { text: "hand it in", id: "3" },
  ]);
  
  const handleAddTask = (newItem) => {
    Keyboard.dismiss();
    if ( newItem.length >= 3 ) {
      setTaskItems((tasks) => {
        return [
          ...tasks,
          { text: newItem, id: Math.random().toString() }
        ];
      });
    } else {
      console.log('error for handletask')
      Alert.alert('OOPS!', 'The task needs a minimum of 3 characters.', [
        { text: 'Understood', onPress: () => console.log('alert closed.')}
      ]);
    };
  };

  const completeTask = (id) => {
    const copyItems = [...taskItems];
    const remainingItems = copyItems.filter((item) => item.id != id);
    setTaskItems(remainingItems);
  };

  if (fontsLoaded) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header />
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}> Today's Tasks </Text>
            <View style={styles.items}>
              <FlatList
                data={taskItems}
                renderItem={({ item }) => (
                  <Task
                    item={item}
                    pressHandler={completeTask}
                  />
                )}
              />
            </View>
          </View>
          <AddTask handleAddTask={handleAddTask} />
        </View>
      </TouchableWithoutFeedback>
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
    paddingHorizontal: 2,
  },
  sectionTitle: {
    fontSize: 25,
    paddingVertical: 20,
    fontFamily: "poppins-regular",
    color: "#EEAB50",
  },
  tasksWrapper: {
    width: "85%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#69768B",
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "grey",
    flex: 1,
    maxHeight: '60%',
  },
  items: {
    flex: 1,
  }
});
