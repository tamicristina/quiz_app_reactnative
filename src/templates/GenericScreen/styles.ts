import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color:${({ theme }) => theme.colors.secondary} ;
  align-items: center;
  justify-content: center;
 
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size:32px

`
export const TextDescription = styled.Text`
  color: ${({ theme }) => theme.colors.primary_ligth};
  font-size:20px;
  margin-top: 15px 

`