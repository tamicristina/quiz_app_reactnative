import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useResultScreen } from '../screens/Result/hook';


export function UseQuestionsAsyncStorage() {
  const [result, setResult] = useState("")
  const [allChosenAnswers, setallChosenAnswers] = useState<string[]>([])

  async function storeNumberOfCorrectAnswers(numberOfCorrectAnswers: any) {
    try {
      await AsyncStorage.setItem('resultCount', JSON.stringify(numberOfCorrectAnswers));

    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }

  async function getNumberOfCorrectAnswer() {
    try {
      const value = await AsyncStorage.getItem("resultCount");
      if (value != null) {
        JSON.parse(value);
        setResult(value);
      }
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  };

  async function storeChosenAnswers(chosenAnswers: any) {
    try {
      await AsyncStorage.setItem('chosenAnswers', JSON.stringify(chosenAnswers));
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }




  const getChosenAnswers = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem("chosenAnswers");
      if (value != null) {
        const valueFormatted = JSON.parse(value);


        setallChosenAnswers((prevState) => [...valueFormatted]);
      }
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }, [])








  return {
    storeNumberOfCorrectAnswers,
    getNumberOfCorrectAnswer,
    storeChosenAnswers,
    getChosenAnswers,
    result,
    allChosenAnswers
  }
}





