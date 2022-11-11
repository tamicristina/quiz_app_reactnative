import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
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

  async function storeData(questionValue: string) {
    try {
      await AsyncStorage.setItem("@storage_Key", questionValue);
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }

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
