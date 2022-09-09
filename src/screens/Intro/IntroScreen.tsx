import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GenericScreenTemplate } from "../../templates/GenericScreen/GenericScreen.template";

export function IntroScreen() {
  const navigation = useNavigation<any>();

  const [questions, setQuestions] = useState([]);
  const baseURL =
    "https://opentdb.com/api.php?amount=10&category=32&type=multiple";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => setQuestions(response.data))
      .catch((error) => {});
  }, []);
  function nextScreen() {
    navigation.navigate("questions", { questions });
  }
  return (
    <GenericScreenTemplate
      title={"You're ready to start?"}
      description={"It gonna take just a few minutes"}
      buttonLabel={"Start"}
      onPress={nextScreen}
    />
  );
}
