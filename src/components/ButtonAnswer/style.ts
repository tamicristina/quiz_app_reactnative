import styled from 'styled-components/native'



export const ButtonContainer = styled.TouchableOpacity`
  height: 54px;
  background-color: ${({ theme }) => theme.colors.purple_ligth};
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  border-radius:5px;

  width:100%;

`

export const ButtonLabel = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.secondary};

`
