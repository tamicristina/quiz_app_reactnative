import { ParamListBase, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { IQuestion } from "../../interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const useQuestionsScreen = (questions: any) => {
  const navigation = useNavigation<any>();

  const [nextQuestion, setNextQuestion] = useState(0);
  const [FillingprogressBar, setFillingProgressBar] = useState(0);


  const allAnswers = [];
  const incorrectAnswers = questions[nextQuestion].incorrect_answers;
  const correctAnswer = questions[nextQuestion].correct_answer;

  allAnswers.push(...incorrectAnswers, correctAnswer);
  allAnswers.sort();

  const questionsFormated = decodeURIComponent(
    questions[nextQuestion].question
  );

  function goToTheNextQuestion(selectedQuestion: string) {
    nextQuestion >= questions.length - 1
      ? navigation.navigate("result")
      : setNextQuestion(nextQuestion + 1);

    // setQuestionSelected((prevState) => [...prevState, selectedQuestion]);
    storeData(selectedQuestion);
    fillProgressBar();

    function fillProgressBar() {
      const progressBarCalculation =
        ((nextQuestion + 2) / questions.length) * 100;
      setFillingProgressBar(progressBarCalculation);
    }
  }

  async function storeData(questionValue: string) {
    try {
      await AsyncStorage.setItem("@storage_Key", questionValue);
      console.log(questionValue)
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }


  return {
    allAnswers,
    questionsFormated,
    FillingprogressBar,
    goToTheNextQuestion
  }
}