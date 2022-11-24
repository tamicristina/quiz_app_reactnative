import styled from 'styled-components/native'




export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;   
`

export const IconsContainer = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:center;  
    
`
export const IconsSpacing = styled.View`
   padding:0 9px;
`

export const TextResultContainer = styled.View`
justify-content:center;
height:30%

`
export const TextResult = styled.Text`
font-size:32px;



`
export const Resulthighlight = styled.Text`
color: ${({ theme }) => theme.colors.purple_dark};
`
export const ExplainResultContainer = styled.Text`
color: ${({ theme }) => theme.colors.primary_ligth};
font-size:22px;
text-align:center
`

export const ButtonContainer = styled.View`

`



