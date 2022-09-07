import { TouchableOpacity } from "react-native";
import { ButtonLabel, ButtonContainer } from "./style";

interface Props {
  label?: string;
  onPress: () => void;
}

export function Button({ label, onPress }: Props) {
  return (
    <ButtonContainer>
      <TouchableOpacity onPress={onPress}>
        <ButtonLabel>{label}</ButtonLabel>
      </TouchableOpacity>
    </ButtonContainer>
  );
}
