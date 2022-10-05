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
  const [nextQuestion, setNextQuestion] = useState(0);

  const allAnswers = [];
  const incorrectAnswers = questions[nextQuestion].incorrect_answers;
  const correctAnswer = questions[nextQuestion].correct_answer;

  allAnswers.push(...incorrectAnswers, correctAnswer);
  allAnswers.sort();

  function goToTheNextQuestion() {
    nextQuestion >= 9
      ? navigation.navigate("result")
      : setNextQuestion(nextQuestion + 1);
  }

  const questionsFormated = questions[nextQuestion].question
    .replace(/[%20-]/g, " ")
    .replace("3F", "?");

  return (
    <View style={styles.container}>
      <Text>{questionsFormated}</Text>
      {allAnswers.map((answer) => {
        const answerFormated = answer.replace(/[%20-]/g, " ");
        return (
          <ButtonAnswer
            text={answerFormated}
            onPress={goToTheNextQuestion}
            key={answer}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
