import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { UseQuestionsAsyncStorage } from "../../services/UseQuestionsAsyncStorage";
import { useResultScreen } from "./hook";

export function ResultScreen({ navigation }: { navigation: any }) {
  const route = useRoute<any>();
  const { allCorrectAnswers } = route.params;

  const { getChosenAnswers, allChosenAnswers, getNumberOfCorrectAnswer } =
    UseQuestionsAsyncStorage();

  useEffect(() => {
    getNumberOfCorrectAnswer();
    getChosenAnswers();
  }, []);

  let contador = 0;

  for (let i = 0; i < allChosenAnswers.length; i++) {
    if (allChosenAnswers[i] === allCorrectAnswers[i]) {
      contador++;
      console.log("RESULT" + " " + [i]);
    }
  }
  console.log("Número acertos" + " " + contador);

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
