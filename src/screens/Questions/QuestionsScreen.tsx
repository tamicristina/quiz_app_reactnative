import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useState } from "react";

import { ButtonAnswer } from "../../components/ButtonAnswer";
import { ProgressBar } from "../../components/ProgressBar";
import { IQuestion } from "../../interfaces";
import {
  Container,
  ProgressBarContainer,
  QuestionContainer,
  QuestionText,
} from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

interface Params extends ParamListBase {
  [key: string]: { questions: IQuestion[] };
}
export function QuestionsScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<Params, string>>();
  const { questions } = route.params;
  const [nextQuestion, setNextQuestion] = useState(0);
  const [FillingprogressBar, setFillingProgressBar] = useState(0);
  // const [questionSelected, setQuestionSelected] = useState<string[]>([]);

  const allAnswers = [];
  const incorrectAnswers = questions[nextQuestion].incorrect_answers;
  const correctAnswer = questions[nextQuestion].correct_answer;

  allAnswers.push(...incorrectAnswers, correctAnswer);
  allAnswers.sort();

  function goToTheNextQuestion(selectedQuestion: string) {
    nextQuestion >= questions.length - 1
      ? navigation.navigate("result")
      : setNextQuestion(nextQuestion + 1);

    // setQuestionSelected((prevState) => [...prevState, selectedQuestion]);
    storeData(selectedQuestion);
    fillProgressBar();
  }

  async function storeData(questionValue: string) {
    try {
      await AsyncStorage.setItem("@storage_Key", questionValue);
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }

  function fillProgressBar() {
    const progressBarCalculation =
      ((nextQuestion + 2) / questions.length) * 100;
    setFillingProgressBar(progressBarCalculation);
  }

  const questionsFormated = decodeURIComponent(
    questions[nextQuestion].question
  );

  return (
    <>
      <ProgressBarContainer>
        <ProgressBar progressClick={FillingprogressBar} />
      </ProgressBarContainer>
      <Container>
        <QuestionContainer>
          <QuestionText>{questionsFormated}</QuestionText>
          {allAnswers.map((answer) => {
            const answerFormated = decodeURIComponent(answer);
            return (
              <ButtonAnswer
                text={answerFormated}
                onPress={() => goToTheNextQuestion(answerFormated)}
                key={answer}
              />
            );
          })}
        </QuestionContainer>
      </Container>
    </>
  );
}
