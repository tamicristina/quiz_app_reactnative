import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useState } from "react";

import { ButtonAnswer } from "../../components/ButtonAnswer";
import { IQuestion } from "../../interfaces";
import { Container, QuestionContainer, QuestionText } from "./style";

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

  const questionsFormated = decodeURIComponent(
    questions[nextQuestion].question
  );

  return (
    <Container>
      <QuestionContainer>
        <QuestionText>{questionsFormated}</QuestionText>
      </QuestionContainer>
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
    </Container>
  );
}
