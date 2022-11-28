import React from "react";
import { Button } from "../../components/Button";
import {
  ButtonContainer,
  Container,
  ExplainResultContainer,
  IconsContainer,
  Resulthighlight,
  TextResult,
  TextResultContainer,
} from "./style";

type Props = {
  icons: any;
  titleResult: string;
  secondTileResult: string;
  textResult: string;
  numberOfhits: number;
  numberOfAnswers: number;
  buttonLabel: string;
  onPress: () => void;
};

export function ResultScreenTemplate({
  icons,
  titleResult,
  numberOfhits,
  numberOfAnswers,
  textResult,
  onPress,
  buttonLabel,
  secondTileResult,
}: Props) {
  return (
    <Container>
      <IconsContainer>{icons}</IconsContainer>
      <TextResultContainer>
        <TextResult>
          {titleResult}
          <Resulthighlight> {numberOfhits}</Resulthighlight> {secondTileResult}
          <Resulthighlight>{numberOfAnswers}</Resulthighlight>
        </TextResult>
      </TextResultContainer>
      <ExplainResultContainer>{textResult}</ExplainResultContainer>
      <ButtonContainer>
        <Button label={buttonLabel} onPress={onPress} />
      </ButtonContainer>
    </Container>
  );
}
