import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { IQuestion } from "../../interfaces";
import { UseQuestionsAsyncStorage } from "../../services/UseQuestionsAsyncStorage";

export const useQuestionsScreen = (questions: IQuestion[]) => {
  const navigation = useNavigation<any>();

  const [nextQuestion, setNextQuestion] = useState(0);
  const [FillingprogressBar, setFillingProgressBar] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState<string[]>([])
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)

  const { storeNumberOfCorrectAnswers, storeChosenAnswers } = UseQuestionsAsyncStorage()



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


  const allCorrectAnswers: Array<string> = []
  questions.map((question) => {

    const answer = decodeURIComponent(question.correct_answer)
    allCorrectAnswers.push(answer)

  })

  console.log(allCorrectAnswers)



  async function goToTheNextQuestion(clickedAnswer: string) {

    nextQuestion >= questions.length - 1
      ? navigation.navigate("result", { allCorrectAnswers })
      : setNextQuestion(nextQuestion + 1);

    fillProgressBar();
    countNumberOfCorrectAnswers(clickedAnswer)
    joinChosenAnswers(clickedAnswer)
  }

  function fillProgressBar() {
    const progressBarCalculation =
      ((nextQuestion + 2) / questions.length) * 100;
    setFillingProgressBar(progressBarCalculation);
  }




  function countNumberOfCorrectAnswers(answer: string) {

    if (allCorrectAnswers.includes(answer)) {
      setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1)
    }

  }

  storeNumberOfCorrectAnswers(numberOfCorrectAnswers)



  function joinChosenAnswers(selectedAnswer: string) {
    setChosenAnswers((prevState) => [...prevState, selectedAnswer]);
  }

  storeChosenAnswers(chosenAnswers)



  return {
    allAnswers,
    questionsFormated,
    correctAnswer,
    FillingprogressBar,
    goToTheNextQuestion
  }
}