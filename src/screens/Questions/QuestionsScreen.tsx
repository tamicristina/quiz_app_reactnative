import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { ButtonAnswer } from "../../components/ButtonAnswer";
import { ProgressBar } from "../../components/ProgressBar";
import { IQuestion } from "../../interfaces";
import {
  Container,
  ProgressBarContainer,
  QuestionContainer,
  QuestionText,
  ButtonAnswerContainer,
} from "./style";
import { useQuestionsScreen } from "./hook";

interface Params extends ParamListBase {
  [key: string]: { questions: IQuestion[] };
}
export function QuestionsScreen() {
  const route = useRoute<RouteProp<Params, string>>();
  const { questions } = route.params;

  const {
    allAnswers,
    questionsFormated,
    FillingprogressBar,
    goToTheNextQuestion,
  } = useQuestionsScreen(questions);

  const ButtonAnswerComponent = allAnswers.map((answer) => {
    const answerFormated = decodeURIComponent(answer);
    return (
      <ButtonAnswer
        text={answerFormated}
        onPress={() => goToTheNextQuestion(answerFormated)}
        key={answer}
      />
    );
  });

  return (
    <>
      <ProgressBarContainer>
        <ProgressBar progressClick={FillingprogressBar} />
      </ProgressBarContainer>
      <Container>
        <QuestionContainer>
          <QuestionText>{questionsFormated}</QuestionText>
          <ButtonAnswerContainer>{ButtonAnswerComponent}</ButtonAnswerContainer>
        </QuestionContainer>
      </Container>
    </>
  );
}
