import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { GenericScreenTemplate } from "../../templates/GenericScreen/GenericScreen.template";

export function IntroScreen() {
  const navigation = useNavigation<any>();
  return (
    <GenericScreenTemplate
      onPress={navigation.navigate("questions")}
      title={"You're ready to start"}
    />
  );
}
