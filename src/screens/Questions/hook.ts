import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { IQuestion } from "../../interfaces";
import { useResultScreen } from "../Result/hook";

export const useQuestionsScreen = (questions: IQuestion[]) => {
  const navigation = useNavigation<any>();

  const [nextQuestion, setNextQuestion] = useState(0);
  const [FillingprogressBar, setFillingProgressBar] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState<string[]>([])
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)


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

    nextQuestion >= questions.length - 1
      ? navigation.navigate("result", { questions })
      : setNextQuestion(nextQuestion + 1);

    fillProgressBar();
    countNumberOfCorrectAnswers(clickedAnswer)
    getChosenAnswers(clickedAnswer)
  }

  function fillProgressBar() {
    const progressBarCalculation =
      ((nextQuestion + 2) / questions.length) * 100;
    setFillingProgressBar(progressBarCalculation);
  }


  function countNumberOfCorrectAnswers(answer: string) {

    let allCorrectAnswer: any = []
    questions.filter((question) => {
      let answer = decodeURIComponent(question.correct_answer)
      allCorrectAnswer.push(answer)
      console.log(answer)
    })

    if (allCorrectAnswer.includes(answer)) {
      setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1)
    }
  }

  async function storeNumberOfCorrectAnswers() {
    try {
      await AsyncStorage.setItem('resultCount', JSON.stringify(numberOfCorrectAnswers));
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }

  storeNumberOfCorrectAnswers()

  function getChosenAnswers(selectedAnswer: string) {
    setChosenAnswers((prevState) => [...prevState, selectedAnswer]);
  }

  async function storeChosenAnswers() {
    try {
      await AsyncStorage.setItem('chosenAnswers', JSON.stringify(numberOfCorrectAnswers));
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }




  return {
    allAnswers,
    questionsFormated,
    correctAnswer,
    FillingprogressBar,
    goToTheNextQuestion
  }
}