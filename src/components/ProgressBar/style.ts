import styled from "styled-components/native";

interface ProgressProps {
  progress: number;
}

export const BarContainer = styled.View`
align-items:center;
justify-content:center;
flex:1;

`

export const ProgressBarStyle = styled.View<ProgressProps>`
  background-color: ${({ theme }) => theme.colors.primary_medium_ligth};
  width: 60% ;
  border-left-width:${props => props.progress ? props.progress
    : 0}%;
  border-left-color:${({ theme }) => theme.colors.purple_ligth};
  height:20px;
  border-radius:15px
  
  
`
