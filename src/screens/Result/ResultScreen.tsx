import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { UseQuestionsAsyncStorage } from "../../services/UseQuestionsAsyncStorage";
import {
  ButtonContainer,
  Container,
  ExplainResultContainer,
  IconsContainer,
  IconsSpacing,
  Resulthighlight,
  TextResult,
  TextResultContainer,
} from "./style";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { Text } from "react-native";
import { Button } from "../../components/Button";

export function ResultScreen({ navigation }: { navigation: any }) {
  const route = useRoute<any>();
  const { numberOfCorrectAnswers } = route.params;

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

  const renderIcons = () =>
    allChosenAnswers.map((answers, index) => {
      let correctAnswers = allCorrectAnswers[index];

      if (answers === correctAnswers) {
        return (
          <IconsSpacing key={answers}>
            <FontAwesome name="check-circle" size={20} color="green" />
          </IconsSpacing>
        );
      } else if (answers !== correctAnswers) {
        return (
          <IconsSpacing key={correctAnswers}>
            <Entypo name="block" size={20} color="red" />
          </IconsSpacing>
        );
      }
    });

  function goToTryAgain() {
    navigation.navigate("intro");
  }

  return (
    <>
      <Container>
        <IconsContainer>{renderIcons()}</IconsContainer>
        <TextResultContainer>
          <TextResult>
            You've reached{" "}
            <Resulthighlight>{numberOfCorrectAnswers}</Resulthighlight> out of{" "}
            <Resulthighlight>{allCorrectAnswers.length}</Resulthighlight>
          </TextResult>
        </TextResultContainer>
        <ExplainResultContainer>
          To pass the test, you need get at least 7 answers right
        </ExplainResultContainer>
        <ButtonContainer>
          <Button label="Try Again" onPress={goToTryAgain} />
        </ButtonContainer>
      </Container>
    </>
  );
}
