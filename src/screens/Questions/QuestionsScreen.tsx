import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useState } from "react";

import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { ButtonAnswer } from "../../components/ButtonAnswer";
import { IQuestion } from "../../interfaces";

interface Params extends ParamListBase {
  [key: string]: { questions: IQuestion[] };
}

export function QuestionsScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<Params, string>>();
  const { questions } = route.params;

  const allAnswers = [];
  const incorrectAnswers = questions[0].incorrect_answers;
  const correctAnswer = questions[0].correct_answer;
  allAnswers.push(...incorrectAnswers, correctAnswer);
  allAnswers.sort();

  const teste = allAnswers.forEach((answer) => {
    return <ButtonAnswer text={} onPress={() => {}} />;
  });

  console.log(allAnswers);
  console.log(questions);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
