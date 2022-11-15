import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useResultScreen } from "./hook";

export function ResultScreen({ navigation }: { navigation: any }) {
  const route = useRoute<any>();
  const { getNumberOfCorrectAnswers, result } = useResultScreen();
  console.log("RESULTADO aqui" + " " + result);

  useEffect(() => {
    getNumberOfCorrectAnswers();
  }, []);

  return <View style={styles.container}>{}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
