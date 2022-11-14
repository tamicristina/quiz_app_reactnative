import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const useQuestionsScreen = (questions: any) => {
  const navigation = useNavigation<any>();

  const [nextQuestion, setNextQuestion] = useState(0);
  const [FillingprogressBar, setFillingProgressBar] = useState(0);
  const [allAnswersSelected, setAllAnswersSelected] = useState<string[]>([])

  function joinAllAnswers() {
    const allAnswers = [];
    const incorrectAnswers = questions[nextQuestion].incorrect_answers;
    const correctAnswer = questions[nextQuestion].correct_answer;

    allAnswers.push(...incorrectAnswers, correctAnswer);
    allAnswers.sort();

    return {
      allAnswers,
      correctAnswer
    }
  }
  const { allAnswers, correctAnswer } = joinAllAnswers()


  const questionsFormated = decodeURIComponent(
    questions[nextQuestion].question
  );


  async function goToTheNextQuestion(clickedAnswer: string) {
    try {
      await AsyncStorage.setItem("clickedAnswer", clickedAnswer);

    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
    nextQuestion >= questions.length - 1
      ? navigation.navigate("result", { clickedAnswer })
      : setNextQuestion(nextQuestion + 1);

    joinChosenAnswers(clickedAnswer)

    fillProgressBar();

  }


  function joinChosenAnswers(selectedAnswer: string) {

    setAllAnswersSelected((prevState) => [...prevState, selectedAnswer]);

  }


  async function storeChosenAnswersData() {
    try {

      await AsyncStorage.setItem('allAnswersSelected', JSON.stringify(allAnswersSelected));


    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }

  storeChosenAnswersData()


  function fillProgressBar() {
    const progressBarCalculation =
      ((nextQuestion + 2) / questions.length) * 100;
    setFillingProgressBar(progressBarCalculation);
  }


  // const [resultCount, setresultCount] = useState(0)

  // function countCorrectQuestions(value: string) {
  //   let counter = 0
  //   if (correctAnswer.includes(value)) {
  //     setresultCount(resultCount + 1)

  //   }
  // }




  return {
    allAnswers,
    questionsFormated,
    correctAnswer,
    FillingprogressBar,
    goToTheNextQuestion
  }
}