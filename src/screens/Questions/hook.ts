import { ParamListBase, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const useQuestionsScreen = (questions: any) => {
  const navigation = useNavigation<any>();

  const [nextQuestion, setNextQuestion] = useState(0);
  const [FillingprogressBar, setFillingProgressBar] = useState(0);
  const [allAnswersSelected, setAllAnswersSelected] = useState<string[]>([])

  function joinQuestions() {
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
  const { allAnswers, correctAnswer } = joinQuestions()


  const questionsFormated = decodeURIComponent(
    questions[nextQuestion].question
  );
  // const correctAnswerFormated = decodeURIComponent(correctAnswer)
  // console.log("Resposta Certa" + " " + correctAnswerFormated)




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

    return { clickedAnswer }
  }


  function joinChosenAnswers(selectedAnswer: string) {

    setAllAnswersSelected((prevState) => [...prevState, selectedAnswer]);

  }

  async function storeChosenAnswersData() {
    try {
      const jsonValue = JSON.stringify(allAnswersSelected)
      await AsyncStorage.setItem('allAnswersSelected', jsonValue);


    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }


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
    FillingprogressBar,
    goToTheNextQuestion
  }
}