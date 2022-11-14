import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function ResultScreen({ navigation }: { navigation: any }) {
  const route = useRoute<any>();
  const { selectedQuestion } = route.params;

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("allAnswersSelected");
      jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(jsonValue);
    } catch (e) {
      // error reading value
    }
  };

  getData();

  // function createItem(value: any) {
  //   return <Text>{value}</Text>;
  // }

  return <View style={styles.container}>{}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
