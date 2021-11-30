import React from 'react';
import styled from "styled-components/native"

const BtnContainer = styled.View`
    flex :1 ;
    justify-content : center;
    align-items : center;
    background-color : ${props => props.theme.mainBgColor}
`;
const BtnText = styled.Text`
    color : ${props => props.theme.textColor};
`;

const Movies = ({navigation : {navigate}}) =>{
    return (
    <BtnContainer 
        style={{flex:1, justifyContent: "center", alignItems:"center"}} 
        onPress={()=>navigate("Stacks", {screen : "One"})}
    >
        <BtnText color = {'blue'}>Movies</BtnText>
    </BtnContainer>
    )
}
export default Movies