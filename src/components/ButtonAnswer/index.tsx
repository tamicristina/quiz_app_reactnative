import { TouchableOpacity } from "react-native";
import { ButtonContainer, ButtonLabel } from "./style";

interface Props {
  text: any;
  onPress: () => void;
}

export function ButtonAnswer({ text, onPress }: Props) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonLabel>{text}</ButtonLabel>
    </ButtonContainer>
  );
}
