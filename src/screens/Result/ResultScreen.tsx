import React, { useEffect, useMemo, useState } from "react";
import { UseQuestionsAsyncStorage } from "../../services/UseQuestionsAsyncStorage";
import { IconsSpacing } from "./style";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { ResultScreenTemplate } from "../../templates/ResultScreen/ResultScreen.template";

export function ResultScreen({ navigation }: { navigation: any }) {
  const {
    getChosenAnswers,
    allChosenAnswers,
    getCorrectAnswers,
    allCorrectAnswers,
    clearAllStorage,
  } = UseQuestionsAsyncStorage();

  useEffect(() => {
    getCorrectAnswers();
    getChosenAnswers();
  }, []);

  let rightQuestionCounter = 0;
  allChosenAnswers.map((answers, index) => {
    let correctAnswers = allCorrectAnswers[index];

    if (answers === correctAnswers) {
      rightQuestionCounter++;
    }
  });

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

  const textResult =
    rightQuestionCounter >= 7
      ? "Congratulations! You passed"
      : " To pass the test, you need get at least 7 answers right";

  const buttonLabel = rightQuestionCounter >= 7 ? "Continue" : "Try Again";

  function goToTryAgain() {
    navigation.navigate("intro");
    clearAllStorage();
  }

  return (
    <ResultScreenTemplate
      icons={renderIcons()}
      titleResult={"You've reached"}
      secondTileResult={"out of "}
      numberOfhits={rightQuestionCounter}
      numberOfAnswers={allCorrectAnswers.length}
      textResult={textResult}
      onPress={goToTryAgain}
      buttonLabel={buttonLabel}
    />
  );
}
