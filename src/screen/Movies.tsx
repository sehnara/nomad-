import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from "styled-components/native"

const BtnContainer = styled.TouchableOpacity`
    flex :1 ;
    justify-content : center;
    align-items : center;
    background-color : ${props => props.theme.mainBgColor};
`;
const BtnText = styled.Text`
    color : ${props => props.theme.textColor};
`;

const Movies:React.FC<NativeStackScreenProps<any, 'Movies'>> = ({navigation}) =>{
    return (
    <BtnContainer 
        style={{flex:1, justifyContent: "center", alignItems:"center"}} 
        onPress={()=>navigation.navigate("Stacks", {screen : "One"})}
    >
        <BtnText>Movies</BtnText>
    </BtnContainer>
    )
}
export default Movies