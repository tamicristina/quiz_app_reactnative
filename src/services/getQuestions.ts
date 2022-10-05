import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";

export const useQuestionsData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation<any>()
  const baseURL =
    "https://opentdb.com/api.php?amount=10&category=31&type=multiple&encode=url3986";

  async function nextScreen() {
    try {
      setIsLoading(true)
      const response = await axios.get(baseURL);
      const questions = response.data.results


      setIsLoading(false)
      navigation.navigate("questions", { questions })

    } catch (err) {

      Alert.alert(
        "Erro",
        "Ocorreu um erro ao carregar as informações"
      );
      setIsLoading(false)

    }


  }

  return {
    isLoading,
    nextScreen
  }
}


