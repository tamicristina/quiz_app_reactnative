import styled from 'styled-components/native'



export const ButtonContainer = styled.View`
  width:369px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.purple_ligth};
  justify-content: center;
  align-items: center;
  margin-top:100px;
  border-radius:5px;
`

export const ButtonLabel = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};

`