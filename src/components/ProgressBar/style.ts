import styled from "styled-components/native";

interface ProgressBarProps {
  progress: number;
}

export const BarContainer = styled.View<ProgressBarProps>`
  background-color: ${({ theme }) => theme.colors.primary_medium_ligth};
  width: 100% ;
  border-left-width:${props => props.progress}%;
  border-left-color:${({ theme }) => theme.colors.purple_ligth};
  height:20px;
  border-radius:15px;
`

export const Barfilling = styled.View<ProgressBarProps>`
  background-color: ${({ theme }) => theme.colors.purple_ligth};
  width: ${props => props.progress}%;
  height:20px;
  border-radius:15px
  
  
`
