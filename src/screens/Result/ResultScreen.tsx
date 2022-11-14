import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function ResultScreen({ navigation }: { navigation: any }) {
  const route = useRoute<any>();
  const [allAnswersArray, setAllAnswersArray] = useState<string[]>([]);
  const [selectedAnswer, setselectedAnswer] = useState("");
  useEffect(() => {
    getData();
    getSelectedAnswer();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("allAnswersSelected");
      if (value != null) {
        JSON.parse(value);
        setAllAnswersArray((prevState) => [...prevState, value]);
      }
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  };

  const getSelectedAnswer = async () => {
    try {
      const value = await AsyncStorage.getItem("clickedAnswer");
      if (value != null) {
        setselectedAnswer(value);
      }
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  };

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
