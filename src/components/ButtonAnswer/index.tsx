import { TouchableOpacity } from "react-native";
import { ButtonContainer, ButtonLabel } from "./style";

interface Props {
  text: any;
  onPress: () => void;
}

export function ButtonAnswer({ text, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer>
        <ButtonLabel>{text}</ButtonLabel>
      </ButtonContainer>
    </TouchableOpacity>
  );
}
