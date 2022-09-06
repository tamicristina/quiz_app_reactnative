import React from "react";
import { View, Text, Button } from "react-native";
import { Container, Title } from "./styles";

interface Props {
  icon?: JSX.Element;
  title?: string;
  subTitle?: string;
  buttonLabel?: string;
  onPress?: () => void;
}
export function GenericScreenTemplate({
  icon,
  title,
  subTitle,
  buttonLabel,
  onPress,
}: Props) {
  return (
    <Container>
      <Title> {title}</Title>
    </Container>
  );
}
