import { useNavigation } from "@react-navigation/native";
import React from "react";
import { GenericScreenTemplate } from "../../templates/GenericScreen/GenericScreen.template";

export function IntroScreen() {
  const navigation = useNavigation<any>();
  function nextScreen() {
    navigation.navigate("questions");
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
