import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const useResultScreen = () => {
  const [allAnswersSelected, setallAnswersSelected] = useState<string[]>([]);
  const [result, setResult] = useState("");

  const getNumberOfCorrectAnswers = async () => {
    try {
      const value = await AsyncStorage.getItem("resultCount");
      if (value != null) {
        JSON.parse(value);
        setResult(value);
      }
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  };






  return {

    getNumberOfCorrectAnswers,
    result

  }

}