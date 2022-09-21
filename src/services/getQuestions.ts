import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export const useQuestionsData = () => {

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation<any>()
  const baseURL =
    "https://opentdb.com/api.php?amount=10&category=32&type=multiple";

  async function nextScreen() {
    try {
      setIsLoading(true)
      const response = await axios.get(baseURL);
      const data = await response.data;
      setQuestions(data);
      setIsLoading(false)




    } catch (err) {

      Alert.alert(
        "Erro",
        "Ocorreu um erro ao carregar as informações"
      );
      return setIsLoading(false)

    }

    navigation.navigate("questions", { questions });
  }



  return {
    questions,
    isLoading,
    nextScreen
  }
}


