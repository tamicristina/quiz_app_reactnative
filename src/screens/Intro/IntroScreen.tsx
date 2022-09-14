import { useNavigation } from "@react-navigation/native";
import React from "react";
import { GenericScreenTemplate } from "../../templates/GenericScreen/GenericScreen.template";
import { useQuestionsData } from "../../services/getQuestions";

export function IntroScreen() {
  const navigation = useNavigation<any>();

  const { questions } = useQuestionsData();

  function nextScreen() {
    navigation.navigate("questions", { questions });
    console.log(questions);
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
