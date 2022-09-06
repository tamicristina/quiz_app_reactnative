import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color:${({ theme }) => theme.colors.secondary} ;
  align-items: center;
  justify-content: center;
  
`;

export const Title = styled.Text`
  color: '#373737';
  font-size:32px

`