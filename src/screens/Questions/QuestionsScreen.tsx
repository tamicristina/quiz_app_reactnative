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

interface Params extends ParamListBase {
  [key: string]: { questions: IQuestion[] };
}
export function QuestionsScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<Params, string>>();
  const { questions } = route.params;
  const [nextQuestion, setNextQuestion] = useState(0);
  const [FillingprogressBar, setFillingProgressBar] = useState(0);

  const allAnswers = [];
  const incorrectAnswers = questions[nextQuestion].incorrect_answers;
  const correctAnswer = questions[nextQuestion].correct_answer;

  allAnswers.push(...incorrectAnswers, correctAnswer);
  allAnswers.sort();

  const progressBarCalculation = ((nextQuestion + 2) / questions.length) * 100;

  function goToTheNextQuestion() {
    nextQuestion >= questions.length - 1
      ? navigation.navigate("result")
      : setNextQuestion(nextQuestion + 1);

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
                onPress={goToTheNextQuestion}
                key={answer}
              />
            );
          })}
        </QuestionContainer>
      </Container>
    </>
  );
}
