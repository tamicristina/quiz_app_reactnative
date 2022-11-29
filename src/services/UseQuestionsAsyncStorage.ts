import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';



export function UseQuestionsAsyncStorage() {
  const [result, setResult] = useState("")
  const [allChosenAnswers, setallChosenAnswers] = useState<string[]>([])
  const [allCorrectAnswers, setallCorrectAnswers] = useState<string[]>([])

  async function storeCorrectAnswers(correctAnswers: any) {
    try {
      await AsyncStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));

    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }

  const getCorrectAnswers = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem("correctAnswers");
      if (value != null) {
        const valueFormatted = JSON.parse(value);


        setallCorrectAnswers((prevState) => [...valueFormatted]);
      }
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro ao carregar as informações");
    }
  }, [])




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

  const clearAllStorage = async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      Alert.alert("Erro", "Ocorreu um erro !");
    }
  }







  return {
    storeCorrectAnswers,
    getCorrectAnswers,
    storeChosenAnswers,
    getChosenAnswers,
    result,
    allChosenAnswers,
    allCorrectAnswers,
    clearAllStorage
  }
}





