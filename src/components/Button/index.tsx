import { TouchableOpacity } from "react-native";
import { ButtonLabel, ButtonContainer } from "./style";

interface Props {
  label?: string;
  onPress: () => void;
}

export function Button({ label, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer>
        <ButtonLabel>{label}</ButtonLabel>
      </ButtonContainer>
    </TouchableOpacity>
  );
}
