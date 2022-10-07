import React from "react";
import { GenericScreenTemplate } from "../../templates/GenericScreen/GenericScreen.template";
import { useQuestionsData } from "../../services/getQuestions";

export function IntroScreen() {
  const { nextScreen, isLoading } = useQuestionsData();

  return (
    <GenericScreenTemplate
      title={"You're ready to start?"}
      description={"It gonna take just a few minutes"}
      buttonLabel={"Start"}
      onPress={nextScreen}
      isLoading={isLoading}
    />
  );
}
