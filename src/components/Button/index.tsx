import { TouchableOpacity } from "react-native";
import Loading from "../Loading";
import { ButtonLabel, ButtonContainer } from "./style";

interface Props {
  label?: string;
  onPress: () => void;
  isLoading?: boolean;
}

export function Button({ label, onPress, isLoading }: Props) {
  const showLoading = isLoading ? (
    <Loading isAnimating={isLoading} />
  ) : (
    <ButtonLabel>{label}</ButtonLabel>
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer>{showLoading}</ButtonContainer>
    </TouchableOpacity>
  );
}
