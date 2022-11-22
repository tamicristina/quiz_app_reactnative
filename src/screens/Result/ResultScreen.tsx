import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { UseQuestionsAsyncStorage } from "../../services/UseQuestionsAsyncStorage";
import { Container, IconsContainer } from "./style";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export function ResultScreen() {
  const {
    getChosenAnswers,
    allChosenAnswers,
    getCorrectAnswers,
    allCorrectAnswers,
  } = UseQuestionsAsyncStorage();

  useEffect(() => {
    getCorrectAnswers();
    getChosenAnswers();
  }, []);

  // console.log(`Hook async storage ${correctAnswers}`);
  let renderIcons = allChosenAnswers.map((answers, index) => {
    let correctAnswers = allCorrectAnswers[index];

    if (answers === correctAnswers) {
      return (
        <FontAwesome
          name="check-circle"
          size={24}
          color="green"
          key={answers}
        />
      );
    } else if (answers !== correctAnswers) {
      return <Entypo name="block" size={24} color="red" key={correctAnswers} />;
    }
  });

  return (
    <>
      <Container>
        <IconsContainer>{renderIcons}</IconsContainer>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
