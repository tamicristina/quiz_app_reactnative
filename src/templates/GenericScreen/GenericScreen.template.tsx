import React from "react";
import { Button } from "../../components/Button";
import { Container, Title, TextDescription } from "./styles";

interface Props {
  icon?: JSX.Element;
  title: string;
  description: string;
  buttonLabel: string;
  onPress: () => void;
  isLoading?: boolean;
}
export function GenericScreenTemplate({
  title,
  description,
  buttonLabel,
  onPress,
  isLoading,
}: Props) {
  return (
    <Container>
      <Title> {title}</Title>
      <TextDescription>{description}</TextDescription>
      <Button label={buttonLabel} onPress={onPress} isLoading={isLoading} />
    </Container>
  );
}
